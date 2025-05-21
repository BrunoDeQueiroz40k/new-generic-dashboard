import { Badge } from "@/components/ui/badge";
import { Dot } from "@/components/ui/dot";
import { Calendar, CreditCard } from "lucide-react";

export function Planos() {
   return (
      <>
         <div className="rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="flex justify-between items-center">
               <div>
                  <h1 className="text-2xl font-bold">Plano Profissional</h1>
                  <span className="text-slate-400">Sua inscrição de plano atual</span>
               </div>
               <Badge variant="cyan" className="px-3 text-[15px]">
                  <span className="relative flex items-center h-2 w-2 mr-1">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 translate-y-[0.5px]"></span>
                     <Dot className="w-2 h-2 bg-cyan-500" />
                  </span>
                  Inscrição ativa
               </Badge>
            </div>
            <div className="pt-8">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <span className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                        <Calendar className="w-7 h-7 text-cyan-500" />
                     </span>
                     <div className="flex flex-col">
                        <span className="text-sm text-slate-400">Circulo de pagamento</span>
                        <span className="text-xl font-medium">Mensal</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                        <CreditCard className="w-7 h-7 text-cyan-500" />
                     </span>
                     <div className="flex flex-col">
                        <span className="text-sm text-slate-400">Método de pagamento</span>
                        <span className="text-xl font-medium">VISA •••• 4242</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                        <Calendar className="w-7 h-7 text-cyan-500" />
                     </span>
                     <div className="flex flex-col">
                        <span className="text-sm text-slate-400">Próximo pagamento</span>
                        <span className="text-xl font-medium">Jun 01, 2025</span>
                     </div>
                  </div>
               </div>
               <div>

               </div>
            </div>
         </div>
      </>
   )
}
