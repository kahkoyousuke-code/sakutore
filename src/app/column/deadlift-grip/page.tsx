import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "デッドリフトで握力が足りない・持たないときの対処｜握り方3種類とパワーグリップ - サクトレ",
  description:
    "背中より先に手が離れるなら、握力で止まっています。安全な見分け方、順手・オルタネイト・フックの3つの握り方とパワーグリップの向き不向き、パワーリフティングの大会に出る人が気をつけることをまとめました。",
  path: "/column/deadlift-grip",
});

// 握り方の比較。数字の基準は置かず、仕組みと向き不向きで分ける。
// 「大会」はパワーリフティングの大会の扱い（ストロングマンなどはストラップ可の大会が多い）。
const GRIPS = [
  {
    name: "順手（ダブルオーバーハンド）",
    how: "両手とも手の甲を前に向けて握る",
    good: "左右がそろう。フォームを覚える段階はこれ",
    bad: "重くなると、ほかの握り方より先に手が開く",
    contest: "使える",
  },
  {
    name: "オルタネイトグリップ（ミックスグリップ）",
    how: "片手を順手、片手を逆手にして握る",
    good: "バーが手の中で転がりにくく、高重量を持ちやすい",
    bad: "左右で手の向きが違うぶん、体がねじれやすい。逆手側の上腕二頭筋（力こぶの筋肉）を痛めた例が報告されている",
    contest: "使える",
  },
  {
    name: "フックグリップ",
    how: "親指を先にバーに巻き付け、その親指の上から人差し指と中指で押さえ込む",
    good: "順手のまま、左右をそろえて高重量を持てる",
    bad: "親指が痛く、慣れるまで時間がかかる。手が小さいと指1本しか掛からないこともある",
    contest: "使える",
  },
  {
    name: "ストラップ類（パワーグリップなど）",
    how: "手首に着けた道具をバーに引っかけて握りを補う",
    good: "握力をほぼ気にせず、背中と脚の力を使い切れる",
    bad: "素手の握力は鍛えにくい",
    contest: "使えない",
  },
];

// 握力で止まっているかの見分け方。数字ではなく、同じ条件での比較で判断する。
const CHECKS = [
  {
    sign: "手が開いたとき、背中やもも裏にはまだ余裕がある",
    meaning: "握力で止まっている",
  },
  {
    sign: "ストラップ類を使うと、同じ重量で回数が増える",
    meaning: "握力で止まっている",
  },
  {
    sign: "手は離れないのに、床から浮かない・背中が丸まる",
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
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            デッドリフトで握力が足りない・持たないときの対処｜握り方3種類とパワーグリップ
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                デッドリフトは、<span className="font-bold">背中や脚より先に握力が限界になりやすい</span>種目です。BIG3でいちばん重いバーを扱うのに、その重さを支えているのは指だけだからです。背中はまだ引けるのに、手が先に開いてバーが落ちる。この状態のまま続けると、鍛えたい背中に重さが届く前にセットが終わってしまいます。
              </p>
              <p className="mt-2">
                対処の順番はシンプルです。<span className="font-bold">まず本当に握力で止まっているかを確かめる。止まっているなら、お金のかからない工夫から試し、それでも足りなければ握り方を変えるか道具を使う。</span>以下、この順に説明します。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ この記事の「ストラップ類」は、パワーグリップやリストストラップのように、手首に着けてバーに引っかけ、握りを補う道具のことです。
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
                いちばん確かなのは<span className="font-bold">2番目の見分け方</span>です。同じ重量で、まず素手で1セット、十分に休んでからストラップ類を使って1セット引き、回数を比べます。後から引くほうが疲れているぶん不利です。それでもストラップ類のほうが回数が増えるなら、背中と脚にはまだ余力があり、手が先に音を上げています。
              </p>
              <p className="mt-2">
                <span className="font-bold">どちらのセットも、背中が丸まり始めたらそこで止めてください。</span>回数を比べるために粘る必要はありません。ストラップ類を持っていないなら、1番目と4番目（手が開いたときやセットの後に、背中やもも裏にまだ余裕があるか）で判断できます。
              </p>
              <p className="mt-2">
                逆に、手は離れないのにバーが浮かない・背中が丸まる場合は、握力の問題ではありません。道具を足しても解決しないので、重量を落としてフォームを見直してください。背中が丸まる重量に手を出さないことは、
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                の「腰を壊さないための優先順位」に書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                道具を買う前にできること
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">親指まで巻き付けて握る</span>：親指をバーの反対側に回さず、ほかの指と並べて添えているだけだと、手が開きやすくなります
                </li>
                <li>
                  ▸ <span className="font-bold">握る位置を手のひらの真ん中から指の付け根寄りに</span>：手のひらの真ん中で握ると、引いた瞬間にバーが指のほうへずれて、握りが浅くなります
                </li>
                <li>
                  ▸ <span className="font-bold">手のひらを乾かす</span>：汗で滑るならチョーク（滑り止めの粉）が効きます。<span className="font-bold">使えるかどうかはジムによって違う</span>ので、先に確認してください
                </li>
              </ul>
              <p className="mt-3">
                チョークは、国際パワーリフティング連盟（IPF）のルールでも手に付けることが認められています。国内の大会に出るなら、その大会の規則も確認してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握り方3種類とパワーグリップの向き不向き
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
                        大会※
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
              <p className="mt-2 text-xs text-gray-500">
                ※ パワーリフティングの大会での扱いです。ストロングマンのデッドリフトなど、ストラップ類を使える競技もあります。
              </p>
              <p className="mt-3">
                始めたばかりのうちは<span className="font-bold">順手</span>で十分です。左右がそろうので、フォームを覚えるのに向いています。手が開き始めたら、目的に合わせて選びます。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">背中を鍛えるのが目的なら、パワーグリップ</span>。握力を気にせず背中に集中できるので、いちばん手っ取り早い
                </li>
              </ul>
              <GearPick
                placement="deadlift-grip-powergrip"
                lead="筆者が背中のトレーニングで使っているパワーグリップです。"
                productIds={["alloutPowerGrip"]}
              />
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">パワーリフティングの大会に出る予定があるなら、オルタネイトかフック</span>。大会ではストラップ類が使えないので、素手で高重量を持つ練習が要る
                </li>
              </ul>
              <p className="mt-3">
                オルタネイトとフックで迷ったときは、<span className="font-bold">左右差や上腕二頭筋への負担を避けたいならフック</span>です。ただし親指の痛みに慣れるまで時間がかかるので、大会が近いならオルタネイトにして、次の注意を徹底してください。
              </p>
              <p className="mt-2">
                オルタネイトを使うなら、<span className="font-bold">逆手側の肘は伸ばしたまま引いてください</span>（腕で引き上げない）。逆手にする側はセットごとに入れ替え、片側に偏らせないようにします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                パワーグリップを使った記録はどう扱うか
              </h2>
              <p>
                自分の現在地を知るためなら、ストラップ類を使った記録で構いません。ただし<span className="font-bold">伸びを比べる記録は「使う」か「使わない」のどちらかに固定</span>してください。レベル判定との関係は
                <Link href="/column/deadlift-weight-level" className="text-orange-600 font-bold underline">
                  デッドリフト◯kgはすごい？
                </Link>
                に書いています。パワーリフティングの大会に出るなら、比べる記録は素手にそろえてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握力そのものを鍛えたいなら
              </h2>
              <p>
                道具に頼りきると、素手の握力は伸びにくくなります。気になるなら、<span className="font-bold">背中の日に1〜2セットだけ素手で引く</span>のが現実的です。重いメインのセットはパワーグリップで背中を追い込み、軽めのセットは素手で握る。これで背中と握力の両方に刺激が入ります。素手の軽めのセットは、伸びを比べる記録とは分けてメモしておけば十分です。
              </p>
              <p className="mt-2">
                バーにぶら下がる練習も、握力を鍛えるのに向いています。懸垂の練習の最初のステップがちょうどこれで、進め方は
                <Link href="/column/pullup-progression" className="text-orange-600 font-bold underline">
                  懸垂が1回もできない人の練習法
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はALLOUTのパワーグリップを使っています。背中のトレーニングで、握力が先に限界になる問題をこれで片付けました。フィジークはデッドリフトの重さを競う競技ではないので、<span className="font-bold">私にとって大事なのは素手で持てる重量より、背中に重さを届けること</span>でした。
                <br />
                <br />
                パワーリフティングの大会に出る人は、本番ではストラップ類が使えないので、素手で高重量を持つ練習が欠かせません。目的が「背中を育てる」なのか「素手で記録を出す」なのかで、正解の握り方は変わります。自分がどちらなのかを先に決めてください。
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
                ずるくありません。背中を鍛えるための道具です。ストラップ類を使った数字の扱いは、
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                でも触れています。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                パワーグリップとリストストラップは何が違いますか？
              </h3>
              <p>
                どちらも握りを補う道具ですが、<span className="font-bold">パワーグリップはバーへの掛け外しが速く、リストストラップは巻くのに手間がかかるぶん、しっかり固定できる</span>傾向があります。1回の練習で何種目も使うなら、パワーグリップのほうが手軽です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ラットプルダウンや懸垂でも使っていいですか？
              </h3>
              <p>
                使えます。ラットプルダウンや懸垂のような引く種目は、どれも背中より先に握力が限界になりやすいからです。背中を鍛えるべき理由と種目は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                手のひらにマメができて痛いです。
              </h3>
              <p>
                手のひらの真ん中でバーを握ると、引いた瞬間にバーが指のほうへずれて皮が寄り、マメができやすくなります。<span className="font-bold">最初から指の付け根あたり（手のひらとの境目のすぐ指先側）にバーを引っかけて握る</span>と、皮が寄りにくくなります。痛みが強いときや皮がめくれたときは、治るまで素手のセットは休んでください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 握力で止まっているかは、<span className="font-bold">ストラップ類あり・なしの回数</span>を比べると分かる。背中が丸まり始めたらそこで止める
                </li>
                <li>
                  ▸ 手は離れないのに浮かない・背中が丸まるなら、<span className="font-bold">握力ではなくフォームと力の問題</span>
                </li>
                <li>
                  ▸ まずは<span className="font-bold">親指まで巻く・握る位置・チョーク</span>。お金のかからない工夫から
                </li>
                <li>
                  ▸ 背中を鍛えるなら<span className="font-bold">パワーグリップ</span>、パワーリフティングの大会に出るなら<span className="font-bold">オルタネイトかフック</span>
                </li>
                <li>
                  ▸ ストラップ類を使った記録でも現在地は分かる。ただし<span className="font-bold">比べる記録は、使う・使わないのどちらかに固定</span>する
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
          title="デッドリフトで握力が足りない・持たないときの対処｜握り方3種類とパワーグリップ"
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
