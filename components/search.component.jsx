import clsx from 'clsx';
import SearchIcon from '../public/icons/icon-search.svg';

function Search({ className }) {
  return (
    <div className={clsx(className)}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative rounded-md'>
        <input
          type='text'
          name='search'
          id='search'
          className='w-full rounded-xl border-0 bg-gray-300 py-5 pl-6 font-bold text-gray-700 ring-gray-300 placeholder:text-gray-700 placeholder:opacity-25 focus:ring-1 focus:ring-purple sm:text-base'
          placeholder='Search for any word'
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
          <SearchIcon className='h-4 w-4 text-gray-400' aria-hidden='true' />
        </div>
      </div>
    </div>
  );
}

export default Search;
