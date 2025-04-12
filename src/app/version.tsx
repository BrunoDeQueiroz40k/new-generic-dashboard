import { Dot } from "@/components/ui/dot";

export function Version() {
   return (
      <>
         <div className="flex gap-1.5 items-center justify-center pt-4">
            <Dot className="bg-alterra" />
            <span className="text-xs text-slate-500 font-mono">ALTERRA OS v0.03.5</span>
            <Dot className="bg-alterra" />
         </div>
      </>
   )
}