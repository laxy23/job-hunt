import { detail } from "@/app/utils/Data";

const JobDetail = () => {
  return (
    <section id="mb" className="container mx-auto px-6 mt-8 lg:mt-1">
      <div className="flex flex-col">
        <div className="flex">
          <img src={detail.logo} alt="company logo" />
          <div className="flex flex-col">
            <h3 className="text-xl bold">{detail.jobTitle}</h3>
            <ul className="flex gap-4">
              <li>
                {" "}
                <span>Marker</span> {detail.location}
              </li>
              <li className="list-disc">2 Hours ago</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-5 flex gap-4 border border-solid border-secondaryColor">
            <span>Money icon</span>
            <div className="flex flex-col">
              <h3>{detail.salary}</h3>
              <span className="text-secondaryColor">Avg. salary</span>
            </div>
          </div>
          <div className="p-5 flex gap-4">
            <span>Type Icon</span>
            <div className="flex flex-col">
              <h3>{detail.type}</h3>
              <span className="text-secondaryColor">Job Type</span>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="font-bold">About the job</h3>
        <p className="text-secondaryColor">{detail.desc}</p>
        <h3 className="font-bold">Required Expereince :</h3>
        <ul>
          {detail.experience.map((data, i) => (
            <li className="flex gap-4 items-center" key={i}>
              <span>check icon</span> {data}
            </li>
          ))}
        </ul>
        <h3 className="font-bold">Skills and Expertise : </h3>
        <ul className="flex flex-wrap gap-2 mb-4">
          {detail.skills.map((data, i) => (
            <li
              key={i}
              className="text-gray-700 border border-blue-500 bg-white text-sm font-bold px-4 rounded-full py-2"
            >
              {data}
            </li>
          ))}
        </ul>
        <h3 className="font-bold">About the client</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem
          corporis, velit quia laudantium, id ullam quas repellendus,
          consectetur quibusdam asperiores totam vel atque veniam.
        </p>

        <button className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-3 lg:p-4 justify-center">
          Apply for this position
        </button>
      </div>
    </section>
  );
};

export default JobDetail;
