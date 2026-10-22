import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { SET_SCHEMES } from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "パワーラックの使い方｜セーフティバーの高さの決め方とジムのマナー - サクトレ",
  description:
    "セーフティバーは「いちばん深い位置のバーより少し下」に合わせます。スクワットとベンチプレスそれぞれの高さの決め方、バーを掛けるフックの高さ、潰れたときの逃げ方、カラーの付け方、ジムで気をつけたいマナーまでまとめました。",
  path: "/column/power-rack",
});

// パワーラックの部品。名前はジムによって呼び方が違うので、別名も並べる。
const PARTS = [
  {
    name: "フック（Jフック）",
    role: "セットの前後にバーを掛けておく",
    point: "バーを外すとき・戻すときに、背伸びも深い前かがみもしない高さ",
  },
  {
    name: "セーフティバー",
    role: "挙げられなくなったバーを受け止める",
    point: "いつもの動きでは当たらず、潰れたときに受け止められる高さ",
  },
  {
    name: "カラー（クリップ）",
    role: "プレートがバーの端へずれないように留める",
    point: "スクワット・デッドリフトでは毎回付ける",
  },
];

// 高さの決め方。数字（cm）は体格で変わるので置かず、空のバーで確かめる手順で書く。
const HEIGHTS = [
  {
    lift: "スクワット",
    hook: "胸の真ん中〜脇の下あたり。膝を少し曲げて担ぎ、膝を伸ばすとバーが外れる高さ",
    safety: "いちばん深くしゃがんだときのバーより、穴1つ分ほど下",
  },
  {
    lift: "ベンチプレス（ラック内で行う場合）",
    hook: "寝た状態で、肘がほぼ伸びたまま外せる高さ",
    safety: "胸を張ってバーを胸に付けた位置より少し下。胸の張りをゆるめると、バーがセーフティバーに乗る高さ",
  },
];

export default function PowerRackPage() {
  const fiveByFive = SET_SCHEMES[0];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            パワーラックの使い方｜セーフティバーの高さの決め方とジムのマナー
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                パワーラックは、スクワットやベンチプレスを<span className="font-bold">1人でも限界近くまで挑戦できるようにする道具</span>です。ただし、それはセーフティバーを正しい高さに合わせたときだけです。高さが合っていないセーフティバーは、無いのと同じです。
              </p>
              <p className="mt-2">
                この記事では、パワーラックの部品の役割、スクワットとベンチプレスそれぞれの高さの決め方、潰れたときの逃げ方、ジムで気をつけたいマナーの順に説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                パワーラックの部品と役割
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        部品
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        役割
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        合わせ方
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PARTS.map((row) => (
                      <tr key={row.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.role}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.point}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                柱に等間隔の穴が開いていて、フックとセーフティバーはその穴に差し込んで高さを変えます。ジムによっては、セーフティバーの代わりにベルト（ストラップ）で受け止める型や、左右に張り出した腕で受け止める型もあります。どれも役割は同じです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                フックとセーフティバーの高さの決め方
              </h2>
              <div className="space-y-3 mt-3">
                {HEIGHTS.map((row) => (
                  <div key={row.lift} className="border border-gray-100 rounded-xl p-3">
                    <p className="font-bold text-gray-800 text-xs mb-2">{row.lift}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-700">フック：</span>
                      {row.hook}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      <span className="font-bold text-gray-700">セーフティバー：</span>
                      {row.safety}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                高さは体格としゃがむ深さで変わるので、<span className="font-bold">数字ではなく、空のバー（プレートを付けないバーだけ）で確かめて</span>決めます。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">スクワット</span>：空のバーで、いつもの深さまでしゃがむ。バーがセーフティバーに当たるなら1つ下げ、すき間が大きすぎるなら1つ上げる。いつもの深さで当たらない、いちばん高い穴が正解
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチプレス</span>：空のバーを胸に付け、胸の張りをゆるめて息を吐く。そのときバーがセーフティバーに乗り、体の上から重さが外れる高さが正解
                </li>
              </ul>
              <p className="mt-3">
                合わせた穴の番号は、ほかの人が使った後でも同じ高さにすぐ戻せるように<span className="font-bold">メモしておく</span>と楽です。左右で穴がずれていないかも、毎回確かめてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                潰れたときの逃げ方
              </h2>
              <p>
                セーフティバーは、<span className="font-bold">潰れたときにバーを置く場所</span>です。挙げられないと思ったら、無理に粘らずに置いてください。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">スクワット</span>：バーを担いだまま、いつもより少し深くしゃがんでセーフティバーに乗せる。バーが止まったら、肩をバーの下から抜いて前に出る
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチプレス</span>：バーを胸まで下ろし、胸の張りをゆるめてセーフティバーに乗せる。バーが止まったら、頭のほうへ体をずらして抜け出す
                </li>
              </ul>
              <p className="mt-3">
                練習として、<span className="font-bold">空のバーで一度わざと潰れてみる</span>のがおすすめです。本番で初めて逃げ方を試すより、どこにバーが乗るかを体で覚えておくほうが落ち着いて動けます。
              </p>
              <p className="mt-2">
                セーフティバーも補助者もいない台で、限界近くのベンチプレスやスクワットをするのはやめてください。そもそも1RM（1回だけ挙がる重さ）をわざわざ測る必要はなく、普段のセットは余裕を残した重さで組めます。決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                プレートとカラーの付け方
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">左右交互に付ける</span>：片側だけ先に重くすると、フックの上でバーが傾くことがある
                </li>
                <li>
                  ▸ <span className="font-bold">重いプレートを内側に</span>：大きいプレートを先に付け、小さいプレートを外側に
                </li>
                <li>
                  ▸ <span className="font-bold">カラーを付ける</span>：スクワットやデッドリフトは、動いているうちにプレートが外側へずれる。左右の重さが変わると危ないので毎回留める
                </li>
                <li>
                  ▸ <span className="font-bold">外すときも左右交互に</span>：付けるときと同じ理由で、片側だけ先に外さない
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ジムで気をつけたいマナー
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">使い終わったらプレートを片付ける</span>：バーに付けたまま離れると、次の人が外すところから始めることになる
                </li>
                <li>
                  ▸ <span className="font-bold">ラックでしかできない種目に使う</span>：ラックの数は少ないことが多い。カールのようにラックがなくてもできる種目は、混んでいる時間は別の場所でやる
                </li>
                <li>
                  ▸ <span className="font-bold">混んでいたら交代で使う</span>：{fiveByFive.label}の休憩は{fiveByFive.rest}と長いので、待っている人がいたら、休憩の間に交代でセットを入れてもらう
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチは使ったら拭く</span>：寝る種目は汗が残りやすい
                </li>
                <li>
                  ▸ <span className="font-bold">ジムのルールを先に確かめる</span>：チョークの使用、利用時間の上限、デッドリフトでバーを床に落としてよいかは、ジムによって違う
                </li>
              </ul>
              <p className="mt-3">
                休憩の長さは、マシン中心のときと重いバーベル種目のときで違います。マシン中心の回り方は
                <Link href="/column/gym-beginner" className="text-orange-600 font-bold underline">
                  ジム初心者が最初にやるべきマシン5選
                </Link>
                にまとめています。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私のスクワットは、ベンチプレスと同じ120kgで止まっています。
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワットの平均は何kg？
                </Link>
                にも書いたとおり、ベンチプレスは人に補助についてもらえば限界に触れられますが、スクワットは<span className="font-bold">潰れたときの逃げ場を自分で用意しないといけない</span>種目です。セーフティバーの高さを自分で合わせておかないと、限界には触れられません。私のスクワットが止まっている理由も、正直に言えばそこだと思っています。
                <br />
                <br />逃げ場が無いと、人は限界の手前で止めてしまいます。高さを合わせる数十秒は、重量を伸ばすための準備の一部だと考えてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                セーフティバーにバーを当てると、ラックが傷みませんか？
              </h3>
              <p>
                潰れたときにバーを置くための部品なので、そこに置くのは正しい使い方です。ただし、毎回のセットでバーをセーフティバーに打ち付けるような使い方は、音も大きく周りの迷惑になります。いつもの動きで当たるなら、高さが高すぎます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ジムにパワーラックがありません。
              </h3>
              <p>
                ベンチプレス台にセーフティが付いていないなら、限界近くのセットは補助者がいるときだけにしてください。1人のときは、決めた回数より余裕を残せる重さで止めます。スクワットは、セーフティの無い台で限界を試さないことが大前提です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                デッドリフトもパワーラックの中でやるべきですか？
              </h3>
              <p>
                デッドリフトは床から引く種目なので、ラックの中でやる必要はありません。混んでいる時間にラックを使うと、スクワットやベンチプレスをしたい人が待つことになります。デッドリフト用の台（プラットフォーム）があるなら、そちらを使ってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ セーフティバーは<span className="font-bold">いつもの動きでは当たらず、潰れたときに受け止める高さ</span>。空のバーで確かめて決める
                </li>
                <li>
                  ▸ スクワットは<span className="font-bold">いちばん深い位置のバーより少し下</span>、ベンチプレスは<span className="font-bold">胸の張りをゆるめるとバーが乗る高さ</span>
                </li>
                <li>
                  ▸ 潰れたら粘らずにセーフティバーに置く。空のバーで一度練習しておく
                </li>
                <li>
                  ▸ プレートは左右交互に付け外しし、スクワット・デッドリフトはカラーで留める
                </li>
                <li>
                  ▸ 使い終わったら片付ける。混んでいたら交代で使う
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/power-rack"
          title="パワーラックの使い方｜セーフティバーの高さの決め方とジムのマナー"
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
