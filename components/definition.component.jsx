import clsx from 'clsx';

function Definition({ className }) {
  return (
    <div className={clsx(className)}>
      <div className='mb-10 flex items-center justify-stretch gap-6'>
        <h2 className='text-2xl font-normal italic'>noun</h2>
        <div className='w-full border-t border-gray-400' aria-hidden='true' />
      </div>
      <div className='prose max-w-4xl'>
        <h3 className='font-normal text-gray-500'>Meaning</h3>
        <ul className='ml-5 marker:text-purple'>
          <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
          <li>
            A component of many instruments including the piano, organ, and harpsichord consisting
            of usually black and white keys that cause different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic sound-producing
            devices which may be built into or separate from the keyboard device.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Definition;
