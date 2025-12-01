import { CursorTooltip } from "@/components/cursortooltip";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function ShowCase() {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='-ml-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div className='p-1 hover:cursor-grab'>
              <CursorTooltip tooltip={index + 1}>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-2xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </CursorTooltip>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
