import Image from "next/image";
import BackgroundImage from "../../../public/login_background.jpg";
import NetflixLogo from "../../../public/netflix_logo.svg";
import { authOptions } from "../../../utils/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        fill
        priority
        alt="background Img"
        src={BackgroundImage}
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />
      <Image
        alt="Netflix logo"
        src={NetflixLogo}
        width={120}
        height={12}
        priority
        className="absolute left-4 top-4 z-30 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
