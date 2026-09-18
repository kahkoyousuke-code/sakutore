import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { recoveryRows, recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "筋トレは毎日やってもいい？成立する条件とやめたほうがいい人 - サクトレ",
  description:
    "答えは「同じ部位を毎日はダメ、部位を分ければ毎日でも可」。毎日やっていい種目と悪い種目、続けていいかを判定するチェック表、毎日やる場合の週の組み方を載せました。40代で週5回・完全休養は週2日の筆者が、毎日にしていない理由も書きます。",
  path: "/column/everyday-training",
});

// 毎日やっていいかの判定。1つでも×なら、その日は休むか別部位に替える。
const CHECK_ROWS = [
  {
    check: "同じ部位を24時間以内に繰り返していないか",
    ng: "同じ部位が連日になっている",
    why: "回復が終わる前に次のダメージを重ねている",
  },
  {
    check: "前回と同じ重量で回数が落ちていないか",
    ng: "同じ重量で回数が減った",
    why: "気分ではなく数字で出る、回復不足のサイン",
  },
  {
    check: "睡眠を7時間以上とれているか",
    ng: "6時間を切る日が続いている",
    why: "回復の土台。ここが崩れると頻度は上げられない",
  },
  {
    check: "関節や腱に痛みが出ていないか",
    ng: "肘・肩・膝・腰に痛みがある",
    why: "筋肉より回復が遅い。ここを痛めると数週間止まる",
  },
  {
    check: "トレーニングが楽しみか、義務になっていないか",
    ng: "行くこと自体が重い",
    why: "長く続けるほうが結果は出る。毎日は手段であって目的ではない",
  },
];

// 毎日やる場合の週の組み方の例。1部位あたりは週1〜2回に収まる。
const WEEK_PLAN = [
  { day: "月", part: "胸・三頭" },
  { day: "火", part: "背中・二頭" },
  { day: "水", part: "脚" },
  { day: "木", part: "肩・腹筋" },
  { day: "金", part: "胸・背中（軽め）" },
  { day: "土", part: "腕・ふくらはぎ" },
  { day: "日", part: "歩く・ストレッチのみ" },
];

export default function EverydayTrainingPage() {
  const large = recoveryFor("large");
  const core = recoveryFor("core");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレは毎日やってもいい？成立する条件とやめたほうがいい人
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                結論から書きます。<span className="font-bold">同じ部位を毎日やるのはダメ。部位を分ければ毎日でも成立します。</span>
              </p>
              <p className="mt-2">
                「毎日やっていいか」という質問の答えが人によって割れるのは、<span className="font-bold">質問の中身が2つ混ざっている</span>からです。「毎日ジムに行っていいか」と「同じ部位を毎日鍛えていいか」は別の話で、前者はイエス、後者はノーです。
              </p>
              <p className="mt-2">
                この記事では、毎日やる場合に守る条件と、<span className="font-bold">毎日やらないほうがいい人</span>の見分け方を書きます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜ同じ部位を毎日やってはいけないのか
              </h2>
              <p>
                筋肉が強くなるのは、トレーニング中ではなく<span className="font-bold">そのあとの回復中</span>です。回復が終わる前に次のダメージを重ねると、積み上がるのは刺激ではなく疲労だけになります。
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
                        次に鍛えるまで
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
                          {row.interval}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                胸・背中・脚は<span className="font-bold">{large.hours}</span>かかります。ここを毎日やると、<span className="font-bold">回復の途中で毎回リセットしている</span>ことになります。一方、腹筋とふくらはぎは<span className="font-bold">{core.hours}</span>なので、毎日入れても回復が追いつきます。
              </p>
              <p className="mt-2">
                つまり「毎日やっていいか」は部位ごとに答えが違うということです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                毎日やる場合の週の組み方
              </h2>
              <p>
                毎日ジムに行きたいなら、<span className="font-bold">1日に鍛える部位を絞って回す</span>だけです。下は一例で、どの部位も週1〜2回に収まっています。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        曜日
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        鍛える部位
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WEEK_PLAN.map((row) => (
                      <tr key={row.day}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.day}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.part}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                日曜を<span className="font-bold">歩く・ストレッチだけの日</span>にしてある点に注目してください。毎日体を動かしてはいますが、<span className="font-bold">筋トレとしては休んでいます</span>。「毎日やる」を実現する現実的な形はこれです。
              </p>
              <p className="mt-2">
                自分の通える回数に合わせた分け方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                に、回数そのものの決め方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                今日もやっていいか、5つのチェック
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        見るところ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        当てはまったら休む
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHECK_ROWS.map((row) => (
                      <tr key={row.check}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.check}
                          <span className="block text-[10px] text-gray-400">{row.why}</span>
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.ng}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                この中で最も当てになるのは<span className="font-bold">2番目（同じ重量で回数が落ちていないか）</span>です。だるさや気分は前日の仕事にも左右されますが、挙上重量は嘘をつきません。判断の材料は
                <Link href="/column/rest" className="text-orange-600 font-bold underline">
                  休息の記事
                </Link>
                にセルフチェック表としてまとめてあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                毎日やらないほうがいい人
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">始めて3ヶ月以内の人</span>：フォームが固まる前に量を増やすと、崩れた動きを毎日練習することになります
                </li>
                <li>
                  ▸ <span className="font-bold">睡眠が6時間を切る人</span>：回復の土台が足りません。頻度より先に睡眠を戻すほうが早いです
                </li>
                <li>
                  ▸ <span className="font-bold">減量中の人</span>：食事が足りない状態で頻度を上げると、落ちるのが脂肪ではなく筋肉になります
                </li>
                <li>
                  ▸ <span className="font-bold">関節に痛みがある人</span>：筋肉より回復が遅い場所なので、痛みが出たら頻度を下げる一択です
                </li>
              </ul>
              <p className="mt-3">
                特に1つめは多いです。<span className="font-bold">最初の数ヶ月は週2〜3回のほうが伸びます。</span>やる気があるうちに全部使い切らないでください（
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  初心者が最初にやるべき5つのこと
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                「毎日やらないと不安」への答え
              </h2>
              <p>
                休むと戻ってしまう気がする——これはよく分かります。ただ、<span className="font-bold">数日休んだくらいで筋肉は落ちません。</span>むしろ回復しきってから再開したほうが、扱える重量は上がります。
              </p>
              <p className="mt-2">
                どうしても毎日何かしたい場合は、<span className="font-bold">休養日に「筋トレ以外」を置く</span>のがおすすめです。歩く、ストレッチ、風呂で温める。血流が増えて回復が進むので、何もしないより良い選択になります（
                <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                  ストレッチの効果とやり方
                </Link>
                ）。
              </p>
              <p className="mt-2">
                逆に<span className="font-bold">「毎日やれば早く痩せる」は成り立ちません。</span>減るかどうかは収支で決まるので、頻度を上げても食事が伴わなければ結果は動きません（
                <Link href="/column/metabolism" className="text-orange-600 font-bold underline">
                  筋トレで痩せる仕組み
                </Link>
                ）。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・40代）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は週5回トレーニングしていて、<span className="font-bold">完全休養は週2日</span>です。やろうと思えば毎日行けますが、していません。
                <br />
                <br />
                理由は単純で、<span className="font-bold">40代になって回復が遅くなった実感がある</span>からです。20代の頃と同じ感覚で詰め込むと、次の週の重量が落ちます。それに週5回でも、部位を分けているので<span className="font-bold">1部位あたりは週1〜2回</span>。回数を増やしたいなら休みを削るのではなく、分け方を変えるのが正解です（
                <Link href="/column/over40" className="text-orange-600 font-bold underline">
                  40代からの筋トレ入門
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                毎日30分の軽い筋トレならいいですか？
              </h3>
              <p>
                部位を分けているなら問題ありません。ただし<span className="font-bold">軽くしすぎると刺激が足りず、ただ時間を使うだけ</span>になります。短くていいので、その部位は限界の近くまでやってください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腹筋なら毎日やっていいですか？
              </h3>
              <p>
                回復は{core.hours}なので、毎日でも追いつきます。ただし<span className="font-bold">毎日やっても腹筋は割れません。</span>割れて見えるかは体脂肪率で決まります（
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  腹筋が割れる体脂肪率は何%？
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                有酸素運動は毎日やっていいですか？
              </h3>
              <p>
                軽い有酸素は毎日でも構いません。ただし<span className="font-bold">脚が筋肉痛のときのランニングは脚トレの続き</span>になります。筋トレとの順番は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                を見てください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛があっても毎日続けていいですか？
              </h3>
              <p>
                痛む部位を外せば続けて構いません。判断の基準は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                に痛み方別の表で出しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">同じ部位は毎日ダメ、部位を分ければ毎日可</span>。質問を2つに分けて考える
                </li>
                <li>
                  ▸ 胸・背中・脚は{large.hours}、腹筋・ふくらはぎは{core.hours}。<span className="font-bold">毎日入れていいのは後者だけ</span>
                </li>
                <li>
                  ▸ 続けていいかの判断は<span className="font-bold">同じ重量で回数が落ちていないか</span>
                </li>
                <li>
                  ▸ <span className="font-bold">始めて3ヶ月以内・睡眠不足・減量中・関節痛</span>のときは毎日にしない
                </li>
                <li>
                  ▸ 休養日は「何もしない」より<span className="font-bold">歩く・伸ばす</span>ほうが回復は進む
                </li>
              </ul>
              <p className="mt-2">
                サクトレのメニュー作成は、直近でやった部位の履歴をもとに<span className="font-bold">回復が間に合っていない部位を避けて</span>今日の分を出します。毎日行く人ほど、部位の管理を任せてしまうのが楽です。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/everyday-training"
          title="筋トレは毎日やってもいい？成立する条件とやめたほうがいい人"
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
