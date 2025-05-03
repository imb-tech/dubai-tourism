"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "components/ui/carousel"
import { cn } from "lib/utils"

interface CustomCarouselProps {
  items: React.ReactNode[]
  autoplayDelay?: number
  stopOnInteraction?: boolean
  className?: string
  cardClassName?: string
  showNavigation?: boolean
  showPagination?: boolean
}

export function CustomCarousel({
  items,
  autoplayDelay = 2000,
  stopOnInteraction = true,
  className,
  cardClassName,
  showNavigation = true,
  showPagination = true,
}: CustomCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: autoplayDelay, stopOnInteraction }))
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="flex flex-col items-center gap-2">
      <Carousel
        plugins={[plugin.current]}
        className={cn("w-full max-w-xs", className)}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className={cardClassName}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">{item}</CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showNavigation  && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>

      {showPagination && items.length > 1 && (
        <div className="flex gap-1 mt-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index ? "bg-primary w-4" : "bg-muted-foreground/30",
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
