"use client";

import { detail } from "@/app/utils/Data";
import Details from "@/app/components/utils/Details";
import { useParams } from "next/navigation";

const JobDetail = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <Details id={params.id as string} />
    </section>
  );
};

export default JobDetail;
