import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm shadow-blue-300 dark:shadow-blue-900">
            <span className="text-white font-black text-sm tracking-tight">K</span>
          </div>
          <span className="font-bold text-slate-800 dark:text-slate-100 text-base">
            KAIA <span className="text-blue-600">English</span>
          </span>
        </a>
        <nav className="flex items-center gap-2 text-sm">
          <a
            href="/"
            className="hidden sm:block px-3 py-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
          >
            홈
          </a>
          <a
            href="/dashboard"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors font-medium"
          >
            💰 벌금 현황
          </a>
          <ThemeToggle />
          <a
            href="/submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors font-semibold text-sm shadow-sm shadow-blue-300 dark:shadow-blue-900"
          >
            오늘의 인증하기
          </a>
        </nav>
      </div>
    </header>
  );
}
