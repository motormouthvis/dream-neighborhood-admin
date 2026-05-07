import DnShell from "@/components/dn-shell";
import SampleTeamSettings from "@/components/sample-team-settings";

export const metadata = {
  title: "Dream Neighborhood — Partner Team Settings",
};

export default function PartnerTeamSettingsPage() {
  return (
    <DnShell pageTitle="Team Settings" activeKey="team-settings">
      <SampleTeamSettings />
    </DnShell>
  );
}
