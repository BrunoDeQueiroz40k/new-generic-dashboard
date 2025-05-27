"use client";

import { ChartPie } from "lucide-react";
import { Dot } from "@/components/ui/dot";
import { Cell, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
   { title: "Chamadas API", value: 1080.00, usage: 81.8 },
   { title: "Armazenamento", value: 250.00, usage: 18.9 },
   { title: "Suporte do Plano", value: 39.00, usage: 3.0 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
   cx, cy, midAngle, innerRadius, outerRadius, percent,
}: {
   cx: number;
   cy: number;
   midAngle: number;
   innerRadius: number;
   outerRadius: number;
   percent: number;
   index: number;
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

export function CirculoDeCusto() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <ChartPie className="w-6 h-6 text-slate-400" />
               <CardTitle>Circulo de Custo</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
               <div className="flex items-center justify-center">
                  <PieChart width={200} height={200}>
                     <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                     >
                        {data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                     </Pie>
                  </PieChart>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="text-slate-200 font-medium text-lg"><span className="text-sm text-slate-500">Total:</span> R$ 1,320</h1>
               </div>
               <div className="pt-4">
                  {
                     data.map((index) => (
                        <div key={index.title} className="flex justify-between pt-2">
                           <div className="flex items-center gap-3">
                              <Dot className={`w-2.5 h-2.5 ${index.title === "Chamadas API" ? "bg-blue-500" : index.title === "Suporte do Plano" ? "bg-yellow-400" : ""}`} />
                              <div className="flex flex-col">
                                 <span className="text-sm text-slate-300">{index.title}</span>
                                 <span className="text-xs text-slate-500">{index.usage}% total</span>
                              </div>
                           </div>
                           <span className="text-slate-300">{index.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                        </div>
                     ))
                  }
               </div>
            </CardContent>
         </Card>
      </>
   );
}
