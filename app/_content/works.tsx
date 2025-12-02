import { InfoRow } from "../_sections/infoSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const worksContent: InfoRow[] = [
  {
    title: "Superapp Dashboard V3",
    content: (
      <section>
        <div className='flex justify-between mb-4'>
          <div>
            <div>Description</div>
            PT. Bank Rakyat Indonesia loyalty program dashboard used to monitor
            and analyze the performance of the loyalty program.
          </div>

          <div>
            <div>Tech used</div>
            <div>Techstack: Reactjs, Typescript, Tailwindcss</div>
          </div>
        </div>

        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {["/super_v3_1.png", "/super_v3_2.png", "/super_v3_3.png",  "/super_v3_4.png"].map(
              (path, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 md:basis-1/2 lg:basis-1/3'
                >
                  <Image
                    className='h-64 w-full object-cover object-center'
                    src={path}
                    alt='alt'
                    width={400}
                    height={720}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </section>
    ),
  },
  {
    title: "Superapp Dashboard V4",
    content:       <section>
        <div className='flex justify-between mb-4'>
          <div>
            <div>Description</div>
            PT. Bank Rakyat Indonesia loyalty program dashboard used to monitor
            and analyze the performance of the loyalty program.
          </div>

          <div>
            <div>Tech used</div>
            <div>Techstack: Reactjs, Typescript, Tailwindcss</div>
          </div>
        </div>

        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {["/super_v4_1.png", "/super_v4_2.png", "/super_v4_3.png", "/super_v4_4.png", "/super_v4_5.png"].map(
              (path, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 md:basis-1/2 lg:basis-1/3'
                >
                  <Image
                    className='h-64 w-full object-cover object-center'
                    src={path}
                    alt='alt'
                    width={400}
                    height={720}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </section>,
  },
  {
    title: "Superapp Storybook Component Library",
    content: (
      <section>
        <div className='flex justify-between mb-4'>
          <div>
            <div>Description</div>
            PT. Bank Rakyat Indonesia loyalty program dashboard used to monitor
            and analyze the performance of the loyalty program.
          </div>

          <div>
            <div>Tech used</div>
            <div>Techstack: Reactjs, Typescript, Tailwindcss</div>
          </div>
        </div>

        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {["/storybook6.png", "/storybook7.png", "/storybook8.png", "/storybook4.png", "/storybook5.png"].map(
              (path, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 md:basis-1/2 lg:basis-1/3'
                >
                  <Image
                    className='h-64 w-full object-contain object-center'
                    src={path}
                    alt='alt'
                    width={400}
                    height={720}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </section>
    ),
  },
  {
    title: "Procash Dashboard",
    content: (
    <section>
        <div className='flex justify-between mb-4'>
          <div>
            <div>Description</div>
            PT. Bank Rakyat Indonesia loyalty program dashboard used to monitor
            and analyze the performance of the loyalty program.
          </div>

          <div>
            <div>Tech used</div>
            <div>Techstack: Reactjs, Typescript, Tailwindcss</div>
          </div>
        </div>

        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {["/PROCASH_1.png", "/PROCASH_2.png", "/PROCASH_3.png", "/PROCASH_4.png", "/PROCASH_5.png"].map(
              (path, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 md:basis-1/2 lg:basis-1/3'
                >
                  <Image
                    className='h-64 w-full object-contain object-center'
                    src={path}
                    alt='alt'
                    width={400}
                    height={720}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </section>
    ),
  },
];

export default worksContent;
