import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const data = [
   { title: "Chamadas APIs (Tier Premium)", used: "1.35M / 3M", usage: 45, description: "Reseta em 11 dias" },
   { title: "Armazenamento", used: "3.6T / 7.6T", usage: 64, description: "4T disponíveis" },
   { title: "Bandwidth", used: "1.2T / 2T", usage: 60, description: "800GB disponíveis" },
   { title: "Unidade de Processamento", used: "450 / 1000", usage: 45, description: "550 unidades disponíveis" },
]

export function UsoDeRecursos() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <CardTitle>Uso dos Recursos</CardTitle>
            </CardHeader>
            <CardContent>
               {
                  data.map((info) => (
                     <div key={info.title} className="pb-3">
                        <div className="flex items-center justify-between text-slate-200 mb-1">
                           <span>{info.title}</span>
                           <span className={`${info.title === "Uso das API" ? "px-2 rounded-xl bg-blue-500/20 text-blue-500" : ""}`}>{info.used}</span>
                        </div>
                        <Progress
                           value={info.usage}
                           className={`${info.title === "Gasto Anual" ? "[&>*]:from-fuchsia-500 [&>*]:to-purple-600" : info.title === "Uso das API" ? "[&>*]:from-emerald-500 [&>*]:to-green-600" : ""}`}>
                           <div
                              className="h-full rounded-full"
                              style={{ width: `${info.usage}` }}
                           />
                        </Progress>
                        <div className="flex justify-between mt-1">
                           <span className="text-xs text-slate-400">{info.usage}% de uso</span>
                           <span className="text-xs text-slate-400">{info.description}</span>
                        </div>
                     </div>
                  ))
               }
            </CardContent>
         </Card>
      </>
   )
}
