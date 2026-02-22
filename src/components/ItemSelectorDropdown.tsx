"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/react';

import { useRouter, useParams } from 'next/navigation';

interface BaseItem {
  id: number,
  name: string,
};

type Props<T extends BaseItem> = {
  itemList: T[],
  routerDirection: string,
  paramName: string,
  label?: string,
};

export const ItemSelectorDropdown = <T extends BaseItem>({
  itemList,
  routerDirection,
  paramName,
  label,
}: Props<T>) => {
  const router = useRouter();
  const params = useParams();

  const placeholder = { id: 0, name: label || '' } as T;

  const selectedItem = itemList.find(
    (item) => item.id.toString() === params[paramName]
  ) || placeholder;

  const handleChangeEpisode = (value: T) => {
    router.push(`/${routerDirection}/${value.id}`);
  };


  return (
    <div className='
      border-4 border-blue-500 w-full rounded-xl shrink-0 md:mt-25
    '>
      <Listbox value={selectedItem} onChange={handleChangeEpisode}>
        <ListboxButton
          className='
            w-full py-2 px-4
            focus:outline-none
            focus:shadow-lg        
            focus:shadow-blue-500/50
            font-semibold
          '>
          {selectedItem ? selectedItem.name : label}
        </ListboxButton>

        <ListboxOptions className='
          border-blue-500
          focus: outline-none
          max-h-60
          overflow-y-auto
          focus:shadow-lg
          focus:shadow-blue-500/50
        '>
          {itemList.map((item) => {
            return (
              <ListboxOption
                key={item.id}
                value={item}
                className="
                  relative pt-2 pb-1
                  before:content-[''] 
                  before:absolute before:top-0 before:left-1/2
                  before:-translate-x-1/2
                  before:bg-blue-500
                  before:h-[2px]
                  before:w-1/2
                  text-center
              ">
                {item.name}
              </ListboxOption>
            );
          })}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
