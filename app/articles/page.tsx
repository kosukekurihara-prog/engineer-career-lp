import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '記事一覧｜SESキャリアナビ',
  description: 'SES・SIerエンジニア向けに、転職準備、市場価値確認、自社開発転職の考え方を解説します。'
};

const articles = [
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
    href: '/articles/market-value-check',
    title: 'エンジニアの市場価値がわからない人向けチェックリスト',
    description: '年収、担当工程、技術スタック、業務理解、リーダー経験などから、現在の市場価値を確認するためのチェック項目を整理します。'
  }
];

export default function ArticlesPage() {
  return (
    <main className="articleIndex">
      <Link className="backLink" href="/">← トップへ戻る</Link>
      <p className="eyebrow">Articles</p>
      <h1>SES・SIerエンジニア向けキャリア記事</h1>
      <p className="articleLead">転職を急ぐ前に、まずは自分の経験を整理し、市場価値と選択肢を把握することが重要です。</p>
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
