# サクトレ（sakutore）

「サクッとトレーニングメニュー作成」。質問に答えるとAIが今日1回分の筋トレメニューを作る無料Webアプリ＋筋トレ情報メディア。

- 本番: https://sakutore.jp （Vercel / mainブランチは `master`）
- 姉妹サービス: サクメシ（食事）/ サクサプ（サプリ診断）。3サイトで相互リンクして権威性を補い合っている
- 運営者: motsu（`src/lib/author.ts` が単一ソース）

## このサイトのゴール

**月5,000円のマネタイズ。** 収益はGoogle AdSense＋A8（RIZAP）＋Amazonアソシエイト。

現状の最大のボトルネックは**PV不足、その真因はインデックス未登録**（約27ページ中5ページしか登録されていない）。
技術的なSEO（sitemap・canonical・内部リンク・noindex申告）はすでに整っているので、**コードで直せる余地はほぼない**。
したがって「SEOのためにこれを直しましょう」系の提案をする前に、それが本当にインデックス／流入の増加につながるかを一度考えること。効くのは**検索需要のあるクエリを取りにいく新規コンテンツ**のほう。

## コマンド

```bash
npm run dev     # 開発サーバー (localhost:3000)
npm run build   # 本番ビルド。変更後は必ず通す
npm run lint    # ESLint
```

テストは無い。**変更の検証は `npm run build` が通ることと、dev serverでの目視**で行う。

## 技術スタック

Next.js 14 App Router / TypeScript / React 18 / Tailwind CSS 3.4 / Anthropic SDK（`claude-haiku-4-5-20251001`）。
サーバDBなし、ユーザーデータは**すべてブラウザの localStorage**（`src/lib/workoutLog.ts`, `trainingMemo.ts`, `menuHistory.ts`）。

## 絶対に守るルール：数字とプロフィールの単一ソース

同じ問いに2つの答えを返すのはツール系サイトとして最悪。以下は**必ず共通モジュールを import して使う**。ページ側にハードコードしない。

| モジュール | 何の単一ソースか | 使っている場所 |
|---|---|---|
| `src/lib/strengthStandards.ts` | BIG3の体重比・レベル定義・目標重量計算 | `/weight-checker`, `/column/strength-standards`, `/column/bench-press-average`, `/column/squat-average`, `/column/deadlift-average` |
| `src/lib/author.ts` | 運営者名・実績・SNS（E-E-A-T） | `AuthorBox`, `/about`, `/gear`, JSON-LD |
| `src/lib/metadata.ts` | title/description/canonical/OGP | 全ページ（`pageMetadata()` 経由） |
| `src/lib/exercises.ts` | 種目の手順・フォーム注意点・コツ | 結果画面の種目カード |
| `src/lib/bodyweightStandards.ts` | 自重種目の負荷（体重比）・回数目安 | `/column/chest-home`, `/column/pushup-pullup-average` |
| `src/lib/fatConversion.ts` | 体脂肪1kg＝7,200kcalの換算 | `/calorie-calculator`, `/column/metabolism`, `/column/alcohol`, `/column/effect-timeline` |
| `src/lib/recoveryStandards.ts` | 部位別の回復時間・筋肉痛（遅発性筋痛）の経過 | `/column/frequency`, `/column/split-routine`, `/column/muscle-soreness` |
| `src/lib/dumbbellStandards.ts` | ダンベル種目で扱う重さ（体重比・10回できる重さ） | `/column/dumbbell-weight` |

過去に記事とツールでスクワットの目安が105kg／87.5kgと食い違う事故があり、`strengthStandards.ts` に一元化して解消した。**数字を足すときは必ずここに足す。**

同じ事故が体脂肪の換算でも起きていた（計算機が1g＝7kcal、記事と解説カードが1kg＝7,200kcal）。`fatConversion.ts` に一元化済み。**記事に数字を書くときは、まず既存モジュールにあるか探すこと。**

1RM換算は Epley式（`1RM = weight × (1 + reps / 30)`、1repは例外でそのまま）。`/rm-calculator` と各記事で同じ式を使う。

ダンベルプレスの目安は `dumbbellStandards.ts` が `strengthStandards.ts` のベンチプレス体重比からEpley式で計算している。ベンチの目安を触るとダンベルの表も動くので、片方だけ直さないこと。

## コラム記事を追加するときの手順

`src/app/column/<slug>/page.tsx` を作り、以下を**全部**やる。

1. `pageMetadata({ title, description, path })` で metadata をエクスポート（直書きしない）
2. `AuthorBox` を記事末尾に置く（35本中35本が設置済み。E-E-A-Tの一貫性のため例外を作らない）
3. `ShareButtons` を置く
4. **`src/app/column/page.tsx` のリストに `href` / `title` / `description` を追記**（忘れると内部リンクが張られず、Googleに発見されない）
5. `src/app/sitemap.ts` は `src/app/column` を読んで自動生成するので**追記不要**。ただし `LAST_MODIFIED` は更新する
6. 悩み系（ダイエット・40代・リバウンド等）の記事なら `RizapCta`（`lead` propで記事ごとの導線文）をまとめ直後に置く

記事の書き味は既存に合わせる: 検索クエリをそのまま拾うtitle、「全国平均◯kg」のような根拠のない数字は否定して基準を示す、筆者の実数字を混ぜる、表で現在地が分かるようにする。

## 収益導線（値はハードコードされている）

- Amazonアソシエイトタグ: `kahko5458-22`
- RIZAP A8: `https://px.a8.net/svt/ejp?a8mat=2NIA6D+5B45YQ+3D3Q+62MDE`
- AdSense: `ca-pub-2851344861391489`（`public/ads.txt`）
- GA4: `G-WC8YJD4GF3`（`NEXT_PUBLIC_GA_ID`）

## 環境変数

`.env.local`（gitignore済み・クラウド環境には存在しない）:

- `ANTHROPIC_API_KEY` … `/api/generate` と `/api/chat` が使う。**未設定だとメニュー生成の実挙動は確認できない**（記事・静的ページ・ツールの作業には不要）
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_SAKUMESHI_URL`

Vercel側にも同じものを設定してある。

## noindex の方針

外部リンク集（`/videos/*`）とUIのみで読み物の実体がないページ（`/chat`, `/result`）は `pageMetadata({ noindex: true })`。
**サイトマップにも載せない**（`sitemap.ts` の静的リストに入れない）。申告と実態を一致させること。

## コミット

- 1コミット1目的。無関係な変更を混ぜない
- **指示があるまでコミット・プッシュしない**
- メッセージは日本語、`feat:` / `fix:` プレフィックス（例: `feat: スクワット平均の記事を追加しBIG3クラスタを3本に拡張`）
