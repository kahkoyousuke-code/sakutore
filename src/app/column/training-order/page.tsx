import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレの順番｜種目の順番と、有酸素はどっちが先か - サクトレ",
  description:
    "順番のルールは3つだけ。大きい種目から、高重量から、有酸素は筋トレの後。1回のトレーニングの流れを表にして、胸・背中・脚・肩腕それぞれの種目の並べ方と、腹筋をいつやるかまで解説します。筋トレ歴15年の筆者が実際に使っている順番つき。",
  path: "/column/training-order",
});

// 1回のトレーニングの流れ。時間は60分を確保できた日の配分。
const SESSION_FLOW = [
  {
    step: "1",
    name: "動的ストレッチ",
    time: "5分",
    detail: "関節を大きく動かす。座って伸ばすのはここではやらない",
  },
  {
    step: "2",
    name: "アップセット",
    time: "5分",
    detail: "その日の1種目目を、軽い重量から段階的に上げる",
  },
  {
    step: "3",
    name: "メイン種目（大きい種目）",
    time: "20分",
    detail: "ベンチプレス・スクワットなど、いちばん重いものを最初に",
  },
  {
    step: "4",
    name: "補助種目（小さい種目）",
    time: "20分",
    detail: "フライ・サイドレイズなど、1つの筋肉を狙うもの",
  },
  {
    step: "5",
    name: "腹筋",
    time: "5分",
    detail: "先にやると体幹が効かなくなるので最後",
  },
  {
    step: "6",
    name: "有酸素",
    time: "任意",
    detail: "やるならここ。筋トレの前ではなく後",
  },
  {
    step: "7",
    name: "静的ストレッチ",
    time: "5分",
    detail: "ゆっくり伸ばすのはトレーニングが終わってから",
  },
];

// 部位ごとの並べ方の例。どれも「大きい種目 → 小さい種目」で並べてある。
const DAY_ORDER = [
  {
    day: "胸の日",
    order: "ベンチプレス → インクラインダンベルプレス → ダンベルフライ → ケーブルクロスオーバー",
  },
  {
    day: "背中の日",
    order: "懸垂（またはラットプルダウン）→ ベントオーバーロウ → シーテッドロウ → ストレートアームプルダウン",
  },
  {
    day: "脚の日",
    order: "スクワット → レッグプレス → ルーマニアンデッドリフト → レッグエクステンション・レッグカール → カーフレイズ",
  },
  {
    day: "肩・腕の日",
    order: "ショルダープレス → サイドレイズ → リアレイズ → バーベルカール → トライセプスプッシュダウン",
  },
];

// 有酸素をどこに置くかは目的で決まる。順番そのものは全部「筋トレが先」。
const CARDIO_ROWS = [
  {
    goal: "筋肉を増やしたい",
    answer: "筋トレ → 有酸素",
    note: "有酸素は短めに。別日に分けられるならそのほうがいい",
  },
  {
    goal: "脂肪を落としたい",
    answer: "筋トレ → 有酸素",
    note: "先に糖質を使っておくと、その後の有酸素で脂肪が使われやすい",
  },
  {
    goal: "体力・心肺機能を上げたい",
    answer: "有酸素を別日に",
    note: "この目的だけは有酸素が主役。筋トレの後だと質が落ちる",
  },
  {
    goal: "時間がない",
    answer: "筋トレだけやる",
    note: "削るなら有酸素から。筋トレは後から取り返しがきかない",
  },
];

export default function TrainingOrderPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレの順番｜種目の順番と、有酸素はどっちが先か
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                順番のルールは3つしかありません。
              </p>
              <ul className="mt-2 space-y-1">
                <li>▸ <span className="font-bold">大きい種目から、小さい種目へ</span></li>
                <li>▸ <span className="font-bold">重いものから、軽いものへ</span></li>
                <li>▸ <span className="font-bold">有酸素は筋トレの後</span></li>
              </ul>
              <p className="mt-3">
                理由は全部同じで、<span className="font-bold">後回しにしたものほど、疲れた体でやることになるから</span>です。いちばん伸ばしたいものを、いちばん元気なうちにやる。順番の話はこれに尽きます。
              </p>
              <p className="mt-2">
                以下、1回の流れ・部位ごとの並べ方・有酸素の置き場所の順に具体化します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1回のトレーニングの流れ
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        やること
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        時間
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        中身
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SESSION_FLOW.map((row) => (
                      <tr key={row.step}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.step}. {row.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.time}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 60分とれた日の配分です。30分しかない日は4と6を削ります。
              </p>
              <p className="mt-3">
                ストレッチが<span className="font-bold">前と後で種類が違う</span>点だけ補足しておきます。前は関節を動かす動的ストレッチ、後はゆっくり伸ばす静的ストレッチです。<span className="font-bold">トレーニング前に静的ストレッチを長くやると、直後の力が落ちます。</span>使い分けは
                <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                  ストレッチの効果とやり方
                </Link>
                にまとめました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜ大きい種目が先なのか
              </h2>
              <p>
                ベンチプレスは、胸だけで挙げているわけではありません。<span className="font-bold">三頭筋（腕の裏）と肩の前側が一緒に働いています。</span>
              </p>
              <p className="mt-2">
                ここで順番を逆にして、先に腕の種目で三頭筋を追い込んでしまうとどうなるか。<span className="font-bold">胸がまだ元気なのに、腕が先に力尽きてベンチが挙がらなくなります。</span>胸を鍛えに来たのに、胸に届く前に終わるわけです。
              </p>
              <p className="mt-2">
                背中も同じで、先に腕のカールをやると、ロウや懸垂で二頭筋が先に限界を迎えます。脚も、先にレッグエクステンションで太ももを疲れさせるとスクワットの重量が落ちます。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">小さい筋肉は、大きい種目の「土台」として先に消費してはいけない</span>ということです。土台を残したまま重いものを終わらせて、余った力で小さい種目を仕上げる。これが順番の原則です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                部位別・種目の並べ方の例
              </h2>
              <div className="space-y-3 mt-3">
                {DAY_ORDER.map((row) => (
                  <div
                    key={row.day}
                    className="border border-gray-100 rounded-xl p-3"
                  >
                    <p className="font-bold text-gray-800 text-xs mb-1">{row.day}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{row.order}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                腕の中でどちらを優先するか（結論は三頭筋）は
                <Link href="/column/arm-training" className="text-orange-600 font-bold underline">
                  腕を太くする筋トレ
                </Link>
                に、お尻を狙うときの並べ方は
                <Link href="/column/hip-training" className="text-orange-600 font-bold underline">
                  お尻を鍛える筋トレ
                </Link>
                に書きました。
              </p>
              <p className="mt-2">
                どれも<span className="font-bold">バーベルやマシンで複数の関節を使う種目が先、1つの筋肉だけを狙う種目が後</span>になっています。種目名が変わっても、この並びさえ守れば順番で失敗することはありません。
              </p>
              <p className="mt-2">
                どの部位をどの曜日にやるか自体は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                で決まります。週に何回行けるかがまだ決まっていない人は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                が先です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                腹筋は最後にやる
              </h2>
              <p>
                腹筋を最初にやる人がときどきいますが、これはおすすめしません。<span className="font-bold">スクワットもデッドリフトも、体幹が固まっていることを前提にした種目</span>だからです。
              </p>
              <p className="mt-2">
                先に腹筋を疲れさせると、重いものを持ったときに背中が丸まりやすくなります。重量が落ちるだけならまだしも、<span className="font-bold">腰を痛める入口になります。</span>腹筋は回復が速い部位なので、最後に回しても十分に効かせられます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                有酸素運動は筋トレの前？後？
              </h2>
              <p>
                <span className="font-bold">後です。</span>これは目的が何であってもほぼ変わりません。
              </p>
              <p className="mt-2">
                先に走ると、筋トレで使う分のエネルギーと集中力を先に消費してしまいます。20分走ったあとのスクワットは、確実に重量が落ちます。逆に筋トレを先にやると、糖質をある程度使った状態で有酸素に入るので、<span className="font-bold">脂肪が使われやすい</span>という利点まで付いてきます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        目的
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        順番
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CARDIO_ROWS.map((row) => (
                      <tr key={row.goal}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.goal}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.answer}
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
                なぜ脂肪を落とす目的でも筋トレが先なのかは、
                <Link href="/column/metabolism" className="text-orange-600 font-bold underline">
                  筋トレで痩せる仕組み
                </Link>
                と
                <Link href="/column/muscle-vs-cardio-women" className="text-orange-600 font-bold underline">
                  脂肪燃焼に筋トレが有酸素より効果的な理由
                </Link>
                で数字を出して説明しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                最初の1種目は、いきなり本番の重量から入らない
              </h2>
              <p>
                順番の話でいちばん抜けやすいのが、<span className="font-bold">その日の1種目目の入り方</span>です。ベンチプレスで80kgを扱う人が、1セット目からいきなり80kgを持つと、力も出ませんし怪我のリスクも上がります。
              </p>
              <p className="mt-2">
                段階的に上げていきます。たとえば本番80kgなら、バーだけ（20kg）で10回 → 40kgで5回 → 60kgで3回 → 本番80kg、という具合です。<span className="font-bold">アップのセットで疲れないよう、回数は少なめに。</span>
              </p>
              <p className="mt-2">
                自分の本番重量が今どのくらいかを確かめたいときは
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                が使えます。体重に対して今どの位置にいるかは
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  重量チェッカー
                </Link>
                で確認できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                原則を破っていい場合
              </h2>
              <p>
                例外は2つだけあります。
              </p>
              <p className="mt-2">
                1つめは<span className="font-bold">弱点を優先したいとき</span>。どうしても伸ばしたい部位がある場合は、その種目を小さい種目でも先頭に置きます。伸ばしたいものを、いちばん元気なうちにやる——原則の考え方自体は同じです。
              </p>
              <p className="mt-2">
                2つめは<span className="font-bold">フォームを覚えている最中の種目</span>。疲れた状態で新しい動きを練習しても、崩れたフォームを覚えるだけです。重量が軽くても先にやってください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はフィジーク志向なので、この「弱点を先頭に置く」例外をずっと使ってきました。結果として上半身に偏り、<span className="font-bold">ベンチ120kg・スクワット120kg・デッドリフト160kg</span>という、スクワットが明らかに軽いBIG3になっています（通常はスクワットがベンチの1.5倍前後）。
                <br />
                <br />
                これは失敗ではなく、順番で優先度を表現した結果です。<span className="font-bold">限られた体力をどこに先に使うかは、そのまま体つきに出ます。</span>逆に言えば「全部を均等に伸ばす順番」は存在しません。何を先にやるかを決めることが、何を諦めるかを決めることでもあります（
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                有酸素を先にやってしまった日はどうすれば？
              </h3>
              <p>
                その日は重量を落として、回数で組んでください。無理に普段の重量を狙うと、フォームが崩れた状態で挙げることになります。<span className="font-bold">1日の順番の失敗は、翌週に取り返せます。</span>
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                マシンとフリーウェイトはどちらを先に？
              </h3>
              <p>
                原則どおり<span className="font-bold">大きい種目が先</span>です。多くの場合それはバーベルやダンベルの種目になります。ただし初心者がフォームを覚える段階では、マシンで動きを覚えてからフリーウェイトに移るほうが安全です（
                <Link href="/column/gym-beginner" className="text-orange-600 font-bold underline">
                  ジム初心者が最初にやるべきマシン5選
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                全身をやる日は、どの部位から始めますか？
              </h3>
              <p>
                <span className="font-bold">脚 → 背中 → 胸 → 肩・腕 → 腹筋</span>の順です。いちばん消耗する脚を最初に置きます。脚を最後に回すと、ほぼ確実に「今日はもういいか」になります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                時間がない日は、どこから削ればいいですか？
              </h3>
              <p>
                有酸素 → 補助種目 → 腹筋の順に削って、<span className="font-bold">メイン種目だけは残します。</span>20分しかなくても、メイン1種目を3セットやれば十分に意味があります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 順番の原則は<span className="font-bold">大きい種目 → 小さい種目</span>。土台になる小さい筋肉を先に使い切らない
                </li>
                <li>
                  ▸ 腹筋は<span className="font-bold">最後</span>。先にやると重い種目で腰が危ない
                </li>
                <li>
                  ▸ <span className="font-bold">有酸素は筋トレの後</span>。心肺が目的のときだけ別日に分ける
                </li>
                <li>
                  ▸ 1種目目は<span className="font-bold">軽い重量から段階的に</span>上げて本番に入る
                </li>
                <li>
                  ▸ 例外は<span className="font-bold">弱点部位</span>と<span className="font-bold">フォーム練習中の種目</span>だけ
                </li>
              </ul>
              <p className="mt-2">
                サクトレのメニュー作成は、この原則（大きい種目 → 小さい種目、腹筋は最後）で並べた状態で今日の1回分を出します。並べ方を毎回考えるのが面倒な人は、出てきた順にやってもらえれば大丈夫です。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/training-order"
          title="筋トレの順番｜種目の順番と、有酸素はどっちが先か"
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
