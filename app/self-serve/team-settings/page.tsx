import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Team Settings",
};

export default function SelfServeTeamSettingsPage() {
  return (
    <DnShell pageTitle="Team Settings" activeKey="team-settings">
      <PlaceholderAdminSection title="Team Settings" />
    </DnShell>
  );
}
