"use client";

import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import React from "react";
import { useGlobalContext } from "./utils/Context/store";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Spinner from "./utils/Spinner";

interface Job {
  _id: string;
  jobTitle: string;
  companyName: string;
  logo: string;
  description: string;
  location: string;
  salary: number;
  type: string;
  experience: string[];
  skills: string[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface JobListProps {
  jobsdata?: Job[] | undefined;
  companyName: string | undefined;
}

const JobList = ({ companyName }: JobListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const loc = searchParams.get("loc");
  const jobTit = searchParams.get("jobTit");
  const {
    jobData,
    setJobData,
    currentPage,
    totalPages,
    setCurrentPage,
    getAllJobs,
    loading,
  } = useGlobalContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = async () => {
    const url = `/api/job/?search=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    setJobData(data.jobs);
  };

  const handleParamsSubmit = async () => {
    const url = `/api/job/?location=${loc}&jobTitle=${jobTit}`;

    const res = await fetch(url);

    const data = await res.json();

    setJobData(data.jobs);
  };

  useEffect(() => {
    if (loc || jobTit) {
      handleParamsSubmit();
    } else {
      getAllJobs();
    }
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section id="mb" className="container mx-auto px-0 lg:px-12 py-4">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-12">
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search by title, company or jobs keyword..."
            className="w-full border border-gray-400 border-solid rounded-md focus:border-primaryColor duration-200"
          />
          <div className="button-container">
            <button
              onClick={handleSearchSubmit}
              className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-3 lg:p-4"
            >
              Search
              <span className="text-xl">
                <BiSearchAlt />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {jobData &&
            jobData.map((data) => (
              <div
                key={data._id}
                className="flex flex-col border border-solid border-gray-400 p-[22px] rounded-xl cursor-pointer"
              >
                <Link href={`/details/${data._id}`}>
                  <div className="flex justify-between flex-col gap-6 md:flex-row md:gap-0">
                    <div className="flex gap-4">
                      <img
                        src={data.logo}
                        alt="logo"
                        style={{
                          width: "80px",
                          height: "80px",
                        }}
                      />
                      <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-1">
                          {data.companyName ? data.companyName : ""}
                        </h3>
                        <p className="text-secondaryColor">{data.location}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">$ {data.salary}</h3>
                    </div>
                  </div>
                  <h3 className="font-bold my-6 text-[18px]">
                    {data.jobTitle}
                  </h3>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {data?.skills[0]
                      .split(", ")
                      .map((skill) => skill.trim())
                      .map((data, i) => (
                        <li
                          key={i}
                          className="text-gray-700 border border-blue-500 bg-white text-sm font-bold px-4 rounded-full py-2"
                        >
                          {data}
                        </li>
                      ))}
                  </ul>
                  <p className="text-secondaryColor">{data.description}</p>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            onChange={handlePageChange}
            count={totalPages as number}
            page={currentPage}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default JobList;
