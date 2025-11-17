import Image from "next/image";

export default function Hero() {
  return (
    <section className='flex flex-col md:flex-row items-center gap-8 mt-64'>
      <div className='w-full md:w-[60%] text-5xl'>
        <p>
          Sure! Here is a long,{" "}
          <strong>
            well-written placeholder text you can use for your hero section,
            portfo
          </strong>
          lio, or anywhere you need it. Just tell me if you want it to be more
          casual, professional, funny, or shorter/longer.
        </p>
      </div>

      <div className='w-full md:w-[40%] '>
        {" "}
        <Image
          className='h-64 w-full object-cover object-center'
          src='https://dummyimage.com/720x400'
          alt='blog'
          width={400}
          height={720}
        />
      </div>
    </section>
  );
}
