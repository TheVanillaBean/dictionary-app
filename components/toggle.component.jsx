import { APP_ACTIONS, AppContext } from '@/context/appContext.context';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { useContext } from 'react';

function Toggle() {
  const {
    appState: { darkMode },
    dispatchApp,
  } = useContext(AppContext);

  const toggleDarkMode = () => {
    dispatchApp({ type: APP_ACTIONS.TOGGLE_DARK_MODE });
  };

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={clsx(
        darkMode ? 'bg-purple' : 'bg-gray-200',
        'relative flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2'
      )}>
      <span className='sr-only'>Use Dark Mode</span>
      <span
        aria-hidden='true'
        className={clsx(
          darkMode ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  );
}

export default Toggle;
