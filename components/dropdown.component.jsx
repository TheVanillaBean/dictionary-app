import { APP_ACTIONS, AppContext, formatFont } from '@/context/appContext.context';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useContext } from 'react';
import IconDown from '../public/icons/icon-arrow-down.svg';

function Dropdown({ className }) {
  const { appState, dispatchApp } = useContext(AppContext);

  const handleClick = (option) => {
    dispatchApp({ type: APP_ACTIONS.UPDATE_FONT, payload: option });
  };

  return (
    <Menu as='div' className={clsx(className, 'relative text-left')}>
      <div>
        <Menu.Button className='flex w-full items-center justify-center gap-1.5 font-bold text-gray-700 hover:bg-gray-50'>
          {formatFont(appState.font)}
          <IconDown
            alt='Icon Down'
            className='ml-[18px] h-[12px] w-3 text-purple'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform scale-90'>
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  onClick={() => handleClick('font-sans')}
                  className={clsx(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  Sans Serif
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  onClick={() => handleClick('font-serif')}
                  className={clsx(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  Serif
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  onClick={() => handleClick('font-mono')}
                  className={clsx(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  Mono
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
