"use client";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { experience } from "../utils/Data";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Filter = () => {
  const [location, setLocation] = useState("");

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
  return (
    <section
      id="filter"
      className="container mx-auto px-0 lg:px-12 border-solid border border-gray-300 py-4 rounded-lg hidden lg:block"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Filter</h3>
        <button className="flex items-center text-gray-500 gap-3 font-bold">
          Clear All{" "}
          <span>
            <IoIosCloseCircleOutline />
          </span>
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Salary</h3>
        <Slider
          defaultValue={2500}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={5000}
          min={500}
          step={500}
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
              <Checkbox {...label} />{" "}
              <span className="text-gray-500">Full Time</span>
            </li>
            <li className="flex items-center">
              <Checkbox {...label} />{" "}
              <span className="text-gray-500">Part Time</span>
            </li>
            <li className="flex items-center">
              <Checkbox {...label} />{" "}
              <span className="text-gray-500">Freelance</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="text-xl mt-4 font-bold mb-4">Experience</h3>
        <ul></ul>
        {experience.map((data) => (
          <li className="flex items-center" key={data.id}>
            <Checkbox {...label} />{" "}
            <span className="text-gray-500">{data.content}</span>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Filter;
