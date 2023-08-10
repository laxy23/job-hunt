import { detail } from "@/app/utils/Data";
import Details from "@/app/components/utils/Details";

const JobDetail = () => {
  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <Details detail={detail} />
    </section>
  );
};

export default JobDetail;
