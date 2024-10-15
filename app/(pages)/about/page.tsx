import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';
import Image from 'next/image';

export const metadata = {
  title: `About Me ${SITE_BRAND_TITLE_ENDING}`,
  description: 'Some text about who I am and why writing this blog.',
};

function About() {
  return (
    <div className="px-4">
      <div className="container py-20">
        <h1 className="mb-16 text-5xl font-semibold">About Me</h1>
        <div className="mb-20 flex flex-col gap-16 md:flex-row lg:items-center">
          <div className="w-full md:w-1/3">
            <Image
              priority
              width={460}
              height={460}
              src={'/assets/avatar.jpeg'}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
              alt="Photo"
            />
          </div>
          <div className="w-full text-lg leading-loose md:w-2/3">
            <p className="mb-10">
              Proficient front-end engineer with three years of professional experience,
              specializing in high-quality solutions in front-end development, particularly with
              React and Next.js. Dedicated to continuously improving knowledge in modern web
              technologies. Skilled in translating requirements into technical solutions, ensuring
              code quality, and collaborating with cross-functional teams. Experienced with
              large-scale React projects utilizing micro-frontend architecture. Proven expertise in
              code reviews, Jest testing, and implementing best practices within the team.
            </p>
            <ul>
              <li className="mb-5">
                <strong>GitHub profile:</strong>{' '}
                <a
                  className="border-b"
                  href="https://github.com/oleksii-suprun-github"
                  target="_blank"
                >
                  Link
                </a>
              </li>
              <li className="mb-5">
                <strong>Professional experience:</strong> 3 years.
              </li>
              <li className="mb-5">
                <strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS
              </li>
              <li className="mb-5">
                <strong>Technologies:</strong> React, NextJS, Git, TDD & CI/CD, SDLC,
                Material-UI/Tailwind, RESTful APIs, SWR, Redux, React Intl, Webpack, Jest/Cypress
                testing, Storybook, Exponea/Snowplow, Functional & OOP programming. Key achievement:
                Successfully migrated vital parts of a legacy frontend application to a modern
                micro-frontend architecture.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
