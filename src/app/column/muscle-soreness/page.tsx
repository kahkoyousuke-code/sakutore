import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  SORENESS_LONG_HOURS,
  recoveryRows,
  sorenessPhases,
} from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "筋肉痛でも筋トレしていい？判断の基準と部位別の回復時間 - サクトレ",
  description:
    "答えは「痛む部位はやらない、別の部位はやっていい」。痛み方別の判断表と、筋肉痛の経過（ピークは24〜48時間後）、部位別の回復時間の目安を一覧にしました。筋肉痛＝成長のサインではない理由も、40代で週5回続けている筆者が解説します。",
  path: "/column/muscle-soreness",
});

// 痛み方から「今日やっていいか」を決める表。感覚ではなく症状で分ける。
const JUDGE_ROWS = [
  {
    state: "動かすとじんわり痛い",
    judge: "別の部位をやる",
    ok: true,
    note: "痛む部位だけ外せばトレーニング自体は休まなくていい",
  },
  {
    state: "軽く動かすと楽になる",
    judge: "軽い重量ならやってよい",
    ok: true,
    note: "血流が戻ると痛みは薄れる。ただし記録更新は狙わない",
  },
  {
    state: "押すと強く痛む・力が入らない",
    judge: "その部位は休む",
    ok: false,
    note: "回復が終わっていない。重量が落ちて練習の質も下がる",
  },
  {
    state: "関節が痛い・鋭い痛み・しびれ",
    judge: "中止する",
    ok: false,
    note: "筋肉痛ではない。続けると怪我になる",
  },
  {
    state: "4日以上ずっと痛い",
    judge: "強度を下げて仕切り直す",
    ok: false,
    note: "そのボリュームが今の回復力に合っていない",
  },
];

// 「早く治す」系でよく挙がる方法の整理。効くものと効かないものを混ぜない。
const CARE_ROWS = [
  { care: "睡眠を7時間以上とる", effect: "◎", note: "回復の土台。削ると何をしても戻らない" },
  { care: "タンパク質をとる", effect: "◎", note: "材料がなければ修復が進まない" },
  { care: "軽く歩く・軽い重量で動かす", effect: "○", note: "血流が増えて痛みが引きやすい" },
  { care: "入浴で温める", effect: "○", note: "動かしやすくなる。回復そのものを速める効果は限定的" },
  { care: "運動後の静的ストレッチ", effect: "△", note: "筋肉痛の予防効果は確認されていない" },
  { care: "痛み止めで消す", effect: "×", note: "痛みは消えても回復は進まない。判断材料まで消える" },
];

export default function MuscleSorenessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋肉痛でも筋トレしていい？判断の基準と部位別の回復時間
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                結論から書きます。<span className="font-bold">痛む部位はやらない。それ以外の部位はやっていい。</span>これだけです。
              </p>
              <p className="mt-2">
                「筋肉痛だから今日は休もう」と考える人が多いのですが、それだと胸が痛いだけで脚も背中も休むことになります。<span className="font-bold">休ませるのは部位であって、あなた自身ではありません。</span>
              </p>
              <p className="mt-2">
                とはいえ「痛い」にも種類があります。やっていい痛みと、やってはいけない痛みを先に表で分けます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                痛み方別・今日やっていいかの判断表
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        いまの状態
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        判断
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        理由
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {JUDGE_ROWS.map((row) => (
                      <tr key={row.state}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.state}
                        </td>
                        <td
                          className={`border border-gray-200 px-2 py-2 font-bold whitespace-nowrap ${
                            row.ok ? "text-orange-600" : "text-gray-800"
                          }`}
                        >
                          {row.judge}
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
                迷ったときの基準はひとつです。<span className="font-bold">前回と同じ重量で、同じ回数が挙がるかどうか。</span>やってみて明らかに回数が落ちるなら、それは気のせいではなく回復が終わっていない客観的なサインです。判断の材料は
                <Link href="/column/rest" className="text-orange-600 font-bold underline">
                  休息の記事
                </Link>
                にセルフチェック表としてまとめてあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋肉痛はいつピークが来て、いつ消えるのか
              </h2>
              <p>
                筋トレのあとに出る痛みは、正式には<span className="font-bold">遅発性筋痛</span>と呼ばれます。名前のとおり、運動した直後ではなく<span className="font-bold">時間が経ってから出る</span>のが特徴です。「翌日より翌々日のほうが痛い」のはこのためで、異常ではありません。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        経過
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        状態
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        やること
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorenessPhases.map((row) => (
                      <tr key={row.timing}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.timing}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.state}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                目安として、<span className="font-bold">{SORENESS_LONG_HOURS}時間（3日）を過ぎても痛みが引かないなら、その日のボリュームが今の回復力に対して多すぎます。</span>種目を減らすか、セット数を落としてください。根性の問題ではなく、量の設定の問題です。
              </p>
              <p className="mt-2">
                ちなみに「乳酸がたまって痛い」という説明を見かけますが、乳酸は運動後すぐに減っていきます。<span className="font-bold">数日後にピークが来る痛みの説明にはなりません。</span>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋肉痛＝成長のサイン、ではない
              </h2>
              <p>
                いちばん誤解されているのがここです。<span className="font-bold">筋肉痛の強さと、筋肉の増え方は比例しません。</span>
              </p>
              <p className="mt-2">
                筋肉痛が強く出るのは、慣れていない動きをしたときです。久しぶりの種目、初めてのフォーム、下ろす動作をゆっくりやったとき。つまり<span className="font-bold">「新しさ」に反応している</span>のであって、効いた量を表しているわけではありません。同じメニューを続ければ筋肉痛は出にくくなりますが、そのとき筋肉が伸びなくなっているわけではないですよね。
              </p>
              <p className="mt-2">
                伸びているかどうかを見る指標は、痛みではなく<span className="font-bold">扱える重量と回数</span>です。体が変わる順番と時間の感覚は
                <Link href="/column/effect-timeline" className="text-orange-600 font-bold underline">
                  筋トレの効果はいつから出る？
                </Link>
                にまとめました。
              </p>
              <p className="mt-2">
                逆に、筋肉痛を出しにいくトレーニングには意味がありません。痛くすることは簡単で、慣れない種目を全力でやれば誰でもできます。ただしその代償として<span className="font-bold">次の2〜3日、その部位が使えなくなります。</span>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                部位別の回復時間の目安
              </h2>
              <p>
                痛む部位を避けて別の部位をやるには、どの部位が何日で戻るのかを知っておくと組みやすくなります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        回復の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次に鍛えるまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recoveryRows.map((row) => (
                      <tr key={row.part}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.part}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.hours}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.interval}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                ここで注意したいのが<span className="font-bold">肩と腕</span>です。胸の日には三頭筋と肩の前側が、背中の日には二頭筋が一緒に働いています。腕が筋肉痛のときに胸や背中をやると、<span className="font-bold">腕が先に限界を迎えて本命の部位に効かない</span>ということが起きます。
              </p>
              <p className="mt-2">
                この「重なり」を前提に曜日を組んだものが分割法です。週の回数別の組み方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                に、回数そのものの決め方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                早く治すために、効くこと・効かないこと
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        やること
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        効果
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CARE_ROWS.map((row) => (
                      <tr key={row.care}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.care}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-800">
                          {row.effect}
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
                上の2つが圧倒的です。<span className="font-bold">睡眠とタンパク質以外は、どれも「痛みを感じにくくする」工夫であって、修復そのものを速めるものではありません。</span>それぞれの詳細は
                <Link href="/column/sleep" className="text-orange-600 font-bold underline">
                  筋トレと睡眠の関係
                </Link>
                と
                <Link href="/column/protein" className="text-orange-600 font-bold underline">
                  必要なタンパク質の量
                </Link>
                に書いています。
              </p>
              <p className="mt-2">
                なお、運動後の静的ストレッチで筋肉痛を予防できるという説は、調べると裏づけが弱い部類に入ります。だからといって無駄ではなく、<span className="font-bold">狙いが「予防」ではなく「柔軟性と可動域」なだけ</span>です（
                <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                  ストレッチの効果とやり方
                </Link>
                ）。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・40代）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はいまも週5回トレーニングしていて、完全休養は週2日だけです。ではいつも筋肉痛を無視して突っ込んでいるのかというと、逆です。<span className="font-bold">部位を分けているので、痛い部位に当たる日がそもそも来ません。</span>胸が痛い日は脚、脚が痛い日は背中、という具合に回しているだけです。
                <br />
                <br />
                15年やってきて、<span className="font-bold">筋肉痛が強かった週にいちばん伸びた、という記憶はありません</span>。伸びたのは、同じ種目を同じフォームで淡々と続けて、少しずつ重量が上がっていった時期のほうでした。40代になってからは回復が遅くなった実感があるので、痛みが3日引かないメニューは組まないようにしています（
                <Link href="/column/over40" className="text-orange-600 font-bold underline">
                  40代からの筋トレ入門
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛が来ません。効いていないということですか？
              </h3>
              <p>
                いいえ。慣れた種目では出にくくなるのが普通です。<span className="font-bold">重量か回数が前回より伸びているなら、効いています。</span>逆に数ヶ月ずっと同じ重量なら、痛みの有無に関係なく刺激が足りていません。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛のまま同じ部位をやったらどうなりますか？
              </h3>
              <p>
                重量が落ちます。その日のトレーニングの質が下がるだけでなく、回復が終わっていない筋肉に次のダメージを重ねることになるので、痛みが長引きます。<span className="font-bold">得られるものより失うもののほうが多い</span>選択です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                筋肉痛のときに有酸素運動はしていいですか？
              </h3>
              <p>
                痛む部位を強く使わないものなら問題ありません。むしろ軽い歩行は血流が増えて楽になります。ただし脚が筋肉痛のときのランニングは、脚のトレーニングの続きになってしまうので避けてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                始めたばかりで全身が痛いです。休むべきですか？
              </h3>
              <p>
                最初の数週間は全身に強く出ますが、これは一時的なものです。<span className="font-bold">痛みが引くまで休み、次の回は種目数を減らして再開してください。</span>初回に頑張りすぎて2週間空くより、8割の強度で週2回続けるほうが結果的に速く進みます（
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  初心者が最初にやるべき5つのこと
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                プロテインを飲めば筋肉痛は軽くなりますか？
              </h3>
              <p>
                痛みが消えるわけではありませんが、<span className="font-bold">材料が足りていない状態よりは回復が進みます。</span>体重1kgあたり1.6〜2.2gを目安に、1日を通して足りているかを見てください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 痛む部位はやらない、<span className="font-bold">別の部位はやっていい</span>。休ませるのは部位であって自分ではない
                </li>
                <li>
                  ▸ ピークは<span className="font-bold">24〜48時間後</span>。3日を過ぎても痛いならボリュームが多すぎる
                </li>
                <li>
                  ▸ <span className="font-bold">筋肉痛の強さは成長の量ではない</span>。見る指標は重量と回数
                </li>
                <li>
                  ▸ 関節の痛み・鋭い痛み・しびれは筋肉痛ではない。<span className="font-bold">その日は中止</span>
                </li>
                <li>
                  ▸ 早く戻すために効くのは<span className="font-bold">睡眠とタンパク質</span>。残りは痛みを感じにくくする工夫
                </li>
              </ul>
              <p className="mt-2">
                サクトレのメニュー作成は、直近でどの部位をやったかの履歴をもとに、<span className="font-bold">回復が間に合っていない部位を避けたメニュー</span>を提案します。痛い部位を自分で避けて種目を組み直すのが面倒な日にどうぞ。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/muscle-soreness"
          title="筋肉痛でも筋トレしていい？判断の基準と部位別の回復時間"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">回復を支えるプロテインを見る →</p>
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
