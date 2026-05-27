import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';

export const metadata: Metadata = {
  title: 'SESからITコンサル転職は可能？評価される経験と年収アップ戦略',
  description: 'SES・SIer経験からITコンサル転職を目指す方向けに、評価される経験、必要スキル、年収レンジ、面接対策を解説します。'
};

export default function Page() {
  return (
    <main className="articlePage">
      <article className="articleContainer">
        <p className="eyebrow">IT Consultant Career</p>
        <h1>SESからITコンサル転職は可能？評価される経験と年収アップ戦略</h1>

        <p>
          SES・SIer経験からITコンサルを目指すエンジニアは増えています。
          特に業務理解、顧客折衝、要件整理、改善提案経験がある場合は評価されやすい傾向があります。
        </p>

        <h2>ITコンサルで評価されやすい経験</h2>
        <ul>
          <li>顧客折衝・要件定義</li>
          <li>業務改善提案</li>
          <li>PM・PL経験</li>
          <li>クラウド・DX案件経験</li>
          <li>大規模PJ経験</li>
        </ul>

        <h2>SES経験でも転職可能な理由</h2>
        <p>
          SES経験は「技術だけ」と思われがちですが、実際は複数現場での適応力、顧客対応、調整力などが評価されるケースもあります。
        </p>

        <h2>年収レンジの目安</h2>
        <table className="articleTable">
          <thead>
            <tr><th>職種</th><th>年収目安</th></tr>
          </thead>
          <tbody>
            <tr><td>SESエンジニア</td><td>400〜600万円</td></tr>
            <tr><td>ITコンサル</td><td>600〜1200万円以上</td></tr>
          </tbody>
        </table>

        <h2>面接でよく聞かれる内容</h2>
        <ol>
          <li>課題解決経験</li>
          <li>改善提案事例</li>
          <li>顧客折衝経験</li>
          <li>技術と業務理解のバランス</li>
        </ol>

        <section className="articleCta">
          <h2>上流・高年収ポジションを確認してみませんか</h2>
          <p>
            ITコンサルや上流工程転職を検討している場合は、まず現在の経験で狙えるポジションを確認することが重要です。
          </p>
          <a href={affiliateUrl} className="primary large" target="_blank" rel="nofollow sponsored noopener noreferrer">
            無料キャリア相談へ進む
          </a>
        </section>
      </article>
    </main>
  );
}
