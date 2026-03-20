import { calcRanking, calcTotalCertified, calcStreak, TODAY } from "@/app/data/members";

const medals = ["🥇", "🥈", "🥉"];
const avatarColors: Record<string, string> = {
  김: "bg-violet-500", 이: "bg-emerald-500", 박: "bg-orange-500",
  정: "bg-pink-500", 최: "bg-cyan-500", 한: "bg-yellow-500", 윤: "bg-red-500",
};

export default function RankingBoard() {
  const ranked = calcRanking();

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">🏆 인증 랭킹</h2>
      <div className="space-y-2">
        {ranked.map((member) => {
          const color = avatarColors[member.avatar] ?? "bg-blue-500";
          const total = calcTotalCertified(member);
          const streak = calcStreak(member, TODAY);
          const isTop3 = member.rank <= 3;

          return (
            <div
              key={member.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${
                isTop3
                  ? "bg-white dark:bg-zinc-900 border-amber-200 dark:border-amber-900 shadow-sm"
                  : "bg-white dark:bg-zinc-900 border-slate-100 dark:border-zinc-800"
              }`}
            >
              {/* 순위 */}
              <div className="w-8 text-center flex-shrink-0">
                {isTop3 ? (
                  <span className="text-xl">{medals[member.rank - 1]}</span>
                ) : (
                  <span className="text-sm font-bold text-slate-400 dark:text-zinc-500">
                    {member.rank}
                  </span>
                )}
              </div>

              {/* 아바타 */}
              <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-sm">{member.avatar}</span>
              </div>

              {/* 이름 + 스트릭 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                    {member.name}
                  </span>
                  {streak > 0 && (
                    <span className="text-xs text-orange-500 font-medium">
                      🔥 {streak}일째
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
                  총 {total}회 인증
                </div>
              </div>

              {/* 순위 변동 */}
              <div className="flex-shrink-0 text-right">
                {member.delta > 0 ? (
                  <span className="text-xs font-semibold text-emerald-500 flex items-center gap-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {member.delta}
                  </span>
                ) : member.delta < 0 ? (
                  <span className="text-xs font-semibold text-red-400 flex items-center gap-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {Math.abs(member.delta)}
                  </span>
                ) : (
                  <span className="text-xs text-slate-300 dark:text-zinc-600">—</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
