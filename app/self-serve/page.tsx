import DnShell from "@/components/dn-shell";
import SelfServeContent from "@/components/self-serve-content";

export const metadata = {
  title: "Dream Neighborhood — Self-Serve",
};

export default function SelfServePage() {
  return (
    <DnShell pageTitle="Dashboard" activeKey="dashboard">
      <SelfServeContent />
    </DnShell>
  );
}
