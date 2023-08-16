"use client";

import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import JobList from "../components/JobList";

const Jobs = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const getAllJobs = async () => {
      const res = await fetch("http://localhost:3000/api/job");

      const data = await res.json();

      setJobData(data.jobs);
    };

    getAllJobs();
  }, []);

  return (
    <section id="jobs" className="container mx-auto px-6 mt-8 lg:mt-4">
      <div className="grid grid-cols-3">
        <div className="lg:col-span-1 lg:block hidden">
          <Filter />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <JobList jobsdata={jobData} />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
