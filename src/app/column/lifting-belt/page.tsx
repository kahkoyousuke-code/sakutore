import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  BELT_START_RATIO,
  MEN_WEIGHTS,
  deadliftRows,
  estimate1RM,
  formatRatio,
  levelForRatio,
  squatRows,
  targetWeight,
  womenDeadliftRows,
  womenSquatRows,
} from "@/lib/strengthStandards";

// description は seo.config.mjs が文字列リテラルとして読むので、ここだけは
// 数字を直書きしている。BELT_START_RATIO を変えたら合わせて見直すこと。
export const metadata = pageMetadata({
  title: "トレーニングベルトはいつから必要？何kgから使うかを体重別に - サクトレ",
  description:
    "ベルトはスクワット・デッドリフトで体重の1.5倍を超えたあたりから検討すれば十分です。体重70kgなら105kg。それより軽いうちは要りません。体重別の目安表と、ベンチプレスでは何を先にそろえるか、ナイロンと革の選び方、締める位置と強さまでまとめました。",
  path: "/column/lifting-belt",
});

// 筆者の実数字（他記事と揃えてある）。160kg・120kgは体重80kg台の頃の記録で、
// 正確な体重は残っていないので85kgとして計算する。
const AUTHOR = { squat: 120, deadlift: 160, bodyWeight: 85 };

// 種目ごとに「何で止まるか」と「先にそろえる道具」。数字は使わず、止まり方で分ける。
const BY_LIFT = [
  {
    lift: "スクワット",
    limit: "腰・体幹がきつくなりやすい",
    gear: "ベルト",
  },
  {
    lift: "デッドリフト",
    limit: "握力が先に尽きる → 次に腰",
    gear: "パワーグリップ → ベルト",
  },
  {
    lift: "ベンチプレス",
    limit: "手首が反って痛む",
    gear: "リストラップ（ベルトは後回し）",
  },
  {
    lift: "マシン・ダンベル",
    limit: "体幹への負担が小さい",
    gear: "基本的に要らない",
  },
];

export default function LiftingBeltPage() {
  const ratio = formatRatio(BELT_START_RATIO);
  const squatLevel = levelForRatio(squatRows, BELT_START_RATIO);
  const deadLevel = levelForRatio(deadliftRows, BELT_START_RATIO);
  const womenSquatLevel = levelForRatio(womenSquatRows, BELT_START_RATIO);
  const womenDeadLevel = levelForRatio(womenDeadliftRows, BELT_START_RATIO);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            トレーニングベルトはいつから必要？何kgから使うかを体重別に
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                結論から書きます。トレーニングベルト（リフティングベルト・パワーベルト）は、<span className="font-bold">スクワットとデッドリフトで体重×{ratio}を超えたあたりから</span>検討すれば十分です。体重70kgの人なら{targetWeight(70, BELT_START_RATIO)}kg。それより軽い重量のうちは、急いで買う必要はありません。
              </p>
              <p className="mt-2">
                「ジムで周りが巻いているから」「腰が心配だから」で最初から買う人は多いのですが、軽い重量のうちは<span className="font-bold">ベルトなしで腹圧を作る練習をしておく</span>のがおすすめです。この記事では、いつから要るのか、どの種目で要るのか、何を選んでどう締めるかを順に書きます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重別・ベルトを検討し始める重量
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        検討し始める重量（×{ratio}）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_WEIGHTS.map((bw) => (
                      <tr key={bw}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {bw}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          {targetWeight(bw, BELT_START_RATIO)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ スクワット・デッドリフトとも、1回だけ挙がる重量（1RM）で見た目安です。10回できる重量しか分からない場合は
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                で換算してください。たとえば90kgを5回なら、1RMは約{estimate1RM(90, 5)}kg。体重70kgならちょうど検討ラインです。
              </p>
              <p className="mt-3">
                同じ体重×{ratio}でも、種目によって位置づけは違います。スクワットでは<span className="font-bold">{squatLevel}</span>、デッドリフトでは<span className="font-bold">{deadLevel}</span>の目安にあたります。デッドリフトのほうが早い段階でこの重量に届くので、<span className="font-bold">ベルトが必要になるのも、たいていデッドリフトが先</span>です。自分が今どの位置にいるかは
                <Link href="/column/squat-weight-level" className="text-orange-600 font-bold underline">
                  スクワット◯kgはすごい？
                </Link>
                と
                <Link href="/column/deadlift-weight-level" className="text-orange-600 font-bold underline">
                  デッドリフト◯kgはすごい？
                </Link>
                の判定表で調べられます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                そもそもベルトは何をする道具か
              </h2>
              <p>
                ベルトは「腰を外から固めて守る」道具だと思われがちですが、実際の役割は少し違います。<span className="font-bold">お腹に空気を入れて内側から張る力（腹圧）を、押し返す壁</span>です。ベルトに向かってお腹を膨らませることで、体幹が固まりやすくなります。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">巻くだけでは効果を引き出せません。</span>息を吸ってお腹をベルトに押しつける動きが身についていないと、せっかくの壁を使い切れません。軽い重量のうちにベルトなしで練習してほしいのは、このためです。
              </p>
              <p className="mt-2">
                なお体重×{ratio}は、<span className="font-bold">研究で決まった境目ではありません</span>。ベルトを考え始める時期としてよく挙がる、経験則の目安です。扱う重量が体重を大きく超えてくるこのあたりから、腹圧を保てるかどうかが挙がる重量を左右しやすくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                種目ごとに、先にそろえる道具は違う
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        重くなると先に止まるところ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        先にそろえる道具
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BY_LIFT.map((row) => (
                      <tr key={row.lift}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.lift}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.limit}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.gear}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                ポイントは<span className="font-bold">ベンチプレスにベルトはほぼ要らない</span>ことです。ベンチで道具が助けになるのは腰ではなく手首で、重くなると手首が反りやすくなります。そこを支えるのがリストラップです。ベンチの重量の目安は
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均は何kg？
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                デッドリフトは、腰より先に<span className="font-bold">握力</span>で止まる人が多い種目です。その場合はベルトより先にパワーグリップをそろえてください。ストラップやパワーグリップを使った記録で判定してよいかは
                <Link href="/column/deadlift-weight-level" className="text-orange-600 font-bold underline">
                  デッドリフト◯kgはすごい？
                </Link>
                に書きました。
              </p>
              <GearPick
                placement="lifting-belt-grip-wrap"
                lead="デッドリフトで握力が先に尽きるならパワーグリップ、ベンチで手首が反るならリストラップから。"
                productIds={["alloutPowerGrip", "alloutWristWrap"]}
              />
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ナイロンか、革か
              </h2>
              <p>
                1本目は<span className="font-bold">ナイロン（マジックテープ）</span>で十分です。軽くて着脱が速く、締める強さも細かく変えられます。セットのたびに付け外しするので、この手軽さは思った以上に大事です。
              </p>
              <p className="mt-2">
                <span className="font-bold">革</span>は、ナイロンで締めてもお腹が押し負ける感覚が出てきたら考えれば間に合います。硬いぶん押し返す力が強い代わりに、慣れるまで締め具合の調整がしにくい道具です。硬くて締め具合を細かく変えにくいので、腹圧の入れ方を覚える1本目としては扱いにくいことがあります。
              </p>
              <GearPick
                placement="lifting-belt-nylon-leather"
                lead={`体重×${ratio}を超えたら、まずナイロンの1本から。押し負けるようになったら革に替える、の順番で足ります。`}
                productIds={["alloutNylonBelt", "alloutLeatherBelt"]}
              />
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                締める位置と強さ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">位置</span>：へその高さを中心に、骨盤と肋骨の間に収める。下すぎるとしゃがんだときに太ももに当たる
                </li>
                <li>
                  ▸ <span className="font-bold">強さ</span>：息を吸ってお腹を張ったときに、ベルトを内側から押し返せる程度。苦しくて息が吸えないのは締めすぎ
                </li>
                <li>
                  ▸ <span className="font-bold">使う場面</span>：その日のメインの重いセット（ウォームアップではなく、限界に近い回数まで追い込むセット）だけ。アップや軽いセットでは外して、ベルトなしで腹圧を作る練習を続ける
                </li>
                <li>
                  ▸ <span className="font-bold">外すタイミング</span>：セットが終わったらすぐ緩める。締めっぱなしにする道具ではない
                </li>
                <li>
                  ▸ <span className="font-bold">注意</span>：ベルトを締めて息をこらえると、巻かないときより血圧が上がりやすくなります。血圧が高い人、心臓や血管の持病がある人は、使う前に医師に相談してください
                </li>
              </ul>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私のベルトはALLOUTです（パワーグリップとリストラップもALLOUTでそろえています）。自己ベストはスクワット{AUTHOR.squat}kg・デッドリフト{AUTHOR.deadlift}kgで、どちらも体重80kg台の頃の記録です。正確な体重は残っていないので、ここでは{AUTHOR.bodyWeight}kgとして計算すると、検討ラインは{targetWeight(AUTHOR.bodyWeight, BELT_START_RATIO)}kg。
                <br />
                <br />
                <span className="font-bold">デッドリフトは検討ラインを大きく超えていて、スクワットはその手前</span>という計算になります。この記事で「ベルトが必要になるのはたいていデッドリフトが先」と書いたのは、まさにこの形です。自分の数字でも一度計算してみてください。両方の種目で同じタイミングで必要になるとは限りません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベルトを使うと体幹が弱くなりませんか？
              </h3>
              <p>
                研究で確かめられた話ではありませんが、重いセットだけで使い、アップや軽いセットではベルトなしで腹圧を作る練習を続けていれば、心配は小さいと考えられます。避けたいのは<span className="font-bold">全セットで巻きっぱなしにすること</span>です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベルトを巻けば腰痛は防げますか？
              </h3>
              <p>
                ベルトは腹圧を作りやすくする道具で、<span className="font-bold">腰痛を防ぐ保証にはなりません。</span>背中が丸まるフォームのままなら、ベルトがあっても腰に負担がかかります。ベルトを巻くと重さに耐えられる気がして、フォームが崩れる重量まで上げてしまいやすい点にも気をつけてください。腰に痛みやしびれが出ているときは、ベルトで押し切らずに休んでください。しびれが脚に広がるときや、痛みが数日たっても治まらないときは、整形外科で診てもらってください。筋肉痛との見分け方は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性も同じ目安でいいですか？
              </h3>
              <p>
                この目安は男女で分けていません。ただ女性は、同じ体重×{ratio}でもスクワットでは<span className="font-bold">{womenSquatLevel}</span>、デッドリフトでは<span className="font-bold">{womenDeadLevel}</span>の位置にあたり、届くまでにかなり時間がかかります。体重比に届くのを待つより、<span className="font-bold">自分にとって重いセットで、フォームは保てているのにお腹の張りが抜けて腰が先に疲れる</span>と感じたら検討を始めてください。これは男性も同じで、表の重量はあくまで目安です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベルトを使った記録と、使わない記録は比べていいですか？
              </h3>
              <p>
                ベルトありとなしの記録は比べないでください。<span className="font-bold">使い始めた日から、記録に「ベルトあり」と書き分けておく</span>のが基本です。ありはあり同士、なしはなし同士で比べれば、伸びたのか道具が変わっただけなのかを取り違えません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ ベルトは<span className="font-bold">スクワット・デッドリフトで体重×{ratio}を超えたあたり</span>から検討する
                </li>
                <li>
                  ▸ 役割は<span className="font-bold">腹圧を押し返す壁</span>。巻くだけでは効果を引き出せない
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチはリストラップ、デッドリフトはパワーグリップ</span>が先になることが多い
                </li>
                <li>
                  ▸ 1本目は<span className="font-bold">ナイロン</span>。押し負けるようになったら革
                </li>
                <li>
                  ▸ 使うのは<span className="font-bold">重いセットだけ</span>。腰痛を防ぐ保証にはならない
                </li>
              </ul>
              <p className="mt-2">
                ベルト以外の道具も含めた一覧は
                <Link href="/gear" className="text-orange-600 font-bold underline">
                  おすすめトレーニングギア
                </Link>
                に、BIG3全体での自分の位置は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                にまとめています。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/lifting-belt"
          title="トレーニングベルトはいつから必要？何kgから使うかを体重別に"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">ベルト・パワーグリップ・リストラップを見る →</p>
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
