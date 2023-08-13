"use client";
import { useState } from "react";
import sign from "@/images/signIn.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const signInReposnse = await signIn("credentials", {
      ...form,
      redirect: false,
    });

    if (signInReposnse?.error) {
      console.log(signInReposnse.error);
    } else if (signInReposnse?.status === 200 && !signInReposnse.error) {
      router.push("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="container mx-auto px-6 mt-8">
      <div className="grid grid-cols-2 mt-24">
        <div className="col-span-1">
          {/* <SignIn /> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-12">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h3 className="font-bold text-3xl">Welcome Back!</h3>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#438dfc] py-2 px-6 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium w-full"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <Link
                    href="/sign-up"
                    className="font-medium text-primaryColor hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          <Image
            src={sign}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Sign In"
          />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
