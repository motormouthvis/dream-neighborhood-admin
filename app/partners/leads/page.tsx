import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Partner Leads",
};

export default function PartnerLeadsPage() {
  return (
    <DnShell pageTitle="Leads" activeKey="leads">
      <PlaceholderAdminSection title="Manage Your Leads" />
    </DnShell>
  );
}
