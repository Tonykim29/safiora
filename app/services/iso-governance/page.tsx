import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "ISO 인증 컨설팅·거버넌스 | Safiora",
  description: "42001·27001·27701 통합 인증 로드맵부터 인증 후 유지관리까지.",
};

export default function IsoGovernancePage() {
  return (
    <ServiceDetail
      icon={BadgeCheck}
      title="ISO 인증 컨설팅·거버넌스"
      tagline="42001·27001·27701 인증을 하나의 로드맵으로 통합해 진행합니다."
      points={[
        {
          title: "통합 인증 로드맵 수립",
          desc: "여러 표준을 따로 준비하면 문서와 절차가 중복되기 쉽습니다. 공통되는 부분을 먼저 정리하고, 표준별로 추가가 필요한 항목만 별도로 준비하는 방식으로 로드맵을 짭니다.",
        },
        {
          title: "심사 일정 조율 및 문서 준비",
          desc: "여러 인증을 함께 준비할 경우 심사 일정도 맞물려 조율이 필요합니다. 표준별 요구 문서를 정리하고 심사 시점에 맞춰 준비 상태를 점검합니다.",
        },
        {
          title: "인증 이후 유지관리 체계 설계",
          desc: "인증을 받은 이후에도 체계를 유지하려면 내부심사와 문서 갱신이 꾸준히 필요합니다. 조직이 자체적으로 운영할 수 있는 수준의 유지관리 체계를 함께 설계합니다.",
        },
      ]}
      audiences={[
        "여러 ISO 인증을 동시에 준비해야 하는 조직",
        "개별 인증은 있지만 통합 관리가 안 되는 조직",
        "공공·금융기관 제안 요건으로 복수 인증이 필요한 조직",
      ]}
      processNote="다른 서비스와 달리 이 서비스는 다섯 단계 전체를 아우릅니다 — 현황 진단부터 인증 후 유지관리까지, 전체 과정을 하나의 흐름으로 진행합니다."
    />
  );
}
