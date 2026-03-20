import Header from "@/app/components/Header";
import PostCard from "@/app/components/PostCard";
import RankingBoard from "@/app/components/RankingBoard";
import GoalProgressBar from "@/app/components/GoalProgressBar";
import WeeklyBestBanner from "@/app/components/WeeklyBestBanner";
import { posts } from "@/app/data/posts";

const stats = [
  { label: "참여 인원", value: "24명" },
  { label: "이번 주 인증", value: "87건" },
  { label: "누적 인증", value: "312건" },
  { label: "연속 인증왕", value: "이수연" },
];

const rules = [
  "매일 영어 학습 30분 이상",
  "학습 내용을 사진 또는 글로 인증",
  "주 5회 이상 인증 시 도장 지급",
  "서로의 인증글에 응원 댓글 달기",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors">
      <Header />

      <main className="max-w-4xl mx-auto px-4 pb-24">
        {/* Hero */}
        <section id="about" className="pt-14 pb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-blue-100 dark:border-blue-900">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            3주차 진행 중
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            KAIA English<br />
            <span className="text-blue-600">Challenge</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl mx-auto leading-relaxed mb-3">
            매일 조금씩, 함께 꾸준히.<br />
            KAIA 구성원이 함께하는 영어 실력 향상 스터디입니다.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-sm max-w-lg mx-auto mb-8">
            하루 30분의 영어 학습을 인증하고, 서로 응원하며 성장해요. 꾸준함이 실력이 됩니다.
          </p>
          <a
            href="/submit"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-950"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            오늘의 인증하기
          </a>
        </section>

        {/* Weekly Best */}
        <WeeklyBestBanner />

        {/* Goal Progress Bar */}
        <GoalProgressBar />

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs text-slate-400 dark:text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Ranking */}
        <RankingBoard />

        {/* Rules */}
        <section className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-6 mb-10 text-white">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span>📌</span> 참여 방법
          </h2>
          <ul className="space-y-2.5">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-blue-50">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </section>

        {/* Post list */}
        <section id="posts">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">인증 게시글</h2>
            <span className="text-sm text-slate-400 dark:text-zinc-500">{posts.length}개의 인증</span>
          </div>
          <div className="space-y-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      {/* Floating CTA (mobile) */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center sm:hidden px-4 z-40">
        <a
          href="/submit"
          className="w-full max-w-sm flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xl shadow-blue-300 dark:shadow-blue-950 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          오늘의 인증하기
        </a>
      </div>
    </div>
  );
}
