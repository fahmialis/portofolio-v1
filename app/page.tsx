import aboutContent from "./_content/about";
import detailContent from "./_content/details";
import experiencesContent from "./_content/experiences";
import skillContent from "./_content/skills";
import worksContent from "./_content/works";
import Hero from "./_sections/hero";
import Navbar from "./_sections/navbar";
import InfoSection from "@/app/_sections/infoSection";

export default function Home() {
  return (
    <main className='p-8 md:p-16'>
      <Navbar />
      <Hero />
      <InfoSection
        title='About'
        content={aboutContent}
      />

      <InfoSection
        title='Experience'
        content={experiencesContent}
      />

      <InfoSection
        title='Hard Skills'
        content={skillContent}
      />

      <InfoSection
        title='Works'
        content={worksContent}
      />

      <InfoSection
        title='Other details'
        content={detailContent}
      />
    </main>
  );
}
