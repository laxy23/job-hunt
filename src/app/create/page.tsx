"use client";

import { HiArrowRight } from "react-icons/hi";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const page = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState(2);

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const changeState = () => {
    setState(state + 1);
  };

  const cities = [
    "Zenica",
    "Sarajevo",
    "Mostar",
    "Banja Luka",
    "Tuzla",
    "Bihac",
    "Bijeljina",
  ];

  const types = ["Remote", "Part time", "Full time", "Freelance"];
  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            Post your <span className="text-primaryColor">job !</span>
          </h3>
        </div>
        <div className="flex gap-4">
          <div className="font-bold text-base flex gap-3 items-center create-item">
            <h3 className="text-primaryColor border-solid border-2 border-primaryColor px-[13px] py-1 rounded-full">
              1
            </h3>
            <h3 className="text-[#374151]">Ad Content</h3>
          </div>
          <div className="font-bold text-base text-secondaryColor flex gap-3 items-center create-item">
            <h3 className="border-2 border-solid border-secondaryColor px-[13px] py-1 rounded-full">
              2
            </h3>
            <h3>Other information</h3>
          </div>
          <div className="font-bold text-base text-secondaryColor flex gap-3 items-center">
            <h3 className="border-2 border-solid border-secondaryColor px-[13px] py-1 rounded-full">
              3
            </h3>
            <h3>Confirmation</h3>
          </div>
        </div>
      </div>
      <div className="border-2 border-solid mt-12 flex flex-col p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold mb-6">Content !</h3>
          <span className="text-primaryColor text-2xl font-bold">
            <HiArrowRight />
          </span>
        </div>
        {state === 1 && (
          <>
            <div>
              <label
                htmlFor="job title"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                type="text"
                name="job title"
                id="job title"
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Job title"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="location"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Location
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="Location"
                    onChange={handleChange}
                  >
                    {cities.map((loc, i) => (
                      <MenuItem value={loc} key={i}>
                        {loc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="mt-4">
              <label
                htmlFor="jobName"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols={10}
                rows={10}
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Description"
              />
            </div>
            <div className="flex justify-start mt-6">
              <button
                onClick={changeState}
                className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Next
              </button>
            </div>
          </>
        )}
        {state === 2 && (
          <>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Day of Posting"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Posting Date
                </label>
                <input
                  type="date"
                  name="Day of Posting"
                  id="Day of Posting"
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="Description"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="Job Duration"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Job Duration
                </label>
                <input
                  type="number"
                  name="Job Duration"
                  id="Job Duration"
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="Duration"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Position Number"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Number of positions
                </label>
                <input
                  type="number"
                  name="Position Number"
                  id="Position Number"
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="Positions Number"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="Mail for applications"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Mail for applications
                </label>
                <input
                  type="number"
                  name="Mail for applications"
                  defaultValue={"mymail@gmail.com"}
                  id="Mail for applications"
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="Type"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Type
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Type"
                    onChange={handleTypeChange}
                  >
                    {types.map((loc, i) => (
                      <MenuItem value={loc} key={i}>
                        {loc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="mt-4">
              <label
                htmlFor="jobName"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols={10}
                rows={10}
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Description"
              />
            </div>
            <div className="flex justify-start mt-6">
              <button
                onClick={changeState}
                className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default page;
