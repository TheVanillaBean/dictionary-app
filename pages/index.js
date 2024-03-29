import Container from '@/components/container.component.jsx';
import Definition from '@/components/definition.component.jsx';
import Emoji from '@/components/emoji.component.jsx';
import Header from '@/components/header.component.jsx';
import Search from '@/components/search.component.jsx';
import { APP_ACTIONS, AppContext } from '@/context/appContext.context.jsx';
import { useRouter } from 'next/router.js';
import { useContext, useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import useWord from '../hooks/useWord.hook.jsx';

export default function Home() {
  const router = useRouter();
  const wordParam = router.query.word;

  const wordInputRef = useRef(null);
  const progressBarRef = useRef(null);

  const [fetchWord, setFetchWord] = useState({
    shouldFetch: wordParam?.length > 0 ? true : false,
    word: wordParam?.length > 0 ? wordParam : '',
  });
  const {
    appState: { font, darkMode, definition },
    dispatchApp,
  } = useContext(AppContext);

  const { data, error } = useWord(fetchWord.shouldFetch, fetchWord.word);

  const onSubmit = (e) => {
    e.preventDefault();
    if (wordInputRef.current.value !== fetchWord.word) {
      setFetchWord({ shouldFetch: true, word: wordInputRef.current.value });
      router.push({
        pathname: '/',
        query: { word: wordInputRef.current.value },
      });
      progressBarRef.current.continuousStart();
    }
  };

  useEffect(() => {
    dispatchApp({ type: APP_ACTIONS.SET_WORD_DEFINITION, payload: data });
    progressBarRef.current.complete();
  }, [data, dispatchApp]);

  if (error) {
    return errorUI();
  }

  return (
    <div className={`${font} ${darkMode && 'dark'}`}>
      <div className='h-full min-h-screen dark:bg-black'>
        <LoadingBar color='#A445ED' ref={progressBarRef} height={4} />

        <Header className='mb-14' />
        <Container>
          <Search className='mb-11' onSubmit={onSubmit} ref={wordInputRef} />

          {definition && <Definition />}
        </Container>
      </div>
    </div>
  );

  function errorUI() {
    return (
      <div className={`${font} ${darkMode && 'dark'}`}>
        <div className='h-full min-h-screen dark:bg-black'>
          <LoadingBar color='#A445ED' ref={progressBarRef} height={4} />

          <Header className='mb-14' />
          <Container className={'prose text-center'}>
            <Search
              className='mb-32'
              onSubmit={onSubmit}
              ref={wordInputRef}
              error={error}
              empty={fetchWord.word.length === 0}
            />
            <Emoji symbol='0x0001F615' label='Sad emoji' className='text-[64px]' />
            <h3 className='dark:text-white'>No Definitions Found</h3>
            <p className='text-[18px] leading-6 text-gray-500 dark:text-white'>
              Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You
              can try the search again at later time or head to the web instead.
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { query } = context;
  const word = query.word ?? '';

  return {
    props: {
      word,
    },
  };
}
