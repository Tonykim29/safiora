import type { Metadata } from "next";
import { BrainCircuit } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "AI 솔루션 컨설팅 | Safiora",
  description: "AI 도입 전 리스크·거버넌스 진단부터 ISO/IEC 42001 기준 AI 경영시스템 설계까지.",
};

export default function AiConsultingPage() {
  return (
    <ServiceDetail
      icon={BrainCircuit}
      title="AI 솔루션 컨설팅"
      tagline="AI를 도입하기 전에 리스크와 거버넌스 체계부터 점검합니다."
      points={[
        {
          title: "AI 도입 전 리스크·거버넌스 진단",
          desc: "AI를 실무에 도입하기 전에 어떤 리스크가 있는지, 조직 내 의사결정 구조가 이를 감당할 수 있는지부터 점검합니다. 데이터 처리 방식, 모델 활용 범위, 책임 소재를 구체적으로 짚어보고 부족한 부분을 정리합니다.",
        },
        {
          title: "ISO/IEC 42001 기준에 맞춘 AI 경영시스템 설계",
          desc: "국제표준에서 요구하는 AI 경영시스템 항목을 기준으로 조직의 운영 방식을 재구성합니다. 문서 체계와 책임 구조를 표준에 맞춰 정리하고, 실제로 운영 가능한 형태로 설계합니다.",
        },
        {
          title: "내부 활용 가이드라인·승인 프로세스 수립",
          desc: "임직원이 AI 도구를 사용할 때 따라야 할 기준과 승인 절차를 만듭니다. 어떤 용도는 허용하고 어떤 경우에 검토가 필요한지 구분해, 실무에서 바로 참고할 수 있는 형태로 정리합니다.",
        },
      ]}
      audiences={[
        "사내에 AI 도구를 도입했지만 명확한 사용 기준이 없는 조직",
        "고객사나 상위 기관으로부터 AI 거버넌스 체계를 요구받은 조직",
        "AI 관련 인증(ISO/IEC 42001)을 준비하려는 조직",
      ]}
      deliverables={[
        {
          category: "정책·매뉴얼",
          items: ["AIMS 경영방침", "AIMS 매뉴얼"],
        },
        {
          category: "절차서",
          items: [
            "AI 리스크 평가·처리",
            "AI 영향평가",
            "AI 시스템 수명주기관리",
            "내부심사",
            "경영검토",
          ],
        },
        {
          category: "지침서",
          items: ["데이터 관리 지침", "AI 리스크 식별·평가 방법", "AI 영향평가 수행 가이드"],
        },
        {
          category: "양식·기록물",
          items: [
            "AI 정보자산목록",
            "AI 영향평가보고서",
            "위험분석 평가표",
            "SoA(적용성 선언서)",
          ],
        },
      ]}
      processNote="현황 진단으로 시작해 조직에 맞는 가이드라인·정책을 문서화하는 순서로 진행합니다."
    />
  );
}
