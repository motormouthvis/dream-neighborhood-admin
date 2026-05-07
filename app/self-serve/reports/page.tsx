import DnShell from "@/components/dn-shell";
import SampleManageReports from "@/components/sample-manage-reports";

export const metadata = {
  title: "Dream Neighborhood — Manage Reports",
};

export default function SelfServeReportsPage() {
  return (
    <DnShell pageTitle="Reports" activeKey="reports">
      <SampleManageReports />
    </DnShell>
  );
}
