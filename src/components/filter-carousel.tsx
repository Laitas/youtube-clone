"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

type FilterCarouselProps = {
  value?: string;
  onSelect: (value: string) => void;
  data: Array<{
    value: string;
    label: string;
  }>;
};

export const FilterCarousel = ({
  value,
  onSelect,
  data,
}: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "pointer-events-none absolute top-0 bottom-0 left-12 z-10 w-12 bg-gradient-to-r from-white to-transparent",
          {
            hidden: current === 1,
          },
        )}
      />
      <Carousel
        className="w-full px-12"
        opts={{
          align: "start",
          dragFree: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-3">
          <CarouselItem
            className="basis-auto pl-3"
            onClick={() => onSelect("")}
          >
            <Badge
              variant={
                value === "" || value === undefined ? "default" : "secondary"
              }
              className="rounded-lg px-3 py-1 text-sm whitespace-nowrap"
              asChild
            >
              <button type="button">All</button>
            </Badge>
          </CarouselItem>

          {data.map((item) => (
            <CarouselItem className="basis-auto pl-3" key={item.value}>
              <Badge
                variant={value === item.value ? "default" : "secondary"}
                className="rounded-lg px-3 py-1 text-sm whitespace-nowrap"
                asChild
              >
                <button
                  type="button"
                  onClick={() => onSelect(item.value)}
                  className="flex items-center gap-2"
                >
                  {item.label}
                </button>
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>
      <div
        className={cn(
          "pointer-events-none absolute top-0 right-12 bottom-0 z-10 w-12 bg-gradient-to-l from-white to-transparent",
          {
            hidden: current === count,
          },
        )}
      />
    </div>
  );
};

export const FilterCarouselSuspense = () => {
  return (
    <div className="relative flex w-full px-12">
      <div
        className={
          "pointer-events-none absolute top-0 bottom-0 left-12 z-10 w-12 bg-gradient-to-r from-white to-transparent"
        }
      />
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="basis-auto pl-3">
          <Skeleton className="h-full w-[100px] rounded-lg px-3 py-1 font-semibold">
            &nbsp;
          </Skeleton>
        </div>
      ))}
      <div
        className={
          "pointer-events-none absolute top-0 right-12 bottom-0 z-10 w-12 bg-gradient-to-l from-white to-transparent"
        }
      />
    </div>
  );
};
