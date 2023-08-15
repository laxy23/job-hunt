import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface JobDetail {
  id?: number;
  jobTitle: string;
  companyName?: string;
  logo?: string;
  description: string;
  location?: string;
  salary: number;
  type?: string;
  experience: string[];
  skills: string[];
}

interface DetailsProps {
  detail: JobDetail;
  location?: string;
  type?: string;
  creating?: boolean;
  finished?: boolean;
}
const Details: React.FC<DetailsProps> = ({
  detail,
  location,
  type,
  creating,
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-6 md:gap-8 mb-8">
          <img
            src={detail.logo}
            alt="company logo"
            style={{
              width: "110px",
              height: "110px",
            }}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">{detail.jobTitle}</h3>
            <ul className="flex text-gray-400 gap-10">
              <li className="flex justify-center items-center gap-2">
                {" "}
                <span className="text-primaryColor font-bold flex justify-center items-center text-[18px]">
                  <HiOutlineLocationMarker />
                </span>{" "}
                {detail.location ? detail.location : location}
              </li>
              <li className="list-disc">2 Hours ago</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 mb-6 flex-col md:flex-row">
          <div className="p-5 flex gap-4 border border-solid border-gray-400">
            <span className="flex items-center text-3xl bg-gray-300 p-[12px] text-gray-700 rounded-full">
              <RiMoneyDollarBoxLine />
            </span>
            <div className="flex flex-col">
              <h3 className="font-bold">{detail.salary} BAM</h3>
              <span className="text-secondaryColor">Avg. salary</span>
            </div>
          </div>
          <div className="p-5 flex gap-4 border border-solid border-gray-400">
            <span className="flex items-center text-3xl bg-gray-300 p-[12px] text-gray-700 rounded-full">
              <VscTypeHierarchySuper />
            </span>
            <div className="flex flex-col">
              <h3 className="font-bold">{detail.type ? detail.type : type}</h3>
              <span className="text-secondaryColor">Job Type</span>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="font-bold mt-8 text-xl">About the job :</h3>
        <p className="text-secondaryColor mt-2">{detail.description}</p>
        <h3 className="font-bold mt-4 text-xl">Required Expereince :</h3>
        <ul>
          {creating
            ? detail.experience[0]
                .split(", ")
                .map((experience) => experience.trim())
                .map((data, i) => (
                  <li
                    className="flex gap-4 items-center text-secondaryColor mt-2"
                    key={i}
                  >
                    <span className="text-primaryColor">
                      <BiSolidBadgeCheck />
                    </span>{" "}
                    {data}
                  </li>
                ))
            : detail.experience.map((data, i) => (
                <li
                  className="flex gap-4 items-center text-secondaryColor mt-2"
                  key={i}
                >
                  <span className="text-primaryColor">
                    <BiSolidBadgeCheck />
                  </span>{" "}
                  {data}
                </li>
              ))}
        </ul>
        <h3 className="font-bold mt-4 text-xl mb-4">Skills and Expertise : </h3>
        <ul className="flex flex-wrap gap-2 mb-4">
          {creating
            ? detail.skills[0]
                .split(", ")
                .map((skill) => skill.trim())
                .map((data, i) => (
                  <li
                    key={i}
                    className="text-gray-700 border border-blue-500 bg-white text-sm font-bold px-4 rounded-full py-2"
                  >
                    {data}
                  </li>
                ))
            : detail.skills.map((data, i) => (
                <li
                  key={i}
                  className="text-gray-700 border border-blue-500 bg-white text-sm font-bold px-4 rounded-full py-2"
                >
                  {data}
                </li>
              ))}
        </ul>
        <h3 className="font-bold mt-4 text-xl">About the client : </h3>
        <p className="text-secondaryColor mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem
          corporis, velit quia laudantium, id ullam quas repellendus,
          consectetur quibusdam asperiores totam vel atque veniam.
        </p>

        {creating ? (
          <button className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-3 lg:p-4 justify-center">
            Create job
          </button>
        ) : (
          <button className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-3 lg:p-4 justify-center">
            Apply for this position
          </button>
        )}
      </div>
    </div>
  );
};

export default Details;
