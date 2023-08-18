import { MdLocationOn } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface JobItem {
  id: number;
  title: string;
  companyName: string;
  desc: string;
  icon: string;
  location: string;
  type: string;
}

const JobCard = ({ data }: any) => {
  return (
    <div
      className="flex flex-col mx-4 my-0 px-6 py-[17px] rounded-[25px] border border-solid border-secondaryColor relative hover:shadow-lg duration-300"
      key={data._id}
    >
      <div className="absolute top-5 right-5 text-xl lg:top-4 lg:right-6 lg:text-2xl text-primaryColor">
        <Link href="/">
          <BsArrowRight />
        </Link>
      </div>
      <div className="flex gap-6 mb-6">
        <img
          src={data.logo}
          alt="icon"
          style={{
            width: "110px",
            height: "110px",
          }}
        />
        <div>
          <h2 className="font-bold text-lg">{data.jobTitle}</h2>
          <h4 className="text-primaryColor">{data.companyName}</h4>
        </div>
      </div>
      <p className="text-secondaryColor pb-4 border-b-[#ccc] border-b border-solid">
        {data.description}
      </p>
      <br />
      <ul className="flex gap-12">
        <li className="flex items-center gap-2 font-bold">
          <span>
            <MdLocationOn />
          </span>
          {data.location}
        </li>
        <li className="list-disc font-bold">{data.type}</li>
      </ul>
    </div>
  );
};

export default JobCard;
