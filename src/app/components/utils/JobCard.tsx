import { MdLocationOn } from "react-icons/md";
import { BsArrowRight, BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";

interface Job {
  _id: string;
  jobTitle: string;
  companyName: string;
  logo: string;
  description: string;
  location: string;
  salary: number;
  type: string;
  experience: string[];
  skills: string[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface JobListProps {
  data?: Job | undefined;
  deleteActive?: boolean;
}
const JobCard = ({ data, deleteActive }: JobListProps) => {
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const res = await fetch(`/api/job/profile/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      await res.json();
      window.location.reload();
    }
  };
  return (
    <div
      className="flex flex-col mx-4 my-0 px-6 py-[17px] rounded-[25px] border border-solid border-secondaryColor relative hover:shadow-lg duration-300"
      key={data?._id}
      id="jobCard"
    >
      <div className="absolute top-5 right-5 text-xl lg:top-4 lg:right-6 lg:text-2xl text-primaryColor">
        <Link href={`/details/${data?._id}`}>
          <BsArrowRight />
        </Link>
      </div>
      {deleteActive && (
        <div className="text-red-500 absolute top-5 right-16 text-xl lg:top-4 lg:right-16 lg:text-2xl">
          <button onClick={() => handleDelete(data?._id as string)}>
            <BsFillTrashFill />
          </button>
        </div>
      )}
      <div className="flex mb-6 flex-col md:flex-row md:gap-6">
        <img
          src={data?.logo}
          alt="icon"
          style={{
            width: "80px",
            height: "80px",
          }}
        />
        <div>
          <h2 className="font-bold text-lg">{data?.jobTitle}</h2>
          <h4 className="text-primaryColor">{data?.companyName}</h4>
        </div>
      </div>
      <p className="text-secondaryColor pb-4 border-b-[#ccc] border-b border-solid">
        {data?.description}
      </p>
      <br />
      <ul className="flex gap-12">
        <li className="flex items-center gap-2 font-bold">
          <span>
            <MdLocationOn />
          </span>
          {data?.location}
        </li>
        <li className="list-disc font-bold">{data?.type}</li>
      </ul>
    </div>
  );
};

export default JobCard;
