import { authOptions } from "db/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return <>{children}</>;
}
