/**
 * Per-page "last significant update" dates for sitemap.xml <lastmod>.
 *
 * Google only uses lastmod when it is consistently accurate. Stamping every
 * URL with the same date on each deploy makes Google ignore it, so each page
 * keeps its own date here.
 *
 * Bump a page's date when its main content changes (text, tables, numbers,
 * links). Layout or styling changes do not count. If you change a shared
 * module such as strengthStandards.ts, bump the pages whose numbers moved.
 *
 * Initial values (2026-11-22) are each page's last git commit, ignoring the
 * two site-wide layout commits of 2026-10-24 (f65d772, 33d3bf7).
 */
export const PAGE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-08-11",
  "/column": "2026-11-27",
  "/questions": "2026-08-01",
  "/rm-calculator": "2026-11-08",
  "/weight-checker": "2026-11-08",
  "/calorie-calculator": "2026-09-18",
  "/guide": "2026-07-04",
  "/faq": "2026-07-04",
  "/gear": "2026-09-26",
  "/about": "2026-08-09",
  "/privacy": "2026-07-04",
  "/terms": "2026-07-04",

  "/column/10years": "2026-11-12",
  "/column/abs-body-fat": "2026-11-09",
  "/column/abs-training": "2026-11-09",
  "/column/alcohol": "2026-09-18",
  "/column/arm-training": "2026-10-29",
  "/column/back-benefits": "2026-11-19",
  "/column/back-pain": "2026-11-19",
  "/column/beginner-guide": "2026-10-19",
  "/column/bench-press-average": "2026-11-08",
  "/column/big3-accessory": "2026-10-19",
  "/column/big3-balance": "2026-11-02",
  "/column/big3-total": "2026-11-02",
  "/column/chest-home": "2026-11-27",
  "/column/deadlift-average": "2026-11-03",
  "/column/deadlift-grip": "2026-10-12",
  "/column/deadlift-weight-level": "2026-11-19",
  "/column/diet-rebound-muscle": "2026-10-25",
  "/column/dumbbell-press-level": "2026-10-01",
  "/column/dumbbell-weight": "2026-10-29",
  "/column/effect-timeline": "2026-10-25",
  "/column/everyday-training": "2026-10-26",
  "/column/frequency": "2026-09-22",
  "/column/gym-beginner": "2026-11-23",
  "/column/hip-training": "2026-11-16",
  "/column/home-back": "2026-11-05",
  "/column/leg-training": "2026-11-16",
  "/column/lifting-belt": "2026-11-19",
  "/column/metabolism": "2026-09-18",
  "/column/motivation": "2026-11-12",
  "/column/muscle-soreness": "2026-10-26",
  "/column/muscle-vs-cardio-women": "2026-09-18",
  "/column/over40": "2026-08-02",
  "/column/personal-gym-cost": "2026-07-18",
  "/column/plateau": "2026-11-12",
  "/column/power-rack": "2026-11-07",
  "/column/protein": "2026-11-08",
  "/column/protein-guide": "2026-11-08",
  "/column/pullup-progression": "2026-11-05",
  "/column/pushup-pullup-average": "2026-11-03",
  "/column/rest": "2026-10-25",
  "/column/sauna-bath": "2026-10-26",
  "/column/sets-and-reps": "2026-11-25",
  "/column/shoulder-training": "2026-10-29",
  "/column/sleep": "2026-11-03",
  "/column/split-routine": "2026-10-25",
  "/column/squat-average": "2026-11-08",
  "/column/squat-weight-level": "2026-10-22",
  "/column/strength-standards": "2026-11-22",
  "/column/stretch": "2026-09-18",
  "/column/training-order": "2026-11-27",
  "/column/women-40s-training": "2026-09-22",
  "/column/women-big3": "2026-11-02",
  "/column/women-muscle-slim": "2026-09-22",
  "/column/women-training-timing": "2026-08-02",
  "/column/warmup-sets": "2026-11-23",
  "/column/workout-time": "2026-11-25",
  "/column/chest-training": "2026-11-27",
};

/**
 * Returns the page's lastmod. Throws at build time when a page has no entry,
 * so a new article cannot ship without its own date.
 */
export function lastModifiedFor(path: string): Date {
  const date = PAGE_LAST_MODIFIED[path];
  if (!date) {
    throw new Error(
      `No lastmod for ${path}. Add it to PAGE_LAST_MODIFIED in src/lib/lastModified.ts.`,
    );
  }
  return new Date(date);
}
