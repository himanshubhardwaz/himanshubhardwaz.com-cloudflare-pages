const experiences = [
  {
    startDate: "Aug 2021",
    endDate: "Mar 2023",
    position: "SDE",
    name: "SaaS Labs · Internship",
    location: "Palo Alto, California, United States · Remote",
    description: [
      "- Responsible for development of two separate web applications using React.js from scratch.",
      "- Boosted application performance by 15% following best practices such as lazy-loading, infinite-scroll, debounce,code splitting and other performance optimisations.",
      "- Designed and develop a matchmaking algorithm using socket.io and Twilio.",
      "- Contributed in developing and maintaining apis for the application using Node.js(Express)",
      "- Created reusable functional components and custom hooks for web applications and performed Error handling using Error Boundaries",
    ],
  },
  {
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    position: "Full stack developer",
    name: "Pearl Thoughts · Part-time",
    location: "India · Remote",
    description: [
      "- Built a PDF Generation service using the serverless framework (TypeScript) and deployed it on AWS lambda.",
      "- Integrated the service in a next.js (TypeScript) application.",
    ],
  },
  {
    startDate: "Jun 2021",
    endDate: "July 2021",
    position: "Full stack engineer",
    name: "Lets Endorse · Internship",
    location: "Banglore, Karnataka, India · Remote",
    description: [
      "- Built an end-to-end admin module, which allows admin to select a particular area on a map, add or delete coordinates using a form or clicking on the map, save related data, using React and Google Maps JavaScript API.",
      "- Designed required Schemas in Mongodb, and created required APIs in Node.js following RESTful API Conventions..",
    ],
  },
];

export default function Experience() {
  return (
    <section className='flex items-start justify-between flex-col sm:flex-row dark:text-light px-4'>
      <p className='w-[15rem] mt-16 font-semibold text-xl'>Experience</p>
      <div className='w-full'>
        {experiences.map((item) => (
          <div className='my-16' key={item.name}>
            <div className='flex justify-between items-center flex-wrap'>
              <div>
                <p className='text-xl font-semibold'>{item.position}</p>
                <p className='text-xl font-semibold'>{item.name}</p>
              </div>
              <p className='text-sm dark:text-gray'>
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p className='text-sm mt-3 text-blue'>{item.location}</p>
            <ul className='mt-3'>
              {item.description.map((item) => (
                <li className='text-gray-300' key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
