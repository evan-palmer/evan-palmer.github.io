import profile from '~/assets/images/profile.jpg';
import Page from '~/components/page';

const linkClassName = 'text-primary-700 hover:underline';

const interests = [
  'Geometric Mechanics',
  'Physics-Informed Learning',
  'Field Robotics',
];

export default function About() {
  return (
    <Page title="About">
      <div className="flex flex-row items-start gap-4 sm:gap-6">
        <img
          src={profile}
          alt="Evan Palmer"
          className="h-28 w-28 shrink-0 rounded-md object-cover sm:h-32 sm:w-32 md:h-40 md:w-40"
        />
        <div>
          <p className="font-semibold text-greyscale-900">Ph.D. Student</p>
          <p className="text-sm text-greyscale-600">Robotics, Oregon State University</p>
          <ul className="mt-2 list-disc space-y-0 pl-5 text-sm font-light text-greyscale-600">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-[0.95rem] leading-relaxed text-greyscale-800">
        I&apos;m an
        {' '}
        <a className={linkClassName} href="https://ndseg.sysplus.com/" target="_blank" rel="noreferrer">
          NDSEG Fellow
        </a>
        {' '}
        and a Robotics Ph.D. Student at Oregon State University where
        I&apos;m co-advised by
        {' '}
        <a
          className={linkClassName}
          href="https://engineering.oregonstate.edu/people/geoff-hollinger"
          target="_blank"
          rel="noreferrer"
        >
          Geoff Hollinger
        </a>
        {' '}
        and
        {' '}
        <a
          className={linkClassName}
          href="https://engineering.oregonstate.edu/people/ross-hatton"
          target="_blank"
          rel="noreferrer"
        >
          Ross Hatton
        </a>
        . My research explores the intersection of machine learning and geometric
        mechanics with the goal of developing motion planning and control algorithms
        for robots that operate in challenging environments.
      </p>
      <p className="text-[0.95rem] leading-relaxed text-greyscale-800">
        If I&apos;m not in the lab working on my latest idea, you can find me
        outdoors, training to hit a new PR in the gym, or playing video
        games with my friends.
      </p>
      <p className="text-[0.95rem] leading-relaxed text-greyscale-800">
        Interested in collaborating or have any questions? Please feel free
        to
        {' '}
        <a className={linkClassName} href="mailto:palmeeva@oregonstate.edu">
          contact me!
        </a>
      </p>
    </Page>
  );
}
