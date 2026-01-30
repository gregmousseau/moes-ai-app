export default function NewAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout removes the dashboard sidebar for the agent creation wizard
  return <>{children}</>;
}
