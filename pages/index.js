import Container from '@/components/container.component';
import Header from '@/components/header.component';
import Search from '@/components/search.component';
import Word from '@/components/word.component';

export default function Home() {
  return (
    <div className='font-sans'>
      <Header className='mb-14' />
      <Container>
        <Search className='mb-11' />
        <Word />
      </Container>
    </div>
  );
}
