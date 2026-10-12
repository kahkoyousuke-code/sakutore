import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "デッドリフトで握力が先に限界になるときの対処｜握り方4種類とパワーグリップの使い分け - サクトレ",
  description:
    "背中より先に手が離れるなら、握力で止まっています。ストラップあり・なしで回数を比べる見分け方と、順手・オルタネイト・フックグリップ・パワーグリップの4つの握り方の向き不向き、大会に出る人が気をつけることをまとめました。",
  path: "/column/deadlift-grip",
});

// 握り方の比較。数字の基準は置かず、仕組みと向き不向きで分ける。
const GRIPS = [
  {
    name: "順手（ダブルオーバーハンド）",
    how: "両手とも手の甲を前に向けて握る",
    good: "左右がそろう。フォームを覚える段階はこれ",
    bad: "重くなると最初に手が開く",
    contest: "使える",
  },
  {
    name: "オルタネイト（片手だけ逆手）",
    how: "片手を順手、片手を逆手にして握る",
    good: "バーが手の中で転がりにくく、重い重量を持ちやすい",
    bad: "左右で体のねじれ方が変わる。逆手側の腕に負担がかかりやすいと言われる",
    contest: "使える",
  },
  {
    name: "フックグリップ",
    how: "親指をバーに当て、その上から人差し指と中指で押さえ込む",
    good: "順手のまま、左右をそろえて重い重量を持てる",
    bad: "親指が痛い。慣れるまで時間がかかる",
    contest: "使える",
  },
  {
    name: "パワーグリップ・ストラップ",
    how: "手首に巻いた道具をバーに巻き付けて握りを補う",
    good: "握力をほぼ気にせず、背中と脚の力を使い切れる",
    bad: "素手の握力は鍛えられない",
    contest: "使えない（パワーリフティングの大会）",
  },
];

// 握力で止まっているかの見分け方。数字ではなく、同じ条件での比較で判断する。
const CHECKS = [
  {
    sign: "セットの最後に手が先に開く",
    meaning: "握力で止まっている",
  },
  {
    sign: "ストラップを使うと同じ重量で回数が増える",
    meaning: "握力で止まっている",
  },
  {
    sign: "手は持つのに、床から浮かない・背中が丸まる",
    meaning: "握力ではなく、背中や脚の力で止まっている",
  },
  {
    sign: "セットの後、前腕より背中やもも裏がきつい",
    meaning: "握力ではなく、背中や脚の力で止まっている",
  },
];

export default function DeadliftGripPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            デッドリフトで握力が先に限界になるときの対処｜握り方4種類とパワーグリップの使い分け
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                デッドリフトは、<span className="font-bold">背中や脚より先に握力が限界になりやすい</span>種目です。背中はまだ引けるのに、手が先に開いてバーが落ちる。この状態のまま続けると、鍛えたい背中に重さが届く前にセットが終わってしまいます。
              </p>
              <p className="mt-2">
                対処の順番はシンプルです。<span className="font-bold">まず本当に握力で止まっているかを確かめる。止まっているなら、握り方を変えるか道具を使う。</span>この記事ではこの順に書きます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握力で止まっているかの見分け方
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        こうなったら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        止まっている原因
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHECKS.map((row) => (
                      <tr key={row.sign}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.sign}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.meaning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                いちばん確かなのは<span className="font-bold">2番目の比べ方</span>です。同じ重量で、素手のセットとストラップを使ったセットの回数を比べてください。ストラップを使ったときだけ回数が増えるなら、背中と脚にはまだ余力があって、手が先に音を上げています。
              </p>
              <p className="mt-2">
                逆に、手は持つのにバーが浮かない・背中が丸まる場合は、握力の問題ではありません。道具を足しても解決しないので、重量を落としてフォームを見直してください。背中が丸まる重量に手を出さないことは、
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                の「腰を壊さないための優先順位」に書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握り方4種類の向き不向き
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        握り方
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        強み
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        弱点
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        大会
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {GRIPS.map((row) => (
                      <tr key={row.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.name}
                          <span className="block text-[10px] font-normal text-gray-400">{row.how}</span>
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.good}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.bad}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.contest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                始めたばかりのうちは<span className="font-bold">順手</span>で十分です。左右がそろうので、フォームを覚えるのに向いています。手が開き始めたら、次の3つから選びます。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">背中を鍛えるのが目的なら、パワーグリップ</span>。握力を気にせず背中に集中できるので、いちばん手っ取り早い
                </li>
                <li>
                  ▸ <span className="font-bold">大会に出る予定があるなら、オルタネイトかフックグリップ</span>。大会ではストラップ類が使えないので、素手で重い重量を持つ練習が要る
                </li>
                <li>
                  ▸ <span className="font-bold">オルタネイトを使うなら、逆手にする側を毎回入れ替える</span>。片側だけに偏らせないため
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                パワーグリップを使った記録はどう扱うか
              </h2>
              <p>
                「道具を使った記録は自分の実力ではない」と感じる人もいますが、<span className="font-bold">自分の現在地を知るためなら、使った記録で構いません</span>。パワーグリップは引く距離もフォームも変えず、先に限界が来る握力を補うだけだからです。
              </p>
              <p className="mt-2">
                大事なのは<span className="font-bold">「使う／使わない」を記録に書いて区別しておく</span>ことです。混ぜると、伸びたのか道具が変わっただけなのか分からなくなります。重量と回数から自分のレベルを調べる方法は
                <Link href="/column/deadlift-weight-level" className="text-orange-600 font-bold underline">
                  デッドリフト◯kgはすごい？
                </Link>
                にまとめました。
              </p>
              <p className="mt-2">
                ただし<span className="font-bold">パワーリフティングの大会に出るなら、記録は素手で測ってください</span>。大会ではストラップ類が使えないので、道具ありの記録は大会の記録とは比べられません。
              </p>
              <GearPick
                placement="deadlift-grip-powergrip"
                lead="背中を鍛えるのが目的なら、パワーグリップがいちばん手っ取り早い解決策です。"
                productIds={["alloutPowerGrip"]}
              />
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握力そのものを鍛えたいなら
              </h2>
              <p>
                道具に頼りきると、素手の握力はそのままです。気になるなら、<span className="font-bold">背中の日に素手のセットを1〜2セットだけ残す</span>のが現実的です。重い本番のセットはパワーグリップで背中を追い込み、軽めのセットは素手で握る。これで背中と握力の両方に刺激が入ります。
              </p>
              <p className="mt-2">
                バーにぶら下がる練習も、握力を鍛えるのに向いています。懸垂の練習の最初の段階がちょうどこれで、段階の進め方は
                <Link href="/column/pullup-progression" className="text-orange-600 font-bold underline">
                  懸垂が1回もできない人の練習法
                </Link>
                にあります。
              </p>
              <p className="mt-2">
                汗で滑る場合は、手のひらの乾き具合も影響します。チョーク（滑り止めの粉）を使うと持ちやすくなりますが、<span className="font-bold">使えるかどうかはジムによって違う</span>ので、先に確認してください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はALLOUTのパワーグリップを使っています。背中のトレーニングで、握力が先に限界になる問題をこれで片付けました。フィジークは大会でデッドリフトの重さを競う競技ではないので、<span className="font-bold">私にとって大事なのは素手で持てる重量より、背中に重さを届けること</span>でした。
                <br />
                <br />
                同じ道具でも、パワーリフティングの大会に出る人には向きません。目的が「背中を育てる」なのか「素手で記録を出す」なのかで、正解の握り方は変わります。自分がどちらなのかを先に決めてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                パワーグリップを使うのはずるいですか？
              </h3>
              <p>
                ずるくありません。背中を鍛えるための道具です。気をつけるのは、大会の記録と比べないことと、道具ありの記録となしの記録を混ぜないことの2つだけです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                パワーグリップとリストストラップは何が違いますか？
              </h3>
              <p>
                どちらも握りを補う道具ですが、<span className="font-bold">パワーグリップはバーに巻き付けるのが速く、リストストラップは巻くのに手間がかかるぶん、しっかり固定できる</span>傾向があります。セットのたびに着け外しするなら、手軽なパワーグリップのほうが続けやすいです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ラットプルダウンや懸垂でも使っていいですか？
              </h3>
              <p>
                使えます。背中を引く種目はどれも、背中より先に握力が限界になりやすいからです。背中を鍛えるべき理由と種目は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                手のひらにマメができて痛いです。
              </h3>
              <p>
                バーを指の付け根で握ると、皮が挟まれてマメになりやすくなります。<span className="font-bold">指の付け根より少し指先側で引っかけるように握る</span>と、皮が挟まれにくくなります。痛みが強いときや皮がめくれたときは、治るまで素手のセットは休んでください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 握力で止まっているかは、<span className="font-bold">ストラップあり・なしの回数</span>を比べると分かる
                </li>
                <li>
                  ▸ 手は持つのに浮かない・背中が丸まるなら、<span className="font-bold">握力ではなくフォームと力の問題</span>
                </li>
                <li>
                  ▸ 背中を鍛えるなら<span className="font-bold">パワーグリップ</span>、大会に出るなら<span className="font-bold">オルタネイトかフックグリップ</span>
                </li>
                <li>
                  ▸ 道具を使った記録は、<span className="font-bold">書いて区別しておけば</span>現在地を知るのに使える
                </li>
                <li>
                  ▸ 素手の握力も気になるなら、<span className="font-bold">軽めのセットだけ素手</span>にする
                </li>
              </ul>
              <p className="mt-2">
                ベルトを使い始める目安は
                <Link href="/column/lifting-belt" className="text-orange-600 font-bold underline">
                  トレーニングベルトはいつから必要？
                </Link>
                にまとめています。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/deadlift-grip"
          title="デッドリフトで握力が先に限界になるときの対処｜握り方4種類とパワーグリップの使い分け"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">パワーグリップ・ベルトを見る →</p>
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
