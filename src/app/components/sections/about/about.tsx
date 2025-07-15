'use client';
import { socialMedia } from '@/app/config';
import Icon from '../../icons/icons';
export default function About() {
  return (
    <div className="bg-amber-100 min-h-screen">
      <div className="basis-1/2" id="general-info">
        <p className="text-6xl font-semibold mb-4">Fahmi Sinergia</p>
        <p className="text-3xl mb-4">Front End Developer</p>
        <p className="text-xl mb-16">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <div> div 2</div>
      </div>

      {/* social media */}
      <div className="flex gap-4">
        {socialMedia?.map((data) => (
          <div
            key={data?.name}
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => window.open(data?.url, '_blank')}
          >
            <Icon name={data?.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
