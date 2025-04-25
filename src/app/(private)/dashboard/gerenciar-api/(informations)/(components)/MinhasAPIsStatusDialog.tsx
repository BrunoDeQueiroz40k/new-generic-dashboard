import { Activity, ArrowDownRight, Ban, ChartLine, CircleX, Clock, Eye, Info, } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Componentes
import { Luz } from "@/components/ui/luz";
import { Title } from "@/components/ui/title";
import { Badge } from "@/components/ui/badge";
import { DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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

const errors = [
   { title: "429", description: "Too Many Requests", porcentage: "45%", icon: Info, erro: "Limite de requests excedida", auth: "/users/123 ● 2 minutos atrás" },
   { title: "401", description: "Unauthorized", porcentage: "31%", icon: CircleX, erro: "Chave API inválida", auth: "/auth/login ● 48 minutos atrás" },
   { title: "404", description: "Not Found", porcentage: "25%", icon: Info, erro: "Nenhum recurso encontrado", auth: "/users/999 ● 1 hora atrás" },
]

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
                     <TabsTrigger value="error">Erros</TabsTrigger>
                     <TabsTrigger value="topUsers">Top usuários</TabsTrigger>
                  </TabsList>

                  <TabsContent value="uso">
                     <div className="background2 p-4">
                        <Tabs defaultValue="dia">
                           <TabsList className="flex justify-between bg-transparent">
                              <Title className="text-lg font-semibold pb-0">
                                 <ChartLine className="w-5 h-5 text-slate-400" />
                                 Uso da API
                              </Title>
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
                        <Title className="text-lg font-semibold">
                           <Clock className="w-5 h-5 text-slate-400" />
                           Tempo de resposta
                        </Title>
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

                  <TabsContent value="error">
                     <div className="background2 p-4">
                        <Title className="text-lg font-semibold">
                           <Ban className="w-5 h-5 text-slate-400" />
                           Erros
                        </Title>
                        <div>
                           <div className="flex justify-between gap-4">
                              {
                                 errors.map((error) => (
                                    <div key={error.title} className={`relative overflow-hidden flex items-center justify-around flex-1 py-3 rounded-lg border bg-slate-800/35 backdrop-blur-[3px] shadow-sm transition hover:bg-slate-700/30 ${error.title === "429" ? "border-orange-500/25" : error.title === "401" ? "border-red-500/25" : "border-blue-500/25"}`}>
                                       <span className={`p-1.5 rounded-full ${error.title === "429" ? "bg-orange-500/20" : error.title === "401" ? "bg-red-500/20" : "bg-blue-500/20"}`}>
                                          <error.icon className={`w-5 h-5 ${error.title === "429" ? "text-orange-500" : error.title === "401" ? "text-red-500" : "text-blue-500"}`} />
                                       </span>
                                       <div className="flex flex-col">
                                          <span className="text-lg font-bold">{error.title}</span>
                                          <span className="text-sm text-slate-400">{error.description}</span>
                                       </div>
                                       <span className={`${error.title === "429" ? "text-orange-500" : error.title === "401" ? "text-red-500" : "text-blue-500"}`}>{error.porcentage}</span>
                                       <Luz className={`${error.title === "429" ? "bg-orange-500/70" : error.title === "401" ? "bg-red-500/70" : "bg-blue-500/70"}`} />
                                    </div>
                                 ))
                              }
                           </div>
                           <div className="mt-4 pt-4 rounded-lg border border-slate-700/50 bg-slate-800/35 backdrop-blur-[3px]">
                              <div className="px-4">
                                 <Title>Erros recentes</Title>
                              </div>
                              {
                                 errors.map((error) => (
                                    <div key={error.title} className="flex justify-between p-4 border-t border-slate-700/50 hover:bg-slate-700/30 transition">
                                       <div className="flex flex-col gap-2">
                                          <div className="flex gap-2">
                                             <Badge variant={`${error.title === "429" ? "orange" : error.title === "401" ? "red" : "blue"}`} className={`${error.title === "429" ? "text-orange-500" : error.title === "401" ? "text-red-500" : "text-blue-500"}`}>{error.title}</Badge>
                                             <span>{error.description}</span>
                                          </div>
                                          <span className="text-sm text-slate-400">{error.erro}</span>
                                          <span className="text-xs text-slate-500 font-mono">{error.auth}</span>
                                       </div>
                                       <button className="flex items-center px-2 py-1 translate-y-[2px] gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                                          <Eye className="w-5 h-5" />
                                          Detalhes
                                       </button>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                     </div>
                  </TabsContent>
               </Tabs>
            </CardContent>
         </Card>
      </>
   )
}