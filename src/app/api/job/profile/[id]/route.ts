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
    const data = await req.json();
    console.log(url);
    const id = route.params.id;

    const { aboutCompany } = data;

    console.log(id);
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    console.log(name, email);

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        aboutCompany,
      },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
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

    console.log(id);

    const myJobs = await Job.find({ user: id });

    return NextResponse.json({ myJobs }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (
  req: NextRequest,
  route: { params: { id: string } }
) => {
  try {
    await connect();

    const id = route.params.id;

    console.log(id);

    await Job.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Job deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
