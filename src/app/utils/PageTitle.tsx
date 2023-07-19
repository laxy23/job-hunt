interface PageTitleType {
  title: string;
  pageTitle: string;
  desc: string;
}

const PageTitle = ({ title, pageTitle, desc }: PageTitleType) => {
  return (
    <section
      id="page-title"
      className="text-center mb-12 flex flex-col justify-center items-center"
    >
      <h4 className="border-2 border-solid border-primaryColor py-2 px-4 font-bold mb-6 rounded-full">
        {title}
      </h4>
      <h2 className="text-3xl mb-4 font-bold">{pageTitle}</h2>
      <p className="max-w-[600px] text-secondaryColor">{desc}</p>
    </section>
  );
};

export default PageTitle;
