"use client";

import { useDebounce } from "@/hooks/debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const handleSearchDebounced = useDebounce(handleSearch, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        onChange={(e) => handleSearchDebounced(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
