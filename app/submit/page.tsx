"use client";

import Header from "@/app/components/Header";
import { useState, useRef } from "react";

type Method = "speak" | "duolingo";
type ProofMode = "photo" | "text";

const METHODS: { id: Method; label: string; icon: string; desc: string }[] = [
  { id: "speak",    label: "Speak",    icon: "🎙️", desc: "AI 스피킹 튜터 앱" },
  { id: "duolingo", label: "Duolingo", icon: "🦉", desc: "게임형 언어 학습" },
];

const inputCls =
  "w-full border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 transition-colors";

export default function SubmitPage() {
  const [method, setMethod] = useState<Method | null>(null);
  const [proofMode, setProofMode] = useState<ProofMode>("photo");
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors">
        <Header />
        <div className="max-w-lg mx-auto px-4 pt-24 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">인증 완료!</h2>
          <p className="text-slate-400 dark:text-zinc-500 mb-8">오늘의 영어 학습을 인증했습니다. 내일도 함께해요!</p>
          <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
            목록으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">오늘의 인증하기</h1>
          <p className="text-slate-400 dark:text-zinc-500 text-sm">오늘의 영어 학습 내용을 공유해주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* 1. 이름 */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              이름 <span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="홍길동" className={inputCls} />
          </div>

          {/* 2. 공부 방법 */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              공부 방법 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {METHODS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all ${
                    method === m.id
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                      : "border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  <span className="text-3xl">{m.icon}</span>
                  <span className={`font-semibold text-sm ${method === m.id ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"}`}>
                    {m.label}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-zinc-500">{m.desc}</span>
                  {method === m.id && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">선택됨</span>
                  )}
                </button>
              ))}
            </div>
            <input type="text" required value={method ?? ""} onChange={() => {}} className="sr-only" aria-hidden />
          </div>

          {/* 3. 인증 탭 */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              인증 내용 <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-xl border border-slate-200 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900 mb-3">
              {(["photo", "text"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setProofMode(mode)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                    proofMode === mode
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {mode === "photo" ? "📷 사진 업로드" : "✏️ 텍스트 입력"}
                </button>
              ))}
            </div>

            {proofMode === "photo" && (
              <label
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="flex flex-col items-center justify-center w-full rounded-2xl border-2 border-dashed border-slate-200 dark:border-zinc-700 cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors bg-white dark:bg-zinc-900 overflow-hidden"
                style={{ minHeight: "160px" }}
              >
                {preview ? (
                  <div className="relative w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={preview} alt="미리보기" className="w-full max-h-64 object-cover" />
                    <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
                      클릭하여 변경
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-10 px-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-300 dark:text-zinc-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 font-medium">클릭하거나 사진을 드래그하세요</p>
                    <p className="text-xs text-slate-400 dark:text-zinc-500 mt-1">PNG, JPG, GIF · 최대 10MB</p>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} required={proofMode === "photo"} />
              </label>
            )}

            {proofMode === "text" && (
              <textarea
                required={proofMode === "text"}
                rows={6}
                placeholder={
                  method === "speak"
                    ? "오늘 Speak에서 어떤 주제로 연습했나요?\n예) 비즈니스 미팅 대화 5회 완료, 발음 교정 피드백 받음"
                    : method === "duolingo"
                    ? "오늘 Duolingo 학습 내용을 알려주세요.\n예) 3레슨 완료, 연속 30일 스트릭 달성!"
                    : "오늘 어떤 영어 공부를 했나요?"
                }
                className={`${inputCls} resize-none`}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-950"
          >
            인증 제출하기
          </button>
        </form>
      </main>
    </div>
  );
}
