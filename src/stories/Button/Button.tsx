import { useMemo } from 'react';
import { twMerge as tw } from 'tailwind-merge';
import '../../tailwind.css';

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-cyan-500 hover:bg-cyan-600 hover:border-cyan-600 border-cyan-500 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-cyan-500 dark:text-white dark:border-white hover:border-cyan-600';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

interface ButtonProps {
  primary: boolean,
  size: 'small' | 'large' | 'medium',
  label: string,
  className?: string,
  onClick: () => void,
}

export const Button: React.FC<ButtonProps> = ({ 
  primary = false, 
  size = 'medium', 
  label, 
  className,
  onClick,
  ...props 
} : ButtonProps ) => {

  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button onClick={onClick} type="button" className={tw(`${BASE_BUTTON_CLASSES} ${computedClasses}`, className ? className : undefined)} {...props}>
      {label}
    </button>
  );
};