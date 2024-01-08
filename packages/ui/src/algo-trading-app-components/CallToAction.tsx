import Link from "next/link";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import Image from "next/image";
import Image7 from "../../public/trend.io.images/7.jpg";

export default function CallToAction() {
  return (
    <div className="CTA-Section">
      <div className="CTA-container">
        <div className="CTA-flexBox">
          <div className="CTA-column">
            <div className="CTA-columnContainer">
              <div className="CTA-heading">Unlock the Future of Trading</div>
              <div className="CTA-subHeading">
                Sign up or sign in to unlock your Systematic Algo-trading
                Journey.
              </div>
              <div className="CTA-buttons">
                <Link href="/signup">
                  <ButtonDark text="Sign up" />
                </Link>
                <Link href="/login">
                  <ButtonLight text="Log in" />
                </Link>
              </div>
            </div>
          </div>
          <div className="CTA-imgColumn">
            <Image priority alt="Image" src={Image7} className="CTA-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
