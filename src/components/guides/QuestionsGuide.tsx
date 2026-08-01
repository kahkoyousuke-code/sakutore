import Link from "next/link";
import {
  GuideCard,
  GuideFaq,
  GuideList,
  GuideSubheading,
} from "@/components/GuideCard";

const PURPOSE_ROWS = [
  { purpose: "筋肥大", reps: "6〜12回", note: "高めの重量で限界近くまで" },
  { purpose: "ダイエット", reps: "12〜20回", note: "軽めの重量で回数を稼ぐ" },
  { purpose: "健康維持", reps: "10〜15回", note: "関節に無理のない範囲で" },
  { purpose: "スポーツ向上", reps: "8〜15回", note: "動作スピードも意識" },
];

const TIME_ROWS = [
  { time: "30分以内", count: "4種目" },
  { time: "30〜60分", count: "5〜6種目" },
  { time: "60分以上", count: "6〜7種目" },
];

export default function QuestionsGuide() {
  return (
    <div className="mt-12 space-y-4">
      <GuideCard title="5つの質問が、メニューの何を決めているか">
        <p>
          サクトレのメニュー作成は、答えた5項目をそのまま設計ルールに変換しています。
          何がどこに効いているかを公開しておきます。
        </p>

        <GuideSubheading>目的 → レップ数（1セットの回数）</GuideSubheading>
        <div className="overflow-hidden rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs">
                <th className="py-2 px-3 text-left font-semibold">目的</th>
                <th className="py-2 px-3 text-left font-semibold">レップ数</th>
                <th className="py-2 px-3 text-left font-semibold">狙い</th>
              </tr>
            </thead>
            <tbody>
              {PURPOSE_ROWS.map(({ purpose, reps, note }) => (
                <tr key={purpose} className="border-t border-gray-100">
                  <td className="py-2.5 px-3 font-bold text-gray-700">{purpose}</td>
                  <td className="py-2.5 px-3 font-bold text-orange-500">{reps}</td>
                  <td className="py-2.5 px-3 text-xs text-gray-500">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <GuideSubheading>時間 → 種目数</GuideSubheading>
        <div className="overflow-hidden rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs">
                <th className="py-2 px-3 text-left font-semibold">確保できる時間</th>
                <th className="py-2 px-3 text-right font-semibold">組まれる種目数</th>
              </tr>
            </thead>
            <tbody>
              {TIME_ROWS.map(({ time, count }) => (
                <tr key={time} className="border-t border-gray-100">
                  <td className="py-2.5 px-3 font-bold text-gray-700">{time}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-orange-500">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <GuideSubheading>経験・環境 → 種目の選び方</GuideSubheading>
        <GuideList
          items={[
            <>
              <strong>初心者</strong>を選ぶと、マシンやコンパウンド種目（複数の関節を使う基本種目）中心の、
              フォームを習得しやすい構成になります。
            </>,
            <>
              <strong>上級者</strong>を選ぶと、バリエーション種目や高強度テクニックも候補に入ります。
            </>,
            <>
              <strong>自宅（自重のみ）</strong>を選べば、器具を使う種目は一切出てきません。
              ダンベルの有無も同様に反映されます。
            </>,
          ]}
        />
      </GuideCard>

      <GuideCard title="前回のトレーニングを覚えています">
        <p>
          サクトレは、作成したメニューの履歴をお使いのブラウザに保存しています。
          そして次にメニューを作るとき、<strong>部位ごとに何日空いているか</strong>を計算して設計に反映します。
        </p>
        <p>
          筋肉が回復して前より強くなるまでには、一般に
          <strong>48〜72時間</strong>かかるとされています。
          そのため<strong>本日や前日に鍛えた部位は避け、2日以上空いている部位や、まだ鍛えていない部位を優先</strong>します。
        </p>
        <p>
          「今日は何をやろう」と考えるとき、多くの人は好きな部位に偏ります。
          筆者もそうで、その結果ベンチプレスとスクワットの重量が同じところで並びました。
          自動で回復状況を見るようにしたのは、その反省からです。
        </p>
        <p className="text-gray-500 text-xs">
          ※ 履歴はブラウザ内（localStorage）にのみ保存され、サーバーには送信していません。
          別の端末やブラウザでは引き継がれません。詳しくは
          <Link href="/privacy" className="text-orange-500 font-bold hover:underline">
            プライバシーポリシー
          </Link>
          をご覧ください。
        </p>
      </GuideCard>

      <GuideCard title="使うときのコツ">
        <GuideList
          items={[
            <>
              <strong>「今日の分」だけを作るツールです。</strong>
              1週間分のプログラムではなく、その日の1回分に絞って出します。
              トレーニング前に開いて、そのままジムで見ながら進める使い方を想定しています。
            </>,
            <>
              <strong>重量は自分で決めてください。</strong>
              出てくるのは種目・セット数・回数・インターバルで、重量は入っていません。
              適正重量が分からない場合は
              <Link href="/weight-checker" className="text-orange-500 font-bold hover:underline">
                適正重量診断
              </Link>
              で目安を出せます。
            </>,
            <>
              <strong>部位は絞りすぎなくていい。</strong>
              「特にこだわりなし」を選ぶと、回復状況から自動で最適な部位を選びます。
              迷ったときはこれが一番失敗しません。
            </>,
            <>
              <strong>種目名が分からなければ調べてから。</strong>
              フォームが分からない種目は、無理に高重量でやらないでください。
              基本種目のやり方は
              <Link href="/guide" className="text-orange-500 font-bold hover:underline">
                初心者ガイド
              </Link>
              にまとめています。
            </>,
          ]}
        />
      </GuideCard>

      <GuideCard title="よくある質問">
        <GuideFaq
          items={[
            {
              q: "無料ですか？会員登録は必要ですか？",
              a: <>どちらも不要です。質問に答えるだけで、その場でメニューが出ます。</>,
            },
            {
              q: "毎回違うメニューが出ますか？",
              a: (
                <>
                  同じ回答でも、その時点の回復状況によって組まれる部位が変わります。
                  また種目の組み合わせも毎回固定ではないため、同じ条件でも別の提案になることがあります。
                </>
              ),
            },
            {
              q: "出てきたメニューが自分に合わない気がします",
              a: (
                <>
                  提案はあくまで出発点です。きつすぎる・簡単すぎると感じたら、
                  セット数や種目を自分で入れ替えてかまいません。
                  会話しながら調整したい場合は
                  <Link href="/chat" className="text-orange-500 font-bold hover:underline">
                    チャットで作成
                  </Link>
                  も使えます。
                </>
              ),
            },
            {
              q: "ケガや持病がある場合は？",
              a: (
                <>
                  このツールは医療的な判断を行いません。
                  痛みのある部位や治療中の疾患がある場合は、必ず医師や理学療法士の指示を優先してください。
                </>
              ),
            },
          ]}
        />
      </GuideCard>
    </div>
  );
}
