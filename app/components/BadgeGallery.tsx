import { Member } from "@/app/data/members";
import { getMemberBadges } from "@/app/data/gamification";

export default function BadgeGallery({ member }: { member: Member }) {
  const badges = getMemberBadges(member);

  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {badges.map(({ badge, earned }) => (
        <div key={badge.id} className="relative group">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-base border-2 transition-all ${
              earned
                ? "border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-950"
                : "border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-800 grayscale opacity-40"
            }`}
            title={badge.desc}
          >
            {badge.icon}
          </div>
          {/* 툴팁 */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 pointer-events-none">
            <div className="bg-zinc-800 dark:bg-zinc-700 text-white text-xs rounded-lg px-2.5 py-1.5 whitespace-nowrap shadow-lg">
              <div className="font-semibold mb-0.5">{badge.icon} {badge.name}</div>
              <div className="text-zinc-300">{badge.desc}</div>
              {!earned && <div className="text-zinc-400 mt-0.5">미획득</div>}
            </div>
            <div className="w-2 h-2 bg-zinc-800 dark:bg-zinc-700 rotate-45 mx-auto -mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}
