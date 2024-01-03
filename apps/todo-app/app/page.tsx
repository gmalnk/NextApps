import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  } else {
    return redirect("/login");
  }
  return <></>;
}
