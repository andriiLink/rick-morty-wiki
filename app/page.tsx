import Link from 'next/link';

import { getCharacters } from '@/src/lib/api'
import CharacterCard from '@/src/components/CharacterCard';
import { SearchInput } from '@/src/components/SearchInput';
import { FilterBar } from '@/src/components/FilterBar';
import { PaginationBar } from '@/src/components/PaginationBar';

export default async function Home({ 
  searchParams 
}: { searchParams: Promise<{ 
  name?: string, 
  page?: string, 
  status?: string,
  species?: string,
  gender?: string,
  }>
}) {
  const { name, page, status, species, gender } = await searchParams;
  const charactersFromAPI = 
    await getCharacters(Number(page) || 1, name, status, species, gender);

  return (
    <div>
      <div className='flex justify-center py-5 w-full mb-5'>
        <SearchInput labelText='Characters' />
      </div>

      <div className='flex flex-col md:flex-row'>
        <aside className='w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-8 py-4'>
          <FilterBar />
        </aside>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4
          gap-5 m-auto
        '>
          {
            charactersFromAPI ? (
              charactersFromAPI.results.map((chatacter) => {
                return (
                  <Link
                    key={chatacter.id}
                    className='hover:-translate-y-2'
                    href={`/characters/${chatacter.id}`}
                  >
                    <CharacterCard chatacter={chatacter} />
                  </Link>
                );
              })
            ) : (
              <div>No characters with name <b>{name}</b> was found :/</div>
            )
          }
        </div>
      </div>

      <div className='flex justify-center my-7'>
        <PaginationBar totalPages={charactersFromAPI?.info.pages} />
      </div>
    </div>
  );
}
