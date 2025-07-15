import React from 'react';

export default function Jobs() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          {/* Date */}
          <div className="basis-2/12 text-sm text-gray-500">
            June 2021 – Present
          </div>

          {/* Content */}
          <div className="basis-10/12">
            {/* Job Title + Company */}
            <h3 className="text-xl font-semibold">
              Software Engineer II ·{' '}
              <a
                href="https://www.super.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline"
              >
                SuperApp (YC W18)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </h3>

            {/* Bullet Summary */}
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>
                Developed and maintained scalable front-end features using{' '}
                <strong>React.js</strong>, <strong>Next.js</strong>, and{' '}
                <strong>Flutter</strong>
              </li>
              <li>
                Built reusable UI components with <strong>Tailwind CSS</strong>,{' '}
                <strong>Ant Design</strong>, and <strong>Shadcn/ui</strong>
              </li>
              <li>
                Ensured accessibility compliance by implementing{' '}
                <strong>WCAG standards</strong> and testing keyboard/screen
                reader flows
              </li>
              <li>
                Integrated REST APIs with <strong>Axios</strong> and{' '}
                <strong>Zodios</strong> using type-safe schemas powered by{' '}
                <strong>Zod</strong>
              </li>
              <li>
                Wrote and maintained unit tests using <strong>Jest</strong> and{' '}
                <strong>React Testing Library</strong> to ensure UI reliability
              </li>
              <li>
                Collaborated cross-functionally to deliver performant,
                responsive, and accessible user experiences at scale
              </li>
            </ul>

            {/* Tech Stack Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'React.js',
                'Next.js',
                'Flutter',
                'TypeScript',
                'Tailwind CSS',
                'Ant Design',
                'Zod',
                'Zodios',
                'Axios',
                'Jest',
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
