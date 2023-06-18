import Container from '@/components/container.component.jsx';
import Definition from '@/components/definition.component.jsx';
import Header from '@/components/header.component.jsx';
import Search from '@/components/search.component.jsx';
import Word from '@/components/word.component.jsx';
import { useRef, useState } from 'react';
import useWord from '../hooks/useWord.hook.jsx';

export default function Home() {
  const wordInputRef = useRef();
  const [fetchWord, setFetchWord] = useState({ shouldFetch: false, word: '' });

  const { data: definitions, isLoading, error } = useWord(fetchWord.shouldFetch, fetchWord.word);

  const onSubmit = (e) => {
    e.preventDefault();
    setFetchWord({ shouldFetch: true, word: wordInputRef.current.value });
  };

  if (isLoading) {
    return (
      <div className='font-serif'>
        <Header className='mb-14' />
        <Container>
          <h1>Loading...</h1>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className='font-serif'>
        <Header className='mb-14' />
        <Container>
          <h1>Error</h1>
        </Container>
      </div>
    );
  }

  return (
    <div className='font-serif'>
      <Header className='mb-14' />
      <Container>
        <Search className='mb-11' onSubmit={onSubmit} ref={wordInputRef} />

        {definitions && <Word className='mb-10' definition={definitions[0]} />}

        {definitions &&
          definitions[0].meanings.map((meaning) => (
            <Definition key={meaning.partOfSpeech} className='w-7xl mb-10' meaning={meaning} />
          ))}
      </Container>
    </div>
  );
}
