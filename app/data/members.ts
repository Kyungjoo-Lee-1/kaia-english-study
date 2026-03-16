export type DayRecord = {
  date: string; // "2026-03-09"
  certified: boolean;
};

export type Member = {
  id: number;
  name: string;
  avatar: string;
  weekRecords: DayRecord[][]; // [week1[], week2[], week3[], week4[]]
};

// 스터디 기간: 4주 (2026-03-02 ~ 2026-03-27), 주 5일(월~금)
// 주 5회 미만 인증 시 빠진 횟수 × 3,000원 패널티
// 현재 4주차 진행 중 (3/16 월요일 기준 — 오늘까지만 반영)

export const PENALTY_PER_MISS = 3000;

// 각 주의 평일 날짜 목록
export const WEEKS: string[][] = [
  ["2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05", "2026-03-06"], // 1주차
  ["2026-03-09", "2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13"], // 2주차
  ["2026-03-16", "2026-03-17", "2026-03-18", "2026-03-19", "2026-03-20"], // 3주차 (진행중)
  ["2026-03-23", "2026-03-24", "2026-03-25", "2026-03-26", "2026-03-27"], // 4주차 (미진행)
];

// 오늘(2026-03-16)까지 패널티 집계 대상인 날짜
export const TODAY = "2026-03-16";

export const members: Member[] = [
  {
    id: 1,
    name: "김민준",
    avatar: "김",
    weekRecords: [
      // 1주차: 5/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: true },
        { date: "2026-03-04", certified: true },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 4/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: true },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 1/1 (오늘까지)
      [
        { date: "2026-03-16", certified: true },
      ],
    ],
  },
  {
    id: 2,
    name: "이수연",
    avatar: "이",
    weekRecords: [
      // 1주차: 5/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: true },
        { date: "2026-03-04", certified: true },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 5/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: true },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: true },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 1/1
      [
        { date: "2026-03-16", certified: true },
      ],
    ],
  },
  {
    id: 3,
    name: "박지훈",
    avatar: "박",
    weekRecords: [
      // 1주차: 3/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: false },
        { date: "2026-03-04", certified: false },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 4/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: true },
        { date: "2026-03-11", certified: false },
        { date: "2026-03-12", certified: true },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 1/1
      [
        { date: "2026-03-16", certified: true },
      ],
    ],
  },
  {
    id: 4,
    name: "정다은",
    avatar: "정",
    weekRecords: [
      // 1주차: 5/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: true },
        { date: "2026-03-04", certified: true },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 2/5
      [
        { date: "2026-03-09", certified: false },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: false },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 0/1
      [
        { date: "2026-03-16", certified: false },
      ],
    ],
  },
  {
    id: 5,
    name: "최성호",
    avatar: "최",
    weekRecords: [
      // 1주차: 4/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: true },
        { date: "2026-03-04", certified: false },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 3/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: false },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 1/1
      [
        { date: "2026-03-16", certified: false },
      ],
    ],
  },
  {
    id: 6,
    name: "한지민",
    avatar: "한",
    weekRecords: [
      // 1주차: 5/5
      [
        { date: "2026-03-02", certified: true },
        { date: "2026-03-03", certified: true },
        { date: "2026-03-04", certified: true },
        { date: "2026-03-05", certified: true },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 5/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: true },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: true },
        { date: "2026-03-13", certified: true },
      ],
      // 3주차: 1/1
      [
        { date: "2026-03-16", certified: true },
      ],
    ],
  },
  {
    id: 7,
    name: "윤서준",
    avatar: "윤",
    weekRecords: [
      // 1주차: 2/5
      [
        { date: "2026-03-02", certified: false },
        { date: "2026-03-03", certified: false },
        { date: "2026-03-04", certified: true },
        { date: "2026-03-05", certified: false },
        { date: "2026-03-06", certified: true },
      ],
      // 2주차: 3/5
      [
        { date: "2026-03-09", certified: true },
        { date: "2026-03-10", certified: false },
        { date: "2026-03-11", certified: true },
        { date: "2026-03-12", certified: true },
        { date: "2026-03-13", certified: false },
      ],
      // 3주차: 1/1
      [
        { date: "2026-03-16", certified: false },
      ],
    ],
  },
];

// 누락 횟수 계산 (완료된 주만 / 진행 중인 주는 오늘까지)
export function calcMissCount(member: Member): number {
  let miss = 0;
  member.weekRecords.forEach((week) => {
    week.forEach((day) => {
      if (!day.certified) miss++;
    });
  });
  return miss;
}

export function calcPenalty(member: Member): number {
  return calcMissCount(member) * PENALTY_PER_MISS;
}

export function calcTotalPenalty(): number {
  return members.reduce((sum, m) => sum + calcPenalty(m), 0);
}
