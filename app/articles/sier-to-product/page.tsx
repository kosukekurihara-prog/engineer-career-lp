import Link from 'next/link';
import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+152XIQ+3SWM+5YJRM';

export const metadata: Metadata = {
  title: 'SIerから自社開発へ転職するには？失敗しない準備｜SESキャリアナビ',
  description: 'SIerから自社開発企業へ転職したいエンジニア向けに、評価される経験、職務経歴書、面接対策、企業選びの注意点を解説します。',
  alternates: { canonical: '/articles/sier-to-product' }
};

export default function SierToProductArticle() {
  return (
    <main className="articlePage">
      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>
      <p className="eyebrow">SIer to Product</p>
      <h1>SIerから自社開発へ転職するには？失敗しない準備</h1>
      <p className="articleMeta">対象：SIer・受託開発・SES経験者 / 読了目安：8分</p>
      <p className="articleIntro">SIerから自社開発へ転職したい場合、単に「自社開発に行きたい」と伝えるだけでは不十分です。企業側は、プロダクトを継続的に改善できる人材かどうかを見ています。</p>

      <div className="articleNotice">本記事は広告・アフィリエイトリンクを含みます。掲載内容は一般的なキャリア整理を目的とした情報です。</div>

      <section>
        <h2>自社開発企業が見ているポイント</h2>
        <p>SIer経験者は、設計力、顧客折衝、品質管理、業務理解を評価される可能性があります。一方で、自社開発企業では以下の観点も見られます。</p>
        <ul>
          <li>プロダクトの改善サイクルに関心があるか</li>
          <li>ユーザー課題や事業成果を意識できるか</li>
          <li>仕様が曖昧な状態でも自走できるか</li>
          <li>技術的負債や運用課題に向き合えるか</li>
          <li>チーム開発の中で建設的に提案できるか</li>
        </ul>
      </section>

      <section>
        <h2>SIer経験を自社開発向けに言い換える</h2>
        <p>SIerでの経験は、自社開発企業にも通じる要素があります。ただし、伝え方を変える必要があります。</p>
        <table className="articleTable">
          <thead><tr><th>SIerでの経験</th><th>自社開発向けの見せ方</th></tr></thead>
          <tbody>
            <tr><td>要件定義・顧客折衝</td><td>ユーザー課題を整理し、仕様へ落とし込む力</td></tr>
            <tr><td>詳細設計・実装</td><td>保守性を考慮しながら機能を実装する力</td></tr>
            <tr><td>テスト設計</td><td>品質を担保し、リリース後の不具合を減らす力</td></tr>
            <tr><td>障害対応</td><td>原因調査、影響範囲確認、再発防止を行う力</td></tr>
            <tr><td>進捗管理</td><td>チーム開発で納期と品質のバランスを取る力</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>転職前に補強したいスキル</h2>
        <p>自社開発企業では、実装力だけでなく、運用や改善に関わる知識も評価されやすくなります。すべてを完璧にする必要はありませんが、以下のうち不足しているものを確認しておきましょう。</p>
        <div className="checkList">
          <div><strong>Git / GitHub</strong><p>Pull Request、レビュー、ブランチ運用の経験を説明できるようにします。</p></div>
          <div><strong>クラウド基礎</strong><p>AWS、GCP、Azureなど、利用経験があれば構成や役割を整理します。</p></div>
          <div><strong>CI/CD</strong><p>テスト自動化やデプロイフローに関わった経験があれば強みになります。</p></div>
          <div><strong>プロダクト理解</strong><p>なぜその機能が必要なのか、ユーザーや事業側の観点で説明できると評価されやすくなります。</p></div>
        </div>
      </section>

      <section>
        <h2>ポートフォリオは必須ではないが、あると説明しやすい</h2>
        <p>実務経験があるエンジニアの場合、ポートフォリオより職務経歴のほうが重視されるケースも多くあります。ただし、業務で使っていない技術に挑戦したい場合は、小さな個人開発が説明材料になります。</p>
        <p>重要なのは、見た目の豪華さではなく、技術選定の理由、設計上の工夫、改善した点を説明できることです。</p>
      </section>

      <section>
        <h2>企業選びで確認すべきこと</h2>
        <p>「自社開発」と書かれていても、働き方や開発体制は企業によって大きく異なります。応募前や面談時には、以下を確認しましょう。</p>
        <ul>
          <li>開発チームの人数と役割分担</li>
          <li>エンジニアが仕様検討に関われる範囲</li>
          <li>技術的負債への向き合い方</li>
          <li>リリース頻度とレビュー体制</li>
          <li>評価制度とキャリアパス</li>
        </ul>
      </section>

      <section>
        <h2>失敗しやすい進め方</h2>
        <p>SIerから自社開発へ転職する際、よくある失敗は「自社開発ならどこでもよい」と考えてしまうことです。事業フェーズ、開発文化、求められるスキルが合わないと、入社後にミスマッチが起きます。</p>
        <p>求人票だけではわからない部分もあるため、ITエンジニア転職に詳しいサービスで、候補企業の特徴や自分の経験との相性を確認しておくと安全です。</p>
      </section>

      <section className="articleCta">
        <h2>SIer経験をどう評価されるか、応募前に確認しましょう</h2>
        <p>自社開発、ITコンサル、社内SEなど、現在の経験から狙える選択肢を整理することで、転職活動の精度が上がります。</p>
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">無料キャリア相談へ進む</a>
      </section>
    </main>
  );
}
