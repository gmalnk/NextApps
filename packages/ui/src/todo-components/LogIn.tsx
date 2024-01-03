import Link from "next/link";
import GithubButton from "../common/GithubButton";
import GoogleButton from "../common/GoogleButton";

export default async function LogIn() {
  return (
    <div className="justify-center items-center bg-blue-400 flex flex-col w-screen h-screen max-md:px-5">
      <form className="bg-black flex  max-w-full flex-col items-center  px-16 py-12 rounded-3xl max-md:my-10 max-md:px-5">
        <div className="text-blue-400 text-4xl font-bold whitespace-nowrap mt-5">
          Log In
        </div>
        <input
          className="bg-neutral-700 self-stretch flex shrink-0 h-[59px] flex-col mt-3 rounded-2xl px-4 text-white font-semibold"
          placeholder="email"
        />
        <input
          className="bg-neutral-700 self-stretch flex shrink-0 h-[59px] flex-col mt-3 rounded-2xl px-4"
          placeholder="password"
        />

        <div className="text-white text-center text-base whitespace-nowrap mt-5 mb-2 max-md:mb-10 flex items-center justify-center">
          <div className="text-slate-500">Don't have an account? </div>{" "}
          <Link
            href="/signup"
            className="hover:underline hover:font-semibold hover:cursor-pointer"
          >
            {" SignUp"}
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-2">
          <GithubButton />
          <GoogleButton />
        </div>
      </form>
    </div>
  );
}
