import HeroHeader from "./HeroHeader";
import CallToAction from "./CallToAction";
import Testimonial from "./Testimonial";
import StockNews from "./StockNews";
import Footer from "./Footer";
import Image from "next/image";
import Image4 from "../../public/trend.io.images/4.jpg";
import Image5 from "../../public/trend.io.images/5.jpg";
import Link from "next/link";
import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";

export default function Home() {
  return (
    <div className="main">
      <HeroHeader />
      <div className="div-23">
        <div className="div-24">
          <div className="div-25">
            <div className="column">
              <Image priority alt="Image" src={Image4} className="img-8" />
            </div>
            <div className="column-2">
              <div className="div-26">
                <div className="div-27">
                  Revolutionize Your Trading Experience
                </div>
                <div className="div-28">
                  Empower Your Trading Journey with our Real-Time Stock
                  Insights, Customizable Charts, Intelligent Trendlines, Chart
                  Patterns, Candlestick patterns, Systematic Algo Trading and
                  many more exciting features
                  <br />– Your Gateway to Informed Decision-Making.
                </div>
                <div className="div-29">
                  <Link href="/learnmore">
                    <ButtonLight text="Learn More" />
                  </Link>
                  <Link href="/signup">
                    <ButtonDark text="Sign Up" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-32">
        <div className="div-33">
          <div className="div-34">
            <div className="column">
              <div className="div-35">
                <div className="div-37">Systematic Trading Redefined</div>
                <div className="div-38">
                  Superior Trendlines using Operations Research Excellence.
                  Embrace Systematic Breakout Trading Strategies with a
                  Pre-Defined Trade Executor. Revolutionizing Trader Psychology
                  and Empowering Traders with Confidence and Control.
                </div>
                <div className="div-39">
                  <div className="div-40">
                    <div className="column">
                      <div className="div-41">
                        <div className="div-42">Algo Trendlines</div>
                        <div className="div-43">
                          Better your trading journey with our system generated
                          Super-Trendlines.
                        </div>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-44">
                        <div className="div-45">Predefined Trades</div>
                        <div className="div-46">
                          Elevating trading psychology, our unique one-of-a-kind
                          predefined trade executor sets a new industry
                          standard.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-47">
                  <Link href="/learnmore">
                    <ButtonLight text="Learn More" />
                  </Link>
                  <Link href="/signup">
                    <ButtonDark text="Sign Up" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="column-4">
              <Image priority alt="Image" src={Image5} className="img-9" />
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Testimonial />
      <StockNews />
      <Footer />
    </div>
  );
}
