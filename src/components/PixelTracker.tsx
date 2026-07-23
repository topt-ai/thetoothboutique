import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-MRYDN4F2GT';

export default function PixelTracker() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // El PageView inicial ya lo dispara el script del <head> al cargar el documento.
      isFirstRender.current = false;
      return;
    }

    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: location.pathname });
    }
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="wa.me"]');
      if (!target) return;

      if (window.fbq) {
        window.fbq('track', 'Contact');
      }
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'whatsapp_click',
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
