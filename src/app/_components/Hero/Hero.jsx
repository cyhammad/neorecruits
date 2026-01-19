"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { slides } from "./heroData";
import { HeroSlide } from "./HeroSlide";
import { VerticalNav } from "./VerticalNav";

export function Hero() {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  const fade = React.useRef(Fade());
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0b2677] h-screen">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current, fade.current]}
        opts={{
          loop: true,
          duration: 30,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              index={index}
              current={current}
            />
          ))}
        </CarouselContent>
      </Carousel>

      <VerticalNav slides={slides} current={current} api={api} />
    </section>
  );
}
