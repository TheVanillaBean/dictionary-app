import { AppContext } from '@/context/appContext.context.jsx';
import clsx from 'clsx';
import { useContext, useRef, useState } from 'react';
import PlayBtnSVG from './PlayBtnSVG.jsx';

function Word({ className }) {
  const [darkIcon, toggleDarkIcon] = useState(false);
  const audioRef = useRef(null);
  const {
    appState: {
      definition: { word, phonetic, validPhoneticAudio },
    },
  } = useContext(AppContext);

  const handleHover = () => {
    if (validPhoneticAudio.length > 0) {
      toggleDarkIcon(!darkIcon);
    }
  };

  const playAudio = () => {
    if (validPhoneticAudio.length > 0) {
      audioRef.current.play();
    }
  };

  return (
    <div className={clsx(className, 'flex justify-between')}>
      <div className='prose flex flex-col dark:prose-invert'>
        <h1 className='text-5xl sm:text-[4rem]'>{word}</h1>
        <h2 className='font-normal text-purple'>{phonetic}</h2>
      </div>
      <button className={`${validPhoneticAudio.length === 0 && 'pointer-events-none'}`}>
        <audio ref={audioRef} src={validPhoneticAudio} />
        <PlayBtnSVG
          dark={darkIcon.toString()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={playAudio}
          className='fill-purple'
        />
      </button>
    </div>
  );
}

export default Word;
