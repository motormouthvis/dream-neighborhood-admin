import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Reports",
};

export default function SelfServeReportsPage() {
  return (
    <DnShell pageTitle="Reports" activeKey="reports">
      <PlaceholderAdminSection title="Manage Your Reports" />
    </DnShell>
  );
}
