import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { LIFTS, type LiftId } from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "BIG3の補助種目の選び方｜ベンチプレス・スクワット・デッドリフトが止まる場所別 - サクトレ",
  description:
    "補助種目は「どこで止まるか」で選びます。ベンチプレスでバーが胸から離れない・最後に挙げきれない、スクワットでしゃがんだ位置から立ち上がれない、デッドリフトでバーが床から浮かないなど、止まる場所ごとに足す種目を表にしました。何種目・何セット足すかと、まだ補助種目が要らない時期の見分け方も紹介します。",
  path: "/column/big3-accessory",
});

// 止まる場所ごとの補助種目。数字の基準は置かず、「どこで止まるか→どこが足りないか」で引く。
// 種目名は結果画面の種目カード（src/lib/exercises.ts）にあるものを優先している。
// 膝が内側に入る止まり方は /column/squat-average が「筋力不足ではなく可動域の問題」としているので、
// 補助種目の表には入れず本文でそちらに合わせて扱う。
const ACCESSORIES: {
  lift: LiftId;
  rows: { where: string; weak: string; picks: string }[];
}[] = [
  {
    lift: "bench",
    rows: [
      {
        where: "胸から離れない・胸から少し上がったところで止まる",
        weak: "胸と肩の前側",
        picks: "ダンベルプレス／インクラインダンベルプレス",
      },
      {
        where: "最後の数cmで止まる（腕が伸びきる手前）",
        weak: "上腕三頭筋（腕の裏）",
        picks: "ナローグリップベンチプレス／ディップス",
      },
      {
        where: "バーが左右にぶれる・肩がすくむ",
        weak: "背中（押すときの土台）",
        picks: "ベントオーバーロウ／ワンハンドロウ",
      },
    ],
  },
  {
    lift: "squat",
    rows: [
      {
        where: "しゃがんだ位置から上がらない",
        weak: "太もも前とお尻",
        picks: "ブルガリアンスクワット／レッグプレス",
      },
      {
        where: "立ち上がるとき、お尻が先に上がって前に倒れる",
        weak: "太もも前のことが多い（背中で持ち上げている）",
        picks: "ゴブレットスクワット／レッグエクステンション",
      },
    ],
  },
  {
    lift: "deadlift",
    rows: [
      {
        where: "床から浮かない",
        weak: "脚で床を押す力",
        picks: "レッグプレス／ブルガリアンスクワット",
      },
      {
        where: "膝を過ぎたあたりで止まる",
        weak: "太もも裏と背中",
        picks: "ルーマニアンデッドリフト／ベントオーバーロウ",
      },
      {
        where: "最後に立ちきれない（股関節が伸びきらない）",
        weak: "お尻",
        picks: "ヒップスラスト／バックエクステンション",
      },
    ],
  },
];

// 補助種目の量。回数は /column/beginner-guide の「筋肉を大きくする」帯（6〜12回）、
// セット数は同記事の「1種目あたり2〜3セット」に合わせてある。片方だけ変えないこと。
const DOSE = {
  perLift: "1〜2種目",
  sets: "2〜3セット",
  reps: "6〜12回",
};

const liftLabel = (id: LiftId) => LIFTS.find((l) => l.id === id)?.label ?? id;

export default function Big3AccessoryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            BIG3の補助種目の選び方｜ベンチプレス・スクワット・デッドリフトが止まる場所別
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                BIG3の補助種目に「これをやれば全員伸びる」という正解はありません。<span className="font-bold">選び方の基準は、その種目でバーがどこで止まるか</span>です。止まる場所が分かれば、足りない筋肉が分かり、足す種目が決まります。
              </p>
              <p className="mt-2">
                逆に言うと、止まる場所を見ないで「ベンチの補助種目ならこれ」と種目を足しても、足りている筋肉をさらに鍛えるだけになりがちです。この記事では、止まる場所の見つけ方、止まる場所ごとの補助種目、何種目・何セット足すかの順に説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まだ補助種目が要らない人
              </h2>
              <p>
                BIG3を始めて間もないうちは、<span className="font-bold">BIG3そのものを続けるだけで重量が伸びていくことがほとんどです</span>。この時期にBIG3のための補助種目を増やすと、疲れてメイン種目の練習の質が落ち、かえって遠回りになりがちです。
              </p>
              <p className="mt-2">
                ここでいう補助種目は、<span className="font-bold">BIG3を伸ばすために足す種目</span>のことです。BIG3には上から引き下ろす動き（ラットプルダウンなど）がないので、こうした背中の種目は
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  筋トレ初心者が最初にやるべき5つのこと
                </Link>
                のとおり、補助種目とは別に最初から入れてください。
              </p>
              <p className="mt-2">
                BIG3のための補助種目を考えるのは、<span className="font-bold">フォームが安定し、休養も食事の量も足りていて、セーフティバーや補助者もそろっているのに、数週間、重量が伸びない状態が続いてから</span>です。その前に、どの種目が遅れているかは
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                で確かめられます。手を付けるのは、比率から見ていちばん凹んでいる種目です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                止まる場所の見つけ方
              </h2>
              <p>
                いちばん確実なのは、<span className="font-bold">重めのセットの最後の1回を動画で撮る</span>ことです。バーがいちばん遅くなる位置、または止まる位置が「止まる場所」です。高さは横から、膝が内側に入るか・バーが左右にぶれるかは正面から撮ると分かります。感覚だけで判断すると外れることが多いです。
              </p>
              <p className="mt-2">
                <span className="font-bold">ベンチプレスとスクワットは、セーフティバーを正しい高さに合わせるか、補助者についてもらってから撮ってください。</span>止まる場所を知るために限界まで粘る必要はありません。重めのセットの最後の1回で、バーが遅くなる位置は分かります。
              </p>
              <p className="mt-2">
                ただし、補助種目で解決しない止まり方もあります。<span className="font-bold">背中が丸まる、しゃがむ深さが毎回違う、バーの通り道が毎回違う、スクワットで膝が内側に入る</span>なら、筋力より先に、フォームか体の硬さの問題であることが多いです。重量を落として、フォームをそろえてから撮り直してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                止まる場所別の補助種目
              </h2>
              <div className="space-y-5">
                {ACCESSORIES.map((group) => (
                  <div key={group.lift}>
                    <h3 className="font-bold text-gray-800 mb-2">{liftLabel(group.lift)}の補助種目</h3>
                    <div className="overflow-x-auto -mx-2 px-2">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="bg-orange-50">
                            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                              止まる場所
                            </th>
                            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                              足りない部分
                            </th>
                            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                              足す種目
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.rows.map((row) => (
                            <tr key={row.where}>
                              <td className="border border-gray-200 px-2 py-2 text-gray-700">
                                {row.where}
                              </td>
                              <td className="border border-gray-200 px-2 py-2 text-gray-600">
                                {row.weak}
                              </td>
                              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                                {row.picks}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                ベンチプレスは胸だけでなく、<span className="font-bold">上腕三頭筋と肩の前側も一緒に働く</span>種目です。最後の数cmで止まる人は、胸より腕の裏が先に限界になっていることが多く、胸の種目を足しても重量が伸びにくいです。逆に、胸から少し上がったところで止まるなら、胸と肩の前側の種目が先です。
              </p>
              <p className="mt-2">
                スクワットで「お尻が先に上がる」のは、太もも前で立ち上がれないぶんを、上半身を倒して背中で補っている状態であることが多いです。背中が丸まりながら倒れるなら、筋力ではなくフォームの問題なので、<span className="font-bold">まず、正しい形で立ち上がれる重さまで落として</span>やり直してください。補助種目はその後です。
              </p>
              <p className="mt-2">
                膝が内側に入るのは、筋力より足首などの硬さ（可動域）が原因のことが多く、補助種目で筋力をつけても直りにくい止まり方です。しゃがんだときにかかとが浮くなら、まず
                <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                  筋トレ前後のストレッチ
                </Link>
                で可動域を広げてください。腰やお腹まわりが先にきつくなって止まるなら、補助種目より先にトレーニングベルトを試してください（
                <Link href="/column/lifting-belt" className="text-orange-600 font-bold underline">
                  トレーニングベルトはいつから必要？
                </Link>
                ）。
              </p>
              <p className="mt-2">
                デッドリフトでバーが床から浮かないときは、脚の力を疑う前に、バーがすねに近いか、腰の高さが毎回同じかを確認してください。構えがずれているだけでも、床から浮かないことがあります。最後に立ちきれないときは、<span className="font-bold">上半身を後ろに反らして終わらせず、お尻を前に押し込んで立ちきるようにします</span>。
              </p>
              <p className="mt-2">
                デッドリフトで背中が丸まって止まるなら、補助種目より先に重量を落としてください。背中が丸まる重量で引き続けるのは腰を痛める原因になります。手が先に開いて止まるなら、脚や背中の筋力ではなく握力の問題で、対処は
                <Link href="/column/deadlift-grip" className="text-orange-600 font-bold underline">
                  デッドリフトで握力が足りないときの対処
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                止まる場所で関節に痛みが出るなら、補助種目では解決しません。その種目は中止し、痛みが続くなら整形外科を受診してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                何種目・何セット足すか
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">BIG3の1種目につき、補助種目は{DOSE.perLift}</span>。表の中から、自分の止まる場所の行だけを選ぶ
                </li>
                <li>
                  ▸ <span className="font-bold">補助種目1つにつき{DOSE.sets}、{DOSE.reps}で限界が来る重さ</span>。補助種目は重さの記録より、狙った筋肉に効かせることを優先する。ルーマニアンデッドリフトとバックエクステンションは、背中が丸まる前に止める（あと1〜2回できる余裕を残してよい）
                </li>
                <li>
                  ▸ <span className="font-bold">BIG3の後にやる</span>。凹んでいるBIG3種目をその日の先頭に置き、補助種目はその後。補助種目で疲れてからメイン種目をやると、伸ばしたい種目の重量が落ちる
                </li>
                <li>
                  ▸ <span className="font-bold">同じ補助種目を数週間続けてから判断する</span>。毎回入れ替えると、効いたかどうかが分からない
                </li>
              </ul>
              <p className="mt-3">
                回数とセット数は、
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  筋トレ初心者が最初にやるべき5つのこと
                </Link>
                の目的別の表（筋肉を大きくする行）と、セット数の目安に合わせています。補助種目を足すと、その部位の1週間のセット数も増えます。増やしすぎると回復が追いつかないので、週あたりの量は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                の表の範囲に収めてください。メイン種目を5×5、補助種目を3×10のように組むときの重さの決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                にあります。1回の中での並べ方は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私の自己ベストはベンチプレス120kg・スクワット120kg・デッドリフト160kgです。フィジーク志向で上半身を優先してきたので、比率で見ると、スクワットとデッドリフトの下半身2種目がどちらも軽めです。
                <br />
                <br />
                ベンチプレスの補助種目でいうと、
                <Link href="/column/arm-training" className="text-orange-600 font-bold underline">
                  腕を太くする筋トレ
                </Link>
                にも書いたとおり、私の腕が育った時期はベンチプレスとディップスの重量が伸びた時期と重なります。<span className="font-bold">ディップスはベンチの補助種目であると同時に、腕の裏を育てる種目</span>でもあります。補助種目は「メイン種目を伸ばすため」に選んでも、見た目の変化にもちゃんとつながります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                BIG3だけでは筋肉はつきませんか？
              </h3>
              <p>
                つきます。始めたばかりの時期は、脚と胸はBIG3で十分な刺激が入ります。ただし上から引き下ろす動き（背中）や、頭の上に押し上げる動き（肩）はBIG3にないので、ラットプルダウンやショルダープレスは最初から入れてください。そのうえで、BIG3のための補助種目が要るのは重量が止まってからです。腕や肩など<span className="font-bold">BIG3で刺激が入りにくい部位を見た目のために育てたいとき</span>も、種目を足す理由になります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                補助種目はマシンでもいいですか？
              </h3>
              <p>
                構いません。表のレッグプレスやレッグエクステンションはマシンの種目です。<span className="font-bold">足りない筋肉に効いていれば、フリーウエイト（バーベルやダンベル）かマシンかは問いません</span>。マシンは軌道が決まっているぶん、疲れていても狙った筋肉に効かせやすい利点もあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                止まる場所が毎回違います。
              </h3>
              <p>
                その場合は、筋力不足よりも<span className="font-bold">フォームが毎回違っている</span>可能性が高いです。止まる場所が1か所にそろうまでは、重量を少し落として、同じ動きを繰り返す練習を優先してください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                補助種目を増やせば、もっと早く伸びますか？
              </h3>
              <p>
                そうとは限りません。補助種目が多すぎると、疲れが抜けないままBIG3の日が来て、メイン種目の重量が落ちやすくなります。<span className="font-bold">増やすより、止まる場所に合った1〜2種目に絞る</span>ほうが確実です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 補助種目は<span className="font-bold">止まる場所</span>で選ぶ。重めのセットの最後の1回を動画で撮ると分かる
                </li>
                <li>
                  ▸ 始めたばかりで重量が伸びているうちは、<span className="font-bold">BIG3のための補助種目はまだ要らない</span>
                </li>
                <li>
                  ▸ 背中が丸まる・深さや通り道が毎回違う・膝が内側に入るなら、補助種目より先に<span className="font-bold">重量を落としてフォームと可動域を見直す</span>
                </li>
                <li>
                  ▸ 足すのは<span className="font-bold">BIG3の1種目につき{DOSE.perLift}、それぞれ{DOSE.sets}・{DOSE.reps}</span>。BIG3の後にやる
                </li>
                <li>
                  ▸ 手を付けるのは、<span className="font-bold">比率でいちばん凹んでいる種目</span>から
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/big3-accessory"
          title="BIG3の補助種目の選び方｜ベンチプレス・スクワット・デッドリフトが止まる場所別"
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
