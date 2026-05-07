import DnShell from "@/components/dn-shell";
import PopupSettingsForm from "@/components/popup-settings-form";

export const metadata = {
  title: "Dream Neighborhood — Customize Popup",
};

export default function PopupSettingsPage() {
  return (
    <DnShell pageTitle="Popup Settings" activeKey="dashboard">
      <PopupSettingsForm />
    </DnShell>
  );
}
