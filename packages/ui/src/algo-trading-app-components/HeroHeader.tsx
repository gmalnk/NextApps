import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import Link from "next/link";
import Image from "next/image";
import Image13 from "../../public/trend.io.images/13.jpg";
import Image12 from "../../public/trend.io.images/12.jpg";
import Image11 from "../../public/trend.io.images/11.jpg";
import Image2 from "../../public/trend.io.images/2.jpg";
import Image3 from "../../public/trend.io.images/3.jpg";
import Image14 from "../../public/trend.io.images/14.jpg";
import Image16 from "../../public/trend.io.images/16.jpg";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface iImage {
  index: number;
  src: any;
  alt: string;
  width: number;
  height: number;
}
const height = 200;
const width = 200;

const images: iImage[] = [
  {
    src: Image11,
    index: 11,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
  {
    src: Image2,
    index: 2,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
  {
    src: Image16,
    index: 16,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
  {
    src: Image12,
    index: 12,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
  {
    src: Image13,
    index: 11,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
  {
    src: Image14,
    index: 14,
    alt: "heroHeaderImg",
    width: 200,
    height: 200,
  },
];

export default function HeroHeader() {
  return (
    <div className="heroHeaderContainer">
      <div className="heroHeaderHeading">
        Welcome to our Exciting World of Trading
      </div>
      <div className="heroHeaderSubHeading">
        Discover endless possibilities and maximize your investment potential.
      </div>
      <div className="heroHeaderButtons">
        <Link href="/signup">
          <ButtonDark text="Get Started" />
        </Link>
        <Link href="/learnmore">
          <ButtonLight text="Learn More" />
        </Link>
      </div>
      <div className="heroHeaderImgContainer">
        <Carousel
          className="w-full max-w-50 mx-16"
          opts={{
            align: "center",
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {images.map((image, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center rounded-lg p-2">
                        <Image
                          priority
                          src={image.src}
                          alt={image.alt + `-${index}`}
                          className="heroHeaderImg"
                          width={width}
                          height={height}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
