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
          <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <div className='p-1 hover:cursor-grab'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-2xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
