"use client";

import { discover } from "../utils/Data";
import PageTitle from "../utils/PageTitle";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

const Discover = () => {
  const [type, setType] = useState("popular");

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
          ? discover.map((data) => (
              <div
                className="flex flex-col mx-4 my-0 px-6 py-[17px] rounded-[25px] border border-solid border-secondaryColor relative hover:shadow-lg duration-300"
                key={data.id}
              >
                <div className="absolute top-5 right-5 text-xl lg:top-4 lg:right-6 lg:text-2xl text-primaryColor">
                  <Link href="/">
                    <BsArrowRight />
                  </Link>
                </div>
                <div className="flex gap-6 mb-6">
                  <img src={data.icon} alt="icon" />
                  <div>
                    <h2 className="font-bold text-lg">{data.title}</h2>
                    <h4 className="text-primaryColor">{data.companyName}</h4>
                  </div>
                </div>
                <p className="text-secondaryColor pb-4 border-b-[#ccc] border-b border-solid">
                  {data.desc}
                </p>
                <br />
                <ul className="flex gap-12">
                  <li className="flex items-center gap-2 font-bold">
                    <span>
                      <MdLocationOn />
                    </span>
                    {data.location}
                  </li>
                  <li className="list-disc font-bold">Full Time</li>
                </ul>
              </div>
            ))
          : discover.map((data) => (
              <div
                className="flex flex-col mx-4 my-0 px-6 py-[17px] rounded-[25px] border border-solid border-secondaryColor relative hover:shadow-lg duration-300"
                key={data.id}
              >
                <div className="absolute top-5 right-5 text-xl lg:top-4 lg:right-6 lg:text-2xl text-primaryColor">
                  <Link href="/">
                    <BsArrowRight />
                  </Link>
                </div>
                <div className="flex gap-6 mb-6">
                  <img src={data.icon} alt="icon" />
                  <div>
                    <h2 className="font-bold text-lg">{data.title}</h2>
                    <h4 className="text-primaryColor">{data.companyName}</h4>
                  </div>
                </div>
                <p className="text-secondaryColor pb-4 border-b-[#ccc] border-b border-solid">
                  {data.desc}
                </p>
                <br />
                <ul className="flex gap-12">
                  <li className="flex items-center gap-2 font-bold">
                    <span>
                      <MdLocationOn />
                    </span>
                    {data.location}
                  </li>
                  <li className="list-disc font-bold">Full Time</li>
                </ul>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Discover;
