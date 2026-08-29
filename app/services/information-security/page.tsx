import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "정보보안 관리체계 구축 | Safiora",
  description: "ISO/IEC 27001 갭 분석부터 인증심사 대응까지, 정보보안 관리체계를 구축합니다.",
};

export default function InformationSecurityPage() {
  return (
    <ServiceDetail
      icon={ShieldCheck}
      title="정보보안 관리체계 구축"
      tagline="ISO/IEC 27001 기준으로 정보보안 관리체계를 처음부터 함께 만듭니다."
      points={[
        {
          title: "갭 분석 및 위험평가",
          desc: "현재 운영 중인 보안 체계를 국제표준 요구사항과 비교해 부족한 부분을 확인합니다. 자산별로 발생 가능한 위험을 짚어보고, 우선적으로 손봐야 할 항목을 정리합니다.",
        },
        {
          title: "보안 정책·절차 문서 작성",
          desc: "위험평가 결과를 바탕으로 조직에 맞는 보안 정책과 절차 문서를 작성합니다. 실제 운영 부서가 따를 수 있는 수준으로 구체화하는 데 중점을 둡니다.",
        },
        {
          title: "인증심사 대응 및 사후관리",
          desc: "심사 일정 조율부터 심사원이 요구하는 문서 준비, 현장 대응까지 함께 진행합니다. 인증 이후에도 체계가 유지되도록 내부심사·개선 절차를 안내합니다.",
        },
      ]}
      audiences={[
        "정보보안 관리체계를 처음 구축하는 조직",
        "고객사·발주처로부터 보안 인증을 요구받은 조직",
        "기존 보안 체계는 있지만 국제표준 심사를 준비해야 하는 조직",
      ]}
      processNote="갭 분석으로 현재 상태를 파악한 뒤 문서화와 심사 대응까지 이어집니다."
    />
  );
}
