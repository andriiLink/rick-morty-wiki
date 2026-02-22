"use client";

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { FILTER_CATEGORIES } from '@/src/constants/filterItems';

export const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('status');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const checkIsActive = (category: string, value: string) => {
    return searchParams.get(category) === value;
  };

  const handleToggleFilter = (choosenFilter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentCategoryValue = searchParams.get(selectedCategory);

    if (currentCategoryValue === choosenFilter) {
      params.delete(selectedCategory);
    } else {
      params.set(selectedCategory, choosenFilter);
    }

    params.set('page', '1');

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const hasFilters = Array.from(searchParams.keys()).some(key => key !== 'page');

  return (
    <section className='w-90'>
      <div>
        <p className={`font-bold flex justify-center mb-2 ${
          !hasFilters && 'mb-16'}
          `}>Fliters:</p>
        {
          hasFilters &&
          <div
            className='border-red-500 border-4 rounded-2xl
            text-red-500 flex justify-center font-semibold
            p-2 
            hover:bg-red-500
            hover:text-white
            hover:cursor-pointer
            mb-2
          '
            onClick={() => router.push(pathname, { scroll: false })}
          >Remove all filters</div>
        }
      </div>
      <div className='border-blue-500 border-4 rounded-2xl'>
        {FILTER_CATEGORIES.map((category) => {
          return (
            <div key={category.id}>
              <div
                className='p-3 bg-blue-200 rounded-xl
                  font-semibold
                  hover:cursor-pointer
                '
                onClick={() => setSelectedCategory(category.id)}
              >{category.title}</div>

              {
                selectedCategory === category.id &&
                <div className='p-2 flex flex-wrap gap-2'>
                  {category.options.map((categoryOption) => {
                    return (
                      <div
                        key={categoryOption.value}
                        className={`border-blue-300 border-2 rounded-lg p-2
                        ${
                          checkIsActive(category.id, categoryOption.value)
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-blue-500'
                        }
                        hover:text-blue-500
                        hover:cursor-pointer
                        hover:bg-blue-200
                      `}
                        onClick={() => handleToggleFilter(categoryOption.value)}
                      >
                        {categoryOption.label}
                      </div>
                    )
                  })}
                </div>
              }
            </div>
          );
        })}
      </div>
    </section>
  );
};
