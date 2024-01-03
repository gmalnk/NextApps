import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "db/utils/auth";
import Navbar from "@repo/ui/src/netflix-components/Navbar";
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("redirecting to login");
    return redirect("/login");
  }
  return (
    <div>
      <Navbar session={session} />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
