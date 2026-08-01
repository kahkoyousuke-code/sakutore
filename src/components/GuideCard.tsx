import { ReactNode } from "react";

/**
 * ツールページ下部に置く解説セクションの共通レイアウト。
 * ツール本体は "use client" だが、こちらは静的なので
 * サーバーコンポーネントのままにして確実にHTMLへ出力する。
 */
export function GuideCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="font-bold text-orange-500 text-lg mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function GuideSubheading({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-gray-800 pt-1">{children}</h3>;
}

export function GuideList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-orange-400 flex-shrink-0">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GuideNote({ children }: { children: ReactNode }) {
  return (
    <div className="bg-orange-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  );
}

export function GuideFaq({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  return (
    <div className="space-y-4">
      {items.map(({ q, a }) => (
        <div key={q}>
          <p className="font-bold text-gray-800 mb-1">Q. {q}</p>
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      ))}
    </div>
  );
}
