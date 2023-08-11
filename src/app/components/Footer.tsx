import Link from "next/link";
import footer from "@/images/footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section id="mb" className="mt-8 lg:mt-1 bg-primaryColor p-9">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col justify-center items-baseline">
            <h3 className="text-2xl max-w-[643px] text-white mb-8">
              Apply for your dream job and unleash your full potential in a
              thriving and rewarding career.
            </h3>
            <Link
              href="/"
              className="bg-[#438dfc] py-2 px-8 rounded-md text-white border border-solid border-gray-300 hover:text-[#438dfc] hover:bg-white duration-200 font-medium"
            >
              Sign Up
            </Link>
          </div>
          <div>
            <Image
              src={footer}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="footer"
            />
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="bg-gray-400 w-full h-[1px]"></div>
        <p className="text-center mt-4 font-bold mb-4">
          Copyright ©2023 All rights reserved.{" "}
        </p>
      </section>
    </>
  );
};

export default Footer;
