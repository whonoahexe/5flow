export const customizeAccessibilityWidget = `
  (function() {
    function customizeWidget() {
      try {
        const container = document.getElementById('easy-vision-container');
        if (!container || !container.shadowRoot) return false;
        
        const shadowRoot = container.shadowRoot;
        
        // Get the main trigger button (not translation trigger)
        const trigger = shadowRoot.querySelector('.easy-vision-trigger:not(.easy-vision-translation-trigger)');
        
        if (trigger) {
          // Style the trigger to match fixed actions (ScanEye button)
          trigger.style.setProperty('position', 'fixed', 'important');
          trigger.style.setProperty('top', '50%', 'important');
          trigger.style.setProperty('right', '0', 'important');
          trigger.style.setProperty('bottom', 'auto', 'important');
          trigger.style.setProperty('left', 'auto', 'important');
          trigger.style.setProperty('transform', 'translateY(calc(-50%))', 'important');
          trigger.style.setProperty('width', '64px', 'important');
          trigger.style.setProperty('height', '64px', 'important');
          trigger.style.setProperty('border-radius', '0', 'important');
          trigger.style.setProperty('background-color', 'oklch(0.3679 0.2061 264.6603)', 'important');
          trigger.style.setProperty('color', 'oklch(1 0 0)', 'important');
          trigger.style.setProperty('border', 'none', 'important');
          trigger.style.setProperty('box-shadow', 'none', 'important');
          trigger.style.setProperty('z-index', '50', 'important');
          trigger.style.setProperty('padding', '8px', 'important');
          trigger.style.setProperty('display', 'flex', 'important');
          trigger.style.setProperty('align-items', 'center', 'important');
          trigger.style.setProperty('justify-content', 'center', 'important');
          trigger.style.setProperty('transition', 'background-color 0.2s', 'important');
          
          // Add hover effect
          trigger.addEventListener('mouseenter', function() {
            this.style.setProperty('background-color', 'oklch(0.33111 0.18549 264.6603)', 'important');
          });
          
          trigger.addEventListener('mouseleave', function() {
            this.style.setProperty('background-color', 'oklch(0.3679 0.2061 264.6603)', 'important');
          });
          
          // Style the icon inside
          const icon = trigger.querySelector('.easy-vision-trigger-icon, svg');
          if (icon) {
            icon.style.setProperty('color', 'oklch(1 0 0)', 'important');
            icon.style.setProperty('fill', 'currentColor', 'important');
            icon.style.setProperty('width', '32px', 'important');
            icon.style.setProperty('height', '32px', 'important');
          }
        }
        
        return true;
      } catch (e) {
        console.warn('Failed to customize widget:', e);
        return false;
      }
    }
    
    // Try immediately and at intervals
    const intervals = [0, 50, 100, 250, 500, 1000, 2000, 3000, 5000];
    intervals.forEach(delay => setTimeout(customizeWidget, delay));
    
    // Set up continuous monitoring
    let checkCount = 0;
    const maxChecks = 50;
    const checkInterval = setInterval(() => {
      if (customizeWidget() || ++checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 200);
    
    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      customizeWidget();
    });
    
    if (document.body) {
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
  })();
`;

export const hideTranslationWidget = `
  (function() {
    function hideTranslation() {
      try {
        // Find the shadow host container
        const container = document.getElementById('easy-vision-container');
        if (!container || !container.shadowRoot) return false;
        
        const shadowRoot = container.shadowRoot;
        
        // Hide translation widget and trigger
        const translation = shadowRoot.querySelector('.easy-vision-translation');
        const translationTrigger = shadowRoot.querySelector('.easy-vision-translation-trigger');
        
        if (translation) {
          translation.style.setProperty('display', 'none', 'important');
          translation.style.setProperty('visibility', 'hidden', 'important');
          translation.style.setProperty('opacity', '0', 'important');
          translation.style.setProperty('pointer-events', 'none', 'important');
          translation.style.setProperty('position', 'fixed', 'important');
          translation.style.setProperty('left', '-9999px', 'important');
        }
        
        if (translationTrigger) {
          translationTrigger.style.setProperty('display', 'none', 'important');
          translationTrigger.style.setProperty('visibility', 'hidden', 'important');
          translationTrigger.style.setProperty('opacity', '0', 'important');
          translationTrigger.style.setProperty('pointer-events', 'none', 'important');
          translationTrigger.style.setProperty('position', 'fixed', 'important');
          translationTrigger.style.setProperty('left', '-9999px', 'important');
        }
        
        // Add CSS to shadow DOM to override any styles
        let style = shadowRoot.querySelector('#custom-hide-translation');
        if (!style) {
          style = document.createElement('style');
          style.id = 'custom-hide-translation';
          style.textContent = \`
            .easy-vision-translation,
            .easy-vision-translation-trigger,
            .easy-vision-translation-form,
            .easy-vision-translation-icon {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              position: fixed !important;
              left: -9999px !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
          \`;
          shadowRoot.appendChild(style);
        }
        
        return true;
      } catch (e) {
        console.warn('Failed to hide translation widget:', e);
        return false;
      }
    }
    
    // Try immediately and at intervals
    const intervals = [0, 50, 100, 250, 500, 1000, 2000, 3000, 5000];
    intervals.forEach(delay => setTimeout(hideTranslation, delay));
    
    // Set up continuous monitoring
    let checkCount = 0;
    const maxChecks = 50;
    const checkInterval = setInterval(() => {
      if (hideTranslation() || ++checkCount >= maxChecks) {
        clearInterval(checkInterval);
      }
    }, 200);
    
    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      hideTranslation();
    });
    
    // Start observing once body is available
    if (document.body) {
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
  })();
`;
