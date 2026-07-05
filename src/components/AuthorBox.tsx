import Link from "next/link";
import { AUTHOR } from "@/lib/author";

/**
 * 記事末尾に置く著者プロフィール。Googleが評価する「この記事を書いた人」パターン。
 * 実績バッジ＋運営者情報(/about)＋実在するXプロフィールへのリンクで
 * E-E-A-T（経験・専門性・権威性・信頼性）のシグナルを示す。
 */
export default function AuthorBox() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-3xl flex-shrink-0" aria-hidden>
          💪
        </span>
        <div className="min-w-0">
          <p className="text-xs text-orange-500 font-bold mb-1">この記事を書いた人</p>
          <p className="font-bold text-gray-800 text-sm">{AUTHOR.name}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {AUTHOR.credentials.map((c) => (
              <span
                key={c}
                className="inline-block rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold px-2.5 py-1"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">{AUTHOR.bioShort}</p>
          <div className="flex gap-4 mt-2.5">
            <Link
              href={AUTHOR.aboutPath}
              className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors"
            >
              運営者情報 →
            </Link>
            <a
              href={AUTHOR.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              X（{AUTHOR.handle}）
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
