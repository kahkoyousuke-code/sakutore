import Link from "next/link";
import type { Metadata } from "next";
import Big3ResultCard from "@/components/Big3ResultCard";
import { pageMetadata } from "@/lib/metadata";
import {
  big3Query,
  diagnoseBig3,
  headlineLevel,
  parseBig3Params,
} from "@/lib/big3Diagnosis";

const SITE_URL = "https://sakutore.jp";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

function inputFrom(searchParams: Props["searchParams"]) {
  return parseBig3Params({
    get: (key) => {
      const v = searchParams[key];
      return typeof v === "string" ? v : null;
    },
  });
}

// Share target for the BIG3 level check. One URL per result, so it is noindex
// and stays out of the sitemap (same policy as /result).
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const input = inputFrom(searchParams);
  if (!input) {
    return pageMetadata({
      title: "BIG3レベル診断 | サクトレ",
      description: "ベンチプレス・スクワット・デッドリフトの重量から、今のレベルを体重比で判定します。無料。",
      path: "/big3-result",
      type: "website",
      noindex: true,
    });
  }
  const result = diagnoseBig3(input);
  const head = headlineLevel(result);
  const query = big3Query(input);
  return pageMetadata({
    title: `BIG3合計${result.total}kg${head ? `は${head}` : ""}｜BIG3レベル診断`,
    description: `体重${input.bodyWeight}kgでBIG3合計${result.total}kg（体重の${result.totalRatio}倍）。あなたのレベルも3種目の重量を入れるだけで判定できます。`,
    path: `/big3-result?${query}`,
    type: "website",
    noindex: true,
    image: `${SITE_URL}/api/og/big3?${query}`,
  });
}

export default function Big3ResultPage({ searchParams }: Props) {
  const input = inputFrom(searchParams);
  const result = input ? diagnoseBig3(input) : null;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-4">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">BIG3レベル診断の結果</h1>
          <p className="text-gray-500 text-sm mt-1">体重比で3種目のレベルを判定</p>
        </div>

        {result ? (
          <Big3ResultCard result={result} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-6 text-sm text-gray-600">
            結果のリンクが正しくないようです。下のボタンからもう一度診断してください。
          </div>
        )}

        <Link
          href="/weight-checker#big3-check"
          className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          自分のレベルも診断する
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-2 text-sm">
          <p className="font-bold text-gray-700">レベルの基準をくわしく見る</p>
          <Link href="/column/strength-standards" className="block text-orange-600 font-bold underline">
            BIG3のレベル表（体重別の目安）
          </Link>
          <Link href="/column/big3-total" className="block text-orange-600 font-bold underline">
            BIG3合計◯kgはどのレベル？
          </Link>
        </div>
      </div>
    </main>
  );
}
