import connect from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import Job from "@/app/models/Job";

export const GET = async () => {
  try {
    await connect();

    const jobs = await Job.find();

    return NextResponse.json({ length: jobs.length, jobs }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
