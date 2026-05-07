import DnShell from "@/components/dn-shell";
import SampleManageReports from "@/components/sample-manage-reports";

export const metadata = {
  title: "Dream Neighborhood — Partner Reports",
};

export default function PartnerReportsPage() {
  return (
    <DnShell pageTitle="Reports" activeKey="reports">
      <SampleManageReports />
    </DnShell>
  );
}
