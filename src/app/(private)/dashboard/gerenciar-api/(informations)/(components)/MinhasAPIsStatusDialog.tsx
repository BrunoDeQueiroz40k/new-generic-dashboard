import { Activity, ArrowDownRight, ChartLine, Clock } from "lucide-react";

// Componentes
import { Luz } from "@/components/ui/luz";
import { DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface StatusProps {
   api: {
      title: string;
      status: string;
      description: string;
      updated: string;
      version: string;
      usage: number;
      endpoint: string;
      baseEndpoint: string;
      requests: number;
      rate: number;
      response: number;
      subEndpoints: {
         path: string;
         method: string;
      }[];
      dailyUsage: number[];
      weeklyUsage: number[];
      monthlyUsage: number[];
   }
}

export function MinhasAPIsStatusDialog({ api }: StatusProps) {
   return (
      <>
         <Card className="overflow-y-auto futuristic-scroll pt-6 text-white ">
            <CardHeader className="flex-col items-start gap-1">
               <div className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-cyan-500" />
                  <DialogTitle className="text-xl font-bold">{api.title}</DialogTitle>
               </div>
               <CardDescription>Detalhes de uso, estatisticas e métricas de performance</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex justify-between gap-4">
                  <div className="background !border-green-500/40 relative overflow-hidden flex-1">
                     <div className="flex flex-col items-center gap-2 p-4">
                        <span className="text-3xl font-bold font-mono text-green-500">{api.requests.toLocaleString("PT-br")}</span>
                        <p className="text-slate-300">Total de requests (30 dias)</p>
                        <div className="text-xs flex items-center gap-1 text-slate-400">
                           <ArrowDownRight className="w-4 h-4 text-green-500" />
                           <span className="text-green-500">12%</span>
                           <span>desde o ultimo mês</span>
                        </div>
                     </div>
                     <Luz />
                  </div>
                  <div className="background !border-blue-500/40 relative overflow-hidden flex-1">
                     <div className="flex flex-col items-center gap-2 p-4">
                        <span className="text-3xl font-bold font-mono text-blue-500">{api.rate}%</span>
                        <p className="text-slate-300">Taxa de sucesso</p>
                        <div className="text-xs flex items-center gap-1 text-slate-400">
                           <ArrowDownRight className="w-4 h-4 text-blue-500" />
                           <span className="text-blue-500">0.8%</span>
                           <span>desde o ultimo mês</span>
                        </div>
                     </div>
                     <Luz className="bg-blue-500" />
                  </div>
                  <div className="background !border-purple-500/40 relative overflow-hidden flex-1">
                     <div className="flex flex-col items-center gap-2 p-4">
                        <span className="text-3xl font-bold font-mono text-purple-500">{api.response}ms</span>
                        <p className="text-slate-300">Tempo de resposta médio</p>
                        <div className="text-xs flex items-center gap-1 text-slate-400">
                           <ArrowDownRight className="w-4 h-4 text-purple-500" />
                           <span className="text-purple-500">-15ms</span>
                           <span>desde o ultimo mês</span>
                        </div>
                     </div>
                     <Luz className="bg-purple-500" />
                  </div>
               </div>
               <Tabs>
                  <TabsList className="my-4 mb-2">
                     <TabsTrigger value="uso">Uso</TabsTrigger>
                     <TabsTrigger value="performance">Performance</TabsTrigger>
                     <TabsTrigger value="erros">Erros</TabsTrigger>
                     <TabsTrigger value="topUsers">Top usuários</TabsTrigger>
                  </TabsList>

                  <TabsContent value="uso">
                     <div className="background2 p-4">
                        <Tabs defaultValue="dia">
                           <TabsList className="flex justify-between bg-transparent">
                              <div className="flex items-center gap-2">
                                 <ChartLine className="w-5 h-5 text-slate-400" />
                                 <h1 className="text-lg font-semibold">Uso da API</h1>
                              </div>
                              <div className="bg-slate-800/50 p-1 rounded-md">
                                 <TabsTrigger value="dia">Dia</TabsTrigger>
                                 <TabsTrigger value="semana">Semana</TabsTrigger>
                                 <TabsTrigger value="mes">Mês</TabsTrigger>
                              </div>
                           </TabsList>
                           <TabsContent value="dia">
                              <ChartContainer config={{ diario: { label: "Diário:" } }} className="h-[300px]">
                                 <ResponsiveContainer width="90%" height="100%" className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
                                    <LineChart
                                       data={api.dailyUsage.map((value, index) => ({
                                          diario: value,
                                          dia: `Dia ${index + 1}`,
                                       }))}
                                       margin={{ top: 25, right: 25, bottom: 8, left: 0 }}>
                                       <CartesianGrid vertical={false} horizontal={true} stroke="#334155" />
                                       <CartesianGrid strokeDasharray="1 4" />
                                       <XAxis dataKey="dia" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                                       <Legend />
                                       <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} width={45} />
                                       <ChartTooltip content={<ChartTooltipContent />} />
                                       <Line yAxisId="left" type="monotone" dataKey="diario" stroke="cyan" />
                                    </LineChart>
                                 </ResponsiveContainer>
                              </ChartContainer>
                           </TabsContent>

                           <TabsContent value="semana">
                              <ChartContainer config={{ semana: { label: "Semana:" } }} className="h-[300px]">
                                 <ResponsiveContainer width="90%" height="100%" className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
                                    <LineChart
                                       data={api.weeklyUsage.map((value, index) => ({
                                          semanal: value,
                                          semana: `Semana ${index + 1}`,
                                       }))}
                                       margin={{ top: 25, right: 25, bottom: 8, left: 0 }}>
                                       <CartesianGrid vertical={false} horizontal={true} stroke="#334155" />
                                       <CartesianGrid strokeDasharray="1 4" />
                                       <XAxis dataKey="semana" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                                       <Legend />
                                       <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} width={45} />
                                       <ChartTooltip content={<ChartTooltipContent />} />
                                       <Line yAxisId="left" type="monotone" dataKey="semanal" stroke="cyan" />
                                    </LineChart>
                                 </ResponsiveContainer>
                              </ChartContainer>
                           </TabsContent>

                           <TabsContent value="mes">
                              <ChartContainer config={{ mes: { label: "Mês:" } }} className="h-[300px]">
                                 <ResponsiveContainer width="90%" height="100%" className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
                                    <LineChart
                                       data={api.monthlyUsage.map((value, index) => ({
                                          mensal: value,
                                          mes: `Mês ${index + 1}`,
                                       }))}
                                       margin={{ top: 25, right: 25, bottom: 8, left: 0 }}>
                                       <CartesianGrid vertical={false} horizontal={true} stroke="#334155" />
                                       <CartesianGrid strokeDasharray="1 4" />
                                       <XAxis dataKey="mes" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                                       <Legend />
                                       <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} width={45} />
                                       <ChartTooltip content={<ChartTooltipContent />} />
                                       <Line yAxisId="left" type="monotone" dataKey="mensal" stroke="cyan" />
                                    </LineChart>
                                 </ResponsiveContainer>
                              </ChartContainer>
                           </TabsContent>
                        </Tabs>

                     </div>
                  </TabsContent>

                  <TabsContent value="performance">
                     <div className="background2 p-4">
                        <div className="flex items-center gap-2 pb-4">
                           <Clock className="w-5 h-5 text-slate-400" />
                           <h1 className="text-lg font-semibold">Tempo de resposta</h1>
                        </div>
                        <ChartContainer config={{ diario: { label: "Diário:" } }} className="h-[300px]">
                           <ResponsiveContainer width="90%" height="100%" className="bg-slate-800/50 border border-slate-700/50 rounded-lg">
                              <LineChart
                                 data={api.dailyUsage.map((value, index) => ({
                                    "tempo de resposta": value,
                                    dia: `Dia ${index + 1}`,
                                 }))}
                                 margin={{ top: 25, right: 25, bottom: 8, left: 0 }}>
                                 <CartesianGrid vertical={false} horizontal={true} stroke="#334155" />
                                 <CartesianGrid strokeDasharray="1 4" />
                                 <XAxis dataKey="dia" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                                 <Legend />
                                 <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#94a3b8" }} width={45} />
                                 <ChartTooltip content={<ChartTooltipContent />} />
                                 <Line yAxisId="left" type="monotone" dataKey="tempo de resposta" stroke="cyan" />
                              </LineChart>
                           </ResponsiveContainer>
                        </ChartContainer>
                     </div>
                  </TabsContent>
               </Tabs>
            </CardContent>
         </Card>
      </>
   )
}