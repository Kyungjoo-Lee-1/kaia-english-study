import { calcWeeklyBest } from "@/app/data/posts";

const avatarColors: Record<string, string> = {
  김: "bg-violet-500", 이: "bg-emerald-500", 박: "bg-orange-500",
  정: "bg-pink-500", 최: "bg-cyan-500", 한: "bg-yellow-500", 윤: "bg-red-500",
};

export default function WeeklyBestBanner() {
  const best = calcWeeklyBest("2026-03-16", "2026-03-20");
  if (!best) return null;

  const totalReactions = best.reactions["👏"] + best.reactions["👍"] + best.reactions["🔥"];
  const color = avatarColors[best.avatar] ?? "bg-blue-500";

  return (
    <div className="bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600 rounded-2xl p-4 mb-4 text-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🏅</span>
        <span className="text-xs font-bold tracking-wide uppercase opacity-90">Weekly Best Learner</span>
      </div>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0 ring-2 ring-white/40`}>
          <span className="text-white font-bold text-sm">{best.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-base">{best.author}</div>
          <p className="text-amber-100 text-xs line-clamp-1 mt-0.5">{best.content}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xl font-black">{totalReactions}</div>
          <div className="text-amber-100 text-xs">리액션</div>
        </div>
      </div>
    </div>
  );
}
