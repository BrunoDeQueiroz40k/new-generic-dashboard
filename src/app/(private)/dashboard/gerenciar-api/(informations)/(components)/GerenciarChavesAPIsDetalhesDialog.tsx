import { ArrowDownRight, ArrowRight, Copy, Eye, Key } from "lucide-react";

// Componentes
import { Luz } from "@/components/ui/luz";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface DetalhesProps {
   chave: {
      title: string;
      key: string;
      type: string;
      created: string;
      used: string;
      status: string;
      permission: string[];
      detalhes: {
         requests: number;
         rate: string;
         response: string;
      };
      usoDiario: Record<string, number>;
   };
}

export function GerenciarChavesAPIsDetalhesDialog({ chave }: DetalhesProps) {
   const dadosGrafico = Object.entries(chave.usoDiario).map(([hora, valor]) => ({
      hora,
      diario: valor,
   }));

   return (
      <>
         <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
            <CardHeader className="flex-col items-start gap-2 pb-0 text-slate-200">
               <div className="w-full">
                  <div className="flex-1 flex items-center justify-between">
                     <div className="flex items-center gap-2 w-full">
                        <span className="p-2 bg-cyan-500/20 border border-cyan-500/50 rounded-xl">
                           <Key className="w-5 h-5 text-cyan-500" />
                        </span>
                        <DialogTitle className="rgbText text-xl font-bold">
                           {chave.title}
                        </DialogTitle>
                     </div>
                     <Badge variant={`${chave.status === "Ativo" ? "green" : chave.status === "Revogado" ? "red" : "slate"}`}>
                        {chave.status}
                     </Badge>
                  </div>
               </div>
               <CardDescription>Detelhes e estatísticas de uso da Chave API</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 overflow-x-visible">
               <div className="p-4 background2">
                  <Title>
                     <Key className="w-4 h-4 text-cyan-500" />
                     Informações da Chave
                  </Title>
                  <div className="flex gap-4">
                     <div>
                        <Label>Chave API</Label>
                        <div className="w-full flex gap-2 pb-2 pt-1">
                           <span className="flex-1 border border-slate-700/80 p-1 px-4 rounded-md">
                              {chave.key}
                           </span>
                           <div className="flex">
                              <button className="p-1.5 px-2.5 rounded-lg hover:bg-slate-700/70">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 px-2.5 rounded-lg hover:bg-slate-700/70">
                                 <Copy className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <span className="font-semibold text-slate-300 pb-2 pt-1">Tipo</span>
                        <Badge variant={`${chave.type === "Produção" ? "green" : chave.type === "Desenvolvimento" ? "blue" : chave.type === "Teste" ? "yellow" : "purple"}`}>
                           {chave.type}
                        </Badge>
                     </div>
                  </div>
                  <div className="font-mono flex gap-8 pt-4">
                     <div className="flex flex-col">
                        <span className="text-slate-300 pb-2 font-semibold">Criado em</span>
                        <span className="text-sm text-slate-400">{chave.created}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-slate-300 pb-2 font-semibold">Ultimo uso</span>
                        <span className="text-sm text-slate-400">{chave.used}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-slate-300 pb-2 font-semibold">Permissões</span>
                        <span className="flex gap-3">
                           {chave.permission.map((perm, index) => (
                              <Badge variant={`${perm === "Leitura" ? "cyan" : perm === "Escrita" ? "green" : "yellow"}`} key={index}>{perm}</Badge>
                           ))}
                        </span>
                     </div>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="relative overflow-hidden flex flex-col items-center background !border-cyan-500/35 p-4 px-6 gap-1">
                     <span className="text-3xl text-cyan-500 font-bold font-mono">{chave.detalhes.requests.toLocaleString("pt-BR")}</span>
                     <span className="text-slate-400 text-sm">Total Requests</span>
                     <span className="flex items-center gap-1 text-xs text-slate-500 pt-3 font-semibold">
                        <ArrowDownRight className="w-4 h-4 text-cyan-500" />
                        <span className="text-cyan-500">
                           +12.5%
                        </span>
                        da ultima semana
                     </span>
                     <Luz className="bg-cyan-500" />
                  </div>
                  <div className="relative overflow-hidden flex flex-col items-center background !border-green-500/35 p-4 px-6 gap-1">
                     <span className="text-3xl text-green-500 font-bold font-mono">{chave.detalhes.rate}</span>
                     <span className="text-slate-400 text-sm">Taxa de Sucesso</span>
                     <span className="flex items-center gap-1 text-xs text-slate-500 pt-3 font-semibold">
                        <ArrowDownRight className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">
                           +8.5%
                        </span>
                        da ultima semana
                     </span>
                     <Luz />
                  </div>
                  <div className="relative overflow-hidden flex flex-col items-center background !border-purple-500/35 p-4 px-6 gap-1">
                     <span className="text-3xl text-purple-400 font-bold font-mono">{chave.detalhes.response}</span>
                     <span className="text-slate-400 text-sm">Tempo de Resposta média</span>
                     <span className="flex items-center gap-1 text-xs text-slate-500 pt-3 font-semibold">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <span className="text-purple-500">
                           +8.5%
                        </span>
                        da ultima semana
                     </span>
                     <Luz className="bg-purple-500" />
                  </div>
               </div>
               <div className="background2 p-4">
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
                           data={dadosGrafico}
                           margin={{ top: 25, right: 25, bottom: 10, left: -10 }}
                        >
                           <CartesianGrid
                              vertical={false}
                              horizontal={true}
                              stroke="#334155"
                           />
                           <CartesianGrid strokeDasharray="1 4" />
                           <XAxis dataKey="hora" tick={{ fontSize: 12, fill: "#94a3b8" }} />
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
                        </LineChart>
                     </ResponsiveContainer>
                  </ChartContainer>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
