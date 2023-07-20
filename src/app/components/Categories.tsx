import { categories } from "../utils/Data";
import PageTitle from "../utils/PageTitle";

const Categories = () => {
  return (
    <section id="mb" className="container mx-auto px-6 mt-8 lg:mt-1">
      <PageTitle
        title="Categories"
        pageTitle="Browse from top categories"
        desc="Explore diverse job opportunities across various top categories to find your ideal career path."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {categories.map((data) => (
          <div
            className="flex flex-col p-5 m-[14px] item hover:shadow-md duration-200"
            key={data.id}
          >
            <h3 className="text-xl mb-4 w-fit bg-gray-200 p-4 rounded-full text-primaryColor">
              {data.icon}
            </h3>
            <h2 className="text-lg font-bold mb-4">{data.title}</h2>
            <p className="text-gray-700 mb-4">{data.desc}</p>
            <div>
              <button className="border border-primaryColor border-solid px-8 py-2 hover:text-white hover:bg-primaryColor duration-200 hover:border-white">
                Browse Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
