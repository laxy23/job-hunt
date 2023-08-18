"use client";

import { BsArrowRight } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillCheckCircle, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import header from "@/images/header.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const availableLocations = [
    "Zenica",
    "Sarajevo",
    "Mostar",
    "Banja Luka",
    "Tuzla",
    "Bihac",
    "Bijeljina",
  ];

  const handleSearch = () => {
    if (location === "" && jobTitle === "") {
      router.push("/jobs");
    } else if (location.length > 4 || jobTitle.length > 4) {
      if (!availableLocations.includes(location)) {
        console.log("Invalid location");
      } else {
        router.push(`/jobs?loc=${location}&jobTit=${jobTitle}`);
      }
    }
  };

  return (
    <section id="mb" className="container mx-auto px-6 mt-8 lg:mt-1">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center flex-col">
          <div className="uppercase text-[#438dfc] flex items-center mb-8">
            <h3 className="flex gap-4 border border-solid border-gray-300 py-2 px-[10px] rounded-full justify-center items-center font-bold">
              <span className="bg-[#438dfc] text-white py-[7px] px-3 rounded-full font-light ml-[0.2rem]">
                New
              </span>{" "}
              We are hiring{" "}
              <span className="text-[20px] pr-4 pl-2 font-bold">
                <BsArrowRight />{" "}
              </span>
            </h3>
          </div>
          <h1 className="text-4xl max-w-[500px] leading-[3.5rem] font-bold mb-4">
            The best place to find your dream job
          </h1>
          <p className="mb-8 text-[#6f798e] max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            illum magnam porro accusantium unde atque sint totam cumque? Vitae,
            cupiditate?
          </p>
          <div className="flex mb-8 flex-col gap-4 lg:gap-0 lg:flex-row">
            <div className="flex relative">
              <span className="absolute left-3 top-4 text-[27px]">
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                placeholder="Job Title"
                className="pr-0 pl-12 py-4 rounded-md w-11/12 focus:border-[#438dfc]"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="flex relative">
              <span className="absolute left-3 top-4 text-[27px]">
                <HiOutlineLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Location"
                className="pr-0 pl-12 py-4 rounded-md focus:border-[#438dfc] w-11/12"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button
                onClick={handleSearch}
                className="bg-[#438dfc] rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium flex p-[0.8rem] items-center gap-2 lg:p-4"
              >
                Search{" "}
                <span className="text-2xl">
                  <IoMdArrowDropright />
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <h3 className="flex gap-2 justify-center items-center">
              <span className="text-[#438dfc]">
                <AiFillCheckCircle />
              </span>
              Easy to set up
            </h3>
            <h3 className="flex gap-2 justify-center items-center">
              <span className="text-[#438dfc]">
                <AiFillCheckCircle />
              </span>
              Completely Free
            </h3>
          </div>
        </div>
        <div className="lg:p-[45px] justify-center items-center hidden lg:flex">
          <Image
            src={header}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="header"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
