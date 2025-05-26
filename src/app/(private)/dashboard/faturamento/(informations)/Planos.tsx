import { Dot } from "@/components/ui/dot";
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, CreditCard, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="pt-8 flex justify-between">
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
                  <div className="flex justify-between border-b border-slate-700 pb-4">
                     <div className="flex flex-col gap-2">
                        <span className="text-4xl font-bold">R$299<span className="text-xl text-slate-400">/mensal</span></span>
                        <span className="text-sm text-slate-400 font-medium">Próximo pagamento em Junho 1, 2025</span>
                     </div>
                     <div className="flex flex-col gap-2 justify-end items-end">
                        <span className="text-sm text-slate-400">Economia anual com faturamento anual</span>
                        <span className="text-green-500">R$598 (16.7%)</span>
                     </div>
                  </div>
                  <div className="flex gap-6 pt-4">
                     <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           3M API calls/mês
                        </span>
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           Time de 10 membros
                        </span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           500gb de armazenamento
                        </span>
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           Análise avançada
                        </span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           Suporte prioritário
                        </span>
                        <span className="flex items-center gap-1.5">
                           <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                           Domínio personalizado
                        </span>
                     </div>
                  </div>
                  <div className="flex gap-4 pt-6 justify-end">
                     <Button variant="border">
                        <Calendar className="w-4 h-4" />
                        Mudar plano para anual
                     </Button>
                     <Button variant="border">
                        <Pencil className="w-4 h-4" />
                        Mudar plano
                     </Button>
                     <Button variant="red">Cancelar plano</Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
