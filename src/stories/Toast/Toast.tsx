import Icon from '../Icons/Icons'
import { useMemo } from 'react';
import '../../tailwind.css';
import { twMerge } from 'tailwind-merge';

const getToastVariant = (variant: string) => {
  switch (variant) {
    case 'success': {
      return 'text-green-500 bg-green-200 dark:bg-green-800 dark:text-green-200';
    }
    case 'info': {
      return 'text-blue-500 bg-blue-200 dark:bg-blue-800 dark:text-blue-200';
    }
    case 'warning': {
      return 'text-orange-500 bg-orange-200 dark:bg-orange-700 dark:text-orange-200';
    }
    case 'error': {
      return 'text-red-500 bg-red-300 dark:bg-red-800 dark:text-red-200';
    }
    default: {
      return 'text-white bg-white';
    }
  }
};

const getPosition = (position: string) => {
  switch (position) {
    case 'top-left': {
      return 'fixed top-5 left-5';
    }
    case 'top-right': {
      return 'fixed top-5 right-5';
    }
    case 'bottom-left': {
      return 'fixed bottom-5 left-5';
    }
    case 'bottom-right': {
      return 'fixed bottom-5 right-5';
    }
    default: {
      return '';
    }
  }
};

interface ToastProps {  
  id?: string,
  title?: string,
  variant: 'success' | 'info' | 'warning' | 'error',
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ 
  id,
  title,
  variant = 'info',
  onClose = () => {},
  position = 'center'
}: ToastProps) => {

  const IconClasses = useMemo(() => {
    const sizeClass = getToastVariant(variant);
    return sizeClass;
  }, [variant]);

  const ToastClasses = useMemo(() => {
    const positionClass = getPosition(position);
    return positionClass;
  }, [position]);
  
  const getIcon = (variant: string) => {
    switch (variant) {
      case 'success': {
        return 'icon-check';
      }
      case 'info': {
        return 'icon-bulb';
      }
      case 'warning': {
        return 'icon-info';
      }
      case 'error': {
        return 'icon-cross-circle';
      }
      default: {
        return 'icon-heart';
      }
    }
  }

  return (
    <div id={id} className={twMerge("flex items-center w-full max-w-md p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", ToastClasses)} role="alert">
      <div className={twMerge('inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200', IconClasses)}>
        <Icon type={getIcon(variant)} width='16px' height='16px' fill='currentColor'/>
        <span className="sr-only">Check icon</span>
      </div>
      <div id={`${id}-title`} className="ml-3 text-sm font-normal">{title}</div>
      <button onClick={onClose} id={`${id}-close-btn`} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span className="sr-only">Close</span>
        <Icon type='icon-close'/>
      </button>
    </div>
  )
}

