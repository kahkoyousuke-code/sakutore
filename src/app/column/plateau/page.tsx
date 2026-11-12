import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import SessionFlowDiagram from "@/components/diagrams/SessionFlowDiagram";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  levelsFor,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "筋トレの停滞期の抜け方｜BIG3の重量が伸びないときに確かめる順番 - サクトレ",
  description:
    "重量が伸びなくなったら、まず本当に止まっているのかを確かめます。上のレベルほど伸びがゆっくりになるのは普通です。そのうえで、睡眠と食事、フォームと止まる場所、限界まで追い込める環境、重さを下げてやり直す、補助種目の順に、お金と手間のかからないものから確かめる方法をまとめました。",
  path: "/column/plateau",
});

// 停滞したときに確かめる順番。右端は「何で確かめるか」。図と本文の両方がここを読む。
const CHECK_STEPS = [
  { step: "1", name: "本当に止まっているか", time: "記録" },
  { step: "2", name: "睡眠と食事", time: "生活" },
  { step: "3", name: "フォームと止まる場所", time: "動画" },
  { step: "4", name: "限界まで追い込める環境", time: "ジム" },
  { step: "5", name: "重さを下げてやり直す", time: "数回" },
  { step: "6", name: "補助種目を足す", time: "種目" },
];

// 次のレベルまでの期間を見せるレベル（エリートは「次」がないので除く）。
const PERIOD_LEVELS: Level[] = levelsFor("male").filter((lv) => LEVEL_STEP_PERIOD[lv] !== null);

export default function PlateauPage() {
  const levels = levelsFor("male");
  const nextOf = (lv: Level) => levels[levels.indexOf(lv) + 1];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            筋トレの停滞期の抜け方｜BIG3の重量が伸びないときに確かめる順番
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                ベンチプレスやスクワットの重量が、しばらく伸びなくなる。筋トレを続けていれば、誰にでも来る時期です。ここで<span className="font-bold">いきなりメニューや種目を変えるのは、いちばん最後</span>にしてください。
              </p>
              <p className="mt-2">
                先に確かめることがあります。まず、本当に止まっているのか。止まっているなら、お金と手間がかからないものから順に原因をつぶします。この記事では、その順番を説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                確かめる順番
              </h2>
              <DiagramFigure
                title="上から順に。種目を変えるのは最後"
                label={`停滞したときに確かめる順番。${CHECK_STEPS.map((s) => `${s.step}. ${s.name}`).join("、")}。`}
                caption="右端は、何で確かめるか。4の環境は、筆者の停滞を動かした決め手でもあります。"
              >
                <SessionFlowDiagram steps={CHECK_STEPS} highlightStep="4" />
              </DiagramFigure>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                1. 本当に止まっているか
              </h2>
              <p>
                始めたばかりの頃は、毎週のように重量が上がります。その感覚のまま続けると、伸びがゆっくりになっただけで「止まった」と感じます。ですが、<span className="font-bold">上のレベルほど伸びがゆっくりになるのは普通</span>です。サクトレの目安では、次のレベルまでにかかる期間はこう変わります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        今のレベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        筋トレ歴の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        次のレベルまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PERIOD_LEVELS.map((lv) => (
                      <tr key={lv}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {lv}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {LEVEL_EXPERIENCE[lv]}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {nextOf(lv)}まで{LEVEL_STEP_PERIOD[lv]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                中級者から上級者までは数年単位です。1ヶ月ごとに見ると、ほとんど動いていないように見えて当たり前です。自分のレベルは
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                で確かめられます。
              </p>
              <p className="mt-2">
                判断は、気分ではなく記録で行います。<span className="font-bold">同じ重さ・同じ回数で、何度か続けて決めた回数が届かない</span>なら、止まっています。重さを上げるタイミングの決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                2. 睡眠と食事
              </h2>
              <p>
                いちばんお金がかからず、いちばん効きやすいのがここです。睡眠が削れている時期や、体重が減っている時期は、重量も伸びにくくなります。<span className="font-bold">減量中に重量が止まるのは、停滞ではなく当然の結果</span>です。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ 睡眠時間が短くなっていないか →
                  <Link href="/column/sleep" className="text-orange-600 font-bold underline">
                    筋トレと睡眠の関係
                  </Link>
                </li>
                <li>
                  ▸ タンパク質と食べる量が足りているか、体重が減っていないか →
                  <Link href="/column/protein" className="text-orange-600 font-bold underline">
                    必要なタンパク質の量
                  </Link>
                </li>
                <li>
                  ▸ 同じ部位を休ませる間隔が足りているか →
                  <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                    週に何回筋トレすればいい？
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                3. フォームと止まる場所
              </h2>
              <p>
                重いセットの最後の1回を動画で撮ってください。深さやバーの通り道が毎回違うなら、筋力より先にフォームの問題です。フォームが安定しているなら、<span className="font-bold">バーがどこで止まるか</span>が次の手がかりになります。止まる場所ごとの補助種目は6で使います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                4. 限界まで追い込める環境
              </h2>
              <p>
                見落とされやすいのがここです。<span className="font-bold">潰れたときの逃げ場がないと、人は限界の手前で止めてしまいます</span>。ベンチプレスなら補助者、スクワットならセーフティバーを正しい高さに合わせること。これだけで、出し切れていなかった1回が出るようになります。
              </p>
              <p className="mt-2">
                セーフティバーの高さの決め方は
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                5. 重さを下げてやり直す
              </h2>
              <p>
                1〜4を確かめても動かないなら、疲れがたまっていることがあります。<span className="font-bold">重さを少し下げて、決めた回数がそろうところからやり直します</span>。下げた重さから、また全セットそろったら上げていけば、たいていは元の重さを越えていきます。
              </p>
              <p className="mt-2">
                下げるのは負けではありません。同じ重さで何度も潰れ続けるより、少し戻して積み直すほうが早く進みます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                6. 補助種目を足す
              </h2>
              <p>
                ここで初めて、種目に手を入れます。新しい種目を次々に試すのではなく、<span className="font-bold">3で見つけた止まる場所に合う補助種目を1〜2種目</span>足します。選び方は
                <Link href="/column/big3-accessory" className="text-orange-600 font-bold underline">
                  BIG3の補助種目の選び方
                </Link>
                にまとめています。3種目のうちどれが遅れているかは
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                で確かめられます。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                <Link href="/column/10years" className="text-orange-600 font-bold underline">
                  10年筋トレを続けてわかったこと
                </Link>
                にも書いたとおり、私のベンチプレスは長く止まっていた時期があります。停滞するたびに種目や分割を組み替えていましたが、それ単体で伸びたことはほとんどありませんでした。
                <br />
                <br />
                動かした決め手は、ジムを変えて、補助についてもらえて、フォームも見てもらえるようになったことでした。この記事で種目を変えるのを最後にして、4の環境を強調しているのは、その経験からです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                メニューを変えると、刺激が新しくなって伸びませんか？
              </h3>
              <p>
                変えた直後は、新しい動きに慣れるぶん数字が動くことがあります。ただ、それは筋力が伸びたのではなく、動きに慣れただけのこともあります。<span className="font-bold">1〜5を確かめないまま種目を変えると、原因が分からないまま次の停滞が来ます</span>。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                サプリを足せば停滞を抜けられますか？
              </h3>
              <p>
                睡眠と食事ができていない時期に足しても、体感できる差は出にくいです。足すとしても、2の土台が整ってからにしてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                見た目は変わっているのに重量が伸びません。
              </h3>
              <p>
                減量中なら普通です。体重が減ると、扱える重さも伸びにくくなります。重量を保てているだけでも、筋肉を残せているサインです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ まず<span className="font-bold">本当に止まっているか</span>を記録で確かめる。上のレベルほど伸びがゆっくりなのは普通
                </li>
                <li>
                  ▸ 次に<span className="font-bold">睡眠と食事</span>。減量中に止まるのは当然
                </li>
                <li>
                  ▸ フォームと止まる場所を動画で見る。<span className="font-bold">限界まで追い込める環境</span>を作る
                </li>
                <li>
                  ▸ それでもだめなら、重さを少し下げてやり直す
                </li>
                <li>
                  ▸ 種目を変えるのは最後。止まる場所に合う補助種目を1〜2種目
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/plateau"
          title="筋トレの停滞期の抜け方｜BIG3の重量が伸びないときに確かめる順番"
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
