import Link from 'next/link';
import type { Metadata } from 'next';

const freelanceBoardUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+BX9JXU+4LXM+626XU';

export const metadata: Metadata = {
  title: 'SESを辞めてフリーランスになる方法｜未経験から案件獲得まで完全ロードマップ',
  description: 'SES・SIer経験者向けに、フリーランス独立の流れ、案件獲得、単価相場、必要スキル、独立前の準備を解説します。',
  alternates: { canonical: '/articles/ses-to-freelance' }
};

export default function SesToFreelanceArticle() {
  return (
    <main className="articlePage">
      <Link className="backLink" href="/articles">← 記事一覧へ戻る</Link>

      <p className="eyebrow">Freelance Guide</p>
      <h1>SESを辞めてフリーランスになる方法｜未経験から案件獲得まで完全ロードマップ</h1>

      <p className="articleIntro">
        「SESを続けるべきか迷っている」「客先常駐から抜け出したい」「年収を上げたい」
        と考えるエンジニアの中には、フリーランス独立を検討する人も増えています。
      </p>

      <section>
        <h2>SESからフリーランスになる人が増えている理由</h2>
        <ul>
          <li>中間マージンを減らして単価アップしやすい</li>
          <li>リモート案件を選びやすい</li>
          <li>案件や技術選択の自由度が高い</li>
          <li>複数案件や副業へ展開できる</li>
        </ul>
      </section>

      <section>
        <h2>SES→フリーランスで年収はどれくらい変わる？</h2>
        <table className="articleTable">
          <thead>
            <tr>
              <th>働き方</th>
              <th>年収目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SESエンジニア</td>
              <td>350万〜550万円</td>
            </tr>
            <tr>
              <td>フリーランスエンジニア</td>
              <td>600万〜1000万円以上</td>
            </tr>
          </tbody>
        </table>
        <p>単価はスキル、商流、案件継続率によって変わります。</p>
      </section>

      <section>
        <h2>独立前に必要なスキル</h2>
        <ul>
          <li>設計・実装・テストなど一通りの開発経験</li>
          <li>AWS / Azure / GCPなどクラウド経験</li>
          <li>Git・Docker・CI/CD理解</li>
          <li>顧客折衝・コミュニケーション能力</li>
        </ul>
      </section>

      <section>
        <h2>案件獲得の方法</h2>
        <ol>
          <li>フリーランスエージェント登録</li>
          <li>知人・元請け経由</li>
          <li>SNS・技術発信</li>
          <li>直営業</li>
        </ol>
      </section>

      <section>
        <h2>SES経験が活きる領域</h2>
        <p>
          SES経験は多様な現場経験、顧客対応、運用保守、マルチ案件対応などで評価されるケースも多くあります。
        </p>
      </section>

      <section>
        <h2>独立前にやるべき準備</h2>
        <ul>
          <li>生活防衛資金の確保</li>
          <li>職務経歴書・スキルシート整理</li>
          <li>ポートフォリオ準備</li>
          <li>税務・インボイス理解</li>
        </ul>
      </section>

      <section>
        <h2>よくある失敗</h2>
        <ul>
          <li>案件が途切れる</li>
          <li>単価だけで案件を選ぶ</li>
          <li>営業活動を軽視する</li>
          <li>税金・保険を考慮していない</li>
        </ul>
      </section>

      <section className="articleCta">
        <h2>フリーランス案件の相場を確認してみませんか</h2>
        <p>
          SES・SIer経験がある方は、独立前に案件相場や希望条件を確認しておくと判断しやすくなります。
        </p>
        <a href={freelanceBoardUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="primary large">
          フリーランス案件を無料で確認する
        </a>
      </section>
    </main>
  );
}
