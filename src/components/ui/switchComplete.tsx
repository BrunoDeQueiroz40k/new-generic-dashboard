import { Switch } from "./switch";

type SwitchCompleteProps = {
   title: string;
   description: string;
   checked: boolean;
}

export function SwitchComplete({ title, description, checked }: SwitchCompleteProps) {
   return (
      <>
         <div className="flex items-center justify-between pb-4">
            <div>
               <span className="text-base">{title}</span>
               <p className="text-xs font-normal text-slate-400">{description}</p>
            </div>
            <Switch {...(checked ? { defaultChecked: true } : {})} />
         </div>
      </>
   )
}