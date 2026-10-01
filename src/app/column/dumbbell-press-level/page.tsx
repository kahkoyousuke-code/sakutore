import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  levelForRatio,
  type Level,
} from "@/lib/strengthStandards";
import {
  benchFromDumbbellPress,
  dumbbellPressFromBench,
  dumbbellPressRows,
  womenDumbbellPressRows,
  formatDumbbell,
} from "@/lib/dumbbellStandards";

export const metadata = pageMetadata({
  title: "ダンベルプレス◯kgはどのレベル？体重別の早見表（10〜50kg） - サクトレ",
  description:
    "片手20kgがすごいかは体重で変わります。体重50kgなら中級者、70kgなら初心者、90kgでは未経験の範囲です。片手10〜50kg（10回基準）が体重別に何レベルかの逆引き表と、ベンチプレス何kg相当かの換算つき。片手30kgはベンチ89kg相当です。",
  path: "/column/dumbbell-press-level",
});

// 市販のダンベルで作れる刻み。表の行になる。
const PER_HAND = [10, 12.5, 15, 17.5, 20, 25, 30, 35, 40, 50];

// 文章で答える重量（検索で多い2つ）。
const FOCUS = [20, 30];

// 筆者の実数字（他記事と揃えてある）。
const AUTHOR_BENCH = 120;

const levelClass = (level: Level | null) => {
  if (level === null) return "text-gray-400";
  if (level === "未経験" || level === "初心者") return "text-gray-600";
  return "font-bold text-orange-600";
};

export default function DumbbellPressLevelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            ダンベルプレス◯kgはどのレベル？体重別の早見表（10〜50kg）
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                ダンベルプレスは「片手◯kg」で語られるので、ベンチプレスと違って<span className="font-bold">自分の位置が分かりにくい</span>種目です。片手20kgが立派なのか物足りないのか、判断する材料がありません。
              </p>
              <p className="mt-2">
                答えはベンチプレスと同じで、<span className="font-bold">体重の何倍を扱えているか</span>で決まります。先に表を出します。<span className="font-bold">行が片手の重さ、列が体重</span>です。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 条件をそろえます。<span className="font-bold">片手に持つ1個の重さ</span>で、<span className="font-bold">フォームを崩さず10回できる重量</span>です（ベンチプレスの表は1回だけ挙がる重量なので、基準が違います）。ベンチ台に寝て行うフラットのダンベルプレスを想定しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ダンベルプレスの重量×体重別レベル早見表（男性）
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        片手
                      </th>
                      {MEN_WEIGHTS.map((bw) => (
                        <th
                          key={bw}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {bw}kg
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PER_HAND.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {formatDumbbell(weight)}
                        </td>
                        {MEN_WEIGHTS.map((bw) => {
                          const level = levelForRatio(dumbbellPressRows, weight / bw);
                          return (
                            <td
                              key={bw}
                              className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${levelClass(level)}`}
                            >
                              {level ?? "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 「—」は未経験の目安に届いていない位置です。始めたばかりなら当然そこからです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よく検索される2つの重量
              </h2>
              {FOCUS.map((weight) => (
                <div key={weight} className="mt-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    片手{formatDumbbell(weight)}（10回）は？
                  </h3>
                  <ul className="space-y-1">
                    {[60, 70, 80, 90].map((bw) => {
                      const level = levelForRatio(dumbbellPressRows, weight / bw);
                      return (
                        <li key={bw}>
                          ▸ 体重{bw}kg → <span className="font-bold">{level ?? "未経験の手前"}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-2 text-xs text-gray-500">
                    ベンチプレスに直すと<span className="font-bold">1RMで約{benchFromDumbbellPress(weight)}kg相当</span>です。
                  </p>
                </div>
              ))}
              <p className="mt-3">
                ここで分かるのは、<span className="font-bold">ダンベルの数字は見た目より重い</span>ということです。片手30kgなら両手で60kg、それを10回挙げる力はベンチプレス
                {benchFromDumbbellPress(30)}kg相当になります。ジムで片手30kgを扱っている人が少ないのは、そういう理由です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ベンチプレスへの換算
              </h2>
              <p>
                片手の重さからベンチプレスの1RM相当を出した表です。ダンベルしかない環境の人が、<span className="font-bold">ジムのベンチプレスでどのくらい扱えるか</span>の見当をつけるのに使えます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        片手（10回）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        両手合計
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        ベンチ1RM相当
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[15, 20, 25, 30, 35, 40].map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {formatDumbbell(weight)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {formatDumbbell(weight * 2)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          約{benchFromDumbbellPress(weight)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 両手合計がバーベルの約9割の重さに相当するとみて、そこから10回ぶんを1RMに換算しています（
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                と同じEpley式）。左右を別々に支えるぶんダンベルは不利なので、この換算は目安です。
              </p>
              <p className="mt-3">
                ベンチプレス側の体重別の目安は
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均は何kg？
                </Link>
                にあります。BIG3全体の位置づけは
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性の場合
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        片手
                      </th>
                      {WOMEN_WEIGHTS.map((bw) => (
                        <th
                          key={bw}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {bw}kg
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[5, 7.5, 10, 12.5, 15, 20].map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {formatDumbbell(weight)}
                        </td>
                        {WOMEN_WEIGHTS.map((bw) => {
                          const level = levelForRatio(womenDumbbellPressRows, weight / bw);
                          return (
                            <td
                              key={bw}
                              className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${levelClass(level)}`}
                            >
                              {level ?? "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                女性の目安は<span className="font-bold">上級者までしか置いていません</span>。信頼できる基準を未経験やエリートまで広げられないためで、表の空欄はそういう意味です。目安として、<span className="font-bold">片手10kgを10回できれば中級者の水準</span>です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                この数字が止まったときにやること
              </h2>
              <p>
                ダンベルプレスで伸びが止まる原因は、たいてい筋力ではありません。<span className="font-bold">手持ちのダンベルの上限</span>です。
              </p>
              <p className="mt-2">
                上の表を見ると、体重70kgの男性が中級者の位置に来るには片手20kg台が必要になります。固定式の軽いセットを買った人は、ここで必ず詰まります。何kgまで用意すべきかは
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                に種目別でまとめました。
              </p>
              <GearPick
                placement="dumbbell-press-level-adjustable"
                lead="上の表の重量まで伸ばせる可変式の候補です。男性で中級者まで使うなら32kgクラス、女性や始めたばかりなら20kgクラスで足ります。"
                productIds={["flexbell32", "flexbell20"]}
              />
              <p className="mt-2">
                重量を上げられない間は、<span className="font-bold">角度を変える</span>のが現実的です。インクライン（頭側を上げる）にすると同じ重さでも胸の上部にかかる負荷が上がります。自宅で胸を鍛える手段の一覧は
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ完全ガイド
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の見方
              </p>
              <p className="text-xs leading-relaxed">
                私のベンチプレスの自己ベストは{AUTHOR_BENCH}kgです。この記事の換算を逆に使うと、<span className="font-bold">ダンベルプレスなら片手
                {formatDumbbell(dumbbellPressFromBench(AUTHOR_BENCH))}前後を10回</span>できる計算になります。実際にジムのダンベルラックで手が届くのはそのあたりで、計算と体感は合っています。
                <br />
                <br />
                ただ、<span className="font-bold">ダンベルプレスとベンチプレスは別の種目</span>だと思って扱ったほうがいいです。ダンベルは左右が独立しているぶん可動域を広く取れますが、重い重量で潰れたときに逃げ場がありません。私は<span className="font-bold">重量を追うのはバーベル、胸を伸ばして効かせるのはダンベル</span>と役割を分けてきました。換算表は位置を知るための物差しで、同じ数字を狙うための目標ではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                10回ではなく1回の限界で見てもいいですか？
              </h3>
              <p>
                この表は<span className="font-bold">10回できる重量が基準</span>です。1回の限界で比べたい場合は
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                で10回ぶんに直してから当ててください。ダンベルプレスで1回の限界に挑戦するのは、潰れたときに危険なのでおすすめしません。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                インクラインの数字で見ていいですか？
              </h3>
              <p>
                だめです。<span className="font-bold">角度を付けるほど扱える重量は落ちます。</span>フラット（水平）の数字で当ててください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                床に寝て行うフロアプレスでもいいですか？
              </h3>
              <p>
                床だと肩が下がりきらないぶん可動域が狭くなり、<span className="font-bold">ベンチ台より重い重量が挙がります。</span>自宅でベンチ台がない場合はその前提で、表より1段低く見ておくと実態に近くなります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベンチプレスの数字から、扱えるダンベルの重さは分かりますか？
              </h3>
              <p>
                分かります。上の換算表を逆に読んでください。たとえばベンチ
                {benchFromDumbbellPress(25)}kgなら、ダンベルプレスは片手
                {formatDumbbell(25)}前後を10回が目安です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ ダンベルプレスも<span className="font-bold">体重比</span>で見る。片手20kgの意味は体重で変わる
                </li>
                <li>
                  ▸ 条件は<span className="font-bold">片手・フォームを崩さず10回・フラット</span>。角度や床では数字が変わる
                </li>
                <li>
                  ▸ 片手30kgは<span className="font-bold">ベンチ{benchFromDumbbellPress(30)}kg相当</span>。見た目より重い
                </li>
                <li>
                  ▸ 女性は<span className="font-bold">片手10kg×10回で中級者</span>の水準
                </li>
                <li>
                  ▸ 伸びが止まる原因は筋力より<span className="font-bold">手持ちのダンベルの上限</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/dumbbell-press-level"
          title="ダンベルプレス◯kgはどのレベル？体重別の早見表（10〜50kg）"
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
