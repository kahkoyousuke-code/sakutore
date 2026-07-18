import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレ分割法の早見表｜週2・3・4回それぞれの組み方 - サクトレ",
  description:
    "週2回・3回・4回以上それぞれに最適な筋トレの分割法を早見表で解説。全身法・上下2分割・押す引く脚の3分割の組み方と、初心者がやりがちな分割の失敗例まで、筋トレ歴15年の筆者が紹介します。",
  path: "/column/split-routine",
});

const splitRows = [
  {
    freq: "週1回",
    split: "全身法",
    example: "全身をまんべんなく（脚・胸・背中を必ず入れる）",
  },
  {
    freq: "週2回",
    split: "全身法 ×2",
    example: "月：全身A ／ 木：全身B",
  },
  {
    freq: "週3回",
    split: "全身法 or 3分割",
    example: "月：押す ／ 水：引く ／ 金：脚",
  },
  {
    freq: "週4回",
    split: "上下2分割 ×2",
    example: "月：上 ／ 火：下 ／ 木：上 ／ 金：下",
  },
  {
    freq: "週5〜6回",
    split: "4〜5分割",
    example: "胸／背中／肩・腕／脚／弱点部位",
  },
];

const recoveryRows = [
  { part: "大きな筋肉（胸・背中・脚）", hours: "48〜72時間", note: "中2〜3日あける" },
  { part: "小さな筋肉（肩・腕）", hours: "約48時間", note: "中1〜2日あける" },
  { part: "腹筋・ふくらはぎ", hours: "約24時間", note: "毎日でも回復が追いつきやすい" },
];

export default function SplitRoutinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレ分割法の早見表｜週2・3・4回それぞれの組み方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「週に何回やるか」を決めたら、次にぶつかるのが「どの日に何を鍛えるか」という問題です。毎回全身をやるべきなのか、部位ごとに分けるべきなのか。この分け方を「分割法（スプリット）」と呼びます。
              </p>
              <p className="mt-2">
                結論はシンプルで、<span className="font-bold">分割法は通える回数で自動的に決まります</span>。先に早見表を見て、自分の頻度の行だけ確認してください。あとは各分割の中身を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                頻度別・分割法の早見表
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        頻度
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        おすすめ分割
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        組み方の例
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {splitRows.map((row) => (
                      <tr key={row.freq}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.freq}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.split}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.example}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※「押す」＝胸・肩・三頭筋、「引く」＝背中・二頭筋。Push/Pull/Legs（PPL）とも呼ばれます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜ分けるのか：回復時間がすべての根拠
              </h2>
              <p>
                分割法の根拠は「超回復」です。トレーニングでダメージを受けた筋肉が回復して前より強くなるまでには時間がかかり、その時間は部位によって違います。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        回復の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        実践の目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recoveryRows.map((row) => (
                      <tr key={row.part}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.part}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.hours}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                つまり「同じ部位は中2〜3日あける」を守れる組み合わせなら、どの分割でも成立します。逆に、どんなに凝った分割でもこのルールを破ると回復が追いつかず、伸びが止まります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                各分割法の中身
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                全身法（週1〜3回）
              </h3>
              <p>
                1回のトレーニングで全身の主要筋群を鍛える方法。スクワット・ベンチプレス（腕立て伏せ）・ラットプルダウン（懸垂）のような複数の関節を使う種目を軸に、5〜6種目で構成します。頻度が少なくても各部位に週1回以上刺激が入るのが最大の利点で、<span className="font-bold">初心者はまずこれ一択</span>です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                上下2分割（週4回向け）
              </h3>
              <p>
                「上半身の日」と「下半身の日」に分ける方法。週4回なら各部位を週2回ずつ鍛えられ、研究でも「同じ総量なら週2回に分けた方が筋肥大に有利」という報告が多い、もっとも失敗しにくい分割です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                押す・引く・脚の3分割（PPL）
              </h3>
              <p>
                動作の方向で分ける方法。押す日（胸・肩・三頭）、引く日（背中・二頭）、脚の日の3つに分けます。同じ日に働く筋肉をまとめて鍛えるので回復の管理がしやすく、週3回でも週6回（2周）でも運用できる柔軟さが魅力です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                4〜5分割（週5回以上・中上級者向け）
              </h3>
              <p>
                胸の日・背中の日のように1日1部位へ絞る方法。1部位あたりの種目数とボリュームを最大化できる反面、1部位への刺激が週1回になりやすいのが弱点。ボリュームをしっかり確保できる中上級者向けです。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の使い分け
              </p>
              <p className="text-xs leading-relaxed">
                私自身は現在、フィジーク（上半身重視の競技）向けに胸・肩を優先した分割を組んでいます。ただし最初の数年は全身法と上下2分割で土台を作りました。15年やってきて断言できるのは、<span className="font-bold">初心者が5分割から入るのが一番の遠回り</span>だということ。分割を細かくするのは「1回で全身をやりきれないほどボリュームが増えてから」で十分です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある失敗パターン
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">初心者がいきなり5分割</span>：各部位が週1回しか鍛えられず、成長が遅い。頻度が確保できないなら分割は粗くするのが原則です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">脚の日を飛ばす</span>：一番きつい日から消えていくのが分割法の宿命。脚は体の筋肉の半分以上を占めるので、抜くと全体の伸びが鈍ります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">予定通り行けないと崩壊する分割</span>：仕事で1日飛ぶと全部ずれる設計は続きません。「行けた日に、一番回復している部位をやる」くらいの柔軟さが長続きのコツです。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                分割法は頻度で決まります。週2〜3回なら全身法、週4回なら上下2分割、週5回以上で初めて細かい分割を検討する——この順番を守れば大きく失敗することはありません。詳しい頻度の考え方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  「週に何回筋トレすればいい？」
                </Link>
                も参考にしてください。
              </p>
              <p className="mt-2">
                サクトレのメニュー作成は、この分割の考え方と部位ごとの回復状況を組み込んで「今日やるべき部位」のメニューを自動で組みます。分割を自分で設計するのが面倒な方は、質問に答えるだけで今日の分が出てくるので試してみてください。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/split-routine" title="筋トレ分割法の早見表｜週2・3・4回それぞれの組み方" />
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
            今日の分のメニューを作る
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
