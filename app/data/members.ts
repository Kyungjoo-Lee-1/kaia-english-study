export type DayRecord = {
  date: string;
  certified: boolean;
  certifiedAt?: string;  // "08:15" — earlybird
  isVacation?: boolean;  // streak exception
};

export type Member = {
  id: number;
  name: string;
  avatar: string;
  weekRecords: DayRecord[][];
  prevWeekRank: number;
};

export const PENALTY_PER_MISS = 3000;
export const GOAL_AMOUNT = 300_000;
export const TODAY = "2026-03-20";

export const WEEKS: string[][] = [
  ["2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05", "2026-03-06"],
  ["2026-03-09", "2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13"],
  ["2026-03-16", "2026-03-17", "2026-03-18", "2026-03-19", "2026-03-20"],
  ["2026-03-23", "2026-03-24", "2026-03-25", "2026-03-26", "2026-03-27"],
];

export const members: Member[] = [
  {
    id: 1, name: "김민준", avatar: "김", prevWeekRank: 2,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "07:45" },
        { date: "2026-03-03", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-04", certified: true, certifiedAt: "07:55" },
        { date: "2026-03-05", certified: true, certifiedAt: "20:30" },
        { date: "2026-03-06", certified: true, certifiedAt: "08:05" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "07:50" },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true, certifiedAt: "07:40" },
        { date: "2026-03-12", certified: true, certifiedAt: "19:00" },
        { date: "2026-03-13", certified: true, certifiedAt: "21:00" },
      ],
      [
        { date: "2026-03-16", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-17", certified: true, certifiedAt: "08:00" },
        { date: "2026-03-18", certified: true, certifiedAt: "07:50" },
        { date: "2026-03-19", certified: true, certifiedAt: "20:00" },
        { date: "2026-03-20", certified: true, certifiedAt: "07:45" },
      ],
    ],
  },
  {
    id: 2, name: "이수연", avatar: "이", prevWeekRank: 1,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-03", certified: true, certifiedAt: "09:20" },
        { date: "2026-03-04", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-05", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-06", certified: true, certifiedAt: "11:00" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-10", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-11", certified: true, certifiedAt: "09:20" },
        { date: "2026-03-12", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-13", certified: true, certifiedAt: "09:00" },
      ],
      [
        { date: "2026-03-16", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-17", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-18", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-19", certified: true, certifiedAt: "09:20" },
        { date: "2026-03-20", certified: true, certifiedAt: "09:00" },
      ],
    ],
  },
  {
    id: 3, name: "박지훈", avatar: "박", prevWeekRank: 4,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-03", certified: false },
        { date: "2026-03-04", certified: false },
        { date: "2026-03-05", certified: true, certifiedAt: "11:00" },
        { date: "2026-03-06", certified: true, certifiedAt: "10:30" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-10", certified: true, certifiedAt: "10:30" },
        { date: "2026-03-11", certified: false },
        { date: "2026-03-12", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-13", certified: true, certifiedAt: "11:00" },
      ],
      [
        { date: "2026-03-16", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-17", certified: true, certifiedAt: "10:30" },
        { date: "2026-03-18", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-19", certified: true, certifiedAt: "10:30" },
        { date: "2026-03-20", certified: true, certifiedAt: "10:00" },
      ],
    ],
  },
  {
    id: 4, name: "정다은", avatar: "정", prevWeekRank: 3,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-03", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-04", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-05", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-06", certified: true, certifiedAt: "09:00" },
      ],
      [
        { date: "2026-03-09", certified: false },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-12", certified: false },
        { date: "2026-03-13", certified: true, certifiedAt: "09:30" },
      ],
      [
        { date: "2026-03-16", certified: false },
        { date: "2026-03-17", certified: true, certifiedAt: "09:00", isVacation: false },
        { date: "2026-03-18", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-19", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-20", certified: true, certifiedAt: "09:30" },
      ],
    ],
  },
  {
    id: 5, name: "최성호", avatar: "최", prevWeekRank: 5,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-03", certified: true, certifiedAt: "07:45" },
        { date: "2026-03-04", certified: false },
        { date: "2026-03-05", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-06", certified: true, certifiedAt: "07:45" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true, certifiedAt: "07:45" },
        { date: "2026-03-12", certified: false },
        { date: "2026-03-13", certified: true, certifiedAt: "07:30" },
      ],
      [
        { date: "2026-03-16", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-17", certified: true, certifiedAt: "07:45" },
        { date: "2026-03-18", certified: true, certifiedAt: "07:30" },
        { date: "2026-03-19", certified: false },
        { date: "2026-03-20", certified: true, certifiedAt: "07:45" },
      ],
    ],
  },
  {
    id: 6, name: "한지민", avatar: "한", prevWeekRank: 6,
    weekRecords: [
      [
        { date: "2026-03-02", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-03", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-04", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-05", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-06", certified: true, certifiedAt: "09:00" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-10", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-11", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-12", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-13", certified: true, certifiedAt: "09:00" },
      ],
      [
        { date: "2026-03-16", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-17", certified: true, certifiedAt: "09:10" },
        { date: "2026-03-18", certified: true, certifiedAt: "09:00" },
        { date: "2026-03-19", certified: true, certifiedAt: "09:30" },
        { date: "2026-03-20", certified: true, certifiedAt: "09:00" },
      ],
    ],
  },
  {
    id: 7, name: "윤서준", avatar: "윤", prevWeekRank: 7,
    weekRecords: [
      [
        { date: "2026-03-02", certified: false },
        { date: "2026-03-03", certified: false },
        { date: "2026-03-04", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-05", certified: false },
        { date: "2026-03-06", certified: true, certifiedAt: "10:30" },
      ],
      [
        { date: "2026-03-09", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true, certifiedAt: "10:30" },
        { date: "2026-03-12", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-13", certified: false },
      ],
      [
        { date: "2026-03-16", certified: false },
        { date: "2026-03-17", certified: true, certifiedAt: "10:00" },
        { date: "2026-03-18", certified: false },
        { date: "2026-03-19", certified: true, certifiedAt: "10:30" },
        { date: "2026-03-20", certified: false },
      ],
    ],
  },
];

export function getAllDays(member: Member): DayRecord[] {
  return member.weekRecords.flat();
}

export function calcTotalCertified(member: Member): number {
  return getAllDays(member).filter((d) => d.certified).length;
}

export function calcMissCount(member: Member): number {
  return getAllDays(member).filter((d) => !d.certified && !d.isVacation).length;
}

export function calcPenalty(member: Member): number {
  return calcMissCount(member) * PENALTY_PER_MISS;
}

export function calcTotalPenalty(): number {
  return members.reduce((sum, m) => sum + calcPenalty(m), 0);
}

export function calcGoalProgress(): number {
  return Math.min(100, Math.round((calcTotalPenalty() / GOAL_AMOUNT) * 100));
}

export function calcStreak(member: Member, today: string): number {
  const days = getAllDays(member)
    .filter((d) => d.date <= today)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  let streak = 0;
  let prev: string | null = null;

  for (const day of days) {
    if (day.isVacation) {
      prev = day.date;
      continue;
    }
    if (!day.certified) break;
    if (prev !== null) {
      const gap = daysBetween(day.date, prev);
      if (gap > 2) break;
    }
    streak++;
    prev = day.date;
  }
  return streak;
}

function daysBetween(a: string, b: string): number {
  return Math.abs(
    (new Date(b).getTime() - new Date(a).getTime()) / (1000 * 60 * 60 * 24)
  );
}

export function calcRanking(): (Member & { rank: number; delta: number })[] {
  const sorted = [...members].sort(
    (a, b) => calcTotalCertified(b) - calcTotalCertified(a)
  );
  return sorted.map((m, i) => ({
    ...m,
    rank: i + 1,
    delta: m.prevWeekRank - (i + 1),
  }));
}
