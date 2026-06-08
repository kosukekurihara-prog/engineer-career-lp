import Link from 'next/link';
import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+152XIQ+3SWM+5YJRM';

export const metadata: Metadata = {
  title: 'SES転職で失敗しない進め方｜優良SESの見分け方と転職準備｜SESキャリアナビ',
  description: 'SES転職、SESやめとけ、SES未経験、優良SESの見分け方を知りたい方向けに、商流・案件選択権・待機時給与・職務経歴書・面談質問を整理します。',
  alternates: { canonical: '/articles/ses-exit' }
};

export default function SesExitArticle() {
  return (
    <main className="articlePage">
      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>
      <p className="eyebrow">SES Exit Guide</p>
      <h1>SES転職で失敗しない進め方。優良SESの見分け方と最初にやるべき準備</h1>
      <p className="articleMeta">対象：SES・客先常駐・SIer経験者 / 読了目安：9分</p>
      <p className="articleIntro">SESから抜け出したい、SES転職で失敗したくないと感じたとき、最初にやるべきことは求人サイトを眺めることではありません。先にやるべきなのは、自分の経験がどの企業にどう評価されるのか、どのSES企業なら避けるべきなのかを整理することです。</p>

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
        <h2>SES転職で失敗しやすい会社の特徴</h2>
        <p>SES企業のすべてが悪いわけではありません。ただし、入社前に確認すべき項目が曖昧な会社は、入社後にミスマッチが起きやすくなります。</p>
        <div className="checkList">
          <div><strong>商流が深い</strong><p>二次請け、三次請け以降の案件が中心だと、単価や評価が見えにくくなる場合があります。</p></div>
          <div><strong>案件選択権がない</strong><p>希望技術や勤務地を聞かれず、配属先だけが決まる会社は注意が必要です。</p></div>
          <div><strong>待機時給与が不明確</strong><p>待機期間の給与、研修、評価への影響は入社前に確認しましょう。</p></div>
          <div><strong>研修内容が抽象的</strong><p>「充実した研修」だけでなく、期間、内容、講師、実案件への接続を確認します。</p></div>
          <div><strong>評価制度が曖昧</strong><p>単価、資格、顧客評価、社内貢献のどれが給与に反映されるのかを確認しましょう。</p></div>
        </div>
      </section>

      <section>
        <h2>優良SESを見分ける5つの確認項目</h2>
        <p>SESを選ぶ場合は、求人票の雰囲気よりも、案件情報と評価制度の透明性を見ることが重要です。</p>
        <table className="articleTable">
          <thead><tr><th>確認項目</th><th>見るべきポイント</th></tr></thead>
          <tbody>
            <tr><td>商流</td><td>エンド直、一次請け比率、主要取引先を説明できるか</td></tr>
            <tr><td>案件選択</td><td>候補案件を複数提示し、本人希望を踏まえて決めるか</td></tr>
            <tr><td>単価連動</td><td>単価、還元率、昇給条件、評価基準が明確か</td></tr>
            <tr><td>育成</td><td>資格支援だけでなく、実務で上流工程やクラウド経験を積めるか</td></tr>
            <tr><td>キャリアパス</td><td>SIer、自社開発、社内SE、フリーランスなど次の選択肢を相談できるか</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>最初に整理すべき5つの経験</h2>
        <p>SES経験は、見せ方を間違えると「言われた作業だけをしていた」と受け取られがちです。以下の5つを整理すると、評価されやすい材料が見つかります。</p>
        <div className="checkList">
          <div><strong>1. 担当工程</strong><p>詳細設計、実装、テスト、運用保守、要件定義など、関わった工程を整理します。</p></div>
          <div><strong>2. 技術スタック</strong><p>言語、フレームワーク、DB、クラウド、CI/CD、監視ツールを具体化します。</p></div>
          <div><strong>3. 業務知識</strong><p>金融、物流、EC、医療、SaaSなど、業務理解がある領域を洗い出します。</p></div>
          <div><strong>4. 改善経験</strong><p>バグ削減、性能改善、手作業の自動化、AIツール活用、ドキュメント整備などを整理します。</p></div>
          <div><strong>5. チーム貢献</strong><p>後輩フォロー、レビュー、顧客調整、リーダー補佐なども評価材料になります。</p></div>
        </div>
      </section>

      <section>
        <h2>未経験・経験浅めのSES転職で確認したいこと</h2>
        <p>未経験や経験が浅い場合は、内定の出やすさだけで判断せず、入社後に実務経験へつながる環境かを確認しましょう。</p>
        <ul>
          <li>研修後の配属先がテスター、監視、ヘルプデスクに固定されないか</li>
          <li>開発、インフラ、クラウドなど希望領域へ移る条件が明確か</li>
          <li>資格取得やポートフォリオが評価にどう反映されるか</li>
          <li>待機期間中に学習時間と給与がどう扱われるか</li>
        </ul>
      </section>

      <section>
        <h2>狙う転職先を最初から一つに絞らない</h2>
        <p>SESからの転職先として、自社開発だけを唯一の正解にすると選択肢が狭くなります。実際には、経験や希望によって複数の選択肢があります。</p>
        <table className="articleTable">
          <thead><tr><th>転職先</th><th>向いている人</th><th>注意点</th></tr></thead>
          <tbody>
            <tr><td>SIer</td><td>上流工程、PM/PL、業務システム経験を伸ばしたい人</td><td>受託構造や配属案件を確認する必要がある</td></tr>
            <tr><td>自社サービス企業</td><td>プロダクト改善に継続的に関わりたい人</td><td>技術力や事業理解を見られやすい</td></tr>
            <tr><td>社内SE</td><td>安定した環境で業務改善に関わりたい人</td><td>開発より調整業務が多い場合がある</td></tr>
            <tr><td>ITコンサル</td><td>上流工程や顧客課題解決に関わりたい人</td><td>資料作成・折衝力も求められる</td></tr>
            <tr><td>フリーランス</td><td>実務経験を案件単価へ反映したい人</td><td>案件継続、税務、契約終了リスクを確認する必要がある</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>SESから抜け出す選択肢は「転職」だけではない</h2>
        <p>SESから抜け出したい場合、すぐに退職や独立を決める必要はありません。まずは転職市場で評価される経験と、フリーランス案件で評価される経験を分けて整理することが重要です。基本設計、詳細設計、運用改善、クラウド移行、顧客折衝、チームリード経験がある場合は、会社員転職とフリーランス案件相談の両方で比較材料になります。</p>
        <h3>転職で見るべき条件</h3>
        <ul>
          <li>商流、案件選択権、評価制度、育成環境が明確か</li>
          <li>自社開発、SIer、社内SE、ITコンサルなど複数の候補を比較できるか</li>
        </ul>
        <h3>フリーランス案件相談で確認すべき条件</h3>
        <ul>
          <li>現在の経験で相談できる案件の単価感、稼働条件、リモート可否</li>
          <li>案件継続、契約終了、税務・保険など独立後のリスク</li>
        </ul>
        <p><a href="/freelance/">会社を辞める前にフリーランス案件の単価感を確認する</a></p>
      </section>

      <section>
        <h2>面談で必ず聞くべき質問リスト</h2>
        <p>SES転職では、面接で会社側の説明を聞くだけでなく、自分から確認する姿勢が重要です。</p>
        <ul>
          <li>現在募集中の案件例と商流を教えてください</li>
          <li>案件は本人希望をどの程度反映して決まりますか</li>
          <li>待機期間の給与、研修、評価はどうなりますか</li>
          <li>単価や顧客評価は昇給にどう反映されますか</li>
          <li>SESからSIer、自社開発、フリーランスへ進んだ事例はありますか</li>
        </ul>
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

      <section>
        <h2>関連記事で次の選択肢を比較する</h2>
        <div className="articleCards homeArticles">
          <a className="articleCard" href="/articles/sier-to-product"><span>SIer転職</span><h3>SIer経験を自社開発・DX案件へつなげる</h3><p>上流工程、クラウド、業務改善経験の見せ方を整理します。</p><strong>記事を読む →</strong></a>
          <a className="articleCard" href="/freelance/"><span>フリーランス案件</span><h3>会社を辞める前にフリーランス案件の単価感を確認する</h3><p>単価相場、リモート可否、独立リスクを相談前に整理します。</p><strong>案件相談LPを見る →</strong></a>
        </div>
      </section>

      <section className="articleCta">
        <h2>SESを避けるべきか、SIer・自社開発を狙うべきか相談しましょう</h2>
        <p>今すぐ転職するかどうかは、相談後に決めれば問題ありません。自社サービス、SIer、ITコンサル、社内SEなど、現在の経験で狙える選択肢を確認してみてください。</p>
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">自分の経歴で狙える転職先を相談する</a>
      </section>
    </main>
  );
}
