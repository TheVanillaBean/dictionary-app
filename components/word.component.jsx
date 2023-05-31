import clsx from 'clsx';
import { useState } from 'react';
import PlayBtnSVG from './PlayBtnSVG.jsx';

function Word({ className }) {
  const [darkMode, toggleDarkMode] = useState(false);

  const handleHover = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <div className={clsx(className, 'flex justify-between')}>
      <div className='prose flex flex-col'>
        <h1>keyboard</h1>
        <h2 className='font-normal text-purple'>/ˈkiːbɔːd/</h2>
      </div>
      <PlayBtnSVG
        dark={darkMode.toString()}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className='cursor-pointer fill-purple'
      />
    </div>
  );
}

export default Word;
