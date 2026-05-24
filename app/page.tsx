const affiliateUrl = '#';

const painPoints = [
  'SES・客先常駐から抜け出したいが、何から始めればよいかわからない',
  '今の年収が適正なのか判断できない',
  '自社開発・社内SE・SaaS企業への転職可能性を知りたい',
  '30代以降のキャリアに不安がある',
  '求人票を見ても、自分に合う企業を選べない'
];

const benefits = [
  '現在のスキル・経験で狙える年収レンジがわかる',
  'SES、SIer、自社開発、社内SEなどの選択肢を比較できる',
  '職務経歴書や面接で評価されやすい経験の見せ方を確認できる',
  '非公開求人やリモート求人の可能性を確認できる',
  '今すぐ転職しない場合も、キャリアの判断材料を得られる'
];

const faqs = [
  {
    q: 'まだ転職するか決めていなくても相談できますか？',
    a: 'はい。まずは市場価値や選択肢を確認し、転職するかどうかはその後に判断する形で問題ありません。'
  },
  {
    q: 'SES経験しかなくても年収アップは狙えますか？',
    a: '経験内容、担当工程、使用技術、マネジメント経験などによって可能性は変わります。まずは現在の経験を整理することが重要です。'
  },
  {
    q: '相談は無料ですか？',
    a: '掲載先サービスの無料キャリア相談を案内しています。詳細条件は各サービスの公式サイトでご確認ください。'
  }
];

export default function Home() {
  return (
    <main>
      <div className="notice">本ページは広告・アフィリエイトリンクを含みます。</div>

      <section className="hero">
        <nav className="nav">
          <div className="brand">SESキャリアナビ</div>
          <a href="#cta" className="navCta">無料で市場価値を確認</a>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">SES・SIerエンジニア向け</p>
            <h1>求人を探す前に、まずは自分の市場価値を確認しませんか。</h1>
            <p className="lead">
              年収が上がらない、客先常駐を抜け出したい、自社開発やリモート案件を目指したい。
              そんなITエンジニアのために、キャリアの選択肢を整理する無料相談サービスを紹介します。
            </p>
            <div className="heroActions">
              <a href={affiliateUrl} className="primary">無料キャリア相談へ進む</a>
              <a href="#check" className="secondary">まずは内容を見る</a>
            </div>
            <p className="small">※転職・年収アップを保証するものではありません。申込条件・支援内容は各公式サイトをご確認ください。</p>
          </div>
          <div className="card heroCard">
            <h2>こんな方におすすめ</h2>
            <ul>
              {painPoints.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="check" className="section">
        <p className="eyebrow">Career Check</p>
        <h2>SES・SIerの転職は「求人検索」より先に、経験の棚卸しが重要です。</h2>
        <p>
          同じエンジニア経験でも、担当工程、技術スタック、業務理解、顧客折衝、リーダー経験によって評価は大きく変わります。
          無料キャリア相談では、現在の経験をもとに、狙える企業や年収レンジを確認できます。
        </p>
        <div className="benefitGrid">
          {benefits.map((item, index) => (
            <div className="benefit" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow">Comparison</p>
        <h2>一般的な転職サイトとIT特化型エージェントの違い</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr><th>比較項目</th><th>一般的な転職サイト</th><th>IT特化型エージェント</th></tr>
            </thead>
            <tbody>
              <tr><td>求人探し</td><td>自分で検索</td><td>経験・希望に合う求人を提案</td></tr>
              <tr><td>年収交渉</td><td>自分で対応</td><td>交渉・条件整理を支援</td></tr>
              <tr><td>職務経歴書</td><td>自力作成</td><td>添削・見せ方の助言</td></tr>
              <tr><td>非公開求人</td><td>限定的</td><td>紹介される場合あり</td></tr>
              <tr><td>向いている人</td><td>自分で進めたい人</td><td>効率よく選択肢を知りたい人</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Flow</p>
        <h2>無料相談の流れ</h2>
        <div className="steps">
          <div><strong>01</strong><h3>無料申込</h3><p>公式サイトから基本情報を入力します。</p></div>
          <div><strong>02</strong><h3>経験のヒアリング</h3><p>スキル、工程、希望条件、転職時期を整理します。</p></div>
          <div><strong>03</strong><h3>求人・年収レンジ確認</h3><p>現在の市場価値や狙える選択肢を確認します。</p></div>
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow">FAQ</p>
        <h2>よくある質問</h2>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="cta">
        <p className="eyebrow">Next Action</p>
        <h2>今の経験で、どのくらいの年収・企業を狙えるか確認しましょう。</h2>
        <p>転職するかどうかは、相談後に決めれば問題ありません。まずは市場価値を知ることから始めてください。</p>
        <a href={affiliateUrl} className="primary large">無料キャリア相談へ進む</a>
      </section>

      <footer>
        <div>© SESキャリアナビ編集部</div>
        <div className="footerLinks">
          <a href="/operator">運営者情報</a>
          <a href="/privacy">プライバシーポリシー</a>
        </div>
      </footer>
    </main>
  );
}
