"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("filter") ?? "all";

  function handleFilter(filter) {
    console.log(filter);
    const params = new URLSearchParams();
    params.set("filter", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-row justify-between w-1/2">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Show All
      </Button>
      <Button
        filter="brand"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Brand Creation
      </Button>
      <Button
        filter="development"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Development
      </Button>
      <Button
        filter="digital"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Digital Marketing
      </Button>
      <Button
        filter="videos"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Videos
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`hover:bg-red-500 px-4 py-1 hover:rounded-md hover:text-white hover:cursor-pointer
      ${filter === activeFilter ? " bg-red-500 rounded-md text-white" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
