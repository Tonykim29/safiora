import type { Metadata } from "next";
import { FolderCheck } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "전자문서 관리체계 | Safiora",
  description: "종이 문서의 전자화 전환부터 보관·검증 체계 설계까지.",
};

export default function DocumentManagementPage() {
  return (
    <ServiceDetail
      icon={FolderCheck}
      title="전자문서 관리체계"
      tagline="종이 문서를 전자 워크플로우로 전환하고 보관·검증 체계를 설계합니다."
      points={[
        {
          title: "전환 계획 수립",
          desc: "현재 종이로 관리되는 문서 중 어떤 것부터 전자화할지 우선순위를 정합니다. 부서별 문서량과 활용 빈도를 살펴 전환 순서와 방식을 계획합니다.",
        },
        {
          title: "보관·검증·이력관리 체계 설계",
          desc: "전자문서가 위변조되지 않았음을 확인할 수 있는 검증 방식과, 문서 이력을 추적할 수 있는 관리 체계를 설계합니다. 보관 기간과 폐기 기준도 함께 정리합니다.",
        },
        {
          title: "부서별 워크플로우 정의",
          desc: "부서마다 문서를 작성·검토·승인하는 방식이 다른 경우가 많아, 실제 업무 흐름에 맞춰 워크플로우를 따로 정의합니다. 담당자가 바로 적용할 수 있는 수준으로 정리합니다.",
        },
      ]}
      audiences={[
        "종이 문서와 수기 결재가 여전히 많은 조직",
        "문서 보관·검증 기준이 부서마다 다른 조직",
        "문서 이력 추적이 필요한데 별도 체계가 없는 조직",
      ]}
      processNote="전환 계획을 세운 뒤 부서별 워크플로우와 관리 체계를 설계하는 순서로 진행합니다."
    />
  );
}
