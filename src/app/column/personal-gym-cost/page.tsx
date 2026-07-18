import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import RizapCta from "@/components/RizapCta";

export const metadata = pageMetadata({
  title: "パーソナルジムの費用相場｜普通のジムと比べて高いのか、15年自力で通った筆者の結論 - サクトレ",
  description:
    "パーソナルジム・24時間ジム・総合ジム・公営ジム・自宅トレの費用を一覧表で比較。パーソナルジムは本当に高いのか、指導にお金を払う価値はあるのかを、15年間自力でジムに通ってきた筆者の実体験から正直に考えます。",
  path: "/column/personal-gym-cost",
});

const costRows = [
  {
    type: "パーソナルジム",
    cost: "総額20〜40万円（2〜3ヶ月）",
    monthly: "月10〜20万円",
    note: "マンツーマン指導＋食事管理",
  },
  {
    type: "24時間ジム",
    cost: "月3,000〜8,000円",
    monthly: "月3,000〜8,000円",
    note: "指導なし。マシン中心",
  },
  {
    type: "総合スポーツクラブ",
    cost: "月8,000〜15,000円",
    monthly: "月8,000〜15,000円",
    note: "プール・スタジオ付き",
  },
  {
    type: "公営ジム",
    cost: "1回200〜500円",
    monthly: "週2回で月2,000〜4,000円",
    note: "最安。設備は施設次第",
  },
  {
    type: "自宅（ダンベル）",
    cost: "初期1〜3万円のみ",
    monthly: "月0円",
    note: "移動ゼロ。種目は限られる",
  },
];

export default function PersonalGymCostPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            パーソナルジムの費用相場｜普通のジムと比べて高いのか
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                先に正直に書いておくと、筆者はパーソナルジムに通った経験がありません。15年間、月会費制の普通のジムで自力でやってきた側の人間です。だからこの記事に「通ってみた体験談」はありません。書けるのは費用の比較と、「指導にお金を払う価値はあるのか」を自力側から見た正直な答えです。
              </p>
              <p>
                パーソナルジムの料金を初めて見た人は、ほぼ全員「高い」と感じるはずです。2ヶ月で30万円前後——普通のジムなら3年通える金額です。ただ「高いかどうか」は、何と比べて、何を買っているのかを整理しないと判断できません。まず相場を一覧にします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレにかかる費用の比較表
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        手段
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        費用の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        特徴
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {costRows.map((row) => (
                      <tr key={row.type}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.type}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.cost}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 相場は2026年時点の一般的な価格帯の目安です。地域・ブランドで差があります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                「自力なら安い」の隠れコスト
              </h2>
              <p>
                表だけ見れば自力が圧勝です。ただし、自力には表に載らないコストがあります。<span className="font-bold">時間</span>です。
              </p>
              <p className="mt-2">
                仮に月8,000円のジムに15年通うと、会費だけで約144万円。筆者はまさにこの「安いが長い」ルートを歩いてきました。もちろん筋トレ自体が趣味なので後悔はありません。ただ、成果だけを切り出すと、遠回りした部分がはっきりあります。
              </p>
              <p className="mt-2">
                一番わかりやすい例がベンチプレスです。筆者のベンチプレスには長い停滞期がありましたが、それを破った決定打は、新しいメニューでも高いサプリでもなく、<span className="font-bold">ジムを変えて、人の補助と指導を受けたこと</span>でした。自分では正しいと思っていたフォームや追い込みの浅さは、自分では見えません。他人の目が入った途端に伸びた——この経験があるので、「指導にお金を払う価値はあるか」と聞かれたら、自力派の筆者でも「ある」と答えます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                パーソナルジムが向いている人・向いていない人
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">向いている人</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">期限がある人</span>：結婚式・健康診断など「◯ヶ月後まで」が決まっているなら、試行錯誤の時間を買う意味は大きいです。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">一人だとサボる自覚がある人</span>：予約と担当者がいる強制力は、意志力より確実に働きます。ダイエットの失敗が「続かないこと」なら、買うべきは知識ではなく強制力です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">最初にフォームを固めたい人</span>：変な癖は後から直す方が大変です。最初の2〜3ヶ月だけプロに見てもらい、あとは安いジムで自走する使い方は合理的です。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">向いていない人</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">調べて試すのが好きな人</span>：自分で仮説を立てて検証できる人は、時間はかかっても自力で到達できます。筆者はこちら側でした。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">卒業後のプランがない人</span>：2〜3ヶ月の契約期間だけで人生は変わりません。終わった後に普通のジムや自宅で続ける前提がないと、費用対効果は大きく下がります。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                無料カウンセリングで確認すべき3つのこと
              </h2>
              <p>
                多くのパーソナルジムには無料カウンセリングがあります。行くこと自体はタダなので、契約を迷っているなら話だけ聞いて比較材料にするのが賢い使い方です。その際、次の3点は必ず確認してください。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">1.</span>
                  <p>
                    <span className="font-bold">総額</span>：入会金・コース料金・指定サプリなどを含めた「支払い総額」で比較する。月額表示だけで判断しない。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">2.</span>
                  <p>
                    <span className="font-bold">卒業後のサポート</span>：契約終了後に自分で続けられるよう、メニューの組み方や食事の考え方まで教えてくれるか。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">3.</span>
                  <p>
                    <span className="font-bold">返金保証の条件</span>：「30日間全額返金」などの条件の細部（対象・手続き・期限）を書面で確認する。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ：買っているのは「時間」と「強制力」
              </h2>
              <p>
                パーソナルジムの20〜40万円は、設備の値段ではありません。自力なら数年かかる試行錯誤の短縮と、一人では続かない人のための強制力の値段です。だから「高いか安いか」の答えは人によって変わります。時間を優先するならあの価格には根拠があり、時間をかけられるなら普通のジム＋正しい知識で同じ場所に到達できます。
              </p>
              <p className="mt-2">
                自力ルートを選ぶ方は、サクトレのメニュー作成と
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安表
                </Link>
                を道しるべに使ってください。どちらのルートでも、続けた人だけが変わります。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="「時間を買う」と決めたなら、まずは無料カウンセリングで総額と卒業後サポートを確認するところから。" />

        <ShareButtons url="https://sakutore.jp/column/personal-gym-cost" title="パーソナルジムの費用相場｜普通のジムと比べて高いのか" />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">実際に使って選んだプロテイン・ベルト・グリップを見る →</p>
            </div>
          </div>
        </Link>

        <AuthorBox />

        <div className="text-center space-y-3">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg"
          >
            自力派はこちら：メニューを作る
          </Link>
          <div>
            <Link
              href="/column"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
