import DnShell from "@/components/dn-shell";
import ExampleExplorerContent from "@/components/example-explorer-content";

export const metadata = {
  title: "Dream Neighborhood — View Example Neighborhood Explorer",
};

export default function SelfServeExampleExplorerPage() {
  return (
    <DnShell pageTitle="View Example Neighborhood Explorer" activeKey="example-explorer">
      <ExampleExplorerContent />
    </DnShell>
  );
}
