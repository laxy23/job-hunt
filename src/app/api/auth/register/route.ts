import { NextApiRequest } from "next";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export const POST = async (req: any) => {
  const { companyName, name, email, password } = await req.json();

  console.log(companyName, name, email, password);

  await connect();
};
