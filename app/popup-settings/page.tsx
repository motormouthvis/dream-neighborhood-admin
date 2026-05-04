import DnShell from "@/components/dn-shell";
import PopupSettingsForm from "@/components/popup-settings-form";

export const metadata = {
  title: "Dream Neighborhood — Customize Popup",
};

export default function PopupSettingsPage() {
  return (
    <DnShell pageTitle="Customize Popup" activeKey="dashboard">
      <PopupSettingsForm />
    </DnShell>
  );
}
