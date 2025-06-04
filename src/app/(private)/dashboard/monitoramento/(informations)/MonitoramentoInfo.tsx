import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, AlertCircle, Clock, Key } from "lucide-react";

const info = [
   { title: "Total de chamadas API", value: "1.284.943", porcentage: 18.2, icon: Activity },
   { title: "Resposta média", value: "127ms", porcentage: 5.3, icon: Clock },
   { title: "Taxa de Erros", value: "0.42%", porcentage: 0.1, icon: AlertCircle },
   { title: "Chaves Ativas", value: "12", porcentage: 2, icon: Key }
]

export function MonitoramentoInfo() {
   return (
      <>
         <div className="flex justify-between gap-6">
            {
               info.map((item) => (
                  <Card className="flex-1 p-4 background">
                     <div className="flex items-center justify-between pb-1">
                        <span>{item.title}</span>
                        <item.icon className={`${item.title === "Total de chamadas API" ? "text-blue-500" : item.title === "Resposta média" ? "text-purple-500" : item.title === "Taxa de Erros" ? "text-red-500" : "text-green-500"}`} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-2xl font-bold">{item.value}</span>
                        <span className="text-xs pt-0.5">
                           <span className={`${item.title == "Taxa de Erros" ? "text-red-500" : "text-green-500"}`}>+{item.porcentage}%</span>
                           {" "}Desde o último periodo
                        </span>
                     </div>
                  </Card>
               ))
            }
         </div>
         <div className="w-full flex items-center justify-between p-3 bg-yellow-500/30 border border-yellow-500/40 rounded-md">
            <div className="flex gap-4 items-center">
               <span className="bg-yellow-500/40 p-2 rounded-full ">
                  <AlertCircle className="w-5 h-5 text-yellow-300" />
               </span>
               <div>
                  <h1 className="text-yellow-400">Aproximando do limite de uso</h1>
                  <p className="text-xs text-slate-300">Você já usou 85% da sua cota de chamadas API. Considere um plano superior</p>
               </div>
            </div>
            <Button variant="yellow" className="text-white">Melhorar plano</Button>
         </div>
      </>
   )
}