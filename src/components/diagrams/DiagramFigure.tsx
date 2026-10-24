import type { ReactNode } from "react";

type Props = {
  /** Short heading shown above the diagram. */
  title: string;
  /** Plain-text summary for screen readers (what the diagram shows). */
  label: string;
  /** One-line note below the diagram (source, assumptions). */
  caption?: ReactNode;
  children: ReactNode;
};

// Shared frame for all article diagrams so they look the same across columns.
export default function DiagramFigure({ title, label, caption, children }: Props) {
  return (
    <figure
      className="my-4 rounded-xl border border-orange-100 bg-orange-50/40 p-3 md:p-4"
      role="img"
      aria-label={label}
    >
      <p className="mb-2 text-xs md:text-sm font-bold text-gray-700">{title}</p>
      <div className="w-full">{children}</div>
      {caption && (
        <figcaption className="mt-2 text-xs text-gray-500 leading-relaxed">{caption}</figcaption>
      )}
    </figure>
  );
}
