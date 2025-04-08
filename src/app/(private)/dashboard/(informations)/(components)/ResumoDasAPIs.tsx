"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Componentes
import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
 } from "@/components/ui/chart";

const efficiencyData = [
  { diario: 1255, mês: "Jan", semanal: 2000, mensal: 4567 },
  { diario: 2154, mês: "Fev", semanal: 3000, mensal: 8798 },
  { diario: 1205, mês: "Mar", semanal: 4000, mensal: 2345 },
  { diario: 2000, mês: "Abr", semanal: 4000, mensal: 5423 },
  { diario: 6522, mês: "Mai", semanal: 4000, mensal: 9732 },
  { diario: 1220, mês: "Jun", semanal: 5000, mensal: 4543 },
  { diario: 1004, mês: "Jul", semanal: 6000, mensal: 1256 },
  { diario: 2054, mês: "Ago", semanal: 2000, mensal: 7465 },
  { diario: 1523, mês: "Set", semanal: 4000, mensal: 7863 },
  { diario: 1563, mês: "Out", semanal: 3000, mensal: 8754 },
  { diario: 9999, mês: "Nov", semanal: 4000, mensal: 2356 },
  { diario: 1205, mês: "Dez", semanal: 4000, mensal: 7463 },
];

const efficiencyDataCorrigido = efficiencyData.map(item => {
  const semanal = item.diario * 7;
  const mensal = item.diario * 12;

  return {
    ...item,
    semanal,
    mensal,
  };
});

export function ResumoDasAPIs() {
  return (
    <>
      <ChartContainer
        config={{
          diario: {
            label: "Diário:",
          },
          semanal: {
            label: "Semanal:",
          },
          mensal: {
            label: "Mensal:",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer
          width="90%"
          height="100%"
          className="bg-slate-800/50 border border-slate-700/50 rounded-lg"
        >
          <LineChart
            data={efficiencyDataCorrigido}
            margin={{ top: 25, right: 25, bottom: 10, left: 5 }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#334155"
            />
            <CartesianGrid strokeDasharray="1 4" />
            <XAxis dataKey="mês" tick={{ fontSize: 12, fill: "#94a3b8" }} />
            <Legend />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              width={45}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="diario"
              stroke="cyan"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="semanal"
              stroke="red"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="mensal"
              stroke="orange"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
}
