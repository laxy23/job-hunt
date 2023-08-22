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
    const id = route.params.id;

    const { aboutCompany } = data;

    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        aboutCompany,
      },
      { new: true }
    );

    return new Response(JSON.stringify(user), { status: 200 });
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

    const myJobs = await Job.find({ user: id });

    return new Response(JSON.stringify(myJobs), { status: 200 });
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

    await Job.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ message: "Job deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
