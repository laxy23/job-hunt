"use client";

import { HiArrowRight } from "react-icons/hi";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect, ChangeEvent } from "react";
import Details from "../components/utils/Details";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateJob = () => {
  const session = useSession();
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [state, setState] = useState(1);

  useEffect(() => {
    if (session?.data?.user.email) {
      setForm((prevState) => ({
        ...prevState,
        logo: session.data.user.photo,
        mail: session.data.user.email,
        companyName: session.data.user.name,
      }));
    }

    if (session.data?.user.role === "employee") {
      router.push("/");
    }
  }, [session]);

  const [form, setForm] = useState({
    logo: "",
    jobTitle: "",
    companyName: "",
    description: "",
    date: "",
    duration: 0,
    positions: 0,
    mail: "",
    salary: 0,
    skills: [""],
    experience: [""],
    location: location,
    type: type,
  });

  const {
    jobTitle,
    description,
    date,
    duration,
    positions,
    salary,
    mail,
    skills,
    experience,
  } = form;

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleExpereinceLevelChange = (event: SelectChangeEvent) => {
    setExperienceLevel(event.target.value as string);
  };

  const changeState = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
    if (e.currentTarget.textContent === "Next") {
      setState(state + 1);
    } else if (e.currentTarget.textContent === "Prev") {
      setState(state - 1);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(form);

    if (e.target.name === "experience" || e.target.name === "skills") {
      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: [e.target.value],
      }));
    }
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

  const navigation = [
    {
      id: 1,
      title: "Ad Content",
      primary: state === 1 ? true : false,
      create: true,
    },
    {
      id: 2,
      title: "Other Information",
      primary: state === 2 ? true : false,
      create: true,
    },
    {
      id: 3,
      title: "Confirmation",
      primary: state === 3 ? true : false,
      create: false,
    },
  ];

  const shouldRenderDetails = () => {
    return (
      jobTitle !== "" &&
      description !== "" &&
      date !== "" &&
      duration !== 0 &&
      positions !== 0 &&
      salary !== 0 &&
      mail !== "" &&
      skills.length !== 0 &&
      experience.length !== 0 &&
      location !== "" &&
      type !== ""
    );
  };

  const types = ["Remote", "Part time", "Full time", "Freelance"];
  const epxereinceLevel = ["Internship", "Entry", "Intermediate", "Senior"];
  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <div className="flex justify-between flex-col md:gap-4 lg:flex-row">
        <div>
          <h3 className="text-2xl font-bold">
            Post your <span className="text-primaryColor">job !</span>
          </h3>
        </div>
        <div className="gap-4 hidden md:flex">
          {navigation.map((data) => (
            <div key={data.id}>
              {data.primary === true && (
                <div
                  className={`font-bold text-base flex gap-3 items-center cursor-pointer ${
                    data.create && "create-item"
                  }`}
                  key={data.id}
                  onClick={() => setState(data.id)}
                >
                  <h3 className="text-primaryColor border-solid border-2 border-primaryColor px-[13px] py-1 rounded-full">
                    {data.id}
                  </h3>
                  <h3 className="text-[#374151]">{data.title}</h3>
                </div>
              )}
              {data.primary === false && (
                <div
                  className={`font-bold text-base text-secondaryColor flex gap-3 items-center cursor-pointer ${
                    data.create && "create-item"
                  }`}
                  key={data.id}
                  onClick={() => setState(data.id)}
                >
                  <h3 className="border-2 border-solid border-secondaryColor px-[13px] py-1 rounded-full">
                    {data.id}
                  </h3>
                  <h3>{data.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 border-solid mt-12 flex flex-col p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold mb-6">
            {" "}
            {state === 1
              ? "Content"
              : state === 2
              ? "Other Information"
              : state === 3
              ? "Confirmation"
              : ""}
          </h3>
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
                name="jobTitle"
                id="job title"
                value={jobTitle}
                onChange={handleInputChange}
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
                value={description}
                onChange={handleInputChange}
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
            <div className="flex gap-4 w-full flex-col md:flex-row">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Day of Posting"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Posting Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="Day of Posting"
                  value={date}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="Description"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="Job Duration"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Job Duration - In Days
                </label>
                <input
                  type="number"
                  name="duration"
                  value={duration}
                  onChange={handleInputChange}
                  id="Job Duration"
                  className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                  placeholder="In Days"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4 flex-col md:flex-row">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Position Number"
                  className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
                >
                  Number of positions
                </label>
                <input
                  type="number"
                  name="positions"
                  value={positions}
                  onChange={handleInputChange}
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
                  type="email"
                  name="mail"
                  value={mail}
                  onChange={handleInputChange}
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
                htmlFor="Type"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Expereince Level
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Expereince
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={experienceLevel}
                    label="Experience Level "
                    onChange={handleExpereinceLevelChange}
                  >
                    {epxereinceLevel.map((exp, i) => (
                      <MenuItem value={exp} key={i}>
                        {exp}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex flex-col w-full mt-4">
              <label
                htmlFor="Salary"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Salary
              </label>
              <p className="text-sm text-secondaryColor mb-4">In BAM!</p>
              <input
                type="number"
                name="salary"
                value={salary}
                onChange={handleInputChange}
                id="Salary"
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Salary"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="skills"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Skills
              </label>
              <p className="text-sm text-secondaryColor mb-4">
                Please use "," after each word!
              </p>
              <textarea
                name="skills"
                value={skills}
                onChange={handleInputChange}
                id="Skills"
                cols={10}
                rows={10}
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Skills"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="experience"
                className="block mb-4 text-base font-bold text-gray-900 dark:text-white"
              >
                Experience
              </label>
              <p className="text-sm text-secondaryColor mb-4">
                Please use "," after each sentence!
              </p>
              <textarea
                name="experience"
                value={experience}
                onChange={handleInputChange}
                id="Experience"
                cols={10}
                rows={10}
                className="border border-gray-300 text-gray-900 rounded-sm block w-full p-3 text-[16px] dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor"
                placeholder="Experience"
              />
            </div>
            <div className="flex justify-start mt-6 gap-4">
              <button
                onClick={changeState}
                className="bg-secondaryColor py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Prev
              </button>
              <button
                onClick={changeState}
                className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Next
              </button>
            </div>
          </>
        )}
        {state === 3 && shouldRenderDetails() && (
          <Details
            detail={form}
            location={location}
            type={type}
            creating={true}
            experienceLevel={experienceLevel}
            id={session.data?.user._id}
          />
        )}

        {state === 3 && !shouldRenderDetails() && (
          <div className="flex flex-col justify-start">
            <h3>Please fill out the form!</h3>
            <div className="mt-4">
              <button
                onClick={changeState}
                className="bg-secondaryColor py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Prev
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreateJob;
