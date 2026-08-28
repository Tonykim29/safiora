import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safiora | AI 안전·정보보안·ISO 컨설팅",
  description:
    "Safiora는 AI 솔루션, 정보보안, 개인정보보호, 전자문서 관리, ISO 인증 컨설팅 및 거버넌스를 제공합니다. FOR HUMAN SAFETY & PROSPERITY.",
  metadataBase: new URL("https://www.safiora.co.kr"),
  icons: { icon: "/brand/logo.png" },
  openGraph: {
    title: "Safiora | AI 안전·정보보안·ISO 컨설팅",
    description: "신뢰할 수 있는 기술로 안전한 사회를 만듭니다.",
    url: "https://www.safiora.co.kr",
    siteName: "Safiora",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
