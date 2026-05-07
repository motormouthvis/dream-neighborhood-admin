import DnShell from "@/components/dn-shell";
import PlaceholderAdminSection from "@/components/placeholder-admin-section";

export const metadata = {
  title: "Dream Neighborhood — Partner Team Settings",
};

export default function PartnerTeamSettingsPage() {
  return (
    <DnShell pageTitle="Team Settings" activeKey="team-settings">
      <PlaceholderAdminSection title="Team Settings" />
    </DnShell>
  );
}
