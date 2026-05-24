import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'SESキャリアナビ｜SES・SIerエンジニアの市場価値診断',
  description: 'SES・SIerから年収アップ、自社開発、リモート案件を目指すITエンジニア向けのキャリア情報メディアです。',
  metadataBase: new URL('https://www.engineer-career.info'),
  openGraph: {
    title: 'SESキャリアナビ',
    description: 'SES・SIerエンジニアのための市場価値診断・キャリア相談ナビ',
    url: 'https://www.engineer-career.info',
    siteName: 'SESキャリアナビ',
    locale: 'ja_JP',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y3NP2CJHG8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y3NP2CJHG8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
