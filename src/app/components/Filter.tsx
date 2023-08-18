"use client";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { experience } from "../utils/Data";
import React from "react";
import { useGlobalContext } from "./utils/Context/store";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Filter = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(2500);
  const [avability, setAvability] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState<string[]>([]);

  const { getAllJobs, setJobData } = useGlobalContext();

  const handleClear = () => {
    setLocation("");
    setPrice(2500);
    setAvability([]);
    setExperienceFilter([]);
    getAllJobs();
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
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

  const handlePriceChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (typeof newValue === "number") {
      setPrice(newValue);
    }
  };

  const handleAvabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      setAvability([...avability, value]);
    } else {
      setAvability(avability.filter((item) => item !== value));
    }
  };

  const handleExperienceFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (e.target.checked) {
      setExperienceFilter([...experienceFilter, value]);
    } else {
      setExperienceFilter(experienceFilter.filter((item) => item !== value));
    }
  };

  const handleFilterSubmit = async () => {
    const url = `http://localhost:3000/api/job/?price=${price}&location=${location}&avability=${avability}&experience=${experienceFilter}`;

    const res = await fetch(url);

    const data = await res.json();

    setJobData(data.jobs);
  };

  return (
    <section
      id="filter"
      className="container mx-auto px-0 lg:px-12 border-solid border border-gray-300 py-4 rounded-lg hidden mt-4 pb-10 lg:block"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Filter</h3>
        <button
          className="flex items-center text-gray-500 gap-3 font-bold"
          onClick={handleClear}
        >
          Clear All{" "}
          <span>
            <IoIosCloseCircleOutline />
          </span>
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Salary</h3>
        <Slider
          value={price}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={5000}
          min={500}
          step={500}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between">
          <span>$500</span>
          <span>$5000</span>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Location</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
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
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Avability</h3>
        <div className="flex items-center">
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center">
              <Checkbox
                {...label}
                value="Full time"
                onChange={handleAvabilityChange}
              />
              <span className="text-gray-500">Full time</span>
            </li>
            <li className="flex items-center">
              <Checkbox
                {...label}
                value="Part time"
                onChange={handleAvabilityChange}
              />{" "}
              <span className="text-gray-500">Part time</span>
            </li>
            <li className="flex items-center">
              <Checkbox
                {...label}
                value="Freelance"
                onChange={handleAvabilityChange}
              />{" "}
              <span className="text-gray-500">Freelance</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Experience</h3>
        <ul>
          {experience.map((data) => (
            <li className="flex items-center" key={data.id}>
              <Checkbox
                value={data.content}
                onChange={handleExperienceFilterChange}
                {...label}
              />{" "}
              <span className="text-gray-500">{data.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 pb-4">
        <button
          onClick={handleFilterSubmit}
          className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
        >
          Apply Changes
        </button>
      </div>
    </section>
  );
};

export default Filter;
