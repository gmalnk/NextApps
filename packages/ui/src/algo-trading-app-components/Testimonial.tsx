import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import User0 from "../../public/trend.io.images/u0.jpg";
import User1 from "../../public/trend.io.images/u1.jpg";
import User2 from "../../public/trend.io.images/u2.jpg";
import User3 from "../../public/trend.io.images/u3.jpg";
import User4 from "../../public/trend.io.images/u4.jpg";
import Image from "next/image";

interface Itestimonial {
  src: any;
  testimonial: string;
  name: string;
  details: string;
}

const testimonials: Itestimonial[] = [
  {
    src: User0,
    testimonial:
      "Algo Traders platform's real-time data and low latency trades have transformed my trading experience. The AI neural network's trendline ranking is a game-changer.",
    name: "Jane Doe",
    details: "Financial Analyst, XYZ Investments",
  },
  {
    src: User1,
    testimonial:
      "Efficiency and speed define Algo Traders. Algorithmically generated trendlines and predefined trades make it my go-to platform for strategic trading.",
    name: "John Smith",
    details: "Hedge Fund Manager, ABC Capital",
  },
  {
    src: User3,
    testimonial:
      "Algo Traders has elevated my algorithmic trading with its real-time data and sophisticated AI neural network. The UI is sleek and intuitive.",
    name: "Alex Patel",
    details: "Algorithmic Trader, Patel Investments",
  },
  {
    src: User2,
    testimonial:
      "Algo Traders simplifies day trading with its real-time data and low latency trades. The AI neural network's trendline ranking adds a predictive edge.",
    name: "Emily Johnson",
    details: "Day Trader, Independent",
  },
  {
    src: User4,
    testimonial:
      "As a quantitative analyst, Algo Traders is my toolkit's cornerstone. Real-time data, low latency trades, and efficient AI ranking make it unmatched.",
    name: "Robert Turner",
    details: "Quantitative Analyst, Tech Solutions Inc.",
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial-section">
      <div className="testimonialContainer">
        <Carousel className="w-full max-w-50 mx-16">
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselItem key={index} className="">
                  <div className="testimonialContent">
                    <Image
                      src={testimonial.src}
                      alt="logo"
                      width={80}
                      height={80}
                      className=" rounded-full"
                    />
                    <div className="testimonialText">
                      {testimonial.testimonial}
                    </div>
                    <div className="testimonialName">{testimonial.name}</div>
                    <div className="testimonialDetails">
                      {testimonial.details}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
