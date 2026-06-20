const RIZAP_A8_URL = "https://px.a8.net/svt/ejp?a8mat=2NIA6D+5B45YQ+3D3Q+62MDE";

/**
 * コラム本文の文脈に合わせたRIZAP（A8）アフィリエイトCTA。
 * lead に記事ごとの導線文を渡して文脈マッチさせる。
 */
export default function RizapCta({ lead }: { lead: string }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden shadow-lg border-2 border-red-400 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="bg-red-500 px-4 py-2 text-center">
        <p className="text-white text-xs font-bold tracking-wide">
          💪 一人で続ける自信がない方へ
        </p>
      </div>
      <div className="px-6 py-5 text-center">
        <p className="text-gray-800 font-bold text-base mb-2">{lead}</p>
        <p className="text-gray-500 text-sm mb-1">
          ライザップなら専属トレーナーが食事も運動もマンツーマンでサポート
        </p>
        <p className="text-red-500 font-semibold text-sm mb-4">
          🎁 まずは無料カウンセリングで自分に合ったプランを確認できます
        </p>
        <a
          href={RIZAP_A8_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full py-4 px-6 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          無料カウンセリングを予約する（完全無料）→
        </a>
        <p className="text-gray-400 text-xs mt-3">※ 本リンクはアフィリエイトリンクです</p>
      </div>
    </div>
  );
}
