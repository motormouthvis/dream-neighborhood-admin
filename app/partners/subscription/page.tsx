import DnShell from "@/components/dn-shell";
import SampleSubscription from "@/components/sample-subscription";

export const metadata = {
  title: "Dream Neighborhood — Partner Subscription",
};

export default function PartnerSubscriptionPage() {
  return (
    <DnShell pageTitle="Subscription" activeKey="subscription">
      <SampleSubscription />
    </DnShell>
  );
}
