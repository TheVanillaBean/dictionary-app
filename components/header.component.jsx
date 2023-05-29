import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/icons/logo.svg';
import Dropdown from './dropdown.component';

function Header() {
  return (
    <header className='flex flex-1 items-center max-w-7xl mx-auto mt-14'>
      <div className='flex lg:flex-1 relative'>
        <Link href='#'>
          <span className='sr-only'>Dictionary App</span>
          <Image src={Logo} alt='Product logo' className='h-8' />
        </Link>
      </div>

      <div className='flex items-center gap-6 divide-x-2'>
        <Dropdown className='px-4' />
        <Dropdown className='px-4' />
        <Dropdown className='px-4' />
      </div>
    </header>
  );
}

export default Header;
