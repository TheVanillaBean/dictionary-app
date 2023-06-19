import Container from '@/components/container.component.jsx';
import Definition from '@/components/definition.component.jsx';
import Emoji from '@/components/emoji.component.jsx';
import Header from '@/components/header.component.jsx';
import Search from '@/components/search.component.jsx';
import { APP_ACTIONS, AppContext } from '@/context/appContext.context.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import useWord from '../hooks/useWord.hook.jsx';

export default function Home() {
  const wordInputRef = useRef();
  const [fetchWord, setFetchWord] = useState({ shouldFetch: false, word: '' });
  const {
    appState: { font, darkMode, definition },
    dispatchApp,
  } = useContext(AppContext);

  const { data, isLoading, error } = useWord(fetchWord.shouldFetch, fetchWord.word);

  const onSubmit = (e) => {
    e.preventDefault();
    setFetchWord({ shouldFetch: true, word: wordInputRef.current.value });
  };

  useEffect(() => {
    dispatchApp({ type: APP_ACTIONS.SET_WORD_DEFINITION, payload: data });
  }, [data]);

  // if (isLoading) {
  //   return (
  //     <div className='font-serif'>
  //       <Header className='mb-14' />
  //       <Container>
  //         <h1>Loading...</h1>
  //       </Container>
  //     </div>
  //   );
  // }

  if (error) {
    return errorUI();
  }

  return (
    <div className={`${font} ${darkMode}`}>
      <Header className='mb-14' />
      <Container>
        <Search className='mb-11' onSubmit={onSubmit} ref={wordInputRef} />

        {definition && <Definition />}
      </Container>
    </div>
  );

  function errorUI() {
    return (
      <div className={`${font} ${darkMode}`}>
        <Header className='mb-14' />
        <Container className={'prose text-center'}>
          <Search className='mb-32' onSubmit={onSubmit} ref={wordInputRef} />
          <Emoji symbol='0x0001F615' label='Sad emoji' className='text-[64px]' />
          <h3>No Definitions Found</h3>
          <p className='text-[18px] leading-6 text-gray-500'>
            Sorry pal, we couldn't find definitions for the word you were looking for. You can try
            the search again at later time or head to the web instead.
          </p>
        </Container>
      </div>
    );
  }
}
