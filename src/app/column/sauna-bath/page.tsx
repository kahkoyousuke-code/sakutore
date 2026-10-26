import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import SessionFlowDiagram from "@/components/diagrams/SessionFlowDiagram";

export const metadata = pageMetadata({
  title: "筋トレ後のサウナ・お風呂はいい？入るタイミングと水風呂・アイスバスの注意点 - サクトレ",
  description:
    "サウナとお風呂は筋トレの後、水分をとってから。筋トレ前のサウナは汗で水分が抜けて重い重量に向きません。筋肉を大きくしたい時期に、筋トレ直後の水風呂・アイスバスを習慣にすると筋肉の増え方が小さくなったという研究もあります。前・後・注意点を表にまとめました。",
  path: "/column/sauna-bath",
});

// 筋トレの日の流れ。時間ではなく「いつ・どのくらい」を右端に書く。
// 「任意」は SessionFlowDiagram が点線の枠で描く。
const DAY_FLOW = [
  { step: "1", name: "ウォームアップ", time: "軽く" },
  { step: "2", name: "筋トレ", time: "メイン" },
  { step: "3", name: "水分をとる", time: "すぐ" },
  { step: "4", name: "お風呂・サウナ", time: "任意" },
];

// 前・後の向き不向き。数字（温度・分数）は人と施設で変わるので置かない。
const TIMING_ROWS = [
  {
    what: "シャワー",
    before: "○",
    after: "○",
    note: "前後どちらでも問題ない",
  },
  {
    what: "お風呂（湯船）",
    before: "△",
    after: "○",
    note: "前の長湯は疲れる。後は体が温まって動かしやすいが、回復そのものを速める効果は限られる",
  },
  {
    what: "サウナ",
    before: "×",
    after: "○",
    note: "前は汗で水分が抜け、重い重量に集中しにくい。後は水分をとってから",
  },
  {
    what: "水風呂・アイスバス",
    before: "－",
    after: "△",
    note: "筋肉を大きくしたい時期に、筋トレ直後に毎回入るのは避けたい",
  },
];

export default function SaunaBathPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            筋トレ後のサウナ・お風呂はいい？入るタイミングと水風呂・アイスバスの注意点
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                結論から書くと、<span className="font-bold">サウナもお風呂も、入るなら筋トレの後</span>です。筋トレの前にサウナに入ると、汗で水分が抜けて体も疲れ、重い重量を扱うのに向きません。
              </p>
              <p className="mt-2">
                気をつけたいのは、温めることより<span className="font-bold">冷やすこと</span>のほうです。筋肉を大きくしたい時期に、筋トレ直後の水風呂やアイスバスを習慣にすると、筋肉の増え方が小さくなったという研究があります。一方で、サウナやお風呂で温めることが筋肉の成長を妨げる、あるいは大きく助けるという、はっきりした結果はまだありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                筋トレの日の順番
              </h2>
              <DiagramFigure
                title="サウナ・お風呂は筋トレと水分補給の後"
                label={`筋トレの日の流れ。${DAY_FLOW.map((r) => `${r.step}. ${r.name}`).join("、")}の順。お風呂・サウナは入りたい人だけ。`}
                caption="点線の4は入りたい日だけ。筋トレの前にサウナを入れないのがポイントです。"
              >
                <SessionFlowDiagram steps={DAY_FLOW} highlightStep="2" />
              </DiagramFigure>
              <p className="mt-3">
                筋トレの中身の順番（ウォームアップから有酸素まで）は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                にまとめています。この記事は、その後に何をするかの話です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                筋トレの前と後、どちらに向いているか
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        前
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        後
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        ひとこと
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TIMING_ROWS.map((row) => (
                      <tr key={row.what}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.what}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-800">
                          {row.before}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-800">
                          {row.after}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                お風呂の「回復を速める効果は限られる」は、
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                の「早く治す方法」の表と同じ評価です。温めると動かしやすくはなりますが、修復を進める土台は睡眠とタンパク質です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                筋トレ前のサウナをすすめない理由
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">汗で水分が抜ける</span>：水分が足りないまま重い重量を扱うと、集中が続きにくく、ふらつきやすい
                </li>
                <li>
                  ▸ <span className="font-bold">体が疲れる</span>：熱さに耐えるだけで体力を使う。その日のメインのセットに使いたい力が先に減る
                </li>
                <li>
                  ▸ <span className="font-bold">体を温めるならウォームアップで足りる</span>：筋トレ前に必要なのは、関節を動かして軽い重量から上げていくこと
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                水風呂・アイスバスは筋肉を大きくしたい時期は控えめに
              </h2>
              <p>
                筋トレ直後に冷たい水にしっかりつかる方法（アイスバス）は、スポーツ選手の疲労回復でよく使われます。ただ、<span className="font-bold">筋トレの後に毎回続けたグループは、続けなかったグループより筋肉の増え方が小さかった</span>という研究があり、複数の研究をまとめた分析でも同じ方向の結果が出ています。
              </p>
              <p className="mt-2">
                研究で調べられているのは、冷たい水にしばらくつかる方法を、筋トレのたびに何週間も続けた場合です。サウナの合間に短く水風呂に入る場合にそのまま当てはまるかは、はっきりしていません。気になるなら、<span className="font-bold">筋トレの日は水風呂を短めにするか、筋トレをしない日に楽しむ</span>のが無難です。
              </p>
              <p className="mt-2">
                逆に、大会や試合が続いて「次の日に疲れを残したくない」時期は、冷やすことに意味がある場合もあります。目的が筋肉を増やすことなのか、疲れを抜くことなのかで選んでください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                筋トレ後にサウナに入るときの注意
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">先に水分をとる</span>：筋トレで汗をかいた後なので、サウナの前後に水分をとる
                </li>
                <li>
                  ▸ <span className="font-bold">いつもより短めに</span>：筋トレの後は疲れているので、のぼせる前に出る。我慢比べをしない
                </li>
                <li>
                  ▸ <span className="font-bold">お酒を飲んだ後は入らない</span>：飲酒後のサウナは、事故につながりやすい危険な入り方として注意が呼びかけられている
                </li>
                <li>
                  ▸ <span className="font-bold">ふらついたらすぐ出る</span>：立ちくらみ・頭痛・吐き気が出たら、涼しい場所で休んで水分をとる
                </li>
                <li>
                  ▸ <span className="font-bold">持病がある人は先に医師に相談</span>：心臓や血圧の病気がある人、薬を飲んでいる人は、サウナや水風呂を始める前に確認する
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                夜に筋トレする人は、お風呂の時間にも気をつける
              </h2>
              <p>
                お風呂は、<span className="font-bold">寝る1〜2時間前までに済ませる</span>と眠りに入りやすくなります。温まった体温が下がるときに眠気が来るからです。夜に筋トレしてそのまま寝る人は、帰ってすぐ湯船に入るほうが、寝る直前に入るより眠りの邪魔になりにくいです。寝る前の過ごし方は
                <Link href="/column/sleep" className="text-orange-600 font-bold underline">
                  筋トレと睡眠の関係
                </Link>
                の逆算スケジュール表にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の考え方
              </p>
              <p className="text-xs leading-relaxed">
                私は40代のいまも週5回トレーニングしているので、回復のために何かを足したくなる気持ちはよく分かります。ただ、
                <Link href="/column/rest" className="text-orange-600 font-bold underline">
                  休息の記事
                </Link>
                にも書いたとおり、回復が間に合うかどうかを決めているのは、部位の分け方と睡眠です。
                <br />
                <br />
                サウナやお風呂は、その土台の上に乗せる「気持ちよく続けるための習慣」くらいに考えるのがちょうどいいと思います。<span className="font-bold">サウナで筋肉が増えるわけでも、減るわけでもない</span>。気をつけるのは、前に入らないことと、冷やしすぎないことの2つだけです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛のときにサウナやお風呂に入ってもいいですか？
              </h3>
              <p>
                構いません。温めると動かしやすくなり、痛みを感じにくくなることはあります。ただし、筋肉痛が早く治るわけではありません。痛みが強いときや、腫れて熱を持っているときは無理に温めないでください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋トレ直後にシャワーを浴びてもいいですか？
              </h3>
              <p>
                問題ありません。汗を流すだけのシャワーなら、筋トレの前後どちらでも大丈夫です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                サウナで汗をかけば痩せますか？
              </h3>
              <p>
                サウナで減った体重のほとんどは水分なので、水を飲めば戻ります。体脂肪を減らすのは、食事と運動を合わせた1日のカロリーの収支です。体重計や体組成計の数字が水分で動くことは
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  腹筋が割れる体脂肪率
                </Link>
                にも書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ サウナ・お風呂は<span className="font-bold">筋トレの後、水分をとってから</span>
                </li>
                <li>
                  ▸ 筋トレ前のサウナは、汗で水分が抜けて体も疲れるので<span className="font-bold">避ける</span>
                </li>
                <li>
                  ▸ 筋肉を大きくしたい時期は、<span className="font-bold">筋トレ直後の水風呂・アイスバスを習慣にしない</span>
                </li>
                <li>
                  ▸ お酒の後は入らない。ふらついたらすぐ出る。持病がある人は先に医師に相談
                </li>
                <li>
                  ▸ 夜に筋トレする人は、お風呂を寝る1〜2時間前までに済ませる
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/sauna-bath"
          title="筋トレ後のサウナ・お風呂はいい？入るタイミングと水風呂・アイスバスの注意点"
        />

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
