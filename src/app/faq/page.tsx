import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "よくある質問（FAQ） - サクトレ",
  description:
    "サクトレに関するよくある質問と回答をまとめました。料金、使い方、対象者など、疑問を解決します。",
  path: "/faq",
  type: "website",
});

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "サクトレは無料ですか？",
    answer:
      "はい、完全無料でお使いいただけます。会員登録や課金は一切不要です。何度でも無料でトレーニングメニューを作成できます。",
  },
  {
    question: "会員登録は必要ですか？",
    answer:
      "いいえ、会員登録は不要です。サイトにアクセスして、すぐに質問に回答してメニューを作成できます。メールアドレスやパスワードの入力も必要ありません。",
  },
  {
    question: "どんな人におすすめですか？",
    answer:
      "筋トレ初心者〜中級者の方に特におすすめです。「筋トレを始めたいけど何をすればいいかわからない」「自分に合ったメニューを知りたい」という方にぴったりのサービスです。",
  },
  {
    question: "メニューは何度でも作れますか？",
    answer:
      "はい、何度でも作成できます。回答を変えることで、目的や環境の変化に合わせた新しいメニューをいつでも生成できます。",
  },
  {
    question: "生成されたメニューは保存できますか？",
    answer:
      "現在、アプリ内での保存機能はありませんが、スクリーンショットで画面を保存していただくことで、いつでも見返すことができます。スマホのスクリーンショット機能をご活用ください。",
  },
  {
    question: "器具がなくても使えますか？",
    answer:
      "はい、使えます。質問の「トレーニング環境」で「自宅（自重のみ）」を選択すると、特別な器具を使わない自重トレーニングのメニューが作成されます。",
  },
  {
    question: "メニューの頻度は変えられますか？",
    answer:
      "はい、質問の中で週2回〜5回以上から選択できます。ご自身のライフスタイルに合わせて無理のない頻度を選んでください。",
  },
  {
    question: "怪我をしている場合はどうすればいいですか？",
    answer:
      "怪我や痛みがある場合は、まず医師に相談してからトレーニングを行ってください。サクトレでは「特に鍛えたい部位」の質問で、怪我のない部位を重点的に選ぶことで負担を軽減できます。",
  },
  {
    question: "各種目のやり方がわかりません。",
    answer:
      "生成されたメニューの各種目名をタップすると、正しいフォーム、注意点、効かせるコツなどの詳細情報がアコーディオンで表示されます。初めての種目でも安心して取り組めます。",
  },
  {
    question: "メニュー生成にどのくらい時間がかかりますか？",
    answer:
      "通常、数秒〜十数秒程度で生成されます。回線状況やサーバーの混雑状況によって多少前後する場合がありますが、長くても30秒以内に完了します。",
  },
  {
    question: "スマホでもパソコンでも使えますか？",
    answer:
      "はい、スマートフォン・タブレット・パソコンなど、ブラウザが使えるすべてのデバイスに対応しています。スマホでの利用に最適化されたデザインになっています。",
  },
  {
    question: "トレーニングの効果はどのくらいで出ますか？",
    answer:
      "個人差はありますが、一般的には2〜3ヶ月継続することで体の変化を実感し始める方が多いです。まずは2週間続けることを目標にしてみましょう。",
  },
  {
    question: "メニューの種目を変更できますか？",
    answer:
      "現在、生成後に個別の種目を変更する機能はありません。ただし、質問の回答を変えて新しいメニューを再生成することで、異なる種目の組み合わせを試すことができます。",
  },
  {
    question: "個人情報は収集されますか？",
    answer:
      "いいえ、サクトレでは氏名やメールアドレスなどの個人情報を収集することはありません。質問への回答内容はメニュー生成のためだけに使用され、サーバーに保存されることもありません。詳しくはプライバシーポリシーをご確認ください。",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            よくある質問（FAQ）
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            サクトレについてよくいただく質問をまとめました。
          </p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl p-4"
              >
                <p className="font-bold text-gray-800 text-sm mb-2">
                  <span className="text-orange-500 mr-1">Q.</span>
                  {item.question}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-orange-500 font-bold mr-1">A.</span>
                  {item.answer}
                </p>
              </div>
            ))}
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
              href="/"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
