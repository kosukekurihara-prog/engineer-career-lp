import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SES・SIerエンジニア向けキャリア記事一覧｜SESキャリアナビ',
  description: 'SES・SIerエンジニア向けに、ITコンサル転職、年収800万ロードマップ、フリーランス独立、市場価値確認、上流工程転職を解説します。'
};

const articles = [
  {
    href: '/articles/ses-company-selection',
    title: '【2026年版】SES企業の選び方｜優良SESを見極める7つのポイント',
    description: '案件選択制、還元率、商流、待機時給与、キャリア支援など、SES企業選びで失敗しないための確認項目を解説します。'
  },
  {
    href: '/articles/ses-exit',
    title: 'SESから抜け出したいエンジニアが最初にやるべきこと',
    description: '求人検索の前に、案件経歴・技術スタック・転職理由を整理し、自社サービスや社内SEへの可能性を確認する手順を解説します。'
  },
  {
    href: '/articles/sier-to-product',
    title: 'SIerから自社開発へ転職するには？失敗しない準備',
    description: 'SIer経験を自社開発企業に評価される形へ変換するための職務経歴書、ポートフォリオ、面接準備の考え方をまとめました。'
  },
  {
    href: '/articles/ses-to-it-consultant',
    title: 'SESからITコンサル転職は可能？評価される経験と年収アップ戦略',
    description: 'SES・SIer経験からITコンサルを目指す方向けに、評価される経験、必要スキル、面接対策を解説します。'
  },
  {
    href: '/articles/engineer-800man-roadmap',
    title: 'エンジニア年収800万ロードマップ',
    description: 'SES・SIer経験から年収800万円以上を目指すためのキャリア戦略を解説します。'
  },
  {
    href: '/articles/ses-to-freelance',
    title: 'SESからフリーランスになる方法｜独立前に確認すべきこと',
    description: 'SES・SIer経験者向けに、案件単価、リモート条件、週3案件、登録面談、案件比較のポイントを整理します。'
  },
  {
    href: '/articles/agent-comparison',
    title: 'IT転職エージェント比較｜レバテック・テックゴー・MyVisionの違い',
    description: 'ITエンジニア向け転職エージェントの特徴、向いている人、年収帯、サポート内容を比較します。'
  }
];

export default function ArticlesPage() {
  return (
    <main className="articleIndex">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://www.engineer-career.info/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '記事一覧',
                item: 'https://www.engineer-career.info/articles'
              }
            ]
          })
        }}
      />

      <Link className="backLink" href="/">← トップへ戻る</Link>

      <p className="eyebrow">Articles</p>
      <h1>SES・SIerエンジニア向けキャリア記事</h1>
      <p className="articleLead">
        ITコンサル転職、年収アップ、上流工程、フリーランス独立、自社開発転職など、
        SES・SIerエンジニア向けのキャリア戦略を整理しています。
      </p>

      <div className="articleCards">
        {articles.map((article) => (
          <Link className="articleCard" href={article.href} key={article.href}>
            <span>Career Guide</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <strong>記事を読む →</strong>
          </Link>
        ))}
      </div>
    </main>
  );
}
