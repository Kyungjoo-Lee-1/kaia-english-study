import { Post } from "@/app/data/posts";

const avatarColors: Record<string, string> = {
  김: "bg-violet-500",
  이: "bg-emerald-500",
  박: "bg-orange-500",
  정: "bg-pink-500",
  최: "bg-cyan-500",
  한: "bg-yellow-500",
  윤: "bg-red-500",
};

export default function PostCard({ post }: { post: Post }) {
  const bgColor = avatarColors[post.avatar] ?? "bg-blue-500";

  return (
    <article className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-5 hover:shadow-md dark:hover:shadow-zinc-900 hover:border-slate-200 dark:hover:border-zinc-700 transition-all">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">{post.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800 dark:text-slate-100">{post.author}</span>
            <span className="text-xs text-slate-400 dark:text-zinc-500">
              {post.week}주차 · {post.day}
            </span>
            <span className="text-xs text-slate-400 dark:text-zinc-500">{post.date}</span>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            {post.content}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-1 text-slate-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {post.likes}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
