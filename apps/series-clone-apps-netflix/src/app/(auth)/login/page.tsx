import Login from "@repo/ui/src/netflix-components/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../utils/auth";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return <Login />;
}
