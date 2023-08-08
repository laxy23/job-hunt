"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import sign from "@/images/signUp.png";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(err);
    }
  };

  const onPressVerify = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <section className="container mx-auto px-6 mt-4 mb-20">
      <div className="grid grid-cols-2 mt-24">
        <div className="col-span-1">
          {/* <SignIn /> */}
          {!pendingVerification && (
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-12">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <h3 className="font-bold text-3xl">Welcome!</h3>
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create a new account
                </h1>
                <form
                  onClick={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
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
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      href="/sign-in"
                      className="font-medium text-primaryColor hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          )}
          {pendingVerification && (
            <div>
              <form className="space-y-4 md:space-y-6">
                <input
                  value={code}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Verification Code..."
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={onPressVerify}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Verify Email
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="col-span-1 flex items-center">
          <Image
            src={sign}
            layout="responsive"
            width={500}
            height={500}
            alt="Sign In"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
