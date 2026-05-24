import Link from 'next/link';
import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+152XIQ+3SWM+5YJRM';

export const metadata: Metadata = {
  title: 'エンジニアの市場価値がわからない人向けチェックリスト｜SESキャリアナビ',
  description: 'ITエンジニアが自分の市場価値を確認するためのチェックリスト。年収、技術、担当工程、業務理解、リーダー経験を整理します。',
  alternates: { canonical: '/articles/market-value-check' }
};

export default function MarketValueCheckArticle() {
  return (
    <main className="articlePage">
      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>
      <p className="eyebrow">Market Value Check</p>
      <h1>エンジニアの市場価値がわからない人向けチェックリスト</h1>
      <p className="articleMeta">対象：転職検討前のITエンジニア / 読了目安：7分</p>
      <p className="articleIntro">自分の市場価値は、現在の年収だけでは判断できません。担当工程、技術スタック、業務理解、チーム貢献、希望条件を整理することで、次に狙える選択肢が見えやすくなります。</p>

      <div className="articleNotice">本記事は広告・アフィリエイトリンクを含みます。市場価値や年収は経験・地域・求人状況によって変わります。</div>

      <section>
        <h2>市場価値は「スキル名」だけで決まらない</h2>
        <p>同じJava経験3年でも、評価は人によって変わります。なぜなら、企業は言語名だけでなく、どの工程を担当したか、どの程度自走できるか、業務課題を理解できるかを見ているからです。</p>
        <p>市場価値を確認するには、次の項目を一つずつ整理する必要があります。</p>
      </section>

      <section>
        <h2>チェック1：担当工程</h2>
        <p>まず、どの工程に関わってきたかを整理します。</p>
        <ul>
          <li>要件定義</li>
          <li>基本設計</li>
          <li>詳細設計</li>
          <li>実装</li>
          <li>単体テスト・結合テスト</li>
          <li>運用保守</li>
          <li>障害対応</li>
        </ul>
        <p>上流工程の経験がある場合は、顧客や事業部門とどのように仕様を整理したかまで書き出しましょう。</p>
      </section>

      <section>
        <h2>チェック2：技術スタック</h2>
        <p>経験技術は、ただ並べるだけではなく、実務でどう使ったかまで整理します。</p>
        <table className="articleTable">
          <thead><tr><th>分類</th><th>整理する内容</th></tr></thead>
          <tbody>
            <tr><td>言語</td><td>Java、PHP、Python、TypeScriptなど。実務年数と担当範囲を整理。</td></tr>
            <tr><td>フレームワーク</td><td>Spring、Laravel、React、Next.jsなど。実装内容を具体化。</td></tr>
            <tr><td>DB</td><td>MySQL、PostgreSQL、Oracleなど。設計やSQL改善経験があれば記載。</td></tr>
            <tr><td>インフラ</td><td>AWS、GCP、Docker、Linuxなど。構築・運用の関与度を整理。</td></tr>
            <tr><td>開発プロセス</td><td>Git、レビュー、CI/CD、アジャイル開発などの経験を確認。</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>チェック3：業務理解</h2>
        <p>業務理解は、意外と見落とされやすい強みです。特定業界のシステムに関わっていた場合、そのドメイン知識が評価されることがあります。</p>
        <ul>
          <li>金融系システムの業務フローを理解している</li>
          <li>ECの受注、在庫、決済まわりに関わった</li>
          <li>物流や販売管理の基幹システムを担当した</li>
          <li>SaaSのユーザー管理や請求機能に関わった</li>
        </ul>
        <p>単なる開発経験ではなく、業務課題を理解して改善できる人材として見せることができます。</p>
      </section>

      <section>
        <h2>チェック4：改善・提案経験</h2>
        <p>市場価値を高める要素として、改善経験は重要です。大きな成果でなくても構いません。</p>
        <div className="checkList">
          <div><strong>品質改善</strong><p>レビュー指摘削減、テスト観点整理、不具合の再発防止。</p></div>
          <div><strong>効率化</strong><p>手作業の自動化、開発手順の整備、ドキュメント改善。</p></div>
          <div><strong>性能改善</strong><p>SQL改善、バッチ処理の見直し、画面表示速度の改善。</p></div>
          <div><strong>チーム改善</strong><p>レビュー文化、朝会、ナレッジ共有、オンボーディング整備。</p></div>
        </div>
      </section>

      <section>
        <h2>チェック5：希望条件の優先順位</h2>
        <p>市場価値を確認するときは、希望条件も整理しておく必要があります。条件が多すぎると求人の選択肢が狭くなります。</p>
        <ul>
          <li>年収を最優先したい</li>
          <li>自社開発へ移りたい</li>
          <li>リモートワークを重視したい</li>
          <li>残業時間を減らしたい</li>
          <li>上流工程に関わりたい</li>
          <li>マネジメントより技術を深めたい</li>
        </ul>
        <p>すべてを同時に満たす求人は限られるため、譲れない条件と調整できる条件を分けておきましょう。</p>
      </section>

      <section>
        <h2>市場価値を確認するタイミング</h2>
        <p>市場価値の確認は、転職を決めてからではなく、転職するか迷っている段階で行うのが有効です。早めに確認しておくと、今の会社に残るべきか、転職準備を始めるべきかを判断しやすくなります。</p>
        <p>特に、SES・SIerで年収やキャリアの停滞を感じている場合は、一度外部の視点で経験を評価してもらうと、自分では気づいていなかった強みが見つかることがあります。</p>
      </section>

      <section className="articleCta">
        <h2>現在のスキルで狙える年収・企業を確認しませんか</h2>
        <p>転職するかどうかは相談後に判断できます。まずは現在の経験をもとに、市場価値と選択肢を確認してみてください。</p>
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">無料キャリア相談へ進む</a>
      </section>
    </main>
  );
}
