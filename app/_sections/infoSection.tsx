import React from "react";

export interface InfoRow {
  title: string;
  content: React.ReactNode;
}

 interface InfoSectionProps {
  title: string;
  content: InfoRow[];
  id: string
}

export default function InfoSection(props: InfoSectionProps) {
  const { title, content, id } = props;
  return (
    <section className='my-12 md:my-32' id={id}>
      <div className='flex items-center gap-2'>
        <div className='uppercase font-bold md:hidden'>{title}</div>

        <hr className='flex-1 border border-black dark:border-white h-px' />
      </div>

      {content?.length > 0 &&
        content?.map((row, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-8'
            >
              <div className='hidden md:block md:col-span-3 uppercase font-bold sticky top-20'>
                {index === 0 ? title : ""}
              </div>{" "}
              <div className='md:col-span-3 font-bold'>
                {row.title}
              </div>{" "}
              <div className='md:col-span-6'>
                {row?.content}
              </div>{" "}
            </div>
          );
        })}
    </section>
  );
}
