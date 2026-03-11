'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type Props = {
  totalPages: number | undefined,
};

export const PaginationBar: React.FC<Props> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  const handleChangePage = (pageNumber: number) => {
    const param = new URLSearchParams(searchParams.toString());

    if (pageNumber) {
      param.set('page', pageNumber.toString());
    }

    router.push(`${pathname}?${param}`, { scroll: true });
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const total = totalPages || 0;

    for (let i = 1; i <= total; i++) {
      if (i <= 4 || i === total || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      }

      else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  if (!totalPages || totalPages <= 1) return null;

  return (
    <div>
      {
        totalPages
          ? (
            <div className='flex flex-row gap-3'>
              <div
                className='bg-blue-500 w-10 h-10
                text-white
                font-bold
                flex justify-center items-center
                rounded-md
                hover:cursor-pointer
              '
                onClick={() => handleChangePage(currentPage - 1)}>{'<'}</div>

              {
                getVisiblePages().map((page, index) => {
                  return (
                    <div 
                      key={`${page}-${index}`} 
                      className={`h-10 w-10
                    ${page !== '...' 
                      && 'border-blue-500 border-4 rounded-md hover:cursor-pointer' 
                    }
                    text-lg
                    text-blue-500
                    flex items-center justify-center
                    `}
                    onClick={() => handleChangePage(+page)}>{page}</div>
                  );
                })
              }

              <div
                className='bg-blue-500 w-10 h-10
                text-white
                font-bold
                flex justify-center items-center
                rounded-md
                hover:cursor-pointer
             '
                onClick={() => handleChangePage(currentPage + 1)}>{'>'}</div>
            </div>
          ) : (
            <div>No pagination is availible!</div>
          )
      }
    </div>
  );
};