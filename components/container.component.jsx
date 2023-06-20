import clsx from 'clsx';

function Container({ className, ...props }) {
  return <div className={clsx('mx-auto max-w-7xl px-4 pb-14', className)} {...props} />;
}

export default Container;
