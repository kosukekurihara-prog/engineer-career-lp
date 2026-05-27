'use client';

import type { ReactNode } from 'react';

type CvLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventLabel?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CvLink({ href, children, className, eventLabel = 'career_consultation_cta' }: CvLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={() => {
        window.gtag?.('event', 'generate_lead', {
          event_category: 'affiliate_cta',
          event_label: eventLabel,
          link_url: href
        });
      }}
    >
      {children}
    </a>
  );
}
