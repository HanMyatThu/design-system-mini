import { Button } from "../Button/Button"

export const mockButton = () => (
    <button className="
      cursor-pointer 
      font-bold 
      leading-none 
      inline-block 
      px-3 
      py-3 
      text-xs 
      rounded border
    ">
        Open Modal
    </button>
)

export const mockChildren = () => (
    <div className="m-4">
        <div className="py-2 text-md text-emerald-400">
            Discard Change(s)?
        </div>  
        <div className="py-3 text-sm text-left">
            You have modified this Page. You can discard your changes(s), or cancel to continue editing
        </div>
        <div className="py-1 flex justify-end" style={{"justifyContent": "flex-end"}}>
            <Button size="small" className="text-xs border-0" label="CANCEL" primary={false} onClick={() => {}}/>
            <Button size="small" className="text-xs border-0 text-red-500" label="DISCARD" primary={false} onClick={() => {}}/>
        </div>
    </div>
)