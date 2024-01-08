import Image from "next/image";
import GithubButton from "../common/GithubButton";
import GoogleButton from "../common/GoogleButton";
import ButtonDark from "./ButtonDark";
import Image8 from "../../public/trend.io.images/8.jpg";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <>
      <div className="login">
        <div className="loginSection">
          <div className="loginContainer">
            <div className="loginImgContainer">
              <Image priority alt="Image" src={Image8} className="loginImg" />
            </div>
            <div className="loginFormContainer">
              <div className="loginForm">
                <div className="loginFormHeading">LOG IN</div>
                <div className="loginFormSubHeadding">
                  Sign in to access your account
                </div>
                <div className="loginFormText">Email</div>
                <input
                  className="loginFormInput"
                  placeholder="yourmail@gmail.com"
                ></input>
                <div className="loginFormText">Password</div>
                <input
                  className="loginFormInput"
                  placeholder="password"
                ></input>
                <div style={{ marginTop: "20px" }}>
                  <ButtonDark text="log in" />
                </div>
                <div className="flex justify-center items-center gap-4 mt-3">
                  <p>Don't have an acount?</p>
                  <p className="hover:underline hover:text-blue-500 font-semibold">
                    <Link href="/signup">SignUP</Link>{" "}
                  </p>
                </div>
                <Separator orientation="horizontal" className="my-5" />
                <div className="flex gap-3 mt-8 items-center justify-center w-full">
                  <GithubButton />
                  <GoogleButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
