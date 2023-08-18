"use client";

import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import JobList from "../components/JobList";
import { useSession } from "next-auth/react";
import React from "react";

const Jobs = () => {
  const session = useSession();
  const [companyName, setCompanyName] = useState<string | undefined>("");

  useEffect(() => {
    setCompanyName(session?.data?.user.name);
  }, [session?.data]);

  return (
    <section id="jobs" className="container mx-auto px-6 mt-8 lg:mt-4">
      <div className="grid grid-cols-3">
        <div className="lg:col-span-1 lg:block hidden">
          <Filter />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <JobList companyName={companyName} />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
