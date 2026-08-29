import type { Metadata } from "next";
import { UserCheck } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "개인정보보호 컨설팅 | Safiora",
  description: "ISO/IEC 27701과 국내 개인정보보호법을 함께 반영한 개인정보 처리 체계 컨설팅.",
};

export default function PrivacyPage() {
  return (
    <ServiceDetail
      icon={UserCheck}
      title="개인정보보호 컨설팅"
      tagline="ISO/IEC 27701 기준과 국내 법령을 함께 반영해 개인정보 처리 체계를 점검합니다."
      points={[
        {
          title: "개인정보 처리방침 점검",
          desc: "현재 개인정보 처리방침이 실제 운영 방식과 일치하는지 확인합니다. 수집 항목, 이용 목적, 보관 기간이 국제표준과 국내 법령 기준에 맞게 기재돼 있는지 점검합니다.",
        },
        {
          title: "흐름도 작성 및 처리 근거 문서화",
          desc: "개인정보가 수집부터 파기까지 어떤 경로로 이동하는지 흐름도로 정리합니다. 각 처리 단계별로 근거를 문서화해 심사나 감사 요청에 바로 대응할 수 있게 합니다.",
        },
        {
          title: "국내 개인정보보호법 준수 여부 확인",
          desc: "국제표준만으로는 다루지 않는 국내 개인정보보호법 요구사항을 별도로 점검합니다. 두 기준 사이에 놓치는 부분이 없도록 함께 확인합니다.",
        },
      ]}
      audiences={[
        "개인정보를 다루지만 처리 흐름이 문서화돼 있지 않은 조직",
        "국내 법령과 국제표준을 동시에 준수해야 하는 조직",
        "개인정보보호 관련 인증을 준비하려는 조직",
      ]}
      processNote="현황 점검 이후 흐름도와 처리 근거 문서를 정리하는 순서로 진행합니다."
    />
  );
}
