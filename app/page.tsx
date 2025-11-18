"use client";

import { useState } from "react";

import InfoSection from "@/app/_sections/infoSection";
import aboutContent from "./_content/about";
import detailContent from "./_content/details";
import experiencesContent from "./_content/experiences";
import skillContent from "./_content/skills";
import worksContent from "./_content/works";
import Hero from "./_sections/hero";
import Navbar from "./_sections/navbar";

export default function Home() {
  const [page, setPage] = useState<
    "home" | "about" | "details" | "works" | "skills"
  >("about");

  return (
    <main className='p-8 md:p-16'>
      <Navbar onClick={setPage} />

      <Hero />

      <InfoSection title='About' id='about' content={aboutContent} />

      <InfoSection
        title='Experience'
        id='experiences'
        content={experiencesContent}
      />

      <InfoSection title='Hard Skills' id='skills' content={skillContent} />

      <InfoSection title='Works' id='works' content={worksContent} />

      <InfoSection title='Other details' id='details' content={detailContent} />
    </main>
  );
}
