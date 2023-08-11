"use client";

import { Navbar } from "flowbite-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "@/images/logo2.png";
import Link from "next/link";

const NavbarMenu = () => {
  const register = false;

  const session = useSession();

  console.log(session);

  return (
    <Navbar fluid rounded className="border-b border-gray-300">
      <Navbar.Brand href="/">
        <Image src={logo} width={100} height={100} alt="logo" priority />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Job Hunt
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Dropdown
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
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}
        <div className="button-container mr-4 md:mr-8">
          <Link
            href="/sign-in"
            className="bg-[#438dfc] py-2 px-6 md:mx-8 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
          >
            Login
          </Link>
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
