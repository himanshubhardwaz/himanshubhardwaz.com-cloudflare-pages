import { Link } from "@remix-run/react";

const projects = [
  {
    title: "Dialworks",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/dialworks.png?updatedAt=1685343492678",
    liveUrl: "https://dialworks.io",
    githubUrl: "",
  },
  {
    title: "memegeneratorai",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/memegeneratorai.png?updatedAt=1685343477251",
    liveUrl: "https://memegeneratorai.online",
    githubUrl: "https://github.com/himanshubhardwaz/memegeneratorai",
  },
  {
    title: "react-use-form-validate",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/create-npm-typescript-package.png?updatedAt=1685343722999",
    liveUrl: "https://www.npmjs.com/package/react-use-form-validate",
    githubUrl: "https://github.com/himanshubhardwaz/react-use-form-validate",
  },
  {
    title: "takepoll",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/takepoll.png?updatedAt=1685343783107",
    liveUrl: "https://takepoll.vercel.app",
    githubUrl: "https://github.com/himanshubhardwaz/takepoll",
  },
  {
    title: "Chess game",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/chess.png?updatedAt=1685343607042",
    liveUrl: "https://chess-2-0.vercel.app",
    githubUrl: "https://github.com/himanshubhardwaz/chess-2-0",
  },
  {
    title: "create-npm-typescript-package",
    thumbnail:
      "https://ik.imagekit.io/q1caodkhg/Portfolio_Statics/create-npm-typescript-package.png?updatedAt=1685343722999",
    liveUrl: "https://www.npmjs.com/package/create-npm-typescript-package",
    githubUrl:
      "https://github.com/himanshubhardwaz/create-npm-typescript-package",
  },
];

export default function FeaturedProjects() {
  return (
    <section className='px-4'>
      <p className='w-[15rem] font-semibold text-lg mt-16'>Featured Projects</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-16'>
        {projects.map((project, index) => (
          <article
            className='w-full max-h-[25rem] overflow-hidden relative group'
            key={index}
          >
            <div className='flex items-center absolute right-4 top-4 z-10'>
              {project.githubUrl && (
                <Link
                  to={project.githubUrl}
                  className='text-white p-3 bg-black/50 rounded-full backdrop-blur-md'
                  aria-label='Social Media'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-github'
                  >
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                  </svg>
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  to={project.liveUrl}
                  className='text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1'
                  aria-label='Social Media'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-link-2'
                  >
                    <path d='M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3' />
                    <line x1='8' y1='12' x2='16' y2='12' />
                  </svg>
                </Link>
              )}
            </div>
            <Link
              to={project.liveUrl ? project.liveUrl : project.githubUrl}
              target='_blank'
            >
              <img
                src={project.thumbnail}
                className='w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]'
                loading='lazy'
                width='100%'
                height='100%'
                alt='featureImage'
              />
            </Link>
            <div className='absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700'>
              <p className='mr-2 text-xl'>{project.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
