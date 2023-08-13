"use client";

import { discover } from "../utils/Data";
import PageTitle from "../utils/PageTitle";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import JobCard from "./utils/JobCard";
import { useSession } from "next-auth/react";

const Discover = () => {
  const [type, setType] = useState("popular");

  const session = useSession();

  console.log(session);

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <section id="mb" className="container mx-auto px-6 mt-8 lg:mt-1">
      <PageTitle
        title="Job Vacancy"
        pageTitle="Discover the best job"
        desc="Start carrer with the best company in the world, we ensures you to get the best job possible."
      />
      <div className="flex justify-center mb-12">
        <Button.Group>
          <Button color="gray" onClick={() => setType("popular")}>
            <p>Popular</p>
          </Button>
          <Button color="gray" onClick={() => setType("latest")}>
            <p>Latest</p>
          </Button>
        </Button.Group>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {type === "popular"
          ? discover.map((data) => <JobCard data={data} key={data.id} />)
          : discover.map((data) => <JobCard data={data} key={data.id} />)}
      </div>
    </section>
  );
};

export default Discover;
