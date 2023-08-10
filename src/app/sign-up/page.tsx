"use client";

import { useState } from "react";
import sign from "@/images/signUp.png";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "flowbite-react";

const SignUpPage = () => {
  const [state, setState] = useState("employee");
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "employee",
  });

  const [form2, setForm2] = useState({
    companyName: "",
    companyEmail: "",
    companyPassword: "",
    role: "company",
  });

  const { email, firstName, lastName, password } = form;

  const { companyName, companyEmail, companyPassword } = form2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (state === "employee") {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else if (state === "company") {
      setForm2((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = () => {};

  return (
    <section className="container mx-auto px-6 mt-4 mb-20">
      <div className="grid grid-cols-2 mt-24">
        <div className="col-span-1">
          {/* <SignIn /> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-12">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h3 className="font-bold text-3xl">Welcome!</h3>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a new account
              </h1>
              <div className="flex mb-12">
                <Button.Group>
                  <Button color="gray" onClick={() => setState("employee")}>
                    <p>Employee</p>
                  </Button>
                  <Button color="gray" onClick={() => setState("company")}>
                    <p>Company</p>
                  </Button>
                </Button.Group>
              </div>
              {state === "employee" ? (
                <form
                  onClick={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      name="firstName"
                      onChange={handleChange}
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your lastname
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      name="lastName"
                      onChange={handleChange}
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      value={email}
                      name="email"
                      onChange={handleChange}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium w-full"
                  >
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      href="/sign-in"
                      className="font-medium text-primaryColor hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              ) : state === "company" ? (
                <form
                  onClick={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      name="companyName"
                      onChange={handleChange}
                      id="companyName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Google"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      value={companyEmail}
                      name="companyEmail"
                      onChange={handleChange}
                      id="companyEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="mycompany@io.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="companyPassword"
                      name="companyPassword"
                      value={companyPassword}
                      id="companyPassword"
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium w-full"
                  >
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      href="/sign-in"
                      className="font-medium text-primaryColor hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          <Image
            src={sign}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Sign up"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
