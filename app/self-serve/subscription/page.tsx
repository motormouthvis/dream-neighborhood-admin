import DnShell from "@/components/dn-shell";
import SampleSubscription from "@/components/sample-subscription";

export const metadata = {
  title: "Dream Neighborhood — Subscription",
};

export default function SelfServeSubscriptionPage() {
  return (
    <DnShell pageTitle="Subscription" activeKey="subscription">
      <SampleSubscription />
    </DnShell>
  );
}
