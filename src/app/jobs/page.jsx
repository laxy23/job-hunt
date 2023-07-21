import Filter from "../components/Filter";
import JobList from "../components/JobList";

const Jobs = () => {
  return (
    <section id="jobs" className="container mx-auto px-6 mt-8 lg:mt-4">
      <div className="grid grid-cols-3">
        <div className="lg:col-span-1 lg:block hidden">
          <Filter />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <JobList />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
