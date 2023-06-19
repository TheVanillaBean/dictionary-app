import { AppContext } from '@/context/appContext.context';
import { useContext } from 'react';
import Meaning from './meaning.component';
import Word from './word.component';

function Definition() {
  const {
    appState: {
      definition: { meanings },
    },
  } = useContext(AppContext);

  return (
    <>
      <Word className='mb-10' />

      {meanings &&
        meanings.map((meaning, index) => (
          <Meaning key={index} className='w-7xl mb-10' meaning={meaning} />
        ))}
    </>
  );
}

export default Definition;
