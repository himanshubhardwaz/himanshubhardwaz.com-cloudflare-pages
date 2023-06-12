import { experiences } from "~/utils/data";

export default function Experience() {
  return (
    <section className="flex items-start justify-between flex-col sm:flex-row dark:text-light">
      <p className="w-[15rem] mt-16 font-semibold text-xl">Experience</p>
      <div className="w-full">
        {experiences.map((item) => (
          <div className="my-16" key={item.name}>
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <p className="text-xl font-semibold">{item.position}</p>
                <p className="text-xl font-semibold">{item.name}</p>
              </div>
              <p className="text-sm dark:text-gray">
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p className="text-sm mt-3 text-blue">{item.location}</p>
            <ul className="mt-3">
              {item.description.map((item) => (
                <li className="text-gray-300" key={item}>
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
