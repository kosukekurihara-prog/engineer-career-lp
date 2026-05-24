import Link from 'next/link';
import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+152XIQ+3SWM+5YJRM';

export const metadata: Metadata = {
  title: 'SESから抜け出したいエンジニアが最初にやるべきこと｜SESキャリアナビ',
  description: 'SESから抜け出したいエンジニア向けに、求人検索の前にやるべき経験整理、転職軸、職務経歴書、相談先の選び方を解説します。',
  alternates: { canonical: '/articles/ses-exit' }
};

export default function SesExitArticle() {
  return (
    <main className="articlePage">
      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>
      <p className="eyebrow">SES Exit Guide</p>
      <h1>SESから抜け出したいエンジニアが最初にやるべきこと</h1>
      <p className="articleMeta">対象：SES・客先常駐・SIer経験者 / 読了目安：7分</p>
      <p className="articleIntro">SESから抜け出したいと感じたとき、最初にやるべきことは求人サイトを眺めることではありません。先にやるべきなのは、自分の経験がどの企業にどう評価されるのかを整理することです。</p>

      <div className="articleNotice">本記事は広告・アフィリエイトリンクを含みます。転職や年収アップを保証するものではありません。</div>

      <section>
        <h2>SESを辞めたい理由をそのまま転職理由にしない</h2>
        <p>「客先常駐がつらい」「商流が深い」「評価されにくい」という不満は自然なものです。ただし、面接では不満だけを伝えると受け身に見えやすくなります。</p>
        <p>転職理由は、現在の不満を起点にしながらも、次の環境で実現したいことへ変換する必要があります。</p>
        <ul>
          <li>一つのプロダクトに継続的に関わりたい</li>
          <li>設計や要件定義など上流工程に挑戦したい</li>
          <li>技術選定や改善提案に関われる環境へ移りたい</li>
          <li>ユーザーや事業成果に近い開発がしたい</li>
        </ul>
        <p>このように言い換えるだけで、単なる離職理由ではなく、キャリアの方向性として伝えやすくなります。</p>
      </section>

      <section>
        <h2>最初に整理すべき5つの経験</h2>
        <p>SES経験は、見せ方を間違えると「言われた作業だけをしていた」と受け取られがちです。以下の5つを整理すると、評価されやすい材料が見つかります。</p>
        <div className="checkList">
          <div><strong>1. 担当工程</strong><p>詳細設計、実装、テスト、運用保守、要件定義など、関わった工程を整理します。</p></div>
          <div><strong>2. 技術スタック</strong><p>言語、フレームワーク、DB、クラウド、CI/CD、監視ツールを具体化します。</p></div>
          <div><strong>3. 業務知識</strong><p>金融、物流、EC、医療、SaaSなど、業務理解がある領域を洗い出します。</p></div>
          <div><strong>4. 改善経験</strong><p>バグ削減、性能改善、手作業の自動化、ドキュメント整備などを整理します。</p></div>
          <div><strong>5. チーム貢献</strong><p>後輩フォロー、レビュー、顧客調整、リーダー補佐なども評価材料になります。</p></div>
        </div>
      </section>

      <section>
        <h2>狙う転職先を最初から一つに絞らない</h2>
        <p>SESからの転職先として、自社開発だけを唯一の正解にすると選択肢が狭くなります。実際には、経験や希望によって複数の選択肢があります。</p>
        <table className="articleTable">
          <thead><tr><th>転職先</th><th>向いている人</th><th>注意点</th></tr></thead>
          <tbody>
            <tr><td>自社サービス企業</td><td>プロダクト改善に継続的に関わりたい人</td><td>技術力や事業理解を見られやすい</td></tr>
            <tr><td>社内SE</td><td>安定した環境で業務改善に関わりたい人</td><td>開発より調整業務が多い場合がある</td></tr>
            <tr><td>ITコンサル</td><td>上流工程や顧客課題解決に関わりたい人</td><td>資料作成・折衝力も求められる</td></tr>
            <tr><td>受託開発企業</td><td>技術力を高めながら案件経験を積みたい人</td><td>案件ごとの働き方を確認する必要がある</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>職務経歴書は「案件名」ではなく「成果」で書く</h2>
        <p>SESの職務経歴書では、案件概要だけを並べると差別化しにくくなります。重要なのは、自分が何を担当し、どのような改善や貢献をしたかです。</p>
        <div className="exampleBox">
          <h3>弱い書き方</h3>
          <p>Javaを使用した基幹システム開発に従事。詳細設計、実装、テストを担当。</p>
          <h3>改善した書き方</h3>
          <p>Java/Springを用いた基幹システムの改修で、詳細設計から結合テストまで担当。既存処理の影響範囲を調査し、レビュー指摘の多かった入力チェック処理を共通化して保守性改善に貢献。</p>
        </div>
      </section>

      <section>
        <h2>自分だけで判断しないほうがよい理由</h2>
        <p>SESからの転職では、自分の経験がどの程度評価されるのかを本人が低く見積もりすぎるケースがあります。一方で、希望条件とスキルのギャップを見落とすケースもあります。</p>
        <p>そのため、求人応募の前に、ITエンジニア転職に詳しい第三者へ相談し、市場価値や狙える企業を確認しておくと判断しやすくなります。</p>
      </section>

      <section className="articleCta">
        <h2>SESから抜け出す前に、まず市場価値を確認しましょう</h2>
        <p>今すぐ転職するかどうかは、相談後に決めれば問題ありません。自社サービス、ITコンサル、社内SEなど、現在の経験で狙える選択肢を確認してみてください。</p>
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">無料キャリア相談へ進む</a>
      </section>
    </main>
  );
}
