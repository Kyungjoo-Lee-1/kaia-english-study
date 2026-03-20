export type Reactions = { "👏": number; "👍": number; "🔥": number };

export type Post = {
  id: number;
  author: string;
  avatar: string;
  date: string;
  week: number;
  day: string;
  content: string;
  tags: string[];
  reactions: Reactions;
};

export const posts: Post[] = [
  {
    id: 1, author: "김민준", avatar: "김", date: "2026-03-20", week: 3, day: "금요일",
    content: "오늘은 BBC Learning English에서 '기후변화' 관련 에피소드를 들었습니다. 'carbon footprint', 'renewable energy' 같은 표현을 정리했어요. 쉐도잉 20분 완료!",
    tags: ["리스닝", "쉐도잉", "환경"],
    reactions: { "👏": 5, "👍": 4, "🔥": 3 },
  },
  {
    id: 2, author: "이수연", avatar: "이", date: "2026-03-20", week: 3, day: "금요일",
    content: "TED Talk 'The Power of Vulnerability' 시청 완료. 오늘 새로 배운 단어: resilience, authenticity, vulnerability. 내일은 스크립트를 다시 읽어볼 예정입니다.",
    tags: ["TED", "단어학습", "스피킹"],
    reactions: { "👏": 8, "👍": 6, "🔥": 7 },
  },
  {
    id: 3, author: "박지훈", avatar: "박", date: "2026-03-19", week: 3, day: "목요일",
    content: "영어 일기 쓰기 완료! 오늘 있었던 일을 A4 반 페이지 분량으로 영어로 작성했습니다. 문법 교정 앱을 활용해서 실수한 부분도 체크했어요.",
    tags: ["영어일기", "라이팅", "문법"],
    reactions: { "👏": 6, "👍": 7, "🔥": 2 },
  },
  {
    id: 4, author: "정다은", avatar: "정", date: "2026-03-19", week: 3, day: "목요일",
    content: "영어 원서 'Atomic Habits' 30페이지 독서 완료. 'compound effect', 'habit loop'라는 개념이 인상적이었습니다. 영어 메모도 함께 작성했어요.",
    tags: ["원서읽기", "리딩", "자기계발"],
    reactions: { "👏": 10, "👍": 8, "🔥": 5 },
  },
  {
    id: 5, author: "최성호", avatar: "최", date: "2026-03-18", week: 3, day: "수요일",
    content: "Coursera 영어 강의 1개 유닛 수강. 비즈니스 이메일 작성법 관련 내용이었습니다. 'I look forward to hearing from you' 같은 표현들 정리 완료!",
    tags: ["비즈니스영어", "이메일", "강의"],
    reactions: { "👏": 3, "👍": 5, "🔥": 2 },
  },
];

export function calcWeeklyBest(weekStart: string, weekEnd: string) {
  const weekPosts = posts.filter((p) => p.date >= weekStart && p.date <= weekEnd);
  if (weekPosts.length === 0) return null;
  return weekPosts.reduce((best, p) => {
    const total = (r: typeof p.reactions) => r["👏"] + r["👍"] + r["🔥"];
    return total(p.reactions) > total(best.reactions) ? p : best;
  });
}
