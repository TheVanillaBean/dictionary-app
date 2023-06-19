import { AppContext } from '@/context/appContext.context';
import { useContext } from 'react';
import Meaning from './meaning.component';
import Word from './word.component';

function Definition() {
  const {
    appState: {
      definition: { sourceUrl, meanings },
    },
  } = useContext(AppContext);

  return (
    <>
      <Word className='mb-11' />

      {meanings &&
        meanings.map((meaning, index) => (
          <Meaning key={index} className='w-7xl mb-10' meaning={meaning} />
        ))}

      <div className='mb-[21px] w-full border-t border-gray-400' aria-hidden='true' />

      <h3 className='mb-10 text-[14px] leading-[17px] text-gray-500'>
        Source <span className='ml-6 text-gray-700'>{sourceUrl}</span>
      </h3>
    </>
  );
}

export default Definition;
