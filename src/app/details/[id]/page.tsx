"use client";

import { detail } from "@/app/utils/Data";
import Details from "@/app/components/utils/Details";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const JobDetail = () => {
  const params = useParams();
  const [jobData, setJobData] = useState();

  console.log(params.id);
  const id = params.id;

  useEffect(() => {
    const getJobById = async () => {
      const res = await fetch(`/api/job/${id}`);

      const data = await res.json();

      setJobData(data.job);
    };

    getJobById();
  }, [id]);

  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <Details detail={jobData} id={params.id as string} />
    </section>
  );
};

export default JobDetail;
