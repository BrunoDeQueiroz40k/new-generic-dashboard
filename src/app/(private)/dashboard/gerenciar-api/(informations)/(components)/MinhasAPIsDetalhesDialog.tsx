import { DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dot } from "@/components/ui/dot";
import { ChartNoAxesCombined, Check, CircleOff, Copy, History, Info, Settings, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/components/ui/title";
import { Progress } from "@/components/ui/progress";

interface DetalhesProps {
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
   }
}

export function MinhasAPIsDetalhesDialog({ api }: DetalhesProps) {
   const mediaResponse = 300;

   return (
      <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
         <CardHeader className="flex-col gap-1">
            <div className="flex justify-between items-center">
               <DialogTitle>{api.title}</DialogTitle>
               <Badge variant={`${api.status === "Ativo" ? "green" : api.status === "Manutenção" ? "yellow" : api.status === "Error" ? "red" : "slate"}`}>
                  {api.status === "Ativo" ? (
                     <Dot />
                  ) : api.status === "Manutenção" ? (
                     <Settings className="w-3 h-3" />
                  ) : api.status === "Error" ? (
                     <X className="w-3 h-3" />
                  ) : (
                     <CircleOff className="w-3 h-3" />
                  )}
                  <span className="translate-y-[-0.5px]">{api.status}</span>
               </Badge>
            </div>
            <CardDescription>{api.description}</CardDescription>
         </CardHeader>
         <CardContent>
            <Tabs>
               <TabsList className="bg-slate-800/50 p-1">
                  <TabsTrigger value="all">Visão Geral</TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="documentation">Documentação</TabsTrigger>
                  <TabsTrigger value="settings">Configurações</TabsTrigger>
               </TabsList>
               <TabsContent value="all">
                  <div className="flex gap-4">
                     <div className="background2 p-4 flex flex-col gap-3">
                        <Title className="pb-2">
                           <Info className="w-4 h-4 text-slate-400" />
                           Detalhes da API
                        </Title>
                        <div className="flex justify-between">
                           <p className="text-slate-400">Versão:</p>
                           <span className="font-mono">{api.version}</span>
                        </div>
                        <div className="flex justify-between">
                           <p className="text-slate-400">Endpoints:</p>
                           <span className="font-mono">3</span>
                        </div>
                        <div className="flex justify-between">
                           <p className="text-slate-400">Ultima Atualização: </p>
                           <span>{api.updated}</span>
                        </div>
                        <div className="flex justify-between">
                           <p className="text-slate-400">URL Base:</p>
                           <div className="flex gap-1 items-center">
                              <span className="flex-1 border border-slate-700/80 p-0.5 px-2 rounded-md">{api.baseEndpoint}</span>
                              <button className="p-1.5 px-2 rounded-lg hover:bg-slate-700/70 cursor-pointer">
                                 <Copy className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="background2 p-4">
                           <Title className="pb-2">
                              <ChartNoAxesCombined className="w-4 h-4 text-slate-400" />
                              Estatiscias de uso
                           </Title>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-14">
                                 <span>Requests (30 dias)</span>
                                 <span className="font-mono">{api.requests.toLocaleString("pt-BR")}</span>
                              </div>
                              <Progress value={api.usage}>
                                 <div
                                    className="h-full rounded-full"
                                    style={{ width: `${api.usage}` }}
                                 />
                              </Progress>
                           </div>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-14">
                                 <span>Taxa de sucesso</span>
                                 <span className="font-mono">{api.rate}%</span>
                              </div>
                              <Progress value={api.rate}>
                                 <div
                                    className="h-full rounded-full"
                                    style={{ width: `${api.rate}` }}
                                 />
                              </Progress>
                           </div>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-14">
                                 <span>Tempo de resposta média</span>
                                 <span className="font-mono">{api.response}ms</span>
                              </div>
                              <Progress value={api.response}>
                                 <div
                                    className="h-full rounded-full"
                                    style={{ width: `${mediaResponse}` }}
                                 />
                              </Progress>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="background2 mt-4 p-4">
                     <Title>
                        <History className="w-4 h-4 text-slate-400" />
                        Histórico de versão
                     </Title>
                     <div className="flex">
                        <div className="flex flex-col items-center gap-2">
                           <Badge variant="blue">
                              <Check className="w-3 h-3" />
                           </Badge>
                           <div className="w-px h-20 bg-slate-300"></div>
                        </div>
                        <div>
                           <div>
                              <span>{api.version}</span>
                              <Badge>Atual</Badge>
                           </div>
                        </div>
                     </div>
                  </div>
               </TabsContent>
            </Tabs>
         </CardContent>
      </Card>
   );
}
