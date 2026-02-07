import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー - サクトレ",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            プライバシーポリシー
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-bold text-gray-800 mb-2">広告配信について</h2>
              <p>
                当サービスでは、第三者配信の広告サービス「Google
                AdSense」を利用しています。Google
                AdSenseは、ユーザーの興味に基づいた広告を表示するために、Cookie（クッキー）を使用することがあります。
              </p>
              <p className="mt-2">
                Google
                AdSenseの詳細については、Google公式サイトをご確認ください。ユーザーは、Google広告設定ページよりパーソナライズ広告を無効にすることができます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                Cookieの使用について
              </h2>
              <p>
                当サービスでは、広告配信やアクセス解析のためにCookieを使用する場合があります。Cookieはブラウザの設定により無効にすることが可能ですが、一部の機能が正しく動作しなくなる場合があります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                アクセス解析について
              </h2>
              <p>
                当サービスでは、サービス改善のためにアクセス解析ツールを導入する予定です。アクセス解析ではトラフィックデータの収集を行いますが、個人を特定する情報は収集しません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                個人情報の取り扱いについて
              </h2>
              <p>
                当サービスでは、ユーザーの個人情報（氏名、メールアドレス等）を収集することはありません。質問への回答内容はトレーニングメニュー生成のためにのみ使用され、サーバーに保存されることはありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">運営者</h2>
              <p>当サービスは個人が運営しています。</p>
            </section>

            <section>
              <h2 className="font-bold text-gray-800 mb-2">
                プライバシーポリシーの変更
              </h2>
              <p>
                当サービスは、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
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
