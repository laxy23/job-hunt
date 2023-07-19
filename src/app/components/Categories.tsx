import { categories } from "../utils/Data";
import PageTitle from "../utils/PageTitle";

const Categories = () => {
  return (
    <section id="categories" className="container mx-auto px-6 mt-8 lg:mt-1">
      <PageTitle
        title="Categories"
        pageTitle="Browse from top categories"
        desc="Explore diverse job opportunities across various top categories to find your ideal career path."
      />
      <div className="grid grid-cols-3">
        {categories.map((data) => (
          <div className="flex flex-col" key={data.id}>
            <h3>{data.icon}</h3>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <div>
              <button className="text-[#438dfc]">Browse Job</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
