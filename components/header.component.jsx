import clsx from 'clsx';
import Link from 'next/link';
import MoonIcon from '../public/icons/icon-moon.svg';
import Logo from '../public/icons/logo.svg';
import Dropdown from './dropdown.component';
import Toggle from './toggle.component';

function Header({ className }) {
  return (
    <header
      className={clsx(
        className,
        'mx-auto mt-14 flex max-w-7xl flex-1 items-center justify-around'
      )}>
      <div className='relative flex lg:flex-1'>
        <Link href='#'>
          <span className='sr-only'>Dictionary App</span>
          <Logo alt='Product logo' />
        </Link>
      </div>

      <div className='flex items-center'>
        <Dropdown className='mx-6 border-r-2 px-6' />
        <Toggle />
        <MoonIcon alt='Moon' className='ml-5' />
      </div>
    </header>
  );
}

export default Header;
