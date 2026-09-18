import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RizapCta from "@/components/RizapCta";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { recoveryFor } from "@/lib/recoveryStandards";
import {
  rowsFor,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "お尻を鍛える筋トレ｜スクワットだけでヒップアップしない理由 - サクトレ",
  description:
    "スクワットは前ももが主役になりやすく、それだけではお尻の形は変わりません。お尻に効く種目を「股関節を伸ばす動き」「横に開く動き」で分けた一覧表と、自宅でできる代替種目、女性の重量目安（体重55kgならスクワット41kgから）を載せました。",
  path: "/column/hip-training",
});

// 例に使う体重。女性の目安表と揃える。
const EXAMPLE_WEIGHT = 55;

// お尻の種目を動きの種類で分ける。ここが記事の軸。
const HIP_EXERCISES = [
  {
    name: "ヒップスラスト",
    move: "股関節を伸ばす",
    target: "大殿筋",
    home: "床でそのまま可",
    note: "お尻の種目で最も重い重量を扱える。上で1秒止める",
  },
  {
    name: "ルーマニアンデッドリフト",
    move: "股関節を伸ばす",
    target: "大殿筋・もも裏",
    home: "ダンベルで可",
    note: "膝を曲げすぎない。お尻を後ろに引いて伸ばす",
  },
  {
    name: "ブルガリアンスクワット",
    move: "股関節を伸ばす（片脚）",
    target: "大殿筋・前もも",
    home: "椅子があれば可",
    note: "前に倒すほどお尻に寄る。片脚なので軽くても効く",
  },
  {
    name: "ヒップリフト",
    move: "股関節を伸ばす",
    target: "大殿筋",
    home: "床でそのまま可",
    note: "器具なしの入口。慣れたら片脚で行う",
  },
  {
    name: "ワイドスクワット",
    move: "しゃがむ（足幅広め）",
    target: "大殿筋・内もも",
    home: "自重で可",
    note: "普通のスクワットより股関節の動きが大きい",
  },
  {
    name: "サイドランジ",
    move: "横に踏み出す",
    target: "中殿筋・内もも",
    home: "自重で可",
    note: "横の張り出しを作る動き。スクワットでは代われない",
  },
];

// スクワットでお尻に効かない原因と直し方。
const FIX_ROWS = [
  {
    cause: "しゃがみが浅い",
    result: "前ももだけで終わる",
    fix: "太ももが床と平行になるまで下ろす",
  },
  {
    cause: "膝から曲げている",
    result: "股関節がほとんど動かない",
    fix: "先にお尻を後ろに引いてから膝を曲げる",
  },
  {
    cause: "足幅が狭い",
    result: "前ももに寄りやすい",
    fix: "肩幅よりやや広く、つま先を少し外へ",
  },
  {
    cause: "軽すぎる",
    result: "回数だけ増えて負荷が変わらない",
    fix: "10〜12回で限界が来る重さに上げる",
  },
];

export default function HipTrainingPage() {
  const legRecovery = recoveryFor("large");
  const womenSquat = rowsFor("female", "squat");
  const womenDeadlift = rowsFor("female", "deadlift");
  const weightFor = (rows: { level: Level; ratio: number }[], level: Level) => {
    const row = rows.find((r) => r.level === level);
    return row ? Math.round(EXAMPLE_WEIGHT * row.ratio) : 0;
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            お尻を鍛える筋トレ｜スクワットだけでヒップアップしない理由
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「お尻を上げたいからスクワットをしている」。よく聞く話ですが、<span className="font-bold">スクワットをしても前ももばかり太くなった</span>という人も同じくらい多いはずです。
              </p>
              <p className="mt-2">
                原因ははっきりしています。お尻の筋肉（大殿筋）は<span className="font-bold">股関節を伸ばす</span>ときに働く筋肉です。ところがスクワットは、やり方次第で<span className="font-bold">膝を伸ばす動き（＝前もも）が主役</span>になってしまいます。同じ種目名でも、中身が別物になるということです。
              </p>
              <p className="mt-2">
                この記事では、お尻に効く種目を<span className="font-bold">動きの種類で分けて</span>整理します。種目名を覚えるより、この分け方のほうが役に立ちます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                お尻に効く種目の一覧
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        効く場所
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        自宅
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        コツ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {HIP_EXERCISES.map((row) => (
                      <tr key={row.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.name}
                          <span className="block text-[10px] text-gray-400">{row.move}</span>
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.target}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.home}
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
                表の左端に<span className="font-bold">動きの種類</span>を書きました。ここがこの記事の要点です。お尻を鍛えるとは、<span className="font-bold">股関節を伸ばす動きを、重い負荷で繰り返すこと</span>です。スクワットは「しゃがむ」動きなので、その中にどれだけ股関節の動きを入れられるかで結果が変わります。
              </p>
              <p className="mt-2">
                迷ったら<span className="font-bold">ヒップスラストを軸</span>にしてください。股関節を伸ばす動きだけを取り出した種目なので、お尻に効かせるのが一番簡単です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                スクワットでお尻に効かないときの直し方
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        原因
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        起きること
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        直し方
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FIX_ROWS.map((row) => (
                      <tr key={row.cause}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.cause}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.result}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.fix}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                中でも効くのは<span className="font-bold">深さ</span>です。浅いスクワットは股関節がほとんど動かないので、名前はスクワットでもお尻の種目にはなりません。深さで数字がどれだけ変わるかは
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワットの平均は何kg？
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                丸みを作るのは「横」の筋肉
              </h2>
              <p>
                お尻の見た目には、もうひとつ別の筋肉が関わります。<span className="font-bold">中殿筋</span>——骨盤の横についている筋肉です。
              </p>
              <p className="mt-2">
                大殿筋が後ろへの厚みを作るのに対し、中殿筋は<span className="font-bold">横への張り出し</span>を作ります。「上がった」だけでなく「丸い」と言われる形は、この2つが揃ったときの形です。
              </p>
              <p className="mt-2">
                そして中殿筋は、<span className="font-bold">前後の動きではほとんど鍛えられません。</span>スクワットもデッドリフトも前後の動きだからです。<span className="font-bold">横に開く・横に踏み出す動き</span>を、週に1種目でいいので入れてください。サイドランジがその役です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                どのくらいの重さでやるか（女性の目安）
              </h2>
              <p>
                お尻の種目は<span className="font-bold">下半身なので、上半身より重い重量を扱えます</span>。体重{EXAMPLE_WEIGHT}kgの女性なら、バーベルスクワットの目安は次のとおりです。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        スクワット
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        デッドリフト
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenSquat.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {weightFor(womenSquat, row.level)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {weightFor(womenDeadlift, row.level)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 1回だけ挙がる重さ（1RM）の目安です。実際に組むのは10〜12回できる重さになります。体重別の一覧は
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  重量チェッカー
                </Link>
                で確認できます。
              </p>
              <p className="mt-3">
                ヒップスラストは、この表のスクワットより<span className="font-bold">さらに重い重量を扱えるのが普通</span>です。股関節を伸ばす動きだけで、しゃがむ深さの制約がないためです。<span className="font-bold">「お尻の日は一番重いものを持つ日」</span>と考えておいて構いません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                頻度と、見た目が変わるまで
              </h2>
              <p>
                お尻と脚は大きい筋肉なので、回復は<span className="font-bold">{legRecovery.hours}</span>。同じ部位は<span className="font-bold">{legRecovery.interval}</span>あけてください。週2回が上限だと考えると組みやすいです（
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                ）。
              </p>
              <p className="mt-2">
                そして正直に書いておくと、<span className="font-bold">お尻の形が変わるのは筋肉が増えたときだけではありません。</span>上に乗っている脂肪が減ったときにも、輪郭は大きく変わります。どちらか一方ではなく両方です。
              </p>
              <p className="mt-2">
                ただし<span className="font-bold">「お尻だけ痩せる」は起きません。</span>脂肪は全身から均等に落ちます（
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  部分痩せが起きない理由
                </Link>
                ）。逆に言えば、<span className="font-bold">筋肉をつける側は部位を選べます</span>。だから鍛える側を狙い撃ちして、落とす側は全身の収支で進めるのが正解になります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の立場
              </p>
              <p className="text-xs leading-relaxed">
                先に断っておくと、<span className="font-bold">私は男性で、ヒップアップを目的にトレーニングしたことはありません。</span>フィジーク志向で上半身を優先してきたので、スクワットはベンチと同じ120kgで止まっています。
                <br />
                <br />
                それでも書けることが1つあります。<span className="font-bold">デッドリフトの自己ベストは160kg</span>で、これは股関節を伸ばす動きの種目です。この重さを扱うとき、実際に一番働いているのはお尻です。<span className="font-bold">「お尻は、重い物を持ち上げるための筋肉」</span>——形を作る前に、ここを理解しておくと種目選びで迷わなくなります。軽い重さで回数を増やす方向より、少しずつ重くする方向のほうが結果が出ます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自宅だけでもお尻は変わりますか？
              </h3>
              <p>
                変わります。ヒップリフトとブルガリアンスクワットは自重でも十分に効きます。ただし<span className="font-bold">自重だけだと早い段階で負荷が足りなくなる</span>ので、そのときは片脚にするか、ダンベルを持ってください（
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                脚が太くなるのが心配です。
              </h3>
              <p>
                女性が短期間で脚を太くするのは、ホルモンの関係で簡単ではありません（
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                ）。気になる場合は、前ももが主役になりやすい深いスクワットより、<span className="font-bold">ヒップスラストとルーマニアンデッドリフト中心</span>に組めば狙いを絞れます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                毎日ヒップリフトをやってもいいですか？
              </h3>
              <p>
                お尻は大きい筋肉なので、<span className="font-bold">{legRecovery.interval}</span>あけたほうが伸びます。毎日やれるということは、負荷が軽すぎるというサインでもあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                40代でも間に合いますか？
              </h3>
              <p>
                間に合います。むしろ<span className="font-bold">座っている時間が長いほどお尻は使われていない</span>ので、伸びしろが残っています。年代別の組み方は
                <Link href="/column/women-40s-training" className="text-orange-600 font-bold underline">
                  40代女性が筋トレで痩せにくい理由と対策
                </Link>
                にまとめました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ お尻は<span className="font-bold">股関節を伸ばす筋肉</span>。しゃがむ動きより、伸ばす動きで鍛える
                </li>
                <li>
                  ▸ 迷ったら<span className="font-bold">ヒップスラストを軸</span>に。お尻の日は一番重いものを持つ日
                </li>
                <li>
                  ▸ スクワットで効かない原因の多くは<span className="font-bold">深さと、膝から曲げていること</span>
                </li>
                <li>
                  ▸ 丸みを作るのは<span className="font-bold">中殿筋</span>。横に踏み出す種目を週1つ入れる
                </li>
                <li>
                  ▸ 形は<span className="font-bold">筋肉と脂肪の両方</span>で決まる。ただしお尻だけ痩せることはできない
                </li>
              </ul>
            </section>
          </div>
        </div>

        <RizapCta lead="お尻の種目は「効いている感覚」がつかみにくく、自己流だと前ももばかり疲れて終わりがちです。フォームだけ人に見てもらう、という選択もあります。" />

        <ShareButtons
          url="https://sakutore.jp/column/hip-training"
          title="お尻を鍛える筋トレ｜スクワットだけでヒップアップしない理由"
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
