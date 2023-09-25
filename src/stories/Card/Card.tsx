import Icon from '../Icons/Icons'
import '../../tailwind.css';

interface CardProps {
  children?: React.ReactNode
}

interface IconCardProps extends CardProps {
  id?: string,
  title?: string,
  icon?: string,
  iconProps?: any
}

export const Card: React.FC<CardProps> = ({  
  children
} : CardProps) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-md hover:shadow-lg">
      {children}
    </div>
  )
}


export const IconCard: React.FC<IconCardProps> = ({
  id,
  title,
  icon,
  iconProps
}) => {
  return (
    <div id={id} className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-md hover:shadow-lg">
      <div className='flex flex-row'>
        {icon && <div className='w-10 h-10 rounded-full bg-neutral-500 justify-center text-center py-2 px-2'>
            <Icon type={icon} {...iconProps}/>
        </div>}
        <div className='px-7 pt-2 text-left text-emerald-900 font-semibold hover:underline text-md'>
          {title}
        </div>
      </div>
    </div>
  )
}