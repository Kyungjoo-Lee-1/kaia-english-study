import Header from "@/app/components/Header";
import BadgeGallery from "@/app/components/BadgeGallery";
import {
  members, calcMissCount, calcPenalty, calcTotalPenalty,
  calcStreak, calcTotalCertified, PENALTY_PER_MISS, WEEKS, TODAY,
} from "@/app/data/members";
import { calcGoalProgress, GOAL_AMOUNT } from "@/app/data/members";

const avatarColors: Record<string, string> = {
  김: "bg-violet-500", 이: "bg-emerald-500", 박: "bg-orange-500",
  정: "bg-pink-500", 최: "bg-cyan-500", 한: "bg-yellow-500", 윤: "bg-red-500",
};

const completedWeeks = WEEKS.filter((w) => w[0] <= TODAY).length;

export default function DashboardPage() {
  const totalPenalty = calcTotalPenalty();
  const goalPct = calcGoalProgress();
  const ranked = [...members].sort((a, b) => calcPenalty(b) - calcPenalty(a));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">💰 벌금 현황판</h1>
          <p className="text-slate-400 dark:text-zinc-500 text-sm">
            미인증 1회 = {PENALTY_PER_MISS.toLocaleString()}원 · 오늘({TODAY}) 기준
          </p>
        </div>

        {/* 상단 요약 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="col-span-2 bg-red-500 dark:bg-red-600 rounded-2xl p-5 text-white">
            <p className="text-red-100 text-xs mb-1">총 누적 벌금</p>
            <p className="text-4xl font-extrabold tracking-tight">
              {totalPenalty.toLocaleString()}
              <span className="text-xl font-semibold ml-1">원</span>
            </p>
            <p className="text-red-200 text-xs mt-2">
              전체 {members.length}명 · {completedWeeks}주차 진행 기준
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-4 text-center">
            <p className="text-xs text-slate-400 dark:text-zinc-500 mb-1">참여 인원</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{members.length}명</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-4 text-center">
            <p className="text-xs text-slate-400 dark:text-zinc-500 mb-1">패널티 단가</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{PENALTY_PER_MISS.toLocaleString()}원</p>
          </div>
        </div>

        {/* 회식비 달성률 */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-5 mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">🥩 회식비 달성률</span>
            <span className="text-sm font-bold text-red-500">{goalPct}% / 목표 {GOAL_AMOUNT.toLocaleString()}원</span>
          </div>
          <div className="h-3 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-400"
              style={{ width: `${goalPct}%` }}
            />
          </div>
        </div>

        {/* 개인별 랭킹 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">개인별 벌금 현황</h2>
          <div className="space-y-3">
            {ranked.map((member, idx) => {
              const miss = calcMissCount(member);
              const penalty = calcPenalty(member);
              const total = calcTotalCertified(member);
              const streak = calcStreak(member, TODAY);
              const color = avatarColors[member.avatar] ?? "bg-blue-500";
              const maxPenalty = calcPenalty(ranked[0]) || 1;
              const barWidth = Math.round((penalty / maxPenalty) * 100);
              const isPerfect = penalty === 0;

              return (
                <div key={member.id} className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${
                      idx === 0 && !isPerfect
                        ? "bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                    }`}>
                      {idx + 1}
                    </span>
                    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{member.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-800 dark:text-slate-100">{member.name}</span>
                          {streak > 0 && (
                            <span className="text-xs text-orange-500 font-medium">🔥 {streak}일</span>
                          )}
                        </div>
                        <span className={`font-bold text-base ${isPerfect ? "text-emerald-500" : "text-red-500 dark:text-red-400"}`}>
                          {isPerfect ? "0원 🎉" : `${penalty.toLocaleString()}원`}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
                        미인증 {miss}회 · 누적 인증 {total}회
                      </div>
                    </div>
                  </div>

                  <div className="h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full ${isPerfect ? "bg-emerald-400" : "bg-red-400"}`}
                      style={{ width: isPerfect ? "100%" : `${barWidth}%` }}
                    />
                  </div>

                  {/* 뱃지 */}
                  <BadgeGallery member={member} />

                  {/* 주차별 캘린더 */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.weekRecords.map((week, wi) => (
                      <div key={wi} className="flex items-center gap-1">
                        <span className="text-xs text-slate-400 dark:text-zinc-500 w-8">{wi + 1}주차</span>
                        {week.map((day) => (
                          <div
                            key={day.date}
                            title={day.date}
                            className={`w-5 h-5 rounded-md flex items-center justify-center ${
                              day.isVacation
                                ? "bg-amber-100 dark:bg-amber-950"
                                : day.certified
                                ? "bg-blue-500 dark:bg-blue-600"
                                : "bg-red-100 dark:bg-red-950"
                            }`}
                          >
                            {day.isVacation ? (
                              <span className="text-xs">🏖</span>
                            ) : !day.certified ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-red-400 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-zinc-500">
          <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-blue-500 dark:bg-blue-600 inline-block" />인증 완료</span>
          <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-red-100 dark:bg-red-950 inline-block" />미인증 (−{PENALTY_PER_MISS.toLocaleString()}원)</span>
          <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-amber-100 dark:bg-amber-950 inline-block" />휴가</span>
        </div>
      </main>
    </div>
  );
}
