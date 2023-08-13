"use client";

import { Navbar } from "flowbite-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "@/images/logo2.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dropdown, Avatar } from "flowbite-react";

const NavbarMenu = () => {
  const register = false;
  const router = useRouter();

  const session = useSession();

  const handleSignOut = () => {
    signOut({ redirect: false });
    router.push("/sign-in");
  };

  return (
    <Navbar fluid rounded className="border-b border-gray-300">
      <Navbar.Brand href="/">
        <Image src={logo} width={100} height={100} alt="logo" priority />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Job Hunt
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="button-container mr-4 md:mr-8">
          {session.status === "unauthenticated" ? (
            <Link
              href="/sign-in"
              className="bg-[#438dfc] py-2 px-6 md:mx-8 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
            >
              Login
            </Link>
          ) : (
            <Dropdown
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{session.data?.user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {session.data?.user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link href="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          )}
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className="text-xl active-nav hover:text-blue-500 nav-links duration-200"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/jobs" className="text-xl nav-links duration-200">
          Find Job
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
