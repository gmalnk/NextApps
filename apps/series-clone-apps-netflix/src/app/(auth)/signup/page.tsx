import SignUp from "@repo/ui/src/netflix-components/SignUp";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../utils/auth";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return <SignUp />;
}
