import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "10年筋トレを続けてわかったこと｜筆者の実データ付き - サクトレ",
  description:
    "筋トレ歴15年の筆者が、体重90kg超・BIG3すべて60kgだった始点から今までの実数字を公開。10年続けて何が変わったか、効いたことと効かなかったことを正直に書きます。",
  path: "/column/10years",
});

export default function TenYearsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            10年筋トレを続けてわかったこと
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                私は20代のとき体重90kgを超えた状態から筋トレを始め、いまで15年目です。10年を超えた地点から振り返って、実際に何が変わって、何が効いたのかを数字ごと出します。
              </p>
              <p>
                「10年続けたらどうなるか」を検索すると、たいてい一般論しか出てきません。それはそれで正しいのですが、実際に続けた人間の数字を見るほうが早いと思うので、先に私の実データを出します。きれいな右肩上がりではありませんし、うまくいかなかった部分も含めて書きます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者の15年：始点と現在地
              </h2>
              <p>
                身長173cm。始めた当初はBIG3（ベンチプレス・スクワット・デッドリフト）がすべて60kg前後でした。ベンチは60kgを2〜3回がやっとで、
                <Link href="/rm-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  1RM換算
                </Link>
                すると65kg程度です。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        項目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        始めた頃（20代）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        自己ベスト
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">体重</td>
                      <td className="border border-gray-200 px-2 py-2">90kg超</td>
                      <td className="border border-gray-200 px-2 py-2">現在78kg（−12kg）</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">ベンチプレス</td>
                      <td className="border border-gray-200 px-2 py-2">60kg前後</td>
                      <td className="border border-gray-200 px-2 py-2">120kg</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">スクワット</td>
                      <td className="border border-gray-200 px-2 py-2">60kg前後</td>
                      <td className="border border-gray-200 px-2 py-2">120kg</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">デッドリフト</td>
                      <td className="border border-gray-200 px-2 py-2">60kg前後</td>
                      <td className="border border-gray-200 px-2 py-2">160kg</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">大会</td>
                      <td className="border border-gray-200 px-2 py-2">出たことがない</td>
                      <td className="border border-gray-200 px-2 py-2">フィジーク入賞</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※自己ベストは体重80kg台の頃の記録です。現在はBIG3を主軸にしていないため、この数字が今も出るわけではありません。体重比で見ると約1.4倍/1.4倍/1.9倍で、
                <Link href="/column/strength-standards" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  一般的な目安表
                </Link>
                とはきれいに一致しません（上半身に寄っています）。
              </p>
              <p className="mt-3">
                正直に書いておくと、この15年の内訳——何年目に何kgだったかという年表——は記録していないので出せません。確かなのは始点と自己ベストだけです。逆に言えば、その2点だけでも「10年続けるとこのくらい動く」の目安にはなると思います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体の変化
              </h2>
              <p>
                筋肉が増えるペースは、続けた年数によって大きく変わります。よく引用されるAlan Aragonのモデルでは、目安はこうなります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        経験
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        月あたりの増加
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重70kgなら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">1年目</td>
                      <td className="border border-gray-200 px-2 py-2">体重の1〜1.5%</td>
                      <td className="border border-gray-200 px-2 py-2">月0.7〜1.0kg</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">2〜3年目</td>
                      <td className="border border-gray-200 px-2 py-2">体重の0.5〜1%</td>
                      <td className="border border-gray-200 px-2 py-2">月0.35〜0.7kg</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">4年目〜</td>
                      <td className="border border-gray-200 px-2 py-2">体重の0.25〜0.5%</td>
                      <td className="border border-gray-200 px-2 py-2">月0.18〜0.35kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※増量ペースの上限の目安であり、誰でもこの通りに増えるという意味ではありません。
              </p>
              <p className="mt-3">
                この表がすべてを説明しています。<strong className="text-gray-800">1年目と10年目では、同じ努力に対して返ってくる量が5分の1以下になる</strong>ということです。10年続ける人が少ないのは意志が弱いからではなく、途中で伸びが体感できなくなるからだと思っています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1〜2年：基礎が固まる時期
              </h3>
              <p>
                いわゆる初心者ボーナス期間です。筋肉がトレーニング刺激に慣れていないため、比較的短期間で体の変化を感じやすい時期です。正しいフォームを身につけ、扱える重量が週単位で伸びていく喜びを体験できます。
              </p>
              <p className="mt-2">
                この時期は体脂肪が落ちながら筋肉がつく「リコンポジション」が起きやすく、体重があまり変わらなくても見た目が大きく変わることがあります。私の場合も、体重が90kg台から動かない時期に見た目だけ先に変わりました。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3〜5年：土台が完成する時期
              </h3>
              <p>
                筋肉の付き方が本格的になってきます。服の上からでもわかるような体の変化が生まれ、周囲から「体格が変わったね」と言われることも増えてきます。
              </p>
              <p className="mt-2">
                この頃には基礎代謝が上がり、食事量が変わらなくても太りにくい体になります。骨密度の上昇や姿勢の改善も顕著になり、見た目だけでなく体の機能面での変化を実感できるようになります。自分の基礎代謝が今どのくらいかは
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で概算できます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                10年：加齢に打ち勝つ体
              </h3>
              <p>
                10年間継続することで得られる最大の恩恵は「同世代との差」です。何もしなければ30代以降は年1〜2%ずつ筋肉が失われていきますが、10年間筋トレを続けた人はこの老化のプロセスに抗い続けています。
              </p>
              <p className="mt-2">
                私自身、10年を超えたあたりから重量が伸びること自体は少なくなりました。それでも続けている理由は、伸ばすためではなく<strong className="text-gray-800">維持している状態そのものが同年代に対しての差になっている</strong>と気づいたからです。10年目以降の筋トレは、攻めから守りに目的が変わります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">10年で得られる体の変化</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・筋肉量が大幅に増加し、基礎代謝が高い状態が続く</li>
                  <li>・骨密度が高く、骨折リスクが低い</li>
                  <li>・血糖値・血圧・コレステロール値などが健康的な範囲に</li>
                  <li>・姿勢が良く、関節の痛みが少ない</li>
                  <li>・免疫力が高く、風邪をひきにくい</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効いたこと・効かなかったこと
              </h2>
              <p>
                ここが一番書きたかった部分です。15年やって、実際に停滞を破ったものと、期待したほどではなかったものがはっきり分かれました。
              </p>

              <div className="bg-orange-50 rounded-xl p-4 mt-3 border-2 border-orange-200">
                <p className="font-bold text-orange-600 mb-2">効いたこと：ジムを変えて、補助と指導を受けた</p>
                <p className="text-gray-700">
                  ベンチプレスが長く止まっていたのですが、それを動かした決定打は、メニューでもサプリでもなくこれでした。潰れる心配のない状態で限界まで追い込めることと、フォームを外から見てもらえることの2つが同時に手に入ります。自分ひとりだと、無意識に「潰れない重量」で止めていたのだと後からわかりました。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">期待したほどではなかったこと</p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong className="text-gray-800">・メニューを変え続けること</strong><br />
                    停滞するたびに種目や分割を組み替えていましたが、それ単体で伸びたことはほとんどありませんでした。変えるべきは種目より、追い込める環境のほうでした。
                  </li>
                  <li>
                    <strong className="text-gray-800">・サプリを増やすこと</strong><br />
                    土台（食事とトレーニング）ができていない時期にいくら足しても、体感できる差にはなりませんでした。効くとすれば土台ができた後です。
                  </li>
                  <li>
                    <strong className="text-gray-800">・全部の種目を平等に伸ばそうとすること</strong><br />
                    私はベンチとスクワットが同じ120kgで止まっています。通常スクワットはベンチの1.5倍前後になるので、明らかに上半身偏重です。ただフィジーク志向なら当然の結果で、これは失敗ではありませんでした。
                  </li>
                </ul>
              </div>

              <p className="mt-3">
                なお私は15年ずっと自力で、月8,000円ほどの一般的なジムでやってきました。だからこそ「指導を受けた時期だけ動いた」という事実は、自分でも意外でした。費用感を含めた比較は
                <Link href="/column/personal-gym-cost" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  パーソナルジムの費用相場
                </Link>
                に書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                メンタルの変化
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                自己効力感が高まる
              </h3>
              <p>
                筋トレを続けることで得られる最大のメンタル的変化が「自己効力感（自分はできるという感覚）」の向上です。昨日できなかった重量が今日できた、先月より多くの回数をこなせた——という小さな成功体験の積み重ねが、「継続すれば成長できる」という確信に変わっていきます。
              </p>
              <p className="mt-2">
                この自己効力感は筋トレにとどまらず、仕事や人間関係など人生の他の場面にも波及します。「努力し続ければ変われる」という信念を持った人は、困難な状況でも諦めにくくなります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ストレス耐性が上がる
              </h3>
              <p>
                運動にはコルチゾール（ストレスホルモン）を調節し、セロトニンやエンドルフィンなど幸福感に関わる神経伝達物質を増やす効果があります。定期的に筋トレを続けている人は、日常的なストレスへの耐性が上がり、同じ出来事でも感情的に揺さぶられにくくなることを体感しています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                長期的な思考ができるようになる
              </h3>
              <p>
                筋トレは「今日やった努力が体に現れるまでに時間がかかる」という性質を持っています。10年間この習慣を続けることで、「短期の結果より長期の積み重ねに目を向ける力」が自然と養われます。先ほどの増加ペースの表の通り、後半になるほど1回あたりの見返りは小さくなるので、続けるほど長期目線が要求されるとも言えます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                続けてよかったこと
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">体の資産が増え続ける</p>
                    <p className="mt-1 text-gray-600">
                      筋トレに費やした時間は、筋肉・骨密度・代謝という「体の資産」になります。お金の資産と同様に、早く始めて長く続けるほど複利のように増えていきます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">医療費が減る</p>
                    <p className="mt-1 text-gray-600">
                      定期的な運動習慣がある人は、生活習慣病・骨粗しょう症・腰痛などのリスクが大幅に下がります。10年単位で考えると、筋トレを続けることで節約できる医療費は決して小さくありません。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">年齢を重ねるのが怖くなくなる</p>
                    <p className="mt-1 text-gray-600">
                      筋トレを続けている人にとって、加齢は「衰えていく過程」ではなく「積み上げてきた体が証明される時間」になります。40代・50代でも体力と体型を維持できている実感が、年齢への不安を和らげます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">仲間・コミュニティができる</p>
                    <p className="mt-1 text-gray-600">
                      ジムで顔なじみができたり、同じ趣味を持つ友人ができたりと、筋トレを通じた人間関係が広がります。私の場合、停滞を破ったきっかけもジムを移って人に見てもらえる環境に入ったことでした。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">「続けた」という誇りが生まれる</p>
                    <p className="mt-1 text-gray-600">
                      10年間何かを続けることができた人は、世の中にそれほど多くありません。筋トレを続けた事実そのものが、自分自身への誇りと自信の源になります。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                これから続ける人へ
              </h2>
              <p>
                10年続けるためのコツを1つだけ挙げるなら、<strong className="text-gray-800">伸びが止まった時期に頻度を上げないこと</strong>です。伸びないと「量が足りない」と考えがちですが、増加ペースの表の通り、後半の停滞は量の問題ではなく単に伸び代が小さくなっただけであることが多いです。そこで無理に週5・週6に増やすと、回復が追いつかず故障で強制終了になります。
              </p>
              <p className="mt-2">
                自分の生活に合う頻度と分割の決め方は
                <Link href="/column/split-routine" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  筋トレ分割法の早見表
                </Link>
                に、いま扱うべき重量の目安は
                <Link href="/weight-checker" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  適正重量チェッカー
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・私は90kg超・BIG3すべて60kg前後から始めて、自己ベストはベンチ120／スクワット120／デッド160、体重は78kgになりました</li>
                <li>・筋肉の増えるペースは1年目と4年目以降で5分の1以下になる。10年続く人が少ない理由はここにあります</li>
                <li>・停滞を破った決定打はメニューでもサプリでもなく、ジムを変えて補助と指導を受けたことでした</li>
                <li>・10年を超えると目的が「伸ばす」から「維持する」に変わり、それ自体が同年代との差になります</li>
              </ul>
              <p className="mt-3">
                10年の旅は、最初の一歩から始まります。サクトレで今日のメニューを作成し、あなたの筋トレライフをスタートさせてください。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/10years" title="10年筋トレを続けてわかったこと" />
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
