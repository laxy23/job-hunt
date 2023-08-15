import connect from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

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
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    console.log(name, email);

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
      },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
