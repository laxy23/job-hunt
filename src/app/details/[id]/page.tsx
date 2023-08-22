"use client";

import Details from "@/app/components/utils/Details";
import Spinner from "@/app/components/utils/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const JobDetail = () => {
  const params = useParams();
  const [jobData, setJobData] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  const id = params.id;

  useEffect(() => {
    const getJobById = async () => {
      const res = await fetch(`/api/job/${id}`);

      const data = await res.json();

      setJobData(data.job);
      setUserData(data.user);
      setLoading(false);
    };

    getJobById();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <Details detail={jobData} userData={userData} id={params.id as string} />
    </section>
  );
};

export default JobDetail;
