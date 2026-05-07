import DnShell from "@/components/dn-shell";
import SampleManageLeads from "@/components/sample-manage-leads";

export const metadata = {
  title: "Dream Neighborhood — Leads",
};

export default function SelfServeLeadsPage() {
  return (
    <DnShell pageTitle="Leads" activeKey="leads">
      <SampleManageLeads />
    </DnShell>
  );
}
