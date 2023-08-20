import User from "@/app/models/User";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    await connect();

    const {
      companyName,
      companyEmail,
      companyPassword,
      name,
      email,
      role,
      password,
      companyRole,
    } = data;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = password
      ? bcrypt.hashSync(password, salt)
      : bcrypt.hashSync(companyPassword, salt);

    const newUser = {
      name: companyName ? companyName : name,
      email: companyEmail ? companyEmail : email,
      role: role ? role : companyRole,
      password: hashedPassword,
    };

    const userExist = await User.findOne({ email });

    if (userExist) {
      return new Error("User already exists!");
    }

    const user = await User.create(newUser);

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
