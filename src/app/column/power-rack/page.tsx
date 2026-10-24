import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { SET_SCHEMES } from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "パワーラックの使い方｜セーフティバーの高さの決め方とマナー - サクトレ",
  description:
    "スクワットのセーフティバーは「いちばん深い位置のバーより少し下」、ベンチプレスは「胸の張りをゆるめるとバーが乗る高さ」に合わせます。それぞれの確かめ方、バーを掛けるフックの高さ、潰れたときの逃げ方、カラーの付け方、ジムで気をつけたいマナーまでまとめました。",
  path: "/column/power-rack",
});

// パワーラックの部品。名前はジムによって呼び方が違うので、別名も並べる。
const PARTS = [
  {
    name: "フック（Jフック）",
    role: "セットの前後にバーを掛けておく",
    point: "バーを外すとき・戻すときに、背伸びも、深くかがむこともせずに済む高さ",
  },
  {
    name: "セーフティバー（セーフティピン）",
    role: "挙げられなくなったバーを受け止める",
    point: "いつもの動きでは当たらず、潰れたときに受け止められる高さ",
  },
  {
    name: "カラー（クリップ）",
    role: "プレートがバーの端へずれないように留める",
    point: "バーベル種目では毎回付ける（セーフティバーに落としたときのずれも防げる）",
  },
];

// 高さの決め方。数字（cm）は体格で変わるので置かず、空のバーで確かめる手順で書く。
const HEIGHTS = [
  {
    lift: "スクワット",
    hook: "胸の真ん中〜脇の下あたり。膝を少し曲げて担ぎ、膝を伸ばすとバーが外れる高さ",
    safety: "いつもの深さでしゃがんでも当たらない、いちばん高い穴（いちばん深くしゃがんだときのバーより数cm下）",
  },
  {
    lift: "ベンチプレス（ラック内で行う場合）",
    hook: "ベンチに寝た状態で、肘をほぼ伸ばしたまま外せる高さ",
    safety: "胸を張ってバーを胸に付けた位置より少し下。胸の張りをゆるめると、バーがセーフティバーに乗る高さ",
  },
];

export default function PowerRackPage() {
  const [fiveByFive, , threeByTen] = SET_SCHEMES;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            パワーラックの使い方｜セーフティバーの高さの決め方とマナー
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                パワーラックは、スクワットやベンチプレスで<span className="font-bold">1人でも限界近くまで挑戦できるようにする道具</span>です。ただし、それはセーフティバーを正しい高さに合わせたときだけです。高さが合っていないセーフティバーは、ないのと同じです。
              </p>
              <p className="mt-2">
                この記事では、パワーラックの部品の役割、スクワットとベンチプレスそれぞれの高さの決め方、潰れたとき（重さに負けて挙げられなくなったとき）の逃げ方、ジムで気をつけたいマナーの順に説明します。
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
                柱に等間隔の穴が開いていて、フックとセーフティバーはその穴に差し込んで高さを変えます。ジムによっては、セーフティバーの代わりにベルト（ストラップ）で受け止める型や、左右に張り出した腕（セーフティアーム／スポッターアーム）で受け止める型もあります。どれも役割は同じです。
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
                高さは体格としゃがむ深さで変わるので、<span className="font-bold">数字ではなく、空のバー（プレートを付けていないバー）で確かめて</span>決めます。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">立つ位置</span>：バーを外したら1〜2歩下がるだけにして、<span className="font-bold">左右の柱のあいだ（セーフティバーの真上にバーが来る位置）</span>でしゃがむ。ラックの外へ歩き出すと、潰れてもバーがセーフティバーに乗らない
                </li>
                <li>
                  ▸ <span className="font-bold">スクワット</span>：空のバーで、いつもの深さまでしゃがむ。バーがセーフティバーに当たるならセーフティバーを1つ下の穴に、すき間が大きすぎるなら1つ上の穴に移す。いつもの深さで当たらない、いちばん高い穴が正解
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチプレス</span>：空のバーを胸に付け、胸の張りをゆるめて息を吐く。そのときバーがセーフティバーに乗り、胸から重さが抜ける高さが正解。<span className="font-bold">ベンチを置く位置を決めてから</span>セーフティバーを合わせ、ベンチを動かしたら合わせ直す。ちょうどいい穴がないときは、低いほうの穴で妥協せず、限界近くのセットは補助者がいるときだけにする
                </li>
              </ul>
              <p className="mt-3">
                合わせた穴の番号は、ほかの人が使ったあとでも同じ高さにすぐ戻せるように<span className="font-bold">メモしておく</span>と楽です。左右で穴がずれていないか、<span className="font-bold">セーフティバーとフックが奥まで差し込まれ、ロック（抜け止めのピン）が掛かっているか</span>も、毎回確かめてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                バーの戻し方
              </h2>
              <p>
                戻すときは、<span className="font-bold">前に歩いてバーを両方の柱に当ててから</span>、まっすぐ下ろしてフックに乗せます。フックを目で探しながら下ろすと、片側だけフックに乗らずに外れることがあります。疲れているセットの最後ほど、ここは丁寧に行ってください。
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
                  ▸ <span className="font-bold">スクワット</span>：<span className="font-bold">胸を起こし、バーを握ったまま</span>、まっすぐ腰を落としてセーフティバーに乗せる。上体が前に倒れたまま粘らない。バーが止まったら、さらに腰を落として肩をバーの下から抜き、前に出る
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチプレス</span>：バーを<span className="font-bold">首や顔の上ではなく胸の上まで</span>下ろし、胸の張りをゆるめてセーフティバーに乗せる。乗るまで手を離さない。バーが止まったら、頭のほうへ体をずらして抜け出す（足のほうへずれると、バーが首や顔の上を通るため）
                </li>
              </ul>
              <p className="mt-3">
                練習として、<span className="font-bold">空のバーで一度わざと潰れてみる</span>のがおすすめです。本番で初めて逃げ方を試すより、どこにバーが乗るかを先に体で覚えておくほうが、いざというときに落ち着いて動けます。
              </p>
              <p className="mt-2">
                セーフティバーがなく、補助者もいない台で、限界近くのベンチプレスやスクワットをするのはやめてください。そもそも1RM（1回だけ挙げられる最大の重さ）をわざわざ測る必要はなく、普段のセットは余裕を残した重さで組めます。詳しくは
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
                  ▸ <span className="font-bold">左右交互に付ける</span>：片側に2枚続けて付けると、反対側が跳ね上がって<span className="font-bold">バーがフックから落ちる</span>ことがある。1枚ずつ左右交互に
                </li>
                <li>
                  ▸ <span className="font-bold">重いプレートを内側に</span>：大きいプレートを先に付け、小さいプレートを外側に
                </li>
                <li>
                  ▸ <span className="font-bold">カラーを付ける</span>：動いているうちにプレートが外側へずれることがある。左右の重さが変わると危ないので、バーベル種目では毎回留める
                </li>
                <li>
                  ▸ <span className="font-bold">外すときも左右交互に</span>：片側だけ全部外すと、残った側の重さでバーが落ちることがある
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
                  ▸ <span className="font-bold">ラックでしかできない種目に使う</span>：ラックの数は少ないことが多い。カールのようにラックがなくてもできる種目は、混んでいる時間には別の場所で行う
                </li>
                <li>
                  ▸ <span className="font-bold">混んでいたら交代で使う</span>：{fiveByFive.label}（{fiveByFive.reps}回×{fiveByFive.sets}セット）の休憩は{fiveByFive.rest}と長いので、待っている人がいたら、休憩のあいだに使ってもらうよう声をかける（ジムに時間の上限があるならそれに従う）。交代したあとは、<span className="font-bold">自分のセットの前にフックとセーフティバーの高さを必ず確かめ直す</span>。メモしておいた穴の番号がここで役に立つ
                </li>
                <li>
                  ▸ <span className="font-bold">タオルやボトルで場所取りしない</span>：使わない時間にラックを押さえておくのは、待っている人にとくに嫌がられる
                </li>
                <li>
                  ▸ <span className="font-bold">ベンチは使ったら拭く</span>：ベンチに寝て行う種目は汗が残りやすい
                </li>
                <li>
                  ▸ <span className="font-bold">ジムのルールを先に確かめる</span>：チョークの使用、利用時間の上限、デッドリフトでバーを床に落としてよいかは、ジムによって違う
                </li>
              </ul>
              <p className="mt-3">
                マシンで10回前後をくり返すときの休憩は{threeByTen.rest}ほどですが、{fiveByFive.label}のような重いセットは{fiveByFive.rest}休むのが一般的です。そのぶん、ラックを長く使うことになります。マシン中心のメニューの回り方は
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
                にも書いたとおり、ベンチプレスは補助者がそばに立てば支えてもらえますが、スクワットは人が後ろから支えるのが難しく、<span className="font-bold">潰れたときの逃げ場を自分で用意しないといけない</span>種目です。セーフティバーの高さを自分で合わせておかないと、限界まで追い込めません。私のスクワットが止まっている理由も、正直に言えばそこだと思っています。
                <br />
                <br />毎回限界まで行く必要はありません。ただ、重さを上げた日に「潰れても大丈夫」と思えるかどうかで、最後の1回に踏み込めるかが変わります。高さを合わせる数十秒は、重量を伸ばすための準備の一部だと考えてください。
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
                潰れたときにバーを置くための部品なので、そこに置くのは正しい使い方です。ただし、毎回のセットでバーをセーフティバーに打ち付けるような使い方は、音も大きく周りの迷惑になります。いつもの動きで当たるなら、セーフティバーの位置が高すぎます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ジムにパワーラックがない場合は？
              </h3>
              <p>
                ベンチプレス台にセーフティバーが付いていないなら、限界近くのセットは補助者がいるときだけにしてください。1人のときは、決めた回数を終えても余裕が残る重さにします。スクワットは、セーフティバーのない台で限界を試さないことが大前提です。
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
                  ▸ セーフティバーは<span className="font-bold">いつもの動きでは当たらず、潰れたときに受け止められる高さ</span>。空のバーで確かめ、差し込みとロックも毎回確かめる
                </li>
                <li>
                  ▸ スクワットは<span className="font-bold">いちばん深い位置のバーより少し下</span>、ベンチプレスは<span className="font-bold">胸の張りをゆるめるとバーが乗る高さ</span>
                </li>
                <li>
                  ▸ スクワットは<span className="font-bold">柱のあいだで</span>しゃがむ。潰れたら粘らず、胸を起こしたままセーフティバーに置く。空のバーで一度練習しておく
                </li>
                <li>
                  ▸ プレートは1枚ずつ左右交互に付け外しし、カラーで留める
                </li>
                <li>
                  ▸ 使い終わったら片付ける。混んでいたら交代で使い、交代後は高さを確かめ直す
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/power-rack"
          title="パワーラックの使い方｜セーフティバーの高さの決め方とマナー"
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
