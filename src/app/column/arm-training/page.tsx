import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import { recoveryFor } from "@/lib/recoveryStandards";
import { dumbbellWeight, formatDumbbell } from "@/lib/dumbbellStandards";

export const metadata = pageMetadata({
  title: "腕を太くする筋トレ｜二頭より三頭を優先すべき理由 - サクトレ",
  description:
    "上腕の太さの3分の2は三頭筋（腕の裏）です。カールばかりやっても腕は太くなりません。三頭・二頭それぞれの種目一覧、腕トレの日を作るべきかの判断、ダンベルの重さの目安（体重70kgならカール片手14kg）まで、筋トレ歴15年・フィジーク大会入賞の筆者が解説します。",
  path: "/column/arm-training",
});

// 三頭筋の種目。肘を伸ばす動きで、腕の太さの大半を作る側。
const TRICEPS = [
  {
    name: "ナローグリップベンチプレス",
    point: "最も重い重量を扱える。三頭を太くする軸の種目",
    place: "ジム",
  },
  {
    name: "ディップス",
    point: "自重で高負荷。体を立てるほど三頭に寄る",
    place: "ジム・公園",
  },
  {
    name: "ライイングトライセプスエクステンション",
    point: "肘を固定して伸ばす。長頭（内側の大きい部分）に効く",
    place: "ジム・自宅",
  },
  {
    name: "トライセプスプッシュダウン",
    point: "仕上げ向き。フォームが崩れにくく初心者でも効かせやすい",
    place: "ジム",
  },
  {
    name: "ダイヤモンドプッシュアップ",
    point: "器具なしで三頭を狙える。自宅の第一候補",
    place: "自宅",
  },
];

// 二頭筋の種目。肘を曲げる動きで、力こぶの高さを作る側。
const BICEPS = [
  {
    name: "バーベルカール",
    point: "重量を伸ばしやすい。二頭の基本種目",
    place: "ジム",
  },
  {
    name: "インクラインダンベルカール",
    point: "肘が体の後ろに来るので、二頭を大きく伸ばせる",
    place: "ジム・自宅",
  },
  {
    name: "ハンマーカール",
    point: "腕橈骨筋を使う。前腕まで含めた太さが出る",
    place: "ジム・自宅",
  },
  {
    name: "コンセントレーションカール",
    point: "反動を使えない姿勢。効かせる感覚を覚えるのに向く",
    place: "ジム・自宅",
  },
];

export default function ArmTrainingPage() {
  const armRecovery = recoveryFor("small");
  const exampleWeight = 70;
  const curlIntermediate = dumbbellWeight(exampleWeight, "curl", "male", "中級者");
  const curlBeginner = dumbbellWeight(exampleWeight, "curl", "male", "初心者");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            腕を太くする筋トレ｜二頭より三頭を優先すべき理由
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                腕を太くしたい人の多くが、<span className="font-bold">力こぶ（上腕二頭筋）を鍛えています。</span>ダンベルカール、バーベルカール、また次の日もカール。
              </p>
              <p className="mt-2">
                ですが太さを決めているのは、その裏側です。<span className="font-bold">上腕の筋肉のうち、およそ3分の2は三頭筋（腕の裏）</span>が占めています。二頭筋は残りの3分の1ほどです。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">腕の太さを1cm増やしたいなら、力こぶではなく裏側を鍛えるほうが近道</span>ということになります。半袖から見えているのも、実は腕の裏側の面積のほうが大きいはずです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                三頭筋の種目（優先）
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        特徴
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        場所
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRICEPS.map((row) => (
                      <tr key={row.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.point}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.place}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                この中で優先度が高いのは、<span className="font-bold">重い重量を扱える種目</span>です。ナローグリップベンチプレスとディップスは、プッシュダウンの何倍もの負荷をかけられます。<span className="font-bold">仕上げの種目から始めない</span>のが大事で、これは
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                の原則そのままです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                二頭筋の種目
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        特徴
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        場所
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BICEPS.map((row) => (
                      <tr key={row.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.point}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.place}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                二頭は<span className="font-bold">重さより、伸ばしてから曲げること</span>で決まります。体の横で曲げるより、肘が後ろに来るインクラインカールのほうが可動域が広く取れます。カールで扱う重さの目安は、体重{exampleWeight}kgの男性で
                <span className="font-bold">
                  初心者が片手{formatDumbbell(curlBeginner)}、中級者で{formatDumbbell(curlIntermediate)}
                </span>
                （どちらも反動なしで10回）です。他の種目の目安は
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                そもそも「腕の日」は必要か
              </h2>
              <p>
                これは正直に書いておきます。<span className="font-bold">初心者のうちは、腕だけの日は要りません。</span>
              </p>
              <p className="mt-2">
                ベンチプレスでは三頭筋が、背中のロウや懸垂では二頭筋が、すでに一緒に働いています。胸と背中をしっかりやっていれば、腕には自動的に刺激が入っているということです。<span className="font-bold">腕の日を足すのは、胸と背中のメニューが固まってから</span>で間に合います。
              </p>
              <p className="mt-2">
                頻度の目安としては、腕は小さい筋肉なので回復は
                <span className="font-bold">{armRecovery.hours}</span>、間隔は<span className="font-bold">{armRecovery.interval}</span>です。ただし胸の日にも背中の日にも使われている点に注意してください。<span className="font-bold">腕トレを週3回入れると、実際には週5回使っている</span>ことになりがちです（
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                腕は、太くなるのが遅い
              </h2>
              <p>
                期待値の話をしておきます。初心者が1ヶ月で増やせる筋肉はよくて0.5kg、そのうち<span className="font-bold">腕2本に回るのはせいぜい2割（100g）</span>です。上腕の太さに直すと<span className="font-bold">1ヶ月で数mm</span>にしかなりません。
              </p>
              <p className="mt-2">
                計算の中身は
                <Link href="/column/effect-timeline" className="text-orange-600 font-bold underline">
                  筋トレの効果はいつから出る？
                </Link>
                に書きましたが、結論だけ言えば<span className="font-bold">腕はメジャーで測らないと変化が分からない部位</span>です。鏡で見て変わらないからといって、やり方が間違っているわけではありません。
              </p>
              <p className="mt-2">
                逆に短期間で腕まわりが変わったように見えるときは、<span className="font-bold">脂肪が落ちた</span>か<span className="font-bold">トレーニング直後で張っている</span>かのどちらかです。前者は続ければ本物になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある失敗
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">カールしかやらない</span>：太さの3分の2を占める側を放置している状態。三頭を先に入れる
                </li>
                <li>
                  ▸ <span className="font-bold">重すぎて体を振る</span>：反動で上げた分は腕の仕事ではありません。肘の位置が動いたら重すぎ
                </li>
                <li>
                  ▸ <span className="font-bold">毎日腕トレ</span>：胸・背中の日にも使われているので、実質は毎日2回分。伸びる前に潰れます
                </li>
                <li>
                  ▸ <span className="font-bold">プッシュダウンから始める</span>：仕上げ種目で疲れてから重い種目に入ると、どちらも中途半端になります
                </li>
              </ul>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はフィジーク志向で上半身を優先してきました。ベンチプレスの自己ベストは120kgです。ここで腕について正直に書くと、<span className="font-bold">腕が育った時期は「腕トレを増やした時期」ではありません</span>でした。ベンチプレスとディップスの重量が伸びた時期です。
                <br />
                <br />
                三頭筋は<span className="font-bold">胸を押す動きに必ず参加する</span>ので、胸が強くなると勝手に太くなります。逆に、腕の日だけを熱心にやっていた時期は、疲れてベンチの重量が落ち、結果として腕も止まりました。<span className="font-bold">腕は、腕だけを見ていると伸びにくい部位</span>だと思っています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自宅でも腕は太くできますか？
              </h3>
              <p>
                できます。三頭はダイヤモンドプッシュアップとディップス（椅子2脚でも可）、二頭はダンベルカールでまかなえます。ただし<span className="font-bold">二頭は自重で負荷をかけにくい</span>ので、ダンベルがあると話が早いです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                何回・何セットやればいいですか？
              </h3>
              <p>
                腕は小さい筋肉なので、<span className="font-bold">1種目3セット、三頭2種目・二頭1〜2種目</span>で十分です。回数は8〜12回。これ以上増やしても、回復が追いつかないぶん無駄になります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                前腕も鍛えるべきですか？
              </h3>
              <p>
                専用の種目は優先度が低いです。<span className="font-bold">ハンマーカールとロウ系の種目で自然に育ちます。</span>握力で先に限界が来るならパワーグリップを使うほうが早いです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性が腕を鍛えると太くなりますか？
              </h3>
              <p>
                いわゆる「たくましい腕」にはなりません。理由はホルモンの差で、
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                に書いています。二の腕を引き締めたい場合も、鍛えるのは三頭筋のほうです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 上腕の<span className="font-bold">3分の2は三頭筋</span>。太くしたいならカールより先に裏側
                </li>
                <li>
                  ▸ 三頭は<span className="font-bold">重い種目（ナローベンチ・ディップス）が軸</span>。プッシュダウンは仕上げ
                </li>
                <li>
                  ▸ 二頭は重さより<span className="font-bold">伸ばしてから曲げる</span>。肘が動いたら重すぎ
                </li>
                <li>
                  ▸ 初心者に<span className="font-bold">腕の日は不要</span>。胸と背中の日で先に刺激が入っている
                </li>
                <li>
                  ▸ 変化は<span className="font-bold">1ヶ月で数mm</span>。鏡ではなくメジャーで測る
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/arm-training"
          title="腕を太くする筋トレ｜二頭より三頭を優先すべき理由"
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
