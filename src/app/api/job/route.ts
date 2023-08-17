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
}

export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const url = new URL(req.url);

    const searchParams = url.searchParams;

    const keysArray = Array.from(searchParams.keys());

    if (keysArray.length !== 0) {
      const salary = url.searchParams.get("price");
      const location = url.searchParams.get("location");
      const avability = url.searchParams.get("avability");
      const experience = url.searchParams.get("experience");
      const search = url.searchParams.get("search");

      console.log(salary, location, avability, experience, search);

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

      console.log(filter);

      const jobs = await Job.find(filter);

      return NextResponse.json({ length: jobs.length, jobs }, { status: 200 });
    } else {
      const jobs = await Job.find();

      return NextResponse.json({ length: jobs.length, jobs }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
  }
};
