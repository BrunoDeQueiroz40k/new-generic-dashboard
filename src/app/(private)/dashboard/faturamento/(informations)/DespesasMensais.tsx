"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const months = [
   { month: "Jan", valor: 30 },
   { month: "Fev", valor: 28 },
   { month: "Mar", valor: 31 },
   { month: "Abr", valor: 24 },
   { month: "Mai", valor: 48 },
]

export function DespesasMensais() {
   return (
      <>
         <Card className="flex-1/5">
            <CardHeader>
               <CardTitle>Despesas Mensais</CardTitle>
               <div className="min-w-[200px]">
                  <Select>
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="Últimos 6 meses" />
                     </SelectTrigger>
                     <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                        <SelectItem value="SixMonths">Últimos 6 meses</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </CardHeader>
            <CardContent>
               <div>
                  <ChartContainer config={{ diario: { label: "Meses:" } }} className="h-[300px]">
                     <ResponsiveContainer width="90%" height="100%" className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
                        <BarChart
                           data={months}
                           margin={{ top: 25, right: 25, bottom: 8, left: 0 }}
                        >
                           <CartesianGrid vertical={false} horizontal={true} stroke="#334155" />
                           <CartesianGrid strokeDasharray="1 4" />
                           <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                           <Legend />
                           <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} width={45} />
                           <ChartTooltip content={<ChartTooltipContent />} />
                           <Bar yAxisId="left" type="monotone" dataKey="valor" fill="#8884d8" />
                        </BarChart>
                     </ResponsiveContainer>
                  </ChartContainer>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
