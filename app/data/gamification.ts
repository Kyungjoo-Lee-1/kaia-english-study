import { Member, getAllDays, calcTotalCertified } from "./members";

export type BadgeId = "earlyBird" | "weekendWarrior" | "century";

export type Badge = {
  id: BadgeId;
  name: string;
  icon: string;
  desc: string;
  condition: (m: Member) => boolean;
};

export const BADGES: Badge[] = [
  {
    id: "earlyBird",
    name: "얼리버드",
    icon: "🌅",
    desc: "오전 8시 이전 인증 5회 달성",
    condition: (m) =>
      getAllDays(m).filter(
        (d) => d.certified && d.certifiedAt && d.certifiedAt < "08:00"
      ).length >= 5,
  },
  {
    id: "weekendWarrior",
    name: "주말 전사",
    icon: "⚔️",
    desc: "토/일 모두 인증 4주 연속 성공",
    condition: (_m) => false, // 현재 데이터는 평일만 기록 — 주말 데이터 추가 시 활성화
  },
  {
    id: "century",
    name: "꾸준함의 상징",
    icon: "💎",
    desc: "누적 인증 50건 달성",
    condition: (m) => calcTotalCertified(m) >= 50,
  },
];

export function getMemberBadges(member: Member): { badge: Badge; earned: boolean }[] {
  return BADGES.map((badge) => ({
    badge,
    earned: badge.condition(member),
  }));
}
