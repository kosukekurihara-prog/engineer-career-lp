import type { Metadata } from 'next';
import CvLink from '../../components/CvLink';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';

export const metadata: Metadata = {
  title: 'IT転職エージェント比較｜レバテック・テックゴー・MyVisionの違い',
  description: 'SES・SIerエンジニア向けに、IT転職エージェントの特徴、年収帯、向いている人、サポート内容を比較します。'
};

export default function Page() {
  return (
    <main className="articlePage">
      <article className="articleContainer">
        <p className="eyebrow">Agent Comparison</p>
        <h1>IT転職エージェント比較｜レバテック・テックゴー・MyVisionの違い</h1>

        <p>
          ITエンジニア向け転職エージェントは、それぞれ強みが異なります。
          年収帯、サポート、上流案件、ITコンサル支援などを比較して選ぶことが重要です。
        </p>

        <table className="articleTable">
          <thead>
            <tr><th>サービス</th><th>特徴</th><th>向いている人</th></tr>
          </thead>
          <tbody>
            <tr><td>レバテック</td><td>ITエンジニア特化、求人数が多い</td><td>幅広く比較したい人</td></tr>
            <tr><td>テックゴー</td><td>上流・高年収・面接対策</td><td>年収アップ志向の人</td></tr>
            <tr><td>MyVision</td><td>ITコンサル・ハイクラス</td><td>コンサル志向の人</td></tr>
          </tbody>
        </table>

        <section className="articleCta">
          <h2>上流・高年収ポジションを確認してみませんか</h2>
          <CvLink href={affiliateUrl} className="primary large" eventLabel="agent_comparison_cta">
            無料キャリア相談へ進む
          </CvLink>
        </section>
      </article>
    </main>
  );
}
