import About from "./_sections/about";
import Contact from "./_sections/contact";
import Experience from "./_sections/experience";
import Footer from "./_sections/footer";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import Projects from "./_sections/projects";
import Techstack from "./_sections/techstack";

export default function Home() {
  return (
    <main className="p-8 md:p-16">
      <Navbar/>
      {/* <Hero />
      <About/>
      <Techstack/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/> */}
    </main>
  );
}
