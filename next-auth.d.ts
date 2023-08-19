import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
      email: string;
      photo: string;
      _id: string;
      aboutCompany: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
    photo: string;
    _id: string;
    aboutCompany: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    photo: string;
    _id: string;
    aboutCompany: string;
  }
}
