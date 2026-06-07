import Link from "next/link";

export const metadata = {
  title: "おすすめトレーニングギア | 厳選のプロテイン・ベルト・グリップ",
  description:
    "筋トレ歴10年以上・ボディメイク大会出場の運営者が実際に使って選んだトレーニングギアを厳選紹介。プロテイン・リフティングベルト・パワーグリップ・リストラップを目的別・レベル別におすすめ。",
};

const AFFILIATE_TAG = "kahko5458-22";

function amazonUrl(asin: string) {
  return `https://www.amazon.co.jp/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

type Product = {
  name: string;
  asin: string;
  tags: string[];
  comment: string;
  points: string[];
};

function Tag({ label }: { label: string }) {
  const isFavorite = label.includes("愛用");
  return (
    <span
      className={
        isFavorite
          ? "inline-block rounded-full bg-orange-500 text-white text-[11px] font-bold px-2.5 py-1"
          : "inline-block rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold px-2.5 py-1"
      }
    >
      {label}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {product.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <h3 className="font-bold text-gray-800 text-base leading-snug mb-3">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {product.comment}
      </p>

      <div className="bg-orange-50 rounded-xl p-3 mb-4">
        <p className="text-xs font-bold text-orange-500 mb-1.5">おすすめポイント</p>
        <ul className="space-y-1">
          {product.points.map((point) => (
            <li key={point} className="flex gap-1.5 text-xs text-gray-700 leading-relaxed">
              <span className="text-orange-400 flex-shrink-0">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={amazonUrl(product.asin)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full text-center py-3 px-6 rounded-xl bg-[#FFD814] hover:bg-[#F7CA00] text-gray-900 font-bold text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
      >
        Amazonで見る →
      </a>
    </div>
  );
}

function Section({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-bold text-orange-500 text-lg px-1">{title}</h2>
      {products.map((product) => (
        <ProductCard key={product.asin} product={product} />
      ))}
    </section>
  );
}

const proteins: Product[] = [
  {
    name: "エクスプロージョン ホエイプロテイン 3kg ミルクチョコレート味",
    asin: "B06Y69FKT2",
    tags: ["愛用", "コスパ最強"],
    comment:
      "10年以上飲み続けてきた中で行き着いたコスパ最強プロテイン。国産で安心、3kgで価格を抑えられる。継続して飲むならこれ一択。",
    points: [
      "国産製造で安心",
      "1食あたりのコストが業界最安級",
      "フレーバーが豊富で飽きにくい",
    ],
  },
  {
    name: "マイプロテイン Impact Whey Protein",
    asin: "B00MGCB9MS",
    tags: ["愛用", "本格派向け"],
    comment:
      "タンパク質含有量と価格のバランスが絶妙。セール時にまとめ買いするのが鉄板。中級者以上に特におすすめ。",
    points: [
      "タンパク質含有量が高い",
      "セール時のコスパが圧倒的",
      "フレーバーの種類が業界最多級",
    ],
  },
  {
    name: "ザバス ホエイプロテイン100 リッチショコラ味 1kg",
    asin: "B005F0ONGU",
    tags: ["初心者におすすめ", "定番"],
    comment:
      "プロテイン初心者に迷わず勧められる定番品。Amazonベストセラー常連で飲みやすく失敗がない。",
    points: [
      "飲みやすく続けやすい",
      "どこでも買える安心感",
      "初心者でも扱いやすい",
    ],
  },
  {
    name: "ザバス ソイプロテイン100 ココア味 920g",
    asin: "B0030FCZR6",
    tags: ["ダイエット向け", "女性におすすめ"],
    comment:
      "減量期や女性に特におすすめ。腹持ちが良くカロリーを抑えながらタンパク質を補給できる。",
    points: [
      "低脂質・低カロリーで減量向き",
      "腹持ちが良い",
      "ビタミン類も配合",
    ],
  },
];

const belts: Product[] = [
  {
    name: "ALLOUT ナイロン製トレーニングベルト",
    asin: "B0CKF57G6J",
    tags: ["初心者向け", "愛用ブランド"],
    comment:
      "ベルト入門に最適。軽くて着脱が簡単で、スクワット・デッドリフトで腰をしっかり守れる。まず1本目に選ぶならこれ。",
    points: [
      "軽量で扱いやすい",
      "マジックテープで着脱簡単",
      "リーズナブルな価格",
    ],
  },
  {
    name: "ALLOUT 本革トレーニングベルト（Cowhide）",
    asin: "B0CN1Y8C9D",
    tags: ["中級者以上向け", "愛用ブランド"],
    comment:
      "本格的に高重量を扱うようになったら革ベルト一択。ホールド力が全然違う。最高級Cowhideで汗臭くならないのも◎",
    points: [
      "最高級Cowhide使用",
      "高いホールド力",
      "汗を吸っても臭いにくい",
    ],
  },
  {
    name: "GronG トレーニングベルト ワイドタイプ",
    asin: "B07QM3BQTJ",
    tags: ["コスパ重視"],
    comment:
      "サクラ評価0%・高評価の信頼できるコスパベルト。価格を抑えたい人の第一候補。",
    points: [
      "コスパが高い",
      "信頼性の高いレビュー",
      "初心者〜中級者まで対応",
    ],
  },
];

const grips: Product[] = [
  {
    name: "ALLOUT パワーグリップ PRO",
    asin: "B07QHKZP9Q",
    tags: ["愛用", "背中トレに必須"],
    comment:
      "背中のトレーニングで握力が先に限界を迎える問題を解決してくれる。1年以上使い続けても壊れない耐久性が◎。ラットプルダウン・デッドリフトに必須。",
    points: [
      "耐久性が高い",
      "握力の限界前に背中を追い込める",
      "フリーサイズで使いやすい",
    ],
  },
];

const wristWraps: Product[] = [
  {
    name: "ALLOUT リストラップ",
    asin: "B08B7WW75V",
    tags: ["愛用", "ベンチプレスに必須"],
    comment:
      "ベンチプレスで手首が痛くなる問題を解決してくれる。Amazonベストセラー・FWJ公認で信頼性も高い。初心者は18インチ、高重量を扱う人は24インチがおすすめ。",
    points: [
      "Amazonベストセラー",
      "FWJ公認ブランド",
      "カラーバリエーション豊富",
    ],
  },
];

export default function GearPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-6">

        {/* ヘッダー */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">おすすめトレーニングギア</h1>
          <p className="text-gray-500 text-sm mt-1">運営者が実際に使って選んだギア</p>
        </div>

        {/* プロフィール */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">💪</span>
            <p className="text-sm text-gray-700 leading-relaxed">
              筋トレ歴10年以上・ボディメイク大会出場の運営者が
              実際に使って選んだギアだけを紹介します。
              ベルト・グリップ・リストラップはALLOUTで統一。
              プロテインはエクスプロージョンとマイプロを愛用中。
            </p>
          </div>
        </div>

        {/* 各セクション */}
        <Section title="プロテイン｜目的別おすすめ4選" products={proteins} />
        <Section title="リフティングベルト｜レベル別おすすめ3選" products={belts} />
        <Section title="パワーグリップ｜愛用の1択" products={grips} />
        <Section title="リストラップ｜愛用の1択" products={wristWraps} />

        {/* アフィリエイト表記 */}
        <p className="text-center text-xs text-gray-400 leading-relaxed px-2">
          ※ 当ページのリンクはAmazonアソシエイト・プログラムによるアフィリエイトリンクを含みます。
        </p>

        {/* CTA */}
        <div className="text-center space-y-3 pb-4">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            さっそく今日のメニューを作る
          </Link>
          <Link
            href="/"
            className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
