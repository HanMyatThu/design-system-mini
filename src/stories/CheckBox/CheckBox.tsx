import { useMemo, useState, useEffect } from 'react'
import { twMerge as tw } from "tailwind-merge";
import '../../tailwind.css';

interface CheckBoxProps {
  id?: string,
  size: 'large' | 'medium' | 'small',
  color: 'green' | 'red' | 'purple' | 'teal' | 'yellow' | 'orange' | 'default',
  defaultChecked: boolean,
  isDisabled: boolean,
  link?: string,
  sublink?: string,
  onClickSubLink?: () => void,
  buttonClass?: string,
  onClick?: () => void
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'w2 h2 rounded-sm';
    }
    case 'large': {
      return 'w6 h6 rounded-md';
    }
    // medium
    default: {
      return 'w4 h4 rounded';
    }
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'red': 
      return 'bg-red text-red-600 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600';
    case 'green': 
      return 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
    case 'purple': 
      return 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600' 
    case 'teal': 
      return 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
    case 'yellow': 
      return 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
    case 'orange': 
      return 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
    // medium
    default: 
      return 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600';
  }
};

const defaultCheckBoxClasses = 'bg-gray-100 border-gray-100 focus:ring-1'

export const CheckBox: React.FC<CheckBoxProps> = ({  
  id,
  size = "large",
  color = "default",
  defaultChecked,
  isDisabled,   
  link,
  sublink,
  onClickSubLink,
  buttonClass,
  onClick
}): JSX.Element => {

  const [checked,setChecked] = useState(defaultChecked)
  const [disabled,setIsDisabled] = useState(isDisabled)

  const computedClasses = useMemo(() => {
    const colorClass: string = getColorClasses(color);
    const sizeClass: string = getSizeClasses(size);
    return [colorClass, sizeClass].join(' ');
  }, [color, size]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(onClick) onClick()
    setChecked(e.target.checked)
  }

  useEffect(() => {
    setChecked(defaultChecked)
    setIsDisabled(isDisabled)
  },[defaultChecked,isDisabled])

  return (
    <div className="flex items-center">
      <input 
        id={ id || "checkbox"} 
        type="checkbox" 
        checked={checked}
        onChange={handleChecked}
        disabled={disabled}
        className={tw(`${computedClasses} ${defaultCheckBoxClasses}`, buttonClass ? buttonClass : undefined)}
      />
      {
        link && (
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {link} 
            {
              sublink && <span onClick={onClickSubLink} className="text-blue-600 dark:text-blue-500 hover:underline">{` ${sublink}`}</span>
            }
          </label>
        )
      }
    </div>
  )
}