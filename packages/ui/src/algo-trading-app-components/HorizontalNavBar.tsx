import TextLogo from "./TextLogo";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import SignOut from "./SignOut";

export default async function HorizontalNavBar() {
  const session = await getServerSession(authOptions);
  // if (session) {
  //   return redirect("/home");
  // } else {
  //   return redirect("/login");
  // }
  return (
    <div className="navbar-container">
      <div className="navbar-autolayout">
        <TextLogo />
        <div className="navbar-linksSection">
          <div className="navbar-linksContainer">
            <Link
              className="navbarLinks hover:bg-accent py-2 px-4"
              href="/stocks"
            >
              Stocks
            </Link>
            <Link
              className="navbarLinks hover:bg-accent py-2 px-4"
              href="/trades"
            >
              Trades
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="hover:bg-white">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[16px] font-[400]">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div>
                      <NavigationMenuLink>
                        <Link href="/about" legacyBehavior passHref>
                          AboutUs
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink>
                        <Link href="/pricing" legacyBehavior passHref>
                          Pricing
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink>
                        <Link href="/faq" legacyBehavior passHref>
                          FAQ's
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="navbarButtons">
            {!session ? (
              <>
                <Link href="/signup">
                  <ButtonLight text="Sign Up" />
                </Link>
                <Link href="/login">
                  <ButtonDark text="Log In" />
                </Link>
              </>
            ) : (
              <SignOut />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
