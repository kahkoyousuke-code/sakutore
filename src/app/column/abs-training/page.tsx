import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import PullupStepsStaircase from "@/components/diagrams/PullupStepsStaircase";
import { absSteps, ABS_STEP_GOAL, ABS_STEP_FLOOR, pullupSteps } from "@/lib/bodyweightStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

// description の「12回×3セット」は ABS_STEP_GOAL の値を直書きしている
// （seo.config.mjs が文字列リテラルとして読むため）。モジュール側を変えたらここも直すこと。
export const metadata = pageMetadata({
  title: "腹筋を割る筋トレメニュー｜種目の順番と回数、クランチからハンギングレッグレイズまで5段階 - サクトレ",
  description:
    "腹筋の種目を、クランチ・リバースクランチ・レッグレイズ・アブローラー・ハンギングレッグレイズの5段階に並べました。12回×3セットが楽にできたら1段重い種目へ。回数を増やすより種目を重くするほうが、割れたときの厚みが出ます。体脂肪率の話は別記事に任せ、種目と回数だけを扱います。",
  path: "/column/abs-training",
});

export default function AbsTrainingPage() {
  const core = recoveryFor("core");
  const details = absSteps.map((s) => ({ step: s, ex: findExerciseDetail(s.name) }));
  const plank = findExerciseDetail("プランク");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            腹筋を割る筋トレメニュー｜種目の順番と回数、クランチからハンギングレッグレイズまで5段階
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                先に大事なことを書くと、<span className="font-bold">腹筋が割れて見えるかどうかは、体脂肪率で決まります</span>。腹筋運動でお腹の脂肪だけを落とすことはできません。何%で見えてくるか、そこまで何kg落とせばいいかは
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  腹筋が割れる体脂肪率は何%？
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                では腹筋のトレーニングは何のためにやるのかというと、<span className="font-bold">腹筋の厚みを作るため</span>です。脂肪が減ったとき、腹筋に厚みがあるほど溝がはっきり見えます。この記事では、その厚みを作る種目と回数だけを扱います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                回数を増やすより、種目を重くする
              </h2>
              <p>
                腹筋も、ほかの筋肉と同じです。100回できる種目を200回に増やしても、1セットに時間がかかるうえ、限界の手前で終わりやすくなります。筋肉を大きくする刺激としては効率が悪いので、<span className="font-bold">楽にできるようになったら、回数を増やすのではなく、1段重い種目に移る</span>のが近道です。
              </p>
              <p className="mt-2">
                サクトレでは、<span className="font-bold">{ABS_STEP_GOAL}</span>が楽にできたら次の段階に進む、という基準にしています。回数は
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  筋トレ初心者が最初にやるべき5つのこと
                </Link>
                の「筋肉を大きくする」回数の範囲（6〜12回）の上限にそろえています。「楽にできる」は、3セット目まで反動を使わず、フォームを崩さずに12回できる状態のことです。次の種目では、また少ない回数から始めて構いません。次の種目で{ABS_STEP_FLOOR}に届かないなら、前の段階をもう少し続けます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                腹筋の5段階
              </h2>
              <p>
                学校でやった上体起こし（シットアップ）は入れていません。腰への負担が気になる人も多いので、同じ動きの軽い版であるクランチから始めます。
              </p>
              <DiagramFigure
                title="下から順に。楽になったら1段上へ"
                label={`腹筋の5段階の階段図。${absSteps.map((s) => `${s.step}.${s.name}`).join("、")}。1〜4は${ABS_STEP_GOAL}が楽にできたら次へ進む。`}
                caption={`1〜4は、${ABS_STEP_GOAL}が楽にできたら次の段階へ。5のハンギングレッグレイズだけは、ぶら下がれるバーが要ります（ぶら下がりが${pullupSteps[0].goal}続かないうちは、腹筋より先に握力が尽きます）。`}
              >
                <PullupStepsStaircase steps={absSteps.map((s) => ({ ...s, goal: "" }))} />
              </DiagramFigure>
              <div className="space-y-3 mt-3">
                {details.map(({ step, ex }) => (
                  <div key={step.step} className="border border-gray-100 rounded-xl p-3">
                    <p className="font-bold text-gray-800">
                      {step.step}. {step.name}
                      <span className="ml-2 text-xs font-normal text-gray-500">
                        {step.step === absSteps[absSteps.length - 1].step ? "目標" : "次へ進む目安"}：{step.goal}
                      </span>
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-600">{step.detail}</p>
                    {ex && (
                      <p className="mt-1 text-xs md:text-sm text-gray-600">
                        <span className="font-bold text-gray-700">注意：</span>
                        {ex.formTips}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-3">
                5まで来たら、自重で重くできる余地はほとんど残っていません。ここから先は、ジムのケーブルクランチのように重さを足せる種目に移ります。
              </p>
              <p className="mt-2">
                レッグレイズとハンギングレッグレイズは、脚を上げるだけだと太ももの付け根の筋肉の運動になります。最後にお尻を少し持ち上げる・骨盤を丸めるところまでやって、はじめて腹筋の種目になります。
              </p>
              <p className="mt-2">
                <span className="font-bold">腰に痛みが出る種目は、その日はやめてください。</span>レッグレイズとアブローラーは、腰が反ると腰を痛めやすい種目です。腰が浮く・反るなら、動かす幅を小さくするか、1つ前の段階に戻ります。腰痛がある人は、1のクランチと2のリバースクランチ（腰への負担が少ない種目）から始めてください。痛みが数日続く、脚にしびれが出るときは、トレーニングを続けず整形外科で診てもらってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                プランクは何のためにやるか
              </h2>
              <p>
                プランクは、腹筋を厚くするより<span className="font-bold">体幹を固める練習</span>に近い種目です。スクワットやデッドリフトで必要な「お腹を固める感覚」をつかむ練習にはなりますが、長くキープできるようになっても、腹筋の厚みにはつながりにくいです。
              </p>
              {plank && (
                <p className="mt-2">
                  やるなら、秒数を伸ばすより形を崩さないことを優先します。{plank.formTips}。
                </p>
              )}
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                いつ・週に何回やるか
              </h2>
              <p>
                腹筋は、サクトレの回復の目安では「{core.part}」に入り、回復は{core.hours}、間隔は「{core.interval}」です。{core.note}。
              </p>
              <p className="mt-2">
                ただし、毎日やる必要はありません。<span className="font-bold">筋トレの日の最後に、1種目を3セット</span>で十分です。腹筋の回数は筋トレをする日の数と同じになるので、1週間に何回筋トレするかは
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                で決めてください。順番を最後にするのは、先にやると体幹が疲れて、スクワットやデッドリフトで腰を守れなくなるからです（
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                ）。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私が腹筋が見えるようになったのは、腹筋運動を増やしたからではなく、食事の管理で体脂肪が減ったからでした（
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  腹筋が割れる体脂肪率の記事
                </Link>
                ）。
                <br />
                <br />
                だからこそ、<span className="font-bold">腹筋の種目は「割るため」ではなく「割れたときの見え方を良くするため」</span>と考えてください。腹筋運動の回数を増やすより、体脂肪を落とすことと、少し重い種目に進むことのほうが、見た目への近道です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腹筋を毎日100回やれば割れますか？
              </h3>
              <p>
                割れるかどうかは体脂肪率で決まるので、回数だけでは割れません。また、100回続けられる種目は、限界まで追い込む前に時間と集中が切れやすく、厚みを作るには遠回りです。体脂肪を落としながら、6〜12回で限界が来るくらいの種目を選んでください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                下腹だけ鍛える方法はありますか？
              </h3>
              <p>
                腹直筋（いわゆる割れる腹筋）は上から下まで1枚の筋肉で、腱で区切られているだけです。種目で効く場所に多少の差は出ても、下だけを大きく鍛え分けるのは難しい、と考えてください。脚を動かす種目（リバースクランチ・レッグレイズ）は下腹に効いている感じが出やすい、という程度に考えてください。下腹のぽっこりは、多くの場合脂肪なので、食事で落とします。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                アブローラーがきつすぎます。
              </h3>
              <p>
                膝をついたまま、転がす距離を短くしてください。腰が反る手前で止めるのが正しい使い方です。それでもきついなら、レッグレイズで{ABS_STEP_GOAL}ができるまで戻って構いません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 割れて見えるかは<span className="font-bold">体脂肪率</span>で決まる。腹筋の種目で作るのは<span className="font-bold">厚み</span>
                </li>
                <li>
                  ▸ 回数を増やすより、<span className="font-bold">{ABS_STEP_GOAL}が楽になったら1段重い種目へ</span>
                </li>
                <li>
                  ▸ 5段階：{absSteps.map((s) => s.name).join(" → ")}
                </li>
                <li>
                  ▸ 腰が反る・痛むなら、幅を小さくするか1つ前の段階に戻る
                </li>
                <li>
                  ▸ 筋トレの日の最後に1種目を3セット。毎日やる必要はない
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/abs-training"
          title="腹筋を割る筋トレメニュー｜種目の順番と回数、クランチからハンギングレッグレイズまで5段階"
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
