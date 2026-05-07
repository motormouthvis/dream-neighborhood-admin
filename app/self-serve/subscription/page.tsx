import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Subscription",
};

export default function SelfServeSubscriptionPage() {
  return (
    <DnShell pageTitle="Subscription" activeKey="subscription">
      <PlaceholderAdminSection title="Manage Your Subscription" />
    </DnShell>
  );
}
