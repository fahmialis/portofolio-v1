import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import worksContent from "../_content/works";

export default function Works() {
  return (
    <section id='works'>
      <div className='flex items-center gap-2 mb-8'>
        <div className='uppercase font-bold md:hidden'>selected works</div>

        <hr className='flex-1 border border-black dark:border-white h-px' />
      </div>

      <section id='work showcase' className='flex items-center gap-8'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'
        >
          {worksContent.map((work, index) => (
            <AccordionItem value={`work-${index}`} key={index}>
              <AccordionTrigger className='text-xl'>
                {`0${index + 1}.   ${work?.title}`}
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                {work?.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </section>
  );
}
