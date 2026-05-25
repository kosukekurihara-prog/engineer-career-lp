import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+BX9JXU+4LXM+626XU';
const trackingPixel = 'https://www12.a8.net/0.gif?a8mat=4B3Y37+BX9JXU+4LXM+626XU';

export const metadata: Metadata = {
  title: 'SES・SIerエンジニア向けフリーランス案件相談｜SESキャリアナビ',
  description: 'SES・SIer経験者向けに、会社を辞める前にフリーランスエンジニア案件の単価・働き方・リスク・AI活用スキルの見せ方を整理する無料相談導線を紹介します。',
  alternates: {
    canonical: 'https://www.engineer-career.info/freelance/'
  },
  openGraph: {
    title: 'SES・SIerエンジニア向けフリーランス案件相談',
    description: '実務経験のあるITエンジニア向けに、フリーランス案件の単価・働き方・リスクを確認するための相談導線を紹介します。',
    url: 'https://www.engineer-career.info/freelance/',
    siteName: 'SESキャリアナビ',
    locale: 'ja_JP',
    type: 'website'
  }
};

const worries = [
  'SES・SIerで単価や年収が上がりにくいと感じている',
  'フリーランスに興味はあるが、案件が途切れる不安がある',
  '自分の経験でどの程度の案件を狙えるのか知りたい',
  '会社を辞める前に、案件単価や稼働条件を確認したい',
  'リモートや希望条件に合う案件の可能性を相談したい'
];

const consultationItems = [
  '現在のスキル・経験で相談できる案件の方向性',
  '希望単価と実際の案件条件のギャップ',
  'リモート案件や希望エリアでの紹介可能性',
  '会社員からフリーランスへ移る前に確認すべきリスク',
  '案件継続、契約終了、税務・保険などの注意点'
];

const faqs = [
  {
    q: 'まだ独立するか決めていなくても相談できますか？',
    a: 'はい。独立を決める前に、現在の経験で相談できる案件や単価感、働き方の条件を確認する目的で利用できます。最終判断は面談後に行いましょう。'
  },
  {
    q: 'エンジニア未経験でも利用できますか？',
    a: '本ページで紹介しているサービスは、ITエンジニア実務経験者向けです。未経験者、学習中の方、実務経験がない方は対象外となる場合があります。'
  },
  {
    q: 'リモート案件はありますか？',
    a: 'リモート案件を相談できる場合があります。ただし、近年は出社・ハイブリッド前提の案件もあり、紹介可否はスキル、実績、希望条件、地域、案件状況によって異なります。'
  },
  {
    q: '面談後に必ず案件を紹介してもらえますか？',
    a: '案件紹介を保証するものではありません。経験、スキル、稼働条件、希望単価、タイミングによって紹介可否は変わります。'
  },
  {
    q: '登録だけでなく面談も必要ですか？',
    a: '案件相談を進めるには、Web登録後に担当者との面談が必要です。利用意思が確認できない場合や連絡不通の場合は、サービス利用の対象外となることがあります。'
  }
];

export default function FreelancePage() {
  return (
    <main>
      <div className="notice">本ページは広告・アフィリエイトリンクを含みます。</div>

      <section className="hero">
        <nav className="nav">
          <a href="/" className="brand">SESキャリアナビ</a>
          <a href="#cta" className="navCta">無料で案件相談</a>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Freelance Engineer</p>
            <h1>SES・SIerで年収が頭打ちなら、フリーランスエンジニア案件の単価を一度確認しませんか。</h1>
            <p className="lead">
              ITエンジニア実務経験者向けに、現在のスキルで相談できる案件、単価感、働き方、AI活用スキルの見せ方、独立前に確認すべきリスクを整理できる無料相談サービスを紹介します。
            </p>
            <div className="heroActions">
              <a href={affiliateUrl} className="primary" target="_blank" rel="nofollow sponsored noopener noreferrer">まずは自分の単価相場を確認する</a>
              <a href="#target" className="secondary">対象者を確認する</a>
            </div>
            <p className="small">※エンジニア未経験の方は対象外となる場合があります。案件紹介、単価、リモート可否、稼働条件を保証するものではありません。</p>
          </div>
          <div className="card heroCard">
            <h2>こんな方におすすめ</h2>
            <ul>
              {worries.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="target">
        <p className="eyebrow">Target</p>
        <h2>対象は、実務経験のあるITエンジニアです。</h2>
        <p>
          フリーランス案件紹介は、未経験から学習を始める人向けではありません。開発、インフラ、基本設計、詳細設計、運用保守、PL・PM補佐など、何らかのIT実務経験がある方に向いています。
        </p>
        <div className="tableWrap">
          <table>
            <thead>
              <tr><th>向いている人</th><th>慎重に判断したい人</th></tr>
            </thead>
            <tbody>
              <tr><td>SES・SIer・受託・社内SEなどの実務経験がある</td><td>エンジニア未経験、学習中、職務経験がない</td></tr>
              <tr><td>面談で具体的に案件や単価を相談したい</td><td>登録だけで終わり、連絡や面談の意思がない</td></tr>
              <tr><td>会社を辞める前に市場感を確認したい</td><td>すぐに高単価案件が必ず見つかると期待している</td></tr>
              <tr><td>案件条件、リスク、稼働条件を現実的に確認したい</td><td>フリーランスの収入変動や契約終了リスクを避けて考えたい</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow">2026 Market</p>
        <h2>フリーランスエンジニア案件は、AI活用・クラウド・SRE・セキュリティ経験で単価差が出やすくなっています。</h2>
        <p>
          近年のITフリーランス市場では、単に言語名や経験年数を並べるだけでなく、生成AIツールを使った業務改善、クラウド移行、監視・運用改善、セキュリティ対応、PM・PL経験まで含めて説明できる人材が評価されやすくなっています。
        </p>
        <div className="checkList">
          <div><strong>AI活用経験</strong><p>コード生成、テスト作成、ドキュメント整備、業務自動化など、実務でどう活用したかを整理します。</p></div>
          <div><strong>クラウド・SRE</strong><p>AWS、GCP、Azure、監視、CI/CD、インフラ改善など、運用に強い経験は案件相談で伝えやすい材料です。</p></div>
          <div><strong>リモート条件</strong><p>フルリモートに限定しすぎると候補が狭まる場合があります。常駐・ハイブリッドも含めて単価相場を確認しましょう。</p></div>
          <div><strong>スキルシート</strong><p>言語名だけでなく、課題、担当範囲、改善内容、成果をセットで書くと商談時に伝わりやすくなります。</p></div>
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow">Consultation</p>
        <h2>無料相談で確認したいこと</h2>
        <p>
          フリーランス化は、単価だけで判断すると失敗しやすい選択です。案件の継続性、稼働条件、商流、リモート可否、税務・保険まで含めて確認しましょう。
        </p>
        <div className="benefitGrid">
          {consultationItems.map((item, index) => (
            <div className="benefit" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Service</p>
        <h2>IT求人ナビ フリーランスで相談できること</h2>
        <p>
          IT求人ナビ フリーランスは、IT系フリーランスエンジニア向けの案件紹介サービスです。担当者との面談を通じて、経験・希望条件に合う案件の可能性を確認できます。
        </p>
        <div className="steps">
          <div><strong>01</strong><h3>Web登録</h3><p>公式サイトから基本情報、経験、希望条件を入力します。</p></div>
          <div><strong>02</strong><h3>担当者と面談</h3><p>スキル、経験工程、希望単価、稼働開始時期、リモート希望などを整理します。</p></div>
          <div><strong>03</strong><h3>案件相談</h3><p>条件が合う場合、紹介可能な案件や今後の進め方を確認します。</p></div>
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow">Risk Check</p>
        <h2>フリーランスになる前に確認すべきリスク</h2>
        <div className="checkList">
          <div><strong>収入は固定ではない</strong><p>会社員と異なり、契約終了や案件間の空白期間が発生する可能性があります。</p></div>
          <div><strong>社会保険・税務対応が必要</strong><p>健康保険、年金、確定申告、経費管理などを自分で把握する必要があります。</p></div>
          <div><strong>案件条件は経験に左右される</strong><p>高単価やリモート案件は、スキル、実績、担当工程、タイミングによって変わります。</p></div>
          <div><strong>面談で現実的な条件確認が必要</strong><p>独立前に、希望単価だけでなく稼働時間、商流、契約条件も確認しましょう。</p></div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Internal Links</p>
        <h2>会社員転職とフリーランスの両方を比較する</h2>
        <p>独立だけに絞らず、SESからSIer・自社開発へ転職するルートや、SIer経験を案件単価に変えるルートも比較しておくと判断しやすくなります。</p>
        <div className="articleCards homeArticles">
          <a className="articleCard" href="/articles/ses-exit"><span>SES転職</span><h3>SESから抜け出したい場合の最初の整理</h3><p>商流、案件選択権、職務経歴書、優良SESの見分け方を確認します。</p><strong>記事を読む →</strong></a>
          <a className="articleCard" href="/articles/sier-to-product"><span>SIer転職</span><h3>SIer経験を次のキャリアへつなげる</h3><p>クラウド、PM/PL、業務改善経験を評価される形に整理します。</p><strong>記事を読む →</strong></a>
        </div>
      </section>

      <section className="section">
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
        <h2>会社を辞める前に、今の経験で相談できる案件と単価相場を確認しましょう。</h2>
        <p>独立するかどうかは、案件条件やリスクを確認してから判断できます。AI活用経験やクラウド経験をどうスキルシートに書くべきかも含めて、相談可能な案件の方向性を確認してください。</p>
        <a href={affiliateUrl} className="primary large" target="_blank" rel="nofollow sponsored noopener noreferrer">まずは自分の単価相場を確認する</a>
        <p className="small">※Web登録後、担当者との面談が必要です。案件紹介や条件を保証するものではありません。</p>
      </section>

      <footer>
        <div>© SESキャリアナビ編集部</div>
        <div className="footerLinks">
          <a href="/">トップ</a>
          <a href="/articles/ses-exit">SES転職</a>
          <a href="/articles/sier-to-product">SIer転職</a>
          <a href="/operator">運営者情報</a>
          <a href="/privacy">プライバシーポリシー</a>
        </div>
      </footer>
      <img width={1} height={1} src={trackingPixel} alt="" style={{ border: 0 }} />
    </main>
  );
}
