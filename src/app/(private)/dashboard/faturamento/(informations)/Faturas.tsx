import { CheckCircle, Clock3, Wallet } from "lucide-react";

// Componentes
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faturas = [
   { title: "Fatura-2025-0012", date: "1 de Abril, 2025", amout: 1249, status: "Pago" },
   { title: "Fatura-2025-0011", date: "2 de Março, 2025", amout: 5344, status: "Pago" },
   { title: "Fatura-2025-0010", date: "4 de Março, 2025", amout: 12043, status: "Pendente" },
   { title: "Fatura-2025-0009", date: "1 de Maio, 2025", amout: 3521, status: "Pago" },
   { title: "Fatura-2025-0014", date: "4 de Fevereiro, 2025", amout: 1839, status: "Pendente" },
]

export function Faturas() {
   return (
      <>
         <Card>
            <CardHeader>
               <Wallet className="w-6 h-6 text-slate-400" />
               <CardTitle>Faturas</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="overflow-x-auto bg-slate-800/40 rounded-md w-full">
                  <table className="min-w-full text-sm text-left">
                     <thead className="text-xs text-slate-400 border-b border-slate-700/50">
                        <tr>
                           <th className="px-4 py-3 w-20">Fatura</th>
                           <th className="px-4 py-3 w-[180px]">Data</th>
                           <th className="px-4 py-3">Total</th>
                           <th className="px-4 py-3">Status</th>
                           <th className="px-4 py-3">Ações</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-700/30">
                        {faturas.map((fatura) => (
                           <tr key={fatura.title} className="hover:bg-slate-800/50 hover:text-cyan-500">
                              <td className="px-4 py-4 w-[250px] font-bold">
                                 {fatura.title}
                              </td>
                              <td className="w-[400px] px-4 py-4 text-slate-400 font-mono">{fatura.date}</td>
                              <td className="text-slate-300">{fatura.amout.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                              <td className="text-slate-400 text-sm">
                                 <Badge variant={fatura.status === "Pago" ? "green" : "yellow" }>
                                    {
                                       fatura.status === "Pago" ? (
                                          <CheckCircle className="w-3 h-3" />
                                       ) : (
                                          <Clock3 className="w-3 h-3" />
                                       )
                                    }
                                    {fatura.status}
                                 </Badge>
                              </td>
                              <td className="text-slate-400 text-sm">
                                 <Button className="h-8">Expandir</Button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
