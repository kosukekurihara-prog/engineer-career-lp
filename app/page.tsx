const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';
const trackingPixelUrl = 'https://www15.a8.net/0.gif?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';

const painPoints = [
  'SES・SIer経験を活かして、上流工程やITコンサル領域に挑戦したい',
  '今の年収が適正なのか判断できない',
  '面接で実績や強みをうまく伝えられない',
  '平日は忙しく、効率よく選考を進めたい',
  '20代後半〜30代で、次のキャリア選択を失敗したくない'
];

const benefits = [
  '現在の経験で狙える年収レンジやポジションを確認できる',
  'SES、SIer、自社開発、ITコンサル、メガベンチャーなどの選択肢を比較できる',
  '職務経歴書や面接で評価されやすい実績の見せ方を整理できる',
  '面接対策を通じて、技術経験・顧客折衝・課題解決経験を伝えやすくなる',
  '今すぐ転職しない場合も、キャリアの判断材料を得られる'
];

const faqs = [
  {
    q: 'まだ転職するか決めていなくても相談できますか？',
    a: 'はい。まずは市場価値や選択肢を確認し、転職するかどうかはその後に判断する形で問題ありません。'
  },
  {
    q: 'SES経験でも上流工程や高年収ポジションを狙えますか？',
    a: '担当工程、技術スタック、顧客折衝、リーダー経験、課題解決経験によって可能性は変わります。まずは現在の経験を整理することが重要です。'
  },
  {
    q: '相談は無料ですか？',
    a: '掲載先サービスの無料キャリア相談を案内しています。申込条件、面談条件、支援対象、求人紹介の可否などの詳細は公式サイトでご確認ください。'
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
            <p className="eyebrow">実務経験2年以上のITエンジニア向け</p>
            <h1>SES・SIer経験を活かして、上流工程・高年収ポジションを目指しませんか。</h1>
            <p className="lead">
              年収が上がらない、より大きな案件に関わりたい、ITコンサルやメガベンチャーも視野に入れたい。
              そんなITエンジニアのために、経験の棚卸しから面接対策まで相談できる無料キャリア相談を紹介します。
            </p>
            <div className="heroActions">
              <a href={affiliateUrl} className="primary" target="_blank" rel="nofollow sponsored noopener noreferrer">無料キャリア相談へ進む</a>
              <a href="#check" className="secondary">まずは内容を見る</a>
            </div>
            <p className="small">※転職・年収アップ・求人紹介・選考通過を保証するものではありません。申込条件・支援内容は公式サイトをご確認ください。</p>
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
        <h2>上流転職は「求人検索」より先に、経験の言語化と面接対策が重要です。</h2>
        <p>
          同じエンジニア経験でも、担当工程、技術スタック、業務理解、顧客折衝、リーダー経験、課題解決の実績によって評価は大きく変わります。
          無料キャリア相談では、現在の経験をもとに、狙える企業・職種・年収レンジを整理できます。
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
        <p className="eyebrow">Position</p>
        <h2>SES・SIer経験から狙えるキャリアの例</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr><th>選択肢</th><th>評価されやすい経験</th><th>向いている人</th></tr>
            </thead>
            <tbody>
              <tr><td>上流SE・PL</td><td>要件整理、設計、顧客折衝、進行管理</td><td>現場経験を活かして裁量を広げたい人</td></tr>
              <tr><td>ITコンサル</td><td>業務理解、課題整理、改善提案、資料作成</td><td>技術だけでなく課題解決に関わりたい人</td></tr>
              <tr><td>メガベンチャー</td><td>開発経験、クラウド、改善実績、スピード感</td><td>成長環境で年収アップを狙いたい人</td></tr>
              <tr><td>自社開発・SaaS</td><td>Web開発、運用改善、プロダクト理解</td><td>サービス成長に長期的に関わりたい人</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Support</p>
        <h2>面接対策・1Day選考・年収アップ志向の転職に向いています。</h2>
        <div className="steps">
          <div><strong>01</strong><h3>経験の棚卸し</h3><p>担当工程、成果、技術、顧客折衝経験を整理します。</p></div>
          <div><strong>02</strong><h3>面接対策</h3><p>実績の伝え方、志望動機、上流志向の見せ方を確認します。</p></div>
          <div><strong>03</strong><h3>選考・条件確認</h3><p>求人や選考機会、年収レンジ、働き方を比較します。</p></div>
        </div>
        <p className="small">※1Day選考会等の参加可否は、事前面談・書類選考・開催状況などにより異なります。</p>
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

      <section className="section">
        <p className="eyebrow">Articles</p>
        <h2>SES・SIerエンジニア向けキャリア記事</h2>
        <p>転職を急ぐ前に、経験の棚卸し、市場価値確認、応募先の選び方、フリーランス案件の単価相場を整理しましょう。</p>
        <div className="articleCards homeArticles">
          <a className="articleCard" href="/articles/ses-exit">
            <span>SES転職</span>
            <h3>SES転職で失敗しない進め方。優良SESの見分け方</h3>
            <p>商流、案件選択権、待機時給与、研修、評価制度、面談質問リストを整理します。</p>
            <strong>記事を読む →</strong>
          </a>
          <a className="articleCard" href="/articles/sier-to-product">
            <span>SIer転職</span>
            <h3>SIer転職で評価される経験。AI・クラウド・DX案件へのつなげ方</h3>
            <p>SIer経験を自社開発、ITコンサル、社内SE、フリーランス案件へ展開するポイントをまとめました。</p>
            <strong>記事を読む →</strong>
          </a>
          <a className="articleCard" href="/articles/ses-to-freelance">
            <span>フリーランス独立</span>
            <h3>SESを辞めてフリーランスになる方法</h3>
            <p>案件獲得、単価相場、独立前の準備、よくある失敗を整理します。</p>
            <strong>記事を読む →</strong>
          </a>
        </div>
      </section>

      <section id="cta" className="cta">
        <p className="eyebrow">Next Action</p>
        <h2>今の経験で、どのくらいの年収・企業を狙えるか確認しましょう。</h2>
        <p>転職するかどうかは、相談後に決めれば問題ありません。まずは市場価値と上流転職の可能性を知ることから始めてください。</p>
        <a href={affiliateUrl} className="primary large" target="_blank" rel="nofollow sponsored noopener noreferrer">無料キャリア相談へ進む</a>
        <img width={1} height={1} src={trackingPixelUrl} alt="" style={{ border: 0 }} />
        <p className="small">※広告主を初めて利用する方が対象です。学生、重複申込、虚偽申込、面談未実施、利用意思が確認できない場合などは対象外となる場合があります。</p>
      </section>

      <footer>
        <div>© SESキャリアナビ編集部</div>
        <div className="footerLinks">
          <a href="/articles/ses-exit">SES転職</a>
          <a href="/articles/sier-to-product">SIer転職</a>
          <a href="/articles/ses-to-freelance">フリーランス独立</a>
          <a href="/freelance/">フリーランス案件</a>
          <a href="/operator">運営者情報</a>
          <a href="/privacy">プライバシーポリシー</a>
        </div>
      </footer>
    </main>
  );
}
