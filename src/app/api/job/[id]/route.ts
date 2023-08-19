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
    console.log(url);
    const id = route.params.id;

    console.log(id);
    const fileName = url.searchParams.get("fileName");

    console.log(fileName);

    const user = await User.findByIdAndUpdate(
      id,
      {
        photo: fileName,
      },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
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

    console.log(data);

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

    console.log(newJob);

    const job = await Job.create(newJob);

    return NextResponse.json({ job }, { status: 201 });
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

    return NextResponse.json({ job }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
