"use client";

import { useEffect, useState } from "react";
import JobCard from "../components/utils/JobCard";
import { discover } from "../utils/Data";
import Link from "next/link";
import { useSession } from "next-auth/react";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/app/utils/uploadthing";
import { UploadFileResponse } from "uploadthing/client";

const Profile = () => {
  const session = useSession();
  const [firstName, setFirstName] = useState<string | undefined>("");
  const [role, setRole] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [aboutCompany, setaboutCompany] = useState<string | undefined>("");
  const [inputsFocused, setInputsFocused] = useState(false);
  const [myJobs, setMyJobs] = useState<[] | undefined>();

  const handleCancel = () => {
    setInputsFocused(false);
    setFirstName(session?.data?.user.name);
    setRole(session?.data?.user.role);
    setEmail(session?.data?.user.email);
    setaboutCompany(session.data?.user.aboutCompany);
  };

  const handleSubmit = async () => {
    console.log(firstName, email);
    const res = await fetch(
      `http://localhost:3000/api/job/profile/${session.data?.user._id}?name=${firstName}&email=${email}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aboutCompany,
        }),
      }
    );

    const data = await res.json();

    console.log(data, "Data");

    if (data) {
      const upd = await session.update({
        ...session.data,
        user: {
          ...session.data?.user,
          email: data.user.email,
          name: data.user.name,
          aboutCompany: data.user.aboutCompany,
        },
      });
      console.log(upd, "UPD");
    }

    window.location.reload();
  };

  useEffect(() => {
    if (session?.data?.user) {
      setFirstName(session.data.user.name);
      setRole(session.data.user.role);
      setEmail(session.data.user.email);
      setaboutCompany(session.data.user.aboutCompany);
    }
    console.log(session);

    if (session.data?.user.role === "company") {
      const fetchMyJobs = async () => {
        const res = await fetch(`/api/job/profile/${session.data?.user._id}`);

        const data = await res.json();

        console.log(data.myJobs);

        setMyJobs(data.myJobs);
      };

      fetchMyJobs();
    }
  }, [session?.data?.user, session.update]);

  const handleUpdateUser = async (
    response: UploadFileResponse[] | undefined
  ) => {
    console.log("Response", response);
    const res = await fetch(
      `http://localhost:3000/api/job/${
        session.data?.user._id
      }?fileName=https://utfs.io/f/${response ? response[0].key : ""}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();

    await session.update({
      ...session.data,
      user: {
        ...session.data?.user,
        photo: data.user.photo,
      },
    });
  };

  return (
    <section id="profile" className="container mx-auto px-6 mt-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8 justify-start items-start md:items-center md:justify-between">
        <div className="flex gap-4">
          <img
            src={`${session.data?.user.photo}`}
            alt="profile"
            className="rounded-full"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <div className="flex flex-col">
            <h3 className="text-3xl pt-4 font-bold">
              {session?.data?.user.name}
            </h3>
            <p className="text-secondaryColor font-bold">
              {session?.data?.user.role === "company" ? "company" : "user"}
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/create"
            className="border border-primaryColor border-solid px-8 py-2 hover:text-white hover:bg-primaryColor duration-200 hover:border-white"
          >
            Create Job
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start justify-start mt-12 mb-4 gap-8">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">
            {session?.data?.user.role === "company" ? "Company" : "User"}{" "}
            profile
          </h3>
          <p className="text-secondaryColor">
            Update your{" "}
            {session?.data?.user.role === "company" ? "company" : ""} photo and
            details here.
          </p>
        </div>
        <div className="flex gap-6">
          {inputsFocused && (
            <>
              <button
                className="border font-medium border-primaryColor border-solid px-8 py-2 hover:text-white hover:bg-primaryColor duration-200 hover:border-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
              >
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>
      <hr />
      <div className="flex gap-8 mt-8 mb-6 justify-between flex-col md:flex-row">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">Public Profile</h3>
          <p className="text-secondaryColor font-medium">
            This will be displayed on your profile.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <input
            type="text"
            value={firstName ? firstName : ""}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            onFocus={() => setInputsFocused(true)}
          />
          <input
            type="text"
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
            id="role"
            disabled
            className="border bg-gray-100 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="company"
            onFocus={() => setInputsFocused(true)}
          />
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="johndoe@gmail.com"
            onFocus={() => setInputsFocused(true)}
          />
        </div>
      </div>
      <hr />
      <div className="flex gap-8 mt-8 mb-6 justify-between flex-col md:flex-row">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">About the company</h3>
          <p className="text-secondaryColor font-medium">
            Write short description and tell emloyee who you are!
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <textarea
            value={aboutCompany ? aboutCompany : ""}
            name="aboutCompany"
            onChange={(e) => setaboutCompany(e.target.value)}
            id="aboutCompany"
            cols={10}
            rows={10}
            className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write something about yourself!"
            onFocus={() => setInputsFocused(true)}
          />
        </div>
      </div>
      <hr />
      <div className="flex gap-8 mt-8 mb-6 justify-between flex-col lg:flex-row">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">Profile Photo</h3>
          <p className="text-secondaryColor font-medium max-w-[350px]">
            Update your{" "}
            {session?.data?.user.role === "company"
              ? "company logo"
              : "user profile"}{" "}
            and then choose where you want it to display.
          </p>
        </div>
        <div className="flex gap-12 items-center flex-col lg:flex-row">
          <img
            src={`${session.data?.user.photo}`}
            alt="profile"
            className="rounded-full"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <div className="w-full">
            <label
              htmlFor="images"
              className="drop-container"
              id="dropcontainer"
            >
              <span className="drop-title">Drop files here</span>
              or
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  handleUpdateUser(res);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </label>
          </div>
        </div>
        <div></div>
      </div>
      <hr />
      {session?.data?.user.role === "company" && (
        <div className="flex gap-8 mt-8 mb-6 flex-col">
          <h3 className="font-bold text-2xl">Your Jobs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {myJobs?.map((data, i) => (
              <JobCard data={data} deleteActive={true} key={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
