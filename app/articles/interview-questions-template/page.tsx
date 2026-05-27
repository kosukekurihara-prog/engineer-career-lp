import type { Metadata } from 'next';
import CvLink from '../../components/CvLink';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';

export const metadata: Metadata = {
  title: 'ITエンジニア面接質問テンプレ｜SES・SIer向け回答例まとめ',
  description: 'SES・SIerエンジニア向けに、IT転職面接でよく聞かれる質問、回答例、上流転職向け対策をまとめました。'
};

export default function Page() {
  return (
    <main className="articlePage">
      <article className="articleContainer">
        <p className="eyebrow">Interview Template</p>
        <h1>ITエンジニア面接質問テンプレ｜SES・SIer向け回答例まとめ</h1>

        <p>
          ITエンジニア転職では、技術力だけでなく、課題解決・顧客折衝・改善経験をどのように伝えるかが重要です。
        </p>

        <h2>よく聞かれる質問</h2>
        <ol>
          <li>これまでのプロジェクト経験</li>
          <li>課題改善経験</li>
          <li>チーム内での役割</li>
          <li>なぜ転職したいのか</li>
          <li>今後やりたい領域</li>
        </ol>

        <h2>上流転職で重要なポイント</h2>
        <ul>
          <li>技術だけでなく業務理解を話す</li>
          <li>改善提案・顧客折衝経験を整理する</li>
          <li>成果を数字で説明する</li>
        </ul>

        <section className="articleCta">
          <h2>面接対策・キャリア相談をしてみませんか</h2>
          <CvLink href={affiliateUrl} className="primary large" eventLabel="interview_template_cta">
            無料キャリア相談へ進む
          </CvLink>
        </section>
      </article>
    </main>
  );
}
