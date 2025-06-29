import Filter from "../_components/Filter";
import WorkGrid from "../_components/WorkGrid";

export const metadata = {
  title: "Portfolio",
};

function Page({ searchParams }) {
  const filter = searchParams?.filter ?? "all";
  console.log(filter);
  return (
    <>
      <div className="mt-10 mx-10">
        <h1 className="text-4xl font-bold my-10">PORTFOLIO</h1>
        <Filter />
      </div>
      <WorkGrid filter={filter} />
    </>
  );
}

export default Page;
