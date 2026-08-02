import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import RizapCta from "@/components/RizapCta";

export const metadata = pageMetadata({
  title: "食事制限だけでリバウンドする理由｜10kg減の中身を比較 - サクトレ",
  description:
    "同じ10kg減でも食事制限のみと筋トレ併用では中身が違います。脂肪と筋肉の内訳を数字で比較し、筋肉を残せる減量ペースの目安表も掲載。90kg→78kgを1年かけて落とした筆者の実ペースも公開します。",
  path: "/column/diet-rebound-muscle",
});

export default function DietReboundMusclePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            食事制限だけでリバウンドする理由と筋トレの関係
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                90kgを超えていた頃、食事制限だけで何度もリバウンドを繰り返しました。筋トレと組み合わせてから初めてリバウンドしなくなった経験をお伝えします。
              </p>
              <p>
                「食事制限でいったん痩せたのに、またすぐ戻ってしまった」——これは多くのダイエット経験者が一度は経験することです。リバウンドは意志の問題ではなく、食事制限だけのダイエットには「リバウンドしやすくなる仕組み」が存在します。この記事では、そのメカニズムを詳しく解説し、リバウンドしない体をつくるための方法を紹介します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                食事制限だけでリバウンドする3つの仕組み
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. 筋肉が落ちて基礎代謝が低下する
              </h3>
              <p>
                食事制限によってカロリーが大幅に不足すると、体は筋肉（タンパク質）をエネルギー源として使い始めます。これを「筋肉の分解（異化）」と言います。
              </p>
              <p className="mt-2">
                食事制限で体重が減ったとき、その内訳を見ると脂肪だけでなく筋肉量も大幅に落ちていることが多いです。筋肉量が減ると基礎代謝（1日に何もしなくても消費するカロリー）が下がります。
              </p>
              <p className="mt-2">
                結果として、ダイエット前よりも「少ない食事量でも太りやすい体」になってしまいます。ダイエット終了後に元の食事量に戻すと、基礎代謝が下がっているため必然的にカロリーが余り、脂肪として蓄積されてしまうのです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. 飢餓状態を学習した体が脂肪を蓄えやすくなる
              </h3>
              <p>
                人間の体には、飢餓状態（カロリー不足）を感知すると生存のために「エネルギーを節約しようとする機能」が備わっています。これを「代謝適応」と言います。
              </p>
              <p className="mt-2">
                厳しい食事制限を続けると、体はより少ないカロリーで動こうと省エネモードに切り替わります。そして食事制限をやめた途端、「いつまた飢餓状態が来るかわからない」と判断した体は、今度は積極的に脂肪を蓄えようとします。これがリバウンドの正体です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3. 食欲を高めるホルモンが増加する
              </h3>
              <p>
                食事制限中は、食欲を促進するホルモン「グレリン」の分泌が増加します。一方、食欲を抑えるホルモン「レプチン」の分泌が低下します。このホルモンバランスの乱れにより、ダイエット後に強い食欲が生まれ、過食につながりやすくなります。
              </p>
              <p className="mt-2">
                「意志の力でなんとかしなければ」と思っても、ホルモンによる食欲のコントロールは非常に困難です。これはダイエット経験者の意志が弱いのではなく、体の生理的な反応なのです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレがリバウンドを防ぐ理由
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉量を維持・増加させる
              </h3>
              <p>
                食事制限と筋トレを組み合わせることで、筋肉量を保ちながら脂肪だけを落とすことができます。筋トレを行うと「筋肉を使っている」というシグナルが体に送られ、筋肉の分解が抑制されます。
              </p>
              <p className="mt-2">
                研究では、食事制限のみのグループと食事制限＋筋トレのグループを比較した場合、後者の方が体重減少時に筋肉量が保たれやすく、減量後のリバウンド率も低いことが示されています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                基礎代謝を維持・向上させる
              </h3>
              <p>
                筋肉量を保つことで基礎代謝の低下を防ぎ、ダイエット後も「食べても太りにくい体」を維持できます。むしろ筋トレで筋肉が増えれば、ダイエット前より基礎代謝が高くなり、リバウンドどころかさらに痩せやすい体質になります。
              </p>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mt-3">
                <p className="font-bold text-orange-600 mb-1">筆者の場合：90kg → 78kg</p>
                <p className="text-xs leading-relaxed">
                  筆者自身、90kgから78kgまで約1年かけて12kg落としました。過去に食事制限だけで痩せようとして戻った経験があるからこそ、このときは「筋トレを続けながら、食事はゆるやかに削る」方針を最後まで崩しませんでした。時間はかかりましたが、筋肉を残して落とした体重は戻りにくい——これが12kg分の実感です。
                </p>
              </div>

              <p className="mt-3">
                この差を数字にすると、わかりやすくなります。同じ「10kg減」でも中身がまったく違います。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        10kg落としたとき
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        食事制限のみ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        食事制限＋筋トレ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">うち脂肪</td>
                      <td className="border border-gray-200 px-2 py-2">約7.5kg</td>
                      <td className="border border-gray-200 px-2 py-2">約9kg以上</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">うち筋肉など</td>
                      <td className="border border-gray-200 px-2 py-2">約2.5kg</td>
                      <td className="border border-gray-200 px-2 py-2">約1kg以下</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">基礎代謝の変化</td>
                      <td className="border border-gray-200 px-2 py-2">約−33kcal/日</td>
                      <td className="border border-gray-200 px-2 py-2">約−13kcal/日</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">戻したときの結果</td>
                      <td className="border border-gray-200 px-2 py-2">前より脂肪が増える</td>
                      <td className="border border-gray-200 px-2 py-2">戻りにくい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※食事制限のみだと減量分の2〜3割が除脂肪量になるという報告をもとにした目安です。基礎代謝は筋肉1kg＝1日約13kcalで換算しています（
                <Link href="/column/metabolism" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  筋トレで痩せる仕組み
                </Link>
                に組織別の代謝率表があります）。
              </p>
              <p className="mt-3">
                注目してほしいのは、基礎代謝の差が<strong className="text-gray-800">1日20kcal程度しかない</strong>ことです。「筋肉が落ちると代謝が激減してリバウンドする」とよく説明されますが、代謝の差だけならおにぎり1個にも届きません。本当の問題は<strong className="text-gray-800">見た目と、戻したときに増えるのが脂肪だけになること</strong>です。同じ体重に戻っても、体脂肪率は前より高くなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋肉を残せる減量ペース
              </h2>
              <p>
                筋トレをしていても、落とすペースが速すぎれば筋肉は減ります。目安は週あたり体重の0.5〜1%です。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        週あたりの減量
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重80kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        筋肉への影響
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">0.5%以下</td>
                      <td className="border border-gray-200 px-2 py-2">週0.4kg以下</td>
                      <td className="border border-gray-200 px-2 py-2">残しやすい。ただし時間がかかる</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">0.5〜1%</td>
                      <td className="border border-gray-200 px-2 py-2">週0.4〜0.8kg</td>
                      <td className="border border-gray-200 px-2 py-2">一般的な推奨範囲</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">1%超</td>
                      <td className="border border-gray-200 px-2 py-2">週0.8kg以上</td>
                      <td className="border border-gray-200 px-2 py-2">筋肉が落ちやすい・戻りやすい</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mt-3">
                <p className="font-bold text-orange-600 mb-1">私のペースを計算するとこうなります</p>
                <p className="text-xs leading-relaxed">
                  12kgを約1年（52週）なので、週あたり約0.23kg。当時の体重90kgに対して<strong>週0.26%</strong>です。推奨範囲の下限（0.5%）よりさらに遅い、いちばん遅い帯でした。正直に言えば意図してこのペースにしたわけではなく、月1kg程度しか減らないのに焦らず続けた結果です。ただ、筋肉を残して落とせた理由を後から考えると、この遅さが効いていたのだと思います。
                </p>
                <p className="text-xs leading-relaxed mt-2">
                  逆に言うと、<strong>1ヶ月で5kg落とすようなペースはこの表の外側</strong>です。落ちているのは脂肪だけではありません。
                </p>
              </div>

              <p className="mt-3">
                自分の維持カロリーと、そこから何kcal減らせばこのペースになるかは
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で確認できます。減量中こそタンパク質は減らせないので、量の目安は
                <Link href="/column/protein-guide" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  プロテインの選び方ガイド
                </Link>
                の早見表を使ってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                リバウンドしない体をつくるための実践法
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">急激な食事制限はしない</span>：1日の摂取カロリーを極端に減らすのではなく、1日200〜300kcal程度の緩やかな制限に留めましょう。急激な制限は筋肉の分解を加速させます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">タンパク質を十分に摂る</span>：ダイエット中でも体重1kgあたり1.6〜2.0gのタンパク質を摂取することで、筋肉の分解を防げます。鶏むね肉・魚・豆腐・卵などを積極的に取り入れましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">週2〜3回の筋トレを継続する</span>：ダイエット期間中も週2〜3回の筋トレを行い、筋肉量を維持しましょう。スクワット・デッドリフト・プッシュアップなどの複合種目が特に効果的です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">目標体重達成後も筋トレを続ける</span>：ダイエットが成功した後も筋トレを継続することが最大のリバウンド防止策です。筋肉がある体は、多少食べ過ぎても脂肪になりにくい体質を維持できます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                食事制限だけのダイエットがリバウンドしやすい原因は、「筋肉量の低下による基礎代謝の減少」と「体の飢餓反応によるホルモン変化」にあります。これは意志の問題ではなく、体の生理的なメカニズムです。
              </p>
              <p className="mt-2">
                筋トレを組み合わせることで筋肉量を保ち、代謝を維持・向上させることができます。「痩せた体を一生維持したい」という方には、筋トレとの組み合わせが唯一の本質的な解決策です。サクトレで、あなたに合ったメニューを見つけてください。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="何度もリバウンドを繰り返してきたなら、今度こそ「自己流をやめる」のが近道かもしれません。" />

        <ShareButtons url="https://sakutore.jp/column/diet-rebound-muscle" title="食事制限だけでリバウンドする理由と筋トレの関係" />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">実際に使って選んだプロテイン・ベルト・グリップを見る →</p>
            </div>
          </div>
        </Link>

        <AuthorBox />

        <div className="text-center space-y-3">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg"
          >
            さっそくメニューを作る
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
