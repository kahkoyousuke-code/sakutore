import Link from "next/link";

export const metadata = {
  title: "利用規約 - サクトレ",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">利用規約</h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                サービスの内容について
              </h2>
              <p>
                サクトレ（以下「当サービス」）は、ユーザーの回答に基づいてAIがトレーニングメニューを生成するサービスです。生成されるメニューは参考情報としての提供であり、医学的・専門的なアドバイスではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                自己責任について
              </h2>
              <p>
                当サービスで提供されるトレーニングメニューの実施は、すべてユーザーご自身の判断と責任のもとで行ってください。トレーニングの実施にあたっては、ご自身の体調や健康状態を十分に考慮してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">免責事項</h2>
              <p>
                当サービスの利用により生じた怪我、体調不良、その他いかなる損害についても、当サービスの運営者は一切の責任を負いません。持病をお持ちの方や健康に不安のある方は、トレーニングを始める前に医師にご相談ください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                生成内容について
              </h2>
              <p>
                当サービスで生成されるトレーニングメニューはAIによって自動生成されたものであり、その正確性・安全性・有効性を保証するものではありません。実際のトレーニングにおいては、適切なフォームと安全な範囲での実施を心がけてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                サービスの変更・終了
              </h2>
              <p>
                当サービスは、事前の通知なくサービス内容の変更、または提供の中止・終了を行う場合があります。これにより生じた損害について、運営者は一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">利用規約の変更</h2>
              <p>
                当サービスは、必要に応じて本利用規約の内容を変更することがあります。変更後の利用規約は、本ページに掲載した時点から効力を生じるものとします。
              </p>
            </section>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
