'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

// const filters = [
//   {
//     value: 'all',
//     name: 'All cabins',
//   },
//   {
//     value: 'small',
//     name: '1-3 guests',
//   },
//   {
//     value: 'medium',
//     name: ' 4-7 guests',
//   },
//   {
//     value: 'large',
//     name: '8-12 guests',
//   },
// ];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {/* {filters.map(filter => (
        <button
          key={filter.value}
          className={`px-5 py-2 hover:bg-primary-700 ${
            activeFilter === filter.value ? 'bg-primary-700' : ''
          }`}
          onClick={() => handleFilter(filter.value)}
        >
          {filter.name}
        </button>
      ))} */}

      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
        All cabins
      </Button>

      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1-3 guests
      </Button>

      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4-7 guests
      </Button>

      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8-12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
