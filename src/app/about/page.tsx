import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { AUTHOR } from "@/lib/author";

export const metadata = pageMetadata({
  title: "運営者情報 - サクトレ",
  description:
    "サクトレの運営者情報、サービスの目的、お問い合わせ先をご案内します。",
  path: "/about",
  type: "website",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">運営者情報</h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                サービス概要
              </h2>
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-bold text-gray-800 w-28 align-top">
                      サービス名
                    </td>
                    <td className="py-3">サクトレ</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-gray-800 align-top">
                      URL
                    </td>
                    <td className="py-3 break-all">
                      https://sakutore.jp
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-gray-800 align-top">
                      運営形態
                    </td>
                    <td className="py-3">個人運営</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                運営者プロフィール
              </h2>
              <div className="bg-orange-50 rounded-xl p-4 space-y-3">
                <table className="w-full">
                  <tbody className="divide-y divide-orange-100">
                    <tr>
                      <td className="py-2 font-bold text-gray-800 w-28 align-top">
                        運営者名
                      </td>
                      <td className="py-2">{AUTHOR.name}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-gray-800 align-top">
                        筋トレ歴
                      </td>
                      <td className="py-2">15年</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-gray-800 align-top">
                        実績
                      </td>
                      <td className="py-2">フィジーク大会入賞</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-gray-800 align-top">
                        体型
                      </td>
                      <td className="py-2">173cm／78kg（最大時90kg超から−12kg以上）</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-gray-800 align-top">
                        X（旧Twitter）
                      </td>
                      <td className="py-2">
                        <a
                          href={AUTHOR.xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                        >
                          {AUTHOR.handle}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-gray-800 align-top">
                        note
                      </td>
                      <td className="py-2">
                        <a
                          href={AUTHOR.noteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                        >
                          note（{AUTHOR.name}）
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  20代の頃は体重90kg超えの典型的な運動不足でした。「このままではまずい」と一念発起して筋トレを始め、独学での失敗とリバウンドを何度も繰り返しながら、15年かけて現在の体型（173cm／78kg）まで変化。フィジーク大会に出場し、入賞するまでになりました。
                </p>
                <p>
                  トレーニングもダイエットも、遠回りや挫折を人一倍経験してきました。だからこそ「何が本当に効いて、何が時間の無駄だったか」を実体験として語れます。当サイトのコラムやツールは、すべてこの経験にもとづいて作っています。
                </p>
                <p>
                  「何をすればいいかわからない」「自分に合ったメニューが見つからない」という、かつての自分と同じ悩みを持つ人を助けたくてサクトレを開発。AIの力で、誰でも最適なトレーニングメニューをすぐに手に入れられるサービスを目指しています。
                </p>
                <p>
                  食事を扱う
                  <a
                    href="https://sakumeshi.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                  >
                    サクメシ
                  </a>
                  、サプリメントを扱う
                  <a
                    href="https://sakusapu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                  >
                    サクサプ
                  </a>
                  も同じ運営者です。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                サービスの目的
              </h2>
              <p>
                サクトレは、筋トレ初心者が迷わずトレーニングを始められるようにすることを目的としています。
              </p>
              <p className="mt-2">
                「何をすればいいかわからない」「自分に合ったメニューがわからない」という悩みをAIの力で解決し、誰でも気軽にトレーニングを始められる環境を提供します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                サービスの特徴
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">●</span>
                  <span>完全無料・会員登録不要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">●</span>
                  <span>いくつかの質問に答えるだけの簡単操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">●</span>
                  <span>AIによるパーソナライズされたメニュー生成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">●</span>
                  <span>50種以上のエクササイズの詳しい解説付き</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">●</span>
                  <span>ジム・自宅どちらにも対応</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                お問い合わせ
              </h2>
              <p>
                サービスに関するご意見・ご要望・不具合のご報告などは、以下のメールアドレスまでお気軽にお問い合わせください。
              </p>
              <p className="mt-3 bg-gray-50 rounded-xl p-4 text-center">
                <span className="font-bold text-gray-800">メール：</span>
                <br />
                <a
                  href="mailto:sakutore.contact@gmail.com"
                  className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                >
                  sakutore.contact@gmail.com
                </a>
              </p>
              <p className="mt-2 text-xs text-gray-400">
                ※ お返事にお時間をいただく場合がございます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                免責事項
              </h2>
              <p>
                当サービスで提供するトレーニングメニューは、一般的な情報提供を目的としたものであり、医学的なアドバイスではありません。健康上の問題がある方は、トレーニングを始める前に医師にご相談ください。
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
