'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MoveRightIcon } from 'lucide-react';
import { useState } from 'react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { countries as allCountries } from '@/lib/countries';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  zip: string;
  country: string;
  requestType: 'Demo' | 'General information' | 'Other' | '';
  message: string;
  consentPrivacy: boolean;
  consentContact: boolean;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  zip: '',
  country: '',
  requestType: '',
  message: '',
  consentPrivacy: false,
  consentContact: false,
};

const Form = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  // Simple validators
  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isWorkEmail(email: string) {
    const domain = email.split('@')[1]?.toLowerCase() || '';
    if (!domain) return false;
    const freeDomains = new Set([
      'gmail.com',
      'googlemail.com',
      'yahoo.com',
      'yahoo.co.uk',
      'ymail.com',
      'outlook.com',
      'hotmail.com',
      'live.com',
      'msn.com',
      'icloud.com',
      'me.com',
      'mac.com',
      'aol.com',
      'proton.me',
      'protonmail.com',
      'gmx.com',
      'mail.com',
      'yandex.com',
      'mail.ru',
      'pm.me',
      'zoho.eu', // allow zoho.com for business; block the generic EU free domain variant
    ]);
    return !freeDomains.has(domain);
  }

  function onChange<K extends keyof FormState>(key: K, val: FormState[K]) {
    setValues(v => ({ ...v, [key]: val }));
  }

  function validateStep(current: number) {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (current === 0) {
      if (!values.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!values.email.trim()) newErrors.email = 'Work email is required';
      else if (!isValidEmail(values.email)) newErrors.email = 'Enter a valid email address';
      else if (!isWorkEmail(values.email)) newErrors.email = 'Please use your work email (no Gmail/Yahoo/etc.)';
    }
    if (current === 1) {
      if (!values.company.trim()) newErrors.company = 'Company is required';
      if (!values.country.trim()) newErrors.country = 'Country is required';
    }
    if (current === 2) {
      if (!values.requestType) newErrors.requestType = 'Type of request is required';
      if (!values.consentPrivacy) newErrors.consentPrivacy = 'Please confirm you have read the Privacy Policy';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function canGoNext(current: number) {
    return validateStep(current);
  }

  function next() {
    setStep(s => (s < 2 && canGoNext(s) ? ((s + 1) as 0 | 1 | 2) : s));
  }

  function prev() {
    setStep(s => (s > 0 ? ((s - 1) as 0 | 1 | 2) : s));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < 2) {
      // If not on final step, advance instead of submitting
      if (canGoNext(step)) {
        next();
      } else {
        toast.error('Please complete the required fields to continue.');
      }
      return;
    }
    // Validate final step before sending
    if (!validateStep(2)) {
      toast.error('Please fix the errors below.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Submission failed');
      toast.success("Thanks! We'll be in touch shortly.");
      setValues(initialState);
      setErrors({});
      setStep(0);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Submission failed';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FullBleedLines className="w-full">
      <div className="bg-primary border-border flex w-full flex-col items-center justify-between rounded-2xl border py-12 md:flex-row md:pr-8">
        <div className="flex-1">
          <Image
            className="hidden object-cover md:flex"
            width={450}
            height={450}
            alt="Rings showcasing brand identity"
            src="/svg/rings.svg"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          onKeyDown={e => {
            if (e.key === 'Enter' && step < 2) {
              e.preventDefault();
              if (canGoNext(step)) next();
            }
          }}
          className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-0"
        >
          <b className="text-success font-heading flex w-full text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            Contact Us
          </b>
          {/* Inputs: Step 1 */}
          {step === 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <Input
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={e => onChange('firstName', e.target.value)}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
                <Input
                  placeholder="Last Name*"
                  required
                  value={values.lastName}
                  onChange={e => onChange('lastName', e.target.value)}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Work Email*"
                  required
                  value={values.email}
                  onChange={e => {
                    onChange('email', e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
                <Input
                  placeholder="Phone"
                  value={values.phone}
                  onChange={e => onChange('phone', e.target.value)}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
              </div>
            </div>
          )}

          {/* Inputs: Step 2 */}
          {step === 1 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <Input
                  placeholder="Company Name*"
                  required
                  value={values.company}
                  onChange={e => {
                    onChange('company', e.target.value);
                    if (errors.company) setErrors(prev => ({ ...prev, company: undefined }));
                  }}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
                <Input
                  placeholder="Position"
                  value={values.position}
                  onChange={e => onChange('position', e.target.value)}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <Input
                  placeholder="ZIP Code"
                  value={values.zip}
                  onChange={e => onChange('zip', e.target.value)}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
                <select
                  required
                  value={values.country}
                  onChange={e => {
                    onChange('country', e.target.value);
                    if (errors.country) setErrors(prev => ({ ...prev, country: undefined }));
                  }}
                  className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border px-3 text-sm transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                >
                  <option value="" disabled>
                    Country*
                  </option>
                  {allCountries.map(c => (
                    <option key={c} value={c} className="text-foreground">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Inputs: Step 3 */}
          {step === 2 && (
            <div className="flex flex-col gap-2">
              <select
                required
                value={values.requestType}
                onChange={e => onChange('requestType', e.target.value as FormState['requestType'])}
                className="font-body border-boder bg-background focus:ring-success min-h-10 w-full rounded-none border px-3 text-sm transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
              >
                <option value="" disabled>
                  Type of request*
                </option>
                <option value="Demo">Demo</option>
                <option value="General information">General information</option>
                <option value="Other">Other</option>
              </select>
              <Textarea
                placeholder="Your message"
                value={values.message}
                onChange={e => onChange('message', e.target.value)}
                className="font-body border-boder bg-background focus:ring-success w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
              />
            </div>
          )}

          {/* Error summary (below form inputs) */}
          {Object.values(errors).filter(Boolean).length > 0 && (
            <div className="border-destructive/30 bg-destructive/10 text-destructive rounded-md border p-3 text-xs sm:text-sm">
              <ul className="list-disc space-y-1 pl-4">
                {Object.values(errors)
                  .filter(Boolean)
                  .map((msg, idx) => (
                    <li key={idx}>{msg as string}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Progress */}
          <div className="flex w-full flex-col gap-2">
            <span className="text-background text-xs">{`${step + 1}/3`}</span>
            <div className="bg-muted h-2 w-full rounded-full">
              <div
                className="bg-success h-2 rounded-full transition-all duration-300 ease-[var(--easing-smooth)]"
                style={{ width: `${((step + 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Navigation & Terms */}
          <div className="text-background flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            {step === 2 ? (
              <div className="flex max-w-xl flex-col gap-2">
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={values.consentPrivacy}
                    onCheckedChange={v => onChange('consentPrivacy', Boolean(v))}
                    className="border-border bg-background cursor-pointer rounded-none"
                  />
                  <p className="text-xs leading-relaxed">
                    {`I have read the `}
                    <Link href="/privacy" target="_blank" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={values.consentContact}
                    onCheckedChange={v => onChange('consentContact', Boolean(v))}
                    className="border-border bg-background cursor-pointer rounded-none"
                  />
                  <p className="text-xs leading-relaxed">
                    {`We'd love to keep in touch with solutions that may be of interest to you. Check this box if you authorize 5Flow to contact you by phone or email. You can opt out at any time.`}
                  </p>
                </label>
              </div>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              {step > 0 && (
                <Button
                  type="button"
                  onClick={prev}
                  className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                >
                  <span className="bg-muted text-foreground group-hover/cta:bg-muted/80 group-active/cta:bg-muted/70 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                    Previous
                  </span>
                </Button>
              )}

              {step < 2 ? (
                <Button
                  type="button"
                  onClick={() =>
                    canGoNext(step) ? next() : toast.error('Please complete the required fields to continue.')
                  }
                  className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                >
                  <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                    Next
                  </span>
                  <span
                    className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                    aria-hidden="true"
                  >
                    <MoveRightIcon className="h-4 w-4" />
                  </span>
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={submitting || !values.consentPrivacy}
                  className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                >
                  <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                    {submitting ? 'Submitting…' : 'Submit'}
                  </span>
                  <span
                    className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                    aria-hidden="true"
                  >
                    <MoveRightIcon className="h-4 w-4" />
                  </span>
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </FullBleedLines>
  );
};

export default Form;
