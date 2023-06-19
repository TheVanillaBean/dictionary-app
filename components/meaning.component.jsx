import clsx from 'clsx';

function Meaning({ className, meaning: { partOfSpeech, definitions, synonyms } }) {
  return (
    <div className={clsx(className)}>
      <div className='mb-10 flex items-center justify-stretch gap-6'>
        <h2 className='text-2xl font-normal italic'>{partOfSpeech}</h2>
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
          <p className='text-xl font-bold text-purple'>{synonyms.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Meaning;
