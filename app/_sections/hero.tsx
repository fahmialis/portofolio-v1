import Image from "next/image";

export default function Hero() {
  return (
    <section
      className='flex flex-col md:flex-row items-center gap-8 mt-32 md:mt-64'
      id='home'
    >
      <div className='w-full md:w-[60%] text-4xl md:text-5xl'>
        <p>
          I’m a Software Engineer with <strong>4+ years of experience</strong> across <strong>front‑end</strong>, <strong>back‑end</strong>, and <strong>mobile development</strong>, focused on building clean, accessible, and modern digital experiences.
        </p>
      </div>

      <div className='w-full md:w-[40%] '>
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
