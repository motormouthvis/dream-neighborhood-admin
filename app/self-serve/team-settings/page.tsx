import DnShell from "@/components/dn-shell";
import SampleTeamSettings from "@/components/sample-team-settings";

export const metadata = {
  title: "Dream Neighborhood — Team Settings",
};

export default function SelfServeTeamSettingsPage() {
  return (
    <DnShell pageTitle="Team Settings" activeKey="team-settings">
      <SampleTeamSettings />
    </DnShell>
  );
}
