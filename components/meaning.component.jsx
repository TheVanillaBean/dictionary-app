import clsx from 'clsx';
import Link from 'next/link';

function Meaning({ className, meaning: { partOfSpeech, definitions, synonyms } }) {
  return (
    <div className={clsx(className)}>
      <div className='mb-10 flex items-center justify-stretch gap-6'>
        <h2 className='text-2xl font-bold italic'>{partOfSpeech}</h2>
        <div className='w-full border-t border-gray-400' aria-hidden='true' />
      </div>
      <div className='prose mb-10 max-w-4xl'>
        <h3 className='font-normal text-gray-500'>Meaning</h3>
        <ul className='ml-5 marker:text-purple'>
          {definitions.map(({ definition }, index) => (
            <li key={index}>{definition}</li>
          ))}
        </ul>
      </div>
      {synonyms.length > 0 && (
        <div className='prose flex items-center gap-6'>
          <h3 className='mb-0 font-normal text-gray-500'>Synonyms</h3>
          <div>
            {synonyms.map((synonym, index) => {
              return (
                <Link key={index} href={synonym} className='text-[20px] font-bold text-purple'>
                  {synonym}
                  {index < synonyms.length - 1 ? ', ' : ''}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Meaning;
