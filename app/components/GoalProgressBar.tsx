import { calcTotalPenalty, calcGoalProgress, GOAL_AMOUNT } from "@/app/data/members";

function getMotivationMessage(pct: number): string {
  if (pct >= 100) return "🎉 목표 달성! 삼겹살 파티 확정입니다! 🥩";
  if (pct >= 80) return `이제 ${100 - pct}%만 더! 회식이 코앞입니다 🥩`;
  if (pct >= 50) return `반환점 돌파! 삼겹살 파티까지 ${100 - pct}% 남았어요 🥩`;
  if (pct >= 30) return `슬슬 불판 예약해야 할 것 같은데요? 🔥 ${100 - pct}% 남음`;
  return `다음 회식(삼겹살 파티)까지 ${100 - pct}% 남았습니다! 🥩`;
}

export default function GoalProgressBar() {
  const total = calcTotalPenalty();
  const pct = calcGoalProgress();

  return (
    <a href="/dashboard" className="block mb-4 group">
      <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-5 hover:border-slate-200 dark:hover:border-zinc-700 transition-all">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-slate-400 dark:text-zinc-500 mb-0.5">회식비 달성률</p>
            <p className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              {total.toLocaleString()}원
              <span className="text-sm font-medium text-slate-400 dark:text-zinc-500 ml-2">
                / {GOAL_AMOUNT.toLocaleString()}원
              </span>
            </p>
          </div>
          <div className="text-3xl font-black text-red-500">{pct}%</div>
        </div>

        {/* 프로그레스 바 */}
        <div className="h-3 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="text-xs text-slate-500 dark:text-zinc-400">
          {getMotivationMessage(pct)}
        </p>
        <p className="text-xs text-slate-400 dark:text-zinc-600 mt-1 group-hover:text-blue-500 transition-colors">
          자세한 현황 보기 →
        </p>
      </div>
    </a>
  );
}
