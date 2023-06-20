import clsx from 'clsx';
import React, { useState } from 'react';
import SearchIcon from '../public/icons/icon-search.svg';

function Search({ className, onSubmit, error = false, empty = false }, ref) {
  const [word, updateWord] = useState('');

  return (
    <div className={clsx(className)}>
      <form onSubmit={onSubmit}>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative rounded-md'>
          <input
            type='text'
            name='search'
            id='search'
            className={clsx(
              `dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255, 0.1)] w-full rounded-xl border-0 bg-gray-300  py-5 pl-6 font-bold text-gray-700 ring-1 ring-gray-300 placeholder:text-gray-700 placeholder:opacity-25 focus:ring-1 dark:bg-black dark:text-white dark:ring-purple dark:placeholder:text-white dark:placeholder:opacity-60 dark:autofill:text-white sm:text-base`,
              error ? 'ring-red focus:ring-red' : 'focus:ring-purple'
            )}
            placeholder='Search for any word'
            value={word}
            onChange={(e) => updateWord(e.target.value)}
            ref={ref}
          />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
            <SearchIcon className='h-4 w-4 text-gray-400' aria-hidden='true' />
          </div>
        </div>
        {empty && (
          <p className='mt-2 text-start text-xl text-red'>Whoops, can&apos;t be empty...</p>
        )}
      </form>
    </div>
  );
}

export default React.forwardRef(Search);
