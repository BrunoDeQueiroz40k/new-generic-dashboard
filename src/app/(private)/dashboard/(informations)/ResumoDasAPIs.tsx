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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const efficiencyData = [
  { day: "00:00", diario: 1255, mês: "Jan", semanal: 2000, mensal: 4567 },
  { day: "02:00", diario: 2154, mês: "Fev", semanal: 3000, mensal: 8798 },
  { day: "04:00", diario: 1205, mês: "Mar", semanal: 4000, mensal: 2345 },
  { day: "05:00", diario: 2000, mês: "Abr", semanal: 4000, mensal: 5423 },
  { day: "06:00", diario: 6522, mês: "Mai", semanal: 4000, mensal: 9732 },
  { day: "08:00", diario: 1220, mês: "Jun", semanal: 5000, mensal: 4543 },
  { day: "10:00", diario: 1004, mês: "Jul", semanal: 6000, mensal: 1256 },
  { day: "12:00", diario: 2054, mês: "Ago", semanal: 2000, mensal: 7465 },
  { day: "14:00", diario: 1523, mês: "Set", semanal: 4000, mensal: 7863 },
  { day: "16:00", diario: 1563, mês: "Out", semanal: 3000, mensal: 8754 },
  { day: "18:00", diario: 9999, mês: "Nov", semanal: 4000, mensal: 2356 },
  { day: "22:00", diario: 1205, mês: "Dez", semanal: 4000, mensal: 7463 },
];

const processo = [
  {
    PID: 1024,
    nome: "system_core.exe",
    user: "ADMIN",
    cpu: "12.4%",
    memory: "345 MB",
    status: "rodando",
    statusColor: "green",
  },
  {
    PID: 1025,
    nome: "network_service.exe",
    user: "SYSTEM",
    cpu: "8.3%",
    memory: "200 MB",
    status: "rodando",
    statusColor: "green",
  },
  {
    PID: 1026,
    nome: "user_interface.exe",
    user: "USER",
    cpu: "5.1%",
    memory: "150 MB",
    status: "rodando",
    statusColor: "green",
  },
  {
    PID: 1027,
    nome: "database_service.exe",
    user: "DB_ADMIN",
    cpu: "20.0%",
    memory: "500 MB",
    status: "rodando",
    statusColor: "green",
  },
  {
    PID: 1028,
    nome: "backup_service.exe",
    user: "BACKUP",
    cpu: "2.5%",
    memory: "100 MB",
    status: "ausente",
    statusColor: "orange",
  },
  {
    PID: 1029,
    nome: "antivirus.exe",
    user: "SECURITY",
    cpu: "15.0%",
    memory: "400 MB",
    status: "rodando",
    statusColor: "green",
  },
];

export function ResumoDasAPIs() {
  return (
    <>
      <Tabs defaultValue="api">
        <div className="flex justify-between items-center">
          <TabsList className="bg-slate-800/50 p-1">
            <TabsTrigger value="api">APIs</TabsTrigger>
            <TabsTrigger value="processos">Processos</TabsTrigger>
            <TabsTrigger value="armazenamento">Armazenamento</TabsTrigger>
          </TabsList>
          <div className="flex gap-4 text-sm">
            <span className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              Status da Conta
            </span>
            <span className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
              Boletos pendentes
            </span>
          </div>
        </div>
        <TabsContent value="api">
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
              className="bg-slate-800/50 border border-slate-700/50 rounded-md"
            >
              <LineChart
                data={efficiencyData}
                margin={{ top: 25, right: 25, bottom: 10, left: 5 }}
              >
                <CartesianGrid
                  vertical={false}
                  horizontal={true}
                  stroke="#334155"
                />
                <CartesianGrid strokeDasharray="1 4" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#94a3b8" }} />
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
        </TabsContent>
        <TabsContent value="processos" className="w-full">
          <div className="overflow-x-auto bg-slate-800/30 rounded-md border border-slate-700/50 w-full">
            <table className="min-w-full text-sm text-left">
              <thead className="text-xs text-slate-400 bg-slate-800/50 border-b border-slate-700/50">
                <tr>
                  <th className="px-4 py-3 w-20">PID</th>
                  <th className="px-4 py-3">Process</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">CPU</th>
                  <th className="px-4 py-3">Memory</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {processo.map((p) => (
                  <tr key={p.PID} className="hover:bg-slate-800/50">
                    <td className="px-4 py-2.5 text-slate-500">{p.PID}</td>
                    <td className="px-4 py-2.5 text-slate-300">{p.nome}</td>
                    <td className="px-4 py-2.5 text-slate-400">{p.user}</td>
                    <td className="px-4 py-2.5 text-cyan-400">{p.cpu}</td>
                    <td className="px-4 py-2.5 text-emerald-400">{p.memory}</td>
                    <td className="py-2.5 text-center">
                      <Badge
                        variant={p.statusColor as "green" | "orange"}
                        className="text-xs capitalize"
                      >
                        {p.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

// const processo = [
//   { PID: 1024, nome: "system_core.exe", user: "ADMIN", cpu: "12.4%", memory: "345 MB", status: "runnig" },
//   { PID: 1025, nome: "network_service.exe", user: "SYSTEM", cpu: "8.3%", memory: "200 MB", status: "running" },
//   { PID: 1026, nome: "user_interface.exe", user: "USER", cpu: "5.1%", memory: "150 MB", status: "running" },
//   { PID: 1027, nome: "database_service.exe", user: "DB_ADMIN", cpu: "20.0%", memory: "500 MB", status: "running" },
//   { PID: 1028, nome: "backup_service.exe", user: "BACKUP", cpu: "2.5%", memory: "100 MB", status: "idle" },
//   { PID: 1029, nome: "antivirus.exe", user: "SECURITY", cpu: "15.0%", memory: "400 MB", status: "running" }
// ];
