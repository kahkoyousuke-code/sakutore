/**
 * Amazonアソシエイトで紹介する商品の単一ソース。
 * /gear と、記事本文に差し込む商品カード（GearPick）の両方がここを読む。
 * 商品の差し替え・コメントの修正はここだけで行うこと。
 */

export const AFFILIATE_TAG = "kahko5458-22";

export function amazonUrl(asin: string) {
  return `https://www.amazon.co.jp/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

export type Product = {
  /** 記事から getProduct() で引くためのキー */
  id: string;
  name: string;
  asin: string;
  tags: string[];
  comment: string;
  points: string[];
};

export const proteins: Product[] = [
  {
    name: "エクスプロージョン ホエイプロテイン 3kg ミルクチョコレート味",
    id: "explosionWhey",
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
    id: "myproteinImpact",
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
    id: "savasWhey",
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
    id: "savasSoy",
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

export const belts: Product[] = [
  {
    name: "ALLOUT ナイロン製トレーニングベルト",
    id: "alloutNylonBelt",
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
    id: "alloutLeatherBelt",
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
    id: "grongBelt",
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

export const grips: Product[] = [
  {
    name: "ALLOUT パワーグリップ PRO",
    id: "alloutPowerGrip",
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

export const wristWraps: Product[] = [
  {
    name: "ALLOUT リストラップ",
    id: "alloutWristWrap",
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
export const dumbbells: Product[] = [
  {
    name: "フレックスベル 可変式ダンベル 20kg 2個セット ブラック（2kg刻み・10段階）",
    id: "flexbell20",
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
    id: "flexbell32",
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
    id: "barwing",
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

const allProducts = [...proteins, ...belts, ...grips, ...wristWraps, ...dumbbells];

/** 存在しない id を渡したらビルド時に落とす（記事側のtypoで無言のリンク切れを作らない） */
export function getProduct(id: string): Product {
  const product = allProducts.find((p) => p.id === id);
  if (!product) throw new Error(`Unknown gear product id: ${id}`);
  return product;
}
