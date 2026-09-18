import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "おすすめトレーニングギア | プロテイン・ベルト・グリップ・可変式ダンベル",
  description:
    "筋トレ歴15年・フィジーク大会入賞の運営者が選んだトレーニングギアを厳選紹介。プロテイン・リフティングベルト・パワーグリップ・リストラップは実際に使っているもの、可変式ダンベルは体重比の目安から必要な重さで選んだ候補です。",
  path: "/gear",
  type: "website",
});

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
  note,
}: {
  title: string;
  products: Product[];
  /** 「使ったうえでの推薦ではない」など、セクション単位の断りを入れる。 */
  note?: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-bold text-orange-500 text-lg px-1">{title}</h2>
      {note ? (
        <p className="text-xs text-gray-500 leading-relaxed px-1">{note}</p>
      ) : null}
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
    asin: "B00I95ZWA6",
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
    asin: "B0B9G4QR1M",
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
    asin: "B0DGFTDTJD",
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
    asin: "B071RS73DL",
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
    asin: "B0CP784N3Q",
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

/**
 * 可変式ダンベル。ここだけは運営者が自宅用に購入した経験がないので、
 * 「使った感想」ではなく /column/dumbbell-weight の体重比の目安に照らして
 * 「何kgまで伸ばせるか」で選んでいる。コメントもその基準で書くこと。
 */
const dumbbells: Product[] = [
  {
    name: "フレックスベル 可変式ダンベル 20kg 2個セット ブラック（2kg刻み・10段階）",
    asin: "B0843RNMWM",
    tags: ["女性におすすめ", "刻みが細かい"],
    comment:
      "2kg刻みで10段階。女性は中級者でも片手16.5kg前後までしか使わないので、この1組で当分足ります。男性も初心者のうちはこの範囲に収まります。",
    points: [
      "2kg刻みでサイドレイズのような軽い種目にも合わせられる",
      "ダイヤルを回すだけで重さが変わる",
      "1組で軽い重さから重い重さまでカバーできる",
    ],
  },
  {
    name: "フレックスベル 可変式ダンベル 32kg 2個セット レッド（2kg刻み・16段階）",
    asin: "B08FCDD59X",
    tags: ["男性におすすめ", "中級者まで買い替え不要"],
    comment:
      "体重70kgの男性が中級者になるとワンハンドロウで片手31.5kgが必要になります。そこまで伸ばせるのがこのクラス。最初から上限を確保しておきたい人向け。",
    points: [
      "片手32kgまで対応。中級者の目安（片手31.5kg）を上回る",
      "2kg刻みのまま上まで伸ばせる",
      "買い足しが要らないぶん、長く見れば割安",
    ],
  },
  {
    name: "BARWING 可変式ダンベル 24kg / 40kg 2個セット（NEWモデル）",
    asin: "B0DNLY6HZ5",
    tags: ["コスパ重視", "重量を選べる"],
    comment:
      "価格を抑えたい人の候補。24kgを選んだ場合、目安表のうち先に足りなくなるのはワンハンドロウとゴブレットスクワットの2種目だけです。上限が不安なら同じページで40kgも選べます。",
    points: [
      "同クラスの中では価格が抑えめ",
      "24kgは15段階で細かく調整できる",
      "足りなくなる種目が2つだけだと分かって買える",
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
              筋トレ歴15年・フィジーク大会入賞の運営者が選んだギアです。
              ベルト・グリップ・リストラップはALLOUTで統一。
              プロテインはエクスプロージョンとマイプロを愛用中。
              可変式ダンベルだけは自宅用に買った経験がないので、
              必要な重さの基準から選んだ候補として載せています。
            </p>
          </div>
        </div>

        {/* 各セクション */}
        <Section title="プロテイン｜目的別おすすめ4選" products={proteins} />
        <Section title="リフティングベルト｜レベル別おすすめ3選" products={belts} />
        <Section title="パワーグリップ｜愛用の1択" products={grips} />
        <Section title="リストラップ｜愛用の1択" products={wristWraps} />
        <Section
          title="可変式ダンベル｜自宅トレ用"
          products={dumbbells}
          note={
            <>
              ダンベルだけは、運営者がジム派のため自宅用に購入した経験がありません。使った感想ではなく、
              <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                種目別・体重別の重さの目安
              </Link>
              に照らして「何kgまで伸ばせるか」で選んだ候補です。
            </>
          }
        />

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
