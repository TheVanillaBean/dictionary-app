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
    toggleDarkIcon(!darkIcon);
  };

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className={clsx(className, 'flex justify-between')}>
      <div className='prose flex flex-col'>
        <h1>{word}</h1>
        <h2 className='font-normal text-purple'>{phonetic}</h2>
      </div>
      <button>
        <audio ref={audioRef} src={validPhoneticAudio} />
        <PlayBtnSVG
          dark={darkIcon.toString()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={playAudio}
          className='cursor-pointer fill-purple'
        />
      </button>
    </div>
  );
}

export default Word;
