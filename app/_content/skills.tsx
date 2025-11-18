import { InfoRow } from "../_sections/infoSection";

const skillContent: InfoRow[] = [
  {
    title: "front end development",
    content: (
      <div className='grid grid-cols-12 mb-3 md:mb-0 md:gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <div>Reactjs</div>
          <div>Nextjs</div>
          <div>Laravel</div>
          <div>Docker</div>
          <div>Jotai</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>Javascript</div>
          <div>Typescript</div>
          <div>PHP</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>TailwindCSS</div>
          <div>AntDesign</div>
          <div>Tanstack Query</div>
          <div>React Hook Form</div>
          <div>Zodios</div>
          <div>Vitest</div>
          <div>Micro Frontends</div>
          <div>Turborepo</div>
        </div>
      </div>
    ),
  },
  {
    title: "backend development",
    content: (
      <div className='grid grid-cols-12 mb-3 md:mb-0 md:gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <div>Nestjs</div>
          <div>Golang</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>GRPC</div>
          <div>Microservices</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>MySQL</div>
          <div>PostgreSQL</div>
          <div>sqlc</div>
          <div>protobuf</div>
        </div>
      </div>
    ),
  },
  {
    title: "mobile development",
    content: (
      <div className='grid grid-cols-12 mb-3 md:mb-0 md:gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <div>Flutter</div>
          <div>Dart</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>Flutter BloC</div>
          <div>Freezed</div>
        </div>

        <div className='col-span-12 md:col-span-4'>
          <div>Dio</div>
        </div>
      </div>
    ),
  },
];

export default skillContent;
