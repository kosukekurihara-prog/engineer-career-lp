import type { Metadata } from 'next';

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4B3Y37+13W2B6+5B0Y+HWAG2';

export const metadata: Metadata = {
  title: 'エンジニア年収800万ロードマップ｜SES・SIerから年収アップする方法',
  description: 'SES・SIer経験から年収800万円を目指すITエンジニア向けに、必要スキル、キャリア戦略、上流工程・ITコンサル転職を解説します。'
};

export default function Page() {
  return (
    <main className="articlePage">
      <article className="articleContainer">
        <p className="eyebrow">Salary Roadmap</p>
        <h1>エンジニア年収800万ロードマップ｜SES・SIerから年収アップする方法</h1>

        <p>
          SES・SIer経験でも、上流工程、ITコンサル、クラウド、PM領域へ広げることで年収800万円以上を狙えるケースがあります。
        </p>

        <h2>年収800万円を目指しやすい領域</h2>
        <ul>
          <li>AWS・クラウドアーキテクト</li>
          <li>PM・PMO</li>
          <li>ITコンサル</li>
          <li>メガベンチャー</li>
          <li>SaaS・自社開発</li>
        </ul>

        <h2>重要なのは「技術＋課題解決」</h2>
        <p>
          高年収帯では、単なる実装経験だけでなく、業務理解、改善提案、顧客折衝、プロジェクト推進経験も重視されます。
        </p>

        <h2>年収アップしやすい人の特徴</h2>
        <ol>
          <li>担当工程を広げている</li>
          <li>上流経験を持っている</li>
          <li>クラウド・AI・DX領域経験がある</li>
          <li>成果を言語化できる</li>
        </ol>

        <h2>やってはいけないこと</h2>
        <ul>
          <li>単価だけで転職先を選ぶ</li>
          <li>スキル棚卸しをしていない</li>
          <li>職務経歴書が抽象的</li>
          <li>市場価値確認をせず転職する</li>
        </ul>

        <section className="articleCta">
          <h2>現在の市場価値を確認してみませんか</h2>
          <p>
            年収アップを目指す場合は、まず現在の経験で狙えるポジションや年収レンジを確認することが重要です。
          </p>
          <a href={affiliateUrl} className="primary large" target="_blank" rel="nofollow sponsored noopener noreferrer">
            無料キャリア相談へ進む
          </a>
        </section>
      </article>
    </main>
  );
}
