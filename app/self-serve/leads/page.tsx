import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Leads",
};

export default function SelfServeLeadsPage() {
  return (
    <DnShell pageTitle="Leads" activeKey="leads">
      <PlaceholderAdminSection title="Manage Your Leads" />
    </DnShell>
  );
}
