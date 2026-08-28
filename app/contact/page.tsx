import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "문의 | Safiora",
  description: "Safiora에 컨설팅을 문의하세요.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Contact</p>
      <h1 className="mt-4 text-[30px] font-bold leading-snug">상담 문의</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-slate">
        서비스 분야, 원하는 일정, 간단한 배경만 남겨주시면 확인 후 회신 드립니다.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  );
}
