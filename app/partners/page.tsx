import DnShell from "@/components/dn-shell";
import PartnersContent from "@/components/partners-content";

export const metadata = {
  title: "Dream Neighborhood — Partners",
};

export default function PartnersPage() {
  return (
    <DnShell pageTitle="Get Started" activeKey="dashboard">
      <PartnersContent />
    </DnShell>
  );
}
