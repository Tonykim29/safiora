"use client";

import { useState } from "react";

// TODO: 사업자 이메일 확정되면 아래 값 교체
const CONTACT_EMAIL = "tonykim29@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [service, setService] = useState("AI 솔루션 컨설팅");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Safiora 문의] ${service} - ${org || name}`);
    const body = encodeURIComponent(
      `이름: ${name}\n소속: ${org}\n관심 서비스: ${service}\n\n문의 내용:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ink">이름</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-[14px] outline-none focus-visible:border-blue-bright"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">소속(기관/회사명)</span>
          <input
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-[14px] outline-none focus-visible:border-blue-bright"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[13px] font-medium text-ink">관심 서비스</span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-[14px] outline-none focus-visible:border-blue-bright"
        >
          <option>AI 솔루션 컨설팅</option>
          <option>정보보안 관리체계 구축</option>
          <option>개인정보보호 컨설팅</option>
          <option>전자문서 관리체계</option>
          <option>ISO 인증 컨설팅·거버넌스</option>
          <option>기타</option>
        </select>
      </label>

      <label className="block">
        <span className="text-[13px] font-medium text-ink">문의 내용</span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-[14px] outline-none focus-visible:border-blue-bright"
        />
      </label>

      <button
        type="submit"
        className="rounded-sm bg-ink px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-blue-deep"
      >
        메일로 보내기
      </button>
      <p className="text-[12px] text-slate">
        버튼을 누르면 입력하신 내용으로 메일 앱이 열립니다. 별도 서버 없이 동작하는 방식입니다.
      </p>
    </form>
  );
}
