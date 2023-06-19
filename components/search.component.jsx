import clsx from 'clsx';
import React, { useState } from 'react';
import SearchIcon from '../public/icons/icon-search.svg';

function Search({ className, onSubmit }, ref) {
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
            className='w-full rounded-xl border-0 bg-gray-300 py-5 pl-6 font-bold text-gray-700 ring-gray-300 placeholder:text-gray-700 placeholder:opacity-25 focus:ring-1 focus:ring-purple sm:text-base'
            placeholder='Search for any word'
            value={word}
            onChange={(e) => updateWord(e.target.value)}
            ref={ref}
          />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
            <SearchIcon className='h-4 w-4 text-gray-400' aria-hidden='true' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default React.forwardRef(Search);