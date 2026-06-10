import Link from 'next/link';
import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+152XIQ+3SWM+5YJRM';

export const metadata: Metadata = {
  title: '【2026年版】SES企業の選び方｜優良SESを見極める7つのポイント｜SESキャリアナビ',
  description: '優良SESを見極めるポイントを解説。案件選択制、還元率、商流、キャリア支援など転職前に確認すべき項目を紹介し、SES企業選びで失敗しない方法をまとめました。',
  alternates: { canonical: '/articles/ses-company-selection' }
};

const checklist = [
  {
    title: '案件選択制度がある',
    body: '複数案件を提示され、勤務地、工程、技術スタック、単価、稼働条件を比較したうえで本人が意思決定できるかを確認します。'
  },
  {
    title: '単価情報が開示される',
    body: '自分の市場価値を把握するには、顧客単価や評価の根拠が見えることが重要です。単価非開示の場合は昇給基準も確認しましょう。'
  },
  {
    title: '還元率が明確',
    body: '還元率だけで判断するのではなく、社会保険、待機時給与、営業支援、教育費、福利厚生を含めた総合条件で比較します。'
  },
  {
    title: '上流案件が豊富',
    body: '要件定義、基本設計、顧客折衝、PL補佐など、次のキャリアにつながる案件へ挑戦できるかを見ます。'
  },
  {
    title: '待機時給与が保証される',
    body: '案件終了後の待機期間に給与がどう扱われるか、研修や営業活動中の評価がどうなるかを入社前に確認します。'
  },
  {
    title: 'キャリア支援制度がある',
    body: '定期面談、職務経歴書の棚卸し、資格支援、勉強会、社内メンターなど、現場任せにしない支援体制があるかを確認します。'
  },
  {
    title: 'エンジニア主導の評価制度がある',
    body: '顧客評価だけでなく、技術力、改善提案、チーム貢献、単価アップが給与へどう反映されるかを確認します。'
  }
];

export default function SesCompanySelectionArticle() {
  return (
    <main className="articlePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '【2026年版】SES企業の選び方｜優良SESを見極める7つのポイント',
            description: '優良SESを見極めるポイントを、案件選択制、還元率、商流、キャリア支援などの観点で解説します。',
            author: {
              '@type': 'Organization',
              name: 'SESキャリアナビ編集部'
            },
            publisher: {
              '@type': 'Organization',
              name: 'SESキャリアナビ'
            },
            mainEntityOfPage: 'https://www.engineer-career.info/articles/ses-company-selection'
          })
        }}
      />

      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>
      <p className="eyebrow">SES Company Guide</p>
      <h1>【2026年版】SES企業の選び方｜優良SESを見極める7つのポイント</h1>
      <p className="articleMeta">対象：SES転職を検討中のエンジニア / 読了目安：8分</p>
      <p className="articleIntro">
        SES企業への転職では、内定の出やすさや求人票の雰囲気だけで判断すると、入社後に案件ガチャ、商流の深さ、評価制度の不透明さで後悔する可能性があります。
        重要なのは、案件選択制、還元率、商流、待機時給与、キャリア支援を入社前に確認することです。
      </p>

      <div className="articleNotice">本記事は広告・アフィリエイトリンクを含みます。転職、年収アップ、案件配属を保証するものではありません。</div>

      <section>
        <h2>SES企業選びで失敗する人が多い理由</h2>
        <p>SESという働き方そのものが悪いわけではありません。ただし、会社ごとに案件の質、商流、評価制度、営業力、キャリア支援の差が大きいため、条件を確認しないまま入社するとミスマッチが起きやすくなります。</p>
        <ul>
          <li>希望技術と異なる案件に配属される</li>
          <li>三次請け以降の案件が多く、単価や評価が見えにくい</li>
          <li>単価が上がっても給与へ反映される基準が曖昧</li>
          <li>待機期間や案件終了時の扱いが不透明</li>
          <li>現場に出た後のキャリア面談が少ない</li>
        </ul>
        <p>転職前には「どんな案件に入れるか」だけでなく、「案件をどう選べるか」「評価と給与がどう連動するか」まで確認しましょう。</p>
      </section>

      <section>
        <h2>優良SESを見極める7つのポイント</h2>
        <p>優良SESを見極めるには、求人票のキャッチコピーではなく、入社後の意思決定権と評価の透明性を見ることが重要です。</p>
        <div className="checkList">
          {checklist.map((item, index) => (
            <div key={item.title}>
              <strong>{index + 1}. {item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>避けた方がよいSES企業の特徴</h2>
        <p>次の特徴が複数当てはまる場合は、面接で追加質問を行い、納得できる説明があるかを確認しましょう。</p>
        <table className="articleTable">
          <thead><tr><th>注意点</th><th>確認すべき質問</th></tr></thead>
          <tbody>
            <tr><td>案件詳細が不透明</td><td>現在提示できる案件例、工程、技術、勤務地、商流を教えてください</td></tr>
            <tr><td>商流が深い</td><td>エンド直、元請け、二次請けの比率はどのくらいですか</td></tr>
            <tr><td>面談対策のみ強調する</td><td>入社後の技術支援、キャリア面談、案件変更の流れを教えてください</td></tr>
            <tr><td>技術支援制度がない</td><td>資格支援、勉強会、レビュー体制、メンター制度はありますか</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>SES・SIer・自社開発の違い</h2>
        <p>転職先はSESだけに絞る必要はありません。現在の経験と希望する働き方によって、SIerや自社開発のほうが合う場合もあります。</p>
        <table className="articleTable">
          <thead><tr><th>働き方</th><th>特徴</th><th>向いている人</th></tr></thead>
          <tbody>
            <tr><td>SES</td><td>客先案件に参画し、案件ごとに技術や現場が変わる</td><td>案件を選びながら経験の幅を広げたい人</td></tr>
            <tr><td>SIer</td><td>受託開発、要件定義、設計、PM/PLなど上流工程に関わりやすい</td><td>顧客折衝や業務システム経験を伸ばしたい人</td></tr>
            <tr><td>自社開発</td><td>自社プロダクトを継続的に改善する</td><td>サービス成長やプロダクト改善に長く関わりたい人</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>転職前に確認すべき質問リスト</h2>
        <p>面接では、会社側の説明を聞くだけでなく、自分から具体的に確認することが重要です。</p>
        <ul>
          <li>案件選択制はどのように運用されていますか</li>
          <li>候補案件は何件程度提示されますか</li>
          <li>単価、還元率、昇給条件はどこまで開示されますか</li>
          <li>待機期間中の給与、研修、評価はどうなりますか</li>
          <li>上流工程、クラウド、モダン開発案件へ移る条件は何ですか</li>
          <li>案件変更を希望する場合の流れを教えてください</li>
          <li>SESからSIer、自社開発、社内SEへ進んだ事例はありますか</li>
        </ul>
      </section>

      <section>
        <h2>還元率だけでSES企業を選ばない</h2>
        <p>還元率は重要な比較材料ですが、数字だけで優良SESかどうかは判断できません。高還元でも、待機時給与、営業支援、福利厚生、教育支援が弱い場合があります。</p>
        <p>確認すべきなのは、還元率の計算方法、控除される費用、単価アップ時の昇給ルール、案件終了時のサポートです。年収を上げたい場合は、単価が上がる案件に入れる営業力と、評価制度の透明性をセットで見ましょう。</p>
      </section>

      <section>
        <h2>SESキャリアナビで相談できること</h2>
        <p>SES企業選びで迷う場合は、自分の経験がどの環境で評価されやすいのかを先に整理しておくと判断しやすくなります。</p>
        <div className="checkList">
          <div><strong>市場価値の整理</strong><p>担当工程、技術スタック、顧客折衝、改善実績をもとに、狙える年収レンジや職種を確認します。</p></div>
          <div><strong>転職先の比較</strong><p>優良SES、SIer、自社開発、社内SE、ITコンサルなどを比較し、希望条件に合う方向性を整理します。</p></div>
          <div><strong>面接・職務経歴書対策</strong><p>案件経歴を成果ベースで言語化し、面接で評価されやすい伝え方へ整えます。</p></div>
        </div>
      </section>

      <section>
        <h2>関連記事で次の選択肢を比較する</h2>
        <div className="articleCards homeArticles">
          <a className="articleCard" href="/articles/ses-exit"><span>SES転職</span><h3>SES転職で失敗しない進め方</h3><p>商流、案件選択権、待機時給与、評価制度を整理します。</p><strong>記事を読む →</strong></a>
          <a className="articleCard" href="/articles/sier-to-product"><span>SIer転職</span><h3>SIerから自社開発へ転職するには？</h3><p>自社開発企業に評価される経験の見せ方を整理します。</p><strong>記事を読む →</strong></a>
        </div>
      </section>

      <section className="articleCta">
        <h2>SES企業選びで迷ったら、市場価値と選択肢を確認しましょう</h2>
        <p>優良SESを選ぶべきか、SIerや自社開発を狙うべきかは、現在の経験と希望条件によって変わります。応募前に、狙える企業、年収レンジ、職務経歴書の見せ方を整理しましょう。</p>
        <a href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">自分に合う転職先を相談する</a>
      </section>
    </main>
  );
}
