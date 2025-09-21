import { Cta } from '@/components/layout';
import About from '@/components/page/home/About';
import Contact from '@/components/page/home/Contact';
import FeatureCard from '@/components/page/home/FeatureCard';
import { Hero } from '@/components/page/home/Hero';
import How from '@/components/page/home/How';
import Who from '@/components/page/home/Who';
import Why1 from '@/components/page/home/Why1';
import Why2 from '@/components/page/home/Why2';

export default function Home() {
  return (
    <>
      <FeatureCard/>
      <Who/>
      <How/>
      <Why1/>
      <About/>
      <Why2/>
      <Contact/>
    </>
  );
}
