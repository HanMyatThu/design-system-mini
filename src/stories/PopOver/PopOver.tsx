import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover";
import { twMerge } from "tailwind-merge";

interface PopOverProps {
  isOpen: boolean,
  onClose: () => void,
  actionElement: React.ReactNode,
  children: React.ReactNode,
  contentClass?: string,
}

export const PopOver: React.FC<PopOverProps> = ({
    isOpen,
    onClose,
    actionElement,
    children,
    contentClass
}) : JSX.Element => {

  return (
    <Popover open={isOpen} onOpenChange={onClose}>
      <PopoverTrigger>
        {actionElement}
      </PopoverTrigger>
      <PopoverContent className={twMerge('w-80',contentClass ? contentClass : undefined)}>
        {children}
      </PopoverContent>
    </Popover>
  )
}