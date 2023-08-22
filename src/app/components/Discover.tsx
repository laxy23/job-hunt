"use client";

import PageTitle from "../utils/PageTitle";
import { useEffect, useState } from "react";
import JobCard from "./utils/JobCard";
import { useGlobalContext } from "./utils/Context/store";
import Spinner from "./utils/Spinner";

const Discover = () => {
  const { setJobData, jobData } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllJobs = async () => {
      const res = await fetch("/api/job?pageSize=6");

      const data = await res.json();

      setJobData(data.jobs);
      setLoading(false);
    };

    getAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section id="mb" className="container mx-auto px-6 mt-8 lg:mt-1">
      <PageTitle
        title="Job Vacancy"
        pageTitle="Discover the best job"
        desc="Start carrer with the best company in the world, we ensures you to get the best job possible."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {jobData.map((data) => (
          <JobCard data={data} key={data._id} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
