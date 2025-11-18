import { InfoRow } from "../_sections/infoSection";

const skillContent: InfoRow[] = [
  {
    title: "front end development",
    content: (
      <div className='grid grid-cols-12 mb-3 md:mb-0 md:gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <div>skill 1</div>
          <div>skill 2</div>
          <div>skill 3</div>
        </div>

        <div className='col-span-12 md:col-span-4'>skill 2</div>

        <div className='col-span-12 md:col-span-4'>skill 3</div>
      </div>
    ),
  },
  {
    title: "backend development",
    content: (
      <div className='grid grid-cols-12 mb-3 md:mb-0 md:gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <div>skill 1</div>
          <div>skill 2</div>
          <div>skill 3</div>
        </div>

        <div className='col-span-12 md:col-span-4'>skill 2</div>

        <div className='col-span-12 md:col-span-4'>skill 3</div>
      </div>
    ),
  },
];

export default skillContent;
