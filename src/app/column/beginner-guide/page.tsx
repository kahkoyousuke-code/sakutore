import Link from "next/link";

export const metadata = {
  title: "筋トレ初心者が最初にやるべき5つのこと - サクトレ",
  description:
    "筋トレを始めたい初心者に向けて、最初にやるべき5つのポイントをわかりやすく解説。正しいフォーム、適切な負荷設定、継続のコツまで紹介します。",
};

export default function BeginnerGuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレ初心者が最初にやるべき5つのこと
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                私も最初は何から始めればいいかまったくわからず、むやみにトレーニングして結果が出ない時期がありました。その経験をもとに、本当に最初にやるべきことをまとめました。
              </p>
              <p>
                「筋トレを始めたいけれど、何から手をつければいいかわからない」という方は多いのではないでしょうか。ジムに行っても器具の使い方がわからず、自宅でやるにしても正しいやり方がわからない。そんな初心者の方に向けて、筋トレを始めるときに最初にやるべき5つのことを解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1. 目標を明確にする
              </h2>
              <p>
                筋トレを始める前に、まず「なぜ筋トレをするのか」を明確にしましょう。「体を引き締めたい」「筋肉をつけて見た目を変えたい」「健康のために運動習慣をつけたい」など、目標によってトレーニングの内容は大きく変わります。
              </p>
              <p className="mt-2">
                目標が曖昧なまま始めると、モチベーションが続きにくくなります。具体的な目標を持つことで、何をすべきかが明確になり、トレーニングを継続しやすくなります。まずは「3ヶ月後にどうなっていたいか」をイメージしてみてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                2. 正しいフォームを覚える
              </h2>
              <p>
                筋トレで最も大切なのは、正しいフォームで行うことです。間違ったフォームでトレーニングを続けると、狙った筋肉に効かないだけでなく、関節や腱を痛めるリスクがあります。
              </p>
              <p className="mt-2">
                最初のうちは重量を軽くしてでも、正しいフォームを身につけることを優先しましょう。鏡を見ながら行ったり、動画で正しいフォームを確認したりするのが効果的です。特にスクワット・デッドリフト・ベンチプレスなどの基本種目は、フォームが崩れやすいので注意が必要です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                3. 大きな筋肉から鍛える
              </h2>
              <p>
                初心者が効率よく成果を出すには、まず大きな筋肉群から鍛えるのがおすすめです。胸・背中・脚（太もも・お尻）といった大きな筋肉を鍛えることで、代謝が上がりやすく、見た目の変化も実感しやすくなります。
              </p>
              <p className="mt-2">
                具体的には、スクワット、ベンチプレス（または腕立て伏せ）、ラットプルダウン（または懸垂）といったコンパウンド種目（複数の関節を使う種目）から始めるのが効果的です。これらの種目は一度に多くの筋肉を使うため、時間効率も良いトレーニングです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                4. 適切な負荷と回数を設定する
              </h2>
              <p>
                初心者の場合、まずは「10〜15回で限界がくる重さ」を目安に設定しましょう。軽すぎると筋肉への刺激が足りず、重すぎるとフォームが崩れてケガのリスクが高まります。
              </p>
              <p className="mt-2">
                セット数は1種目あたり2〜3セットが目安です。セット間の休憩は1〜2分程度取りましょう。最初の数週間は筋肉痛がひどくなりやすいので、無理をせず、体の反応を見ながら徐々に負荷を上げていくことが大切です。
              </p>
              <p className="mt-2">
                また、同じ重量でずっとトレーニングしていると筋肉が慣れてしまいます。2〜4週間ごとに少しずつ重量を増やす「漸進的過負荷」を意識すると、効率よく筋力がアップしていきます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                5. 継続できる仕組みを作る
              </h2>
              <p>
                筋トレで成果を出すために最も重要なのは「継続すること」です。どんなに優れたメニューでも、続けなければ効果は出ません。初心者のうちは週2〜3回のペースで十分です。
              </p>
              <p className="mt-2">
                継続するコツは、ハードルを下げることです。「毎日1時間やる」ではなく「週2回、30分だけ」から始めましょう。トレーニングの曜日と時間を決めてルーティン化するのも効果的です。
              </p>
              <p className="mt-2">
                また、トレーニング記録をつけることでモチベーションを維持しやすくなります。前回より1回でも多くできた、重量を少し増やせたなど、小さな成長を実感することが継続の原動力になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレ初心者がまずやるべきことは、目標設定、正しいフォームの習得、大きな筋肉を中心としたトレーニング、適切な負荷設定、そして継続の仕組み作りです。最初から完璧を目指す必要はありません。まずはできることから始めて、少しずつレベルアップしていきましょう。
              </p>
              <p className="mt-2">
                サクトレでは、6つの質問に答えるだけであなたに合ったトレーニングメニューを自動で作成できます。何をすればいいか迷ったら、ぜひ活用してみてください。
              </p>
            </section>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">👤</span>
            <div>
              <p className="text-xs text-orange-500 font-bold mb-1">著者</p>
              <p className="font-bold text-gray-800 text-sm">yousuke</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">筋トレ歴10年以上｜ボディメイク大会出場経験あり｜90kg超から現在の体型に変化</p>
            </div>
          </div>
        </div>

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
