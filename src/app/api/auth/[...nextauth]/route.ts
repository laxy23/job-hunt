import connect from "@/app/utils/connect";
import NextAuth from "next-auth";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            email: credentials?.email,
          });

          if (user) {
            if (credentials?.password) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials?.password,
                user.password
              );
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Wrong Credentials!");
              }
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err: any) {
          throw new Error(err.toString());
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) token.role = user.role;
      if (user) token.photo = user.photo;
      if (user) token._id = user._id;

      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      if (session?.user) session.user.photo = token.photo;
      if (session?.user) session.user._id = token._id;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {},
});

export { handler as GET, handler as POST };
