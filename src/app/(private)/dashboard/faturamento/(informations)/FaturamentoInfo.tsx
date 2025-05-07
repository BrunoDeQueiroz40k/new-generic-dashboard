import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const infos = [
   { title: "Mês Atual", description: "Maio 2025", value: 1320, minInfo: "5.7% desde o último mês", dateInicial: "1 mai", dateFinal: "31 mai", usage: 65, minDescription: "65% do periódo de pagamento completo" },
   { title: "Gasto Anual", description: "Jan - Mai 2025", value: 5788.50, minInfo: "Projeto Anual: R$13,892.00", dateInicial: "Jan", dateFinal: "Dez", usage: 42, minDescription: "42% do investimento anual" },
   { title: "Uso das API", description: "Cliclo de uso atual", value: "1.35M / 3M", minInfo: "45% da distribuição mensal", dateInicial: "usage", dateFinal: "45%", usage: 45, minDescription: "1.65M de chamadas restantes" },
]

export function FaturamentoInfo() {
   return (
      <>
         <div className="flex gap-6">
            {
               infos.map((info) => (
                  <Card key={info.title} className="background p-4 flex-1 text-slate-200">
                     <div className="flex flex-col border-b border-slate-700/50 pb-4">
                        <h1 className="text-lg font-medium">{info.title}</h1>
                        <span className="text-sm text-slate-400 py-1">{info.description}</span>
                        <span className="text-2xl font-bold">{info.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                        <span className={`text-sm pt-0.5 ${info.title === "Mês Atual" ? "text-green-500" : "text-slate-400"}`}>{info.minInfo}</span>
                     </div>
                     <div className="pt-3">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                           <span>{info.dateInicial}</span>
                           <span className={`${info.title === "Uso das API" ? "px-2 rounded-xl bg-blue-500/20 text-blue-500" : ""}`}>{info.dateFinal}</span>
                        </div>
                        <Progress
                           value={info.usage}
                           className={`${info.title === "Gasto Anual" ? "[&>*]:from-fuchsia-500 [&>*]:to-purple-600" : info.title === "Uso das API" ? "[&>*]:from-emerald-500 [&>*]:to-green-600" : ""}`}>
                           <div
                              className="h-full rounded-full"
                              style={{ width: `${info.usage}` }}
                           />
                        </Progress>
                        <span className="text-xs text-slate-400">{info.minDescription}</span>
                     </div>
                  </Card>
               ))
            }
         </div>
      </>
   )
}