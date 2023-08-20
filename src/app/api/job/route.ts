import connect from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/app/models/Job";

interface JobFilter {
  salary?: {
    $gte: number;
  };
  location?: string;
  type?: {
    $in: string[];
  };
  experienceLevel?: {
    $in: string[];
  };
  companyName?: string;

  $or?: Array<{
    skills?: string;
    experience?: string;
  }>;
  jobTitle?: string | { $regex: string; $options: "i" };
}

export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const url = new URL(req.url);

    const searchParams = url.searchParams;
    const page = url.searchParams.get("page");
    const pageSize = url.searchParams.get("pageSize");
    const PAGE_SIZE = Number(pageSize) || 3;
    const pageNum = Number(page) || 1;
    const skip = (pageNum - 1) * PAGE_SIZE;

    const keysArray = Array.from(searchParams.keys());

    if (keysArray.length !== 0) {
      const salary = url.searchParams.get("price");
      const location = url.searchParams.get("location");
      const avability = url.searchParams.get("avability");
      const experience = url.searchParams.get("experience");
      const search = url.searchParams.get("search");
      const jobTitle = url.searchParams.get("jobTitle");

      console.log(
        salary,
        location,
        avability,
        experience,
        search,
        page,
        jobTitle
      );

      const filter: JobFilter = {};

      if (salary) {
        filter.salary = { $gte: parseInt(salary) };
      }

      if (location) {
        filter.location = location;
      }

      if (avability) {
        filter.type = { $in: avability.split(",") };
      }

      if (experience) {
        filter.experienceLevel = { $in: experience.split(",") };
      }

      if (search) {
        console.log(search);
        filter.companyName = search;
      }

      if (jobTitle && jobTitle.length > 2) {
        console.log(123);
        filter.jobTitle = { $regex: jobTitle, $options: "i" };
      }

      const totalJobs = await Job.countDocuments();
      const jobs = await Job.find(filter).skip(skip).limit(PAGE_SIZE);

      return NextResponse.json(
        {
          length: jobs.length,
          totalPages: Math.ceil(totalJobs / PAGE_SIZE),
          jobs,
        },
        { status: 200 }
      );
    } else {
      const totalJobs = await Job.countDocuments();
      const jobs = await Job.find().skip(skip).limit(PAGE_SIZE);

      return NextResponse.json(
        {
          length: jobs.length,
          totalPages: Math.ceil(totalJobs / PAGE_SIZE),
          jobs,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
