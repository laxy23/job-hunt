import connect from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";
import Job from "@/app/models/Job";

export const PUT = async (
  req: NextRequest,
  route: { params: { id: string } }
) => {
  try {
    await connect();
    const url = new URL(req.url);
    const id = route.params.id;

    const fileName = url.searchParams.get("fileName");

    const user = await User.findByIdAndUpdate(
      id,
      {
        photo: fileName,
      },
      { new: true }
    );

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (
  req: NextRequest,
  route: { params: { id: string } }
) => {
  try {
    await connect();
    const data = await req.json();

    const id = route.params.id;

    const {
      jobTitle,
      companyName,
      logo,
      description,
      salary,
      experience,
      skills,
      mail,
    } = data.detail;

    const { type, location, experienceLevel } = data;

    const newJob = {
      jobTitle,
      companyName,
      logo,
      description,
      location,
      experienceLevel,
      salary,
      type,
      experience,
      skills,
      mail,
      user: id,
    };

    const job = await Job.create(newJob);

    return new Response(JSON.stringify(job), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (
  req: NextRequest,
  route: { params: { id: string } }
) => {
  try {
    await connect();

    const id = route.params.id;

    const job = await Job.findById(id);

    const user = await User.findById(job.user);

    return new Response(JSON.stringify(job, user), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
