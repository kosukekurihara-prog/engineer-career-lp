import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SESキャリアナビ｜SES・SIerエンジニアの市場価値診断',
  description: 'SES・SIerから年収アップ、自社開発、リモート案件を目指すITエンジニア向けのキャリア情報メディアです。',
  metadataBase: new URL('https://engineer-career.info'),
  openGraph: {
    title: 'SESキャリアナビ',
    description: 'SES・SIerエンジニアのための市場価値診断・キャリア相談ナビ',
    url: 'https://engineer-career.info',
    siteName: 'SESキャリアナビ',
    locale: 'ja_JP',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
