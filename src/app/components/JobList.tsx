"use client";

import { jobs } from "../utils/Data";
import { BiSearchAlt } from "react-icons/bi";

const JobList = () => {
  return (
    <section id="mb" className="container mx-auto px-0 lg:px-12 py-4">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-12">
          <input
            type="text"
            placeholder="Search by title, company or jobs keyword..."
            className="w-full border border-gray-400 border-solid rounded-md focus:border-primaryColor duration-200"
          />
          <div className="button-container">
            <button className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-3 lg:p-4">
              Search{" "}
              <span className="text-xl">
                <BiSearchAlt />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {jobs.map((data) => (
            <div
              key={data.id}
              className="flex flex-col border border-solid border-gray-400 p-[22px] rounded-xl cursor-pointer"
            >
              <div className="flex justify-between flex-col gap-6 md:flex-row md:gap-0">
                <div className="flex gap-4">
                  <img src={data.logo} alt="logo" />
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg mb-1">
                      {data.companyName}
                    </h3>
                    <p className="text-secondaryColor">{data.location}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{data.salary}</h3>
                </div>
              </div>
              <h3 className="font-bold my-6 text-[18px]">{data.jobTitle}</h3>
              <ul className="flex flex-wrap gap-2 mb-4">
                {data.skills.map((data, i) => (
                  <li
                    key={i}
                    className="text-gray-700 border border-blue-500 bg-white text-sm font-bold px-4 rounded-full py-2"
                  >
                    {data}
                  </li>
                ))}
              </ul>
              <p className="text-secondaryColor">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
