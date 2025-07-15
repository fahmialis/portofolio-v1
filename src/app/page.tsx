import Spotlight from '@/app/components/ui/spotlight';
import About from './components/sections/about/about';
import Experience from './components/sections/experience/experience';

export default function Home() {
  return (
    <div className="flex items-center gap-5 justify-center px-10">
      <Spotlight />
      <About />
      <div className="basis-1/2 bg-red-50 min-h-screen">
        <Experience />
      </div>
    </div>
  );
}
