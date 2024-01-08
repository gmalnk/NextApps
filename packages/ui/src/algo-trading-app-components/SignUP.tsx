import ButtonDark from "./ButtonDark";
import Image from "next/image";
import Image9 from "../../public/trend.io.images/9.jpg";
import Link from "next/link";
import { Separator } from "../../components/ui/separator";
import GithubButton from "../common/GithubButton";
import GoogleButton from "../common/GoogleButton";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
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
              <Image priority alt="Image" src={Image9} className="loginImg" />
            </div>
            <div className="loginFormContainer">
              <div className="loginForm">
                <div className="loginFormHeading">SIGN UP</div>
                <div className="loginFormSubHeadding">
                  Sign up to access your account
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
                <div className="loginFormText">Confirm Password</div>
                <input
                  className="loginFormInput"
                  placeholder="confirm password"
                ></input>
                <div style={{ marginTop: "20px" }}>
                  <ButtonDark text="Sign up" />
                </div>
                <div className="flex justify-center items-center gap-4 mt-3">
                  <p>Already have an acount?</p>
                  <p className="hover:underline hover:text-blue-500 font-semibold">
                    <Link href="/login">LogIn</Link>{" "}
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
