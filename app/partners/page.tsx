import DnShell from "@/components/dn-shell";
import PartnersContent from "@/components/partners-content";

export const metadata = {
  title: "Dream Neighborhood — Partners",
};

export default function PartnersPage() {
  return (
    <DnShell pageTitle="Home" activeKey="dashboard">
      <PartnersContent />
    </DnShell>
  );
}
