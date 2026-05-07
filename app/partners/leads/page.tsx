import DnShell from "@/components/dn-shell";
import SampleManageLeads from "@/components/sample-manage-leads";

export const metadata = {
  title: "Dream Neighborhood — Partner Leads",
};

export default function PartnerLeadsPage() {
  return (
    <DnShell pageTitle="Leads" activeKey="leads">
      <SampleManageLeads />
    </DnShell>
  );
}
