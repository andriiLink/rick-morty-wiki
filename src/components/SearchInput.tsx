"use client";

import { useDebouncedCallback } from 'use-debounce';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type Params = {
  labelText: string,
};

export const SearchInput: React.FC<Params> = ({ labelText }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((qwery: string) => {
    const params = new URLSearchParams(searchParams);

    if (qwery) {
      params.set('name', qwery);
    } else {
      params.delete('name');
    }

    params.set('page', '1');

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex flex-col items-center gap-5 w-1/2">
      <label className="text-5xl font-semibold">{labelText}</label>
      <div className="flex flex-row justify-between w-full gap-4">
        <input
          placeholder="Search for characters"
          onChange={(e) => { handleSearch(e.target.value) }}
          defaultValue={searchParams.get('name') ?? undefined}
          className="
            placeholder-gray-500
            placeholder:font-light
            pl-4
            py-5
            h-10 w-full
            border-2
            border-blue-500
            rounded-md
            focus:outline-none
            focus:shadow-lg        
            focus:shadow-blue-500/50
            font-semibold
          "></input>
      </div>
    </div>
  );
};