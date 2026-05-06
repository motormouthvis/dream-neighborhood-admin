import DnShell from "@/components/dn-shell";
import ManageExplorersContent from "@/components/manage-explorers-content";

export const metadata = {
  title: "Dream Neighborhood — Manage Explorers",
};

export default function PartnersExplorersPage() {
  return (
    <DnShell pageTitle="Manage Explorers" activeKey="explorers">
      <ManageExplorersContent />
    </DnShell>
  );
}
