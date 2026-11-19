import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import SessionFlowDiagram from "@/components/diagrams/SessionFlowDiagram";
import { BELT_START_RATIO, formatRatio } from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";

export const metadata = pageMetadata({
  title: "筋トレで腰が痛いときは休む？続けていいかの判断と、デッドリフト・スクワットで腰を痛めない直し方 - サクトレ",
  description:
    "筋トレ中や翌日に腰が痛いとき、まず確かめたい受診のサインと、痛む種目だけを外して続けるときの組み替え表、再開のしかたをまとめました。デッドリフトやスクワットで腰を痛めやすい原因（背中が丸まる重さ・疲れた状態・腹圧）と直し方も紹介します。",
  path: "/column/back-pain",
});

// 判断の順番。図は SessionFlowDiagram（縦に並ぶ手順の図）を使い回す。右端は「何をするか」。
const STEPS = [
  { step: "1", name: "受診のサインがないか", time: "病院" },
  { step: "2", name: "痛む種目だけ外す", time: "組み替え" },
  { step: "3", name: "軽い重さで戻す", time: "再開" },
  { step: "4", name: "痛めた原因を直す", time: "フォーム" },
];

// 受診のサイン。自治体・病院の腰痛の案内にある項目のうち、筋トレをする人が見落としやすいものに絞った。
const URGENT_SIGNS = [
  "尿や便が出にくい、または漏れる",
  "脚に力が入らない、急に脚がしびれてきた",
];
const SOON_SIGNS = [
  "じっとしていても痛む、夜に痛みで目が覚める",
  "しびれや痛みが脚のほうへ広がる",
  "熱がある、吐き気がある",
  "日ごとに痛みが強くなる",
];

// 腰が痛い日の組み替え。腰で重さを支える種目を、腰に重さが乗りにくい種目に替える。
const SWAPS = [
  {
    avoid: "デッドリフト・ルーマニアンデッドリフト",
    why: "前かがみで重さを持つ",
    swap: "ラットプルダウン（背中）、レッグカール（太もも裏）",
  },
  {
    avoid: "ベントオーバーロウ",
    why: "前かがみの姿勢を保ったまま引く",
    swap: "ワンハンドロウ（ベンチに手をついて体を支える）",
  },
  {
    avoid: "バーベルスクワット",
    why: "背負ったバーの重さが腰にかかる",
    swap: "レッグエクステンション、レッグカール",
  },
  {
    avoid: "立って行うバーベルのショルダープレス",
    why: "立ったまま頭の上に重さを支える",
    swap: "背もたれのあるベンチに座って行うダンベルショルダープレス",
  },
];

export default function BackPainPage() {
  const deadlift = findExerciseDetail("デッドリフト");
  const squat = findExerciseDetail("スクワット");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            筋トレで腰が痛いときは休む？続けていいかの判断と、デッドリフト・スクワットで腰を痛めない直し方
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                デッドリフトやスクワットのあと、腰が痛くなった。次のトレーニングを休むべきか、続けていいのか迷う人は多いと思います。
              </p>
              <p className="mt-2">
                先に断っておくと、この記事は病院の代わりにはなりません。痛みの原因は、体を見てもらわないと分からないからです。ここでは、<span className="font-bold">病院へ行くべきかの目安</span>と、行くほどではないときに<span className="font-bold">筋トレをどう組み替えるか</span>、そして<span className="font-bold">腰を痛めた原因の直し方</span>を、この順番で説明します。
              </p>
              <DiagramFigure
                title="腰が痛いときに確かめる順番"
                label={`腰が痛いときに確かめる順番。${STEPS.map((s) => `${s.step}. ${s.name}（${s.time}）`).join("、")}。`}
                caption="右端は、そこで何をするかです。1に当てはまったら、2から先には進まず病院へ行ってください。"
              >
                <SessionFlowDiagram steps={STEPS} highlightStep="1" />
              </DiagramFigure>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まず確かめる：病院へ行くべきサイン
              </h2>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-bold text-red-600 mb-2">すぐに受診する（夜や休日でも）</p>
                <ul className="space-y-1">
                  {URGENT_SIGNS.map((s) => (
                    <li key={s}>▸ {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mt-3">
                <p className="font-bold text-orange-600 mb-2">早めに整形外科へ行く</p>
                <ul className="space-y-1">
                  {SOON_SIGNS.map((s) => (
                    <li key={s}>▸ {s}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-3">
                どれかに当てはまるときは、筋トレのことはいったん忘れて受診してください。動けないほど痛い日も、筋トレはしません。
              </p>
              <p className="mt-2">
                どれにも当てはまらず、「動くと腰が張る」「前かがみになると痛む」くらいなら、次の組み替えに進みます。それでも<span className="font-bold">痛みが数日たっても治まらないとき</span>は、整形外科で診てもらってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                受診のサインがないなら：痛む種目だけ外す
              </h2>
              <p>
                腰が痛いからといって、トレーニングを全部休む必要はありません。考え方は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                と同じで、<span className="font-bold">痛む動きはやらない、痛まない動きはやっていい</span>です。腰痛の診療でも、寝て安静にし続けるより、動ける範囲で普段どおりに過ごすことが勧められています。
              </p>
              <p className="mt-2">
                腰が痛い日に外したいのは、<span className="font-bold">腰で重さを支える種目</span>です。代わりに、腰に重さが乗りにくい種目で同じ部位を鍛えます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">外す種目</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">腰にかかる理由</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">代わりの種目</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SWAPS.map((r) => (
                      <tr key={r.avoid}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">{r.avoid}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">{r.why}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">{r.swap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-gray-500">
                <li>※ 代わりの種目でも腰が痛むなら、その種目もやめてください。表は「これなら必ず痛まない」という意味ではありません。</li>
                <li>
                  ※ 腹筋の種目も、レッグレイズやアブローラーのように腰が反りやすいものは控えます（
                  <Link href="/column/abs-training" className="text-orange-600 font-bold underline">
                    腹筋を割る筋トレメニュー
                  </Link>
                  ）。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                痛みが引いたら：軽い重さで戻す
              </h2>
              <p>
                痛みが引いても、いきなり前と同じ重さに戻さないでください。まず空のバーや軽いダンベルで、痛みが出ずにいつものフォームで動けるかを確かめます。痛みが出なければ、回ごとに少しずつ重さを戻していきます。
              </p>
              <p className="mt-2">
                戻している途中で痛みがぶり返したら、その日はそこで止め、ひとつ前の重さに戻ります。前の重さまで戻すのを急ぐ理由はありません。重さの上げ方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量はどう決める？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                デッドリフト・スクワットで腰を痛めやすい3つの原因と直し方
              </h2>
              <p>
                戻すときに一緒に見直したいのが、腰を痛めた原因です。BIG3で腰を痛めやすいのは、たいてい次の3つです。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                1. 背中が丸まる重さを扱っている
              </h3>
              <p>
                デッドリフトやスクワットは、重さが限界に近づくほど背中が丸まりやすくなります。<span className="font-bold">背中が丸まる重さは、今の自分には重すぎる重さ</span>です。丸まらない重さまで落としてください。
                {deadlift && <>デッドリフトのポイントは「{deadlift.formTips}」です。</>}
                {squat && <>スクワットは「{squat.formTips}」です。</>}
              </p>
              <p className="mt-2">
                自分では丸まっているか分からないので、横からスマホで動画を撮って確かめるのが確実です。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                2. 疲れた状態で重い種目をやっている
              </h3>
              <p>
                腹筋の種目を先にやったり、ほかの種目で疲れきってからデッドリフトをしたりすると、体幹で体を支えきれず、背中が丸まりやすくなります。重い種目はその日の最初に回してください。並べ方は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                にあります。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                3. お腹に力を入れずに挙げている
              </h3>
              <p>
                重いものを持つときは、息を吸ってお腹を張り、体幹を固めてから動きます（腹圧）。重さが体重の{formatRatio(BELT_START_RATIO)}倍を超えてきたら、腹圧を作りやすくするベルトを検討してもいい段階です。ただし、ベルトは腰痛を防ぐ保証にはなりません。背中が丸まるフォームのままなら、ベルトを巻いても腰は守れません。詳しくは
                <Link href="/column/lifting-belt" className="text-orange-600 font-bold underline">
                  トレーニングベルトはいつから必要？
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                フィジークはデッドリフトの重さを競う競技ではありません。
                <Link href="/column/deadlift-grip" className="text-orange-600 font-bold underline">
                  握力の記事
                </Link>
                にも書いたとおり、私にとって大事なのは、扱える重さの数字より、背中に重さを届けることでした。
                <br />
                <br />
                大会に出るのでなければ、多くの人も同じはずです。背中が丸まる重さで記録を1回伸ばすより、丸まらない重さで続けるほうが、体は確実に変わっていきます。腰が痛いときに無理をしないのも、続けるための判断です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛なのか、腰を痛めたのか分かりません。
              </h3>
              <p>
                腰の筋肉がじんわり張る、押すと痛いくらいなら筋肉痛のことが多く、数日で引いていきます。<span className="font-bold">腰の一点が刺すように痛む、しびれる</span>場合は筋肉痛ではないので、その日は中止してください。見分け方の表は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腰痛持ちは、筋トレをしないほうがいいですか？
              </h3>
              <p>
                長く続く腰痛には、運動療法が勧められています。ただ、どの種目をどれくらいやるかは原因によって変わるので、続く腰痛がある人は、医師や理学療法士に相談しながら始めてください。背中の筋肉と腰の関係は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                にまとめています。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                痛み止めを飲めば、いつもどおりやっていいですか？
              </h3>
              <p>
                おすすめしません。痛みが消えても、腰の状態が良くなったわけではありません。痛みは「その動きをやめる」ための判断材料なので、消した状態で重いものを持つと、かえって痛めやすくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ まず<span className="font-bold">受診のサイン</span>を確かめる。尿や便の異常、脚に力が入らないときはすぐ受診
                </li>
                <li>
                  ▸ サインがなければ<span className="font-bold">痛む種目だけ外す</span>。腰で重さを支える種目を、腰に重さが乗りにくい種目に替える
                </li>
                <li>▸ 痛みが数日たっても治まらなければ整形外科へ</li>
                <li>▸ 痛みが引いたら、軽い重さから少しずつ戻す</li>
                <li>
                  ▸ 原因は<span className="font-bold">背中が丸まる重さ・疲れた状態・腹圧</span>の3つを疑う
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/back-pain"
          title="筋トレで腰が痛いときは休む？続けていいかの判断と、デッドリフト・スクワットで腰を痛めない直し方"
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
