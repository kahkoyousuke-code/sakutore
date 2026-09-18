/**
 * 部位ごとの回復時間（超回復）と、筋肉痛の経過の単一ソース。
 *
 * 回復時間の表はもともと /column/frequency と /column/split-routine が
 * 別々にハードコードしていた。数字自体は一致していたが、片方だけ直したときに
 * 食い違う形になっていたのでここへ移す。BIG3の strengthStandards.ts、
 * 自重の bodyweightStandards.ts と同じ役割を「休む側」について担う。
 *
 * 注意：これは公的な統計ではなくサクトレの基準。回復の速さは年齢・睡眠・
 * その日のボリュームで変わるので、記事では必ず「目安」と断って使うこと。
 */

export type RecoveryRow = {
  id: "large" | "small" | "core";
  /** 表の左端に出す部位名。サイト全体でこの表記に揃える。 */
  part: string;
  /** 超回復が終わるまでの目安。 */
  hours: string;
  /** 次に同じ部位をやるまでの間隔。 */
  interval: string;
  note: string;
};

export const recoveryRows: RecoveryRow[] = [
  {
    id: "large",
    part: "胸・背中・脚（大きい筋肉）",
    hours: "48〜72時間",
    interval: "中2〜3日",
    note: "1回のダメージが大きく、回復にも時間がかかる",
  },
  {
    id: "small",
    part: "肩・腕（小さい筋肉）",
    hours: "約48時間",
    interval: "中1〜2日",
    note: "大きい筋肉の日にも一緒に使われている点に注意",
  },
  {
    id: "core",
    part: "腹筋・ふくらはぎ",
    hours: "約24時間",
    interval: "毎日でも可",
    note: "日常でも使い続ける筋肉なので回復が速い",
  },
];

/** id で引く。記事側に時間を直書きさせないための入口。 */
export const recoveryFor = (id: RecoveryRow["id"]): RecoveryRow => {
  const row = recoveryRows.find((r) => r.id === id);
  if (!row) throw new Error(`unknown recovery id: ${id}`);
  return row;
};

/**
 * 遅発性筋痛（いわゆる筋肉痛）の経過。
 *
 * トレーニング直後ではなく時間が経ってから出るのが特徴で、
 * 「翌日より翌々日のほうが痛い」のはこの仕組みによる。
 */
export type SorenessPhase = {
  timing: string;
  state: string;
  action: string;
};

export const sorenessPhases: SorenessPhase[] = [
  {
    timing: "直後〜6時間",
    state: "まだほとんど痛くない",
    action: "タンパク質と水分をとる",
  },
  {
    timing: "6〜24時間",
    state: "動かすと痛みが出始める",
    action: "軽く歩く・湯船で温める",
  },
  {
    timing: "24〜48時間",
    state: "ピーク。押すと痛い",
    action: "その部位は休ませ、別の部位をやる",
  },
  {
    timing: "48〜72時間",
    state: "引いてくる",
    action: "痛みが抜けた部位から再開",
  },
  {
    timing: "72時間以降",
    state: "通常はほぼ消える",
    action: "残るなら強度が高すぎたサイン",
  },
];

/** 筋肉痛が長引いていると判断する境目（時間）。これを超えたら強度を見直す。 */
export const SORENESS_LONG_HOURS = 72;
