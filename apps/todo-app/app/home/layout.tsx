import SideNav from "@repo/ui/src/todo-components/SideNav";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-full h-full py-4 px-3">{children}</div>
    </div>
  );
}
