"use client";

import { useState } from "react";
import { Reactions } from "@/app/data/posts";

const EMOJIS: (keyof Reactions)[] = ["👏", "👍", "🔥"];

export default function ReactionBar({ reactions }: { reactions: Reactions }) {
  const [counts, setCounts] = useState<Reactions>({ ...reactions });
  const [clicked, setClicked] = useState<Record<string, boolean>>({});

  const handleReact = (emoji: keyof Reactions) => {
    if (clicked[emoji]) {
      setCounts((prev) => ({ ...prev, [emoji]: prev[emoji] - 1 }));
      setClicked((prev) => ({ ...prev, [emoji]: false }));
    } else {
      setCounts((prev) => ({ ...prev, [emoji]: prev[emoji] + 1 }));
      setClicked((prev) => ({ ...prev, [emoji]: true }));
    }
  };

  return (
    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          onClick={() => handleReact(emoji)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm border transition-all ${
            clicked[emoji]
              ? "bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-semibold"
              : "bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-600"
          }`}
        >
          <span>{emoji}</span>
          <span className="text-xs">{counts[emoji]}</span>
        </button>
      ))}
    </div>
  );
}
