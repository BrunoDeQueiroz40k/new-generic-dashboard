import { ChartNoAxesCombined, Check, CircleOff, Code2, Copy, FileText, History, Info, Settings, X } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

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
      <Card className="overflow-y-auto futuristic-scroll pt-6">
         <CardHeader className="flex-col items-stretch gap-1 pb-0">
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
                        <div className="flex justify-between gap-4">
                           <p className="text-slate-400">URL Base:</p>
                           <div className="flex gap-1 items-center">
                              <span className="flex-1 border border-slate-700/80 p-0.5 px-2 rounded-md">
                                 {api.baseEndpoint.length > 20 ? `${api.baseEndpoint.slice(0, 30)}...` : api.baseEndpoint}
                              </span>
                              <button className="p-1.5 px-2 rounded-lg hover:bg-slate-700/70 cursor-pointer">
                                 <Copy className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="background2 p-4 pb-6 flex-1">
                           <Title className="pb-2">
                              <ChartNoAxesCombined className="w-4 h-4 text-slate-400" />
                              Estatiscias de uso
                           </Title>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-8">
                                 <span>Requests (30 dias)</span>
                                 <span className="font-mono text-cyan-500">{api.requests.toLocaleString("pt-BR")}</span>
                              </div>
                              <Progress value={api.usage}>
                                 <div
                                    className="h-full rounded-full"
                                    style={{ width: `${api.usage}` }}
                                 />
                              </Progress>
                           </div>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-8">
                                 <span>Taxa de sucesso</span>
                                 <span className="font-mono text-green-500">{api.rate}%</span>
                              </div>
                              <Progress value={api.rate} className="[&>*]:from-emerald-600 [&>*]:to-green-500">
                                 <div
                                    className="h-full rounded-full"
                                    style={{ width: `${api.rate}` }}
                                 />
                              </Progress>
                           </div>
                           <div>
                              <div className="flex justify-between text-slate-400 pb-1 pt-3 gap-8">
                                 <span>Tempo de resposta média</span>
                                 <span className="font-mono text-purple-500">{api.response}ms</span>
                              </div>
                              <Progress value={api.response} className="[&>*]:from-fuchsia-600 [&>*]:to-purple-500">
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
                        <div className="flex flex-col items-center">
                           <Badge variant="blue">
                              <Check className="w-3 h-3 translate-y-[1px]" />
                           </Badge>
                           <div className="w-px h-full bg-slate-600"></div>
                        </div>
                        <div className="pl-3 pt-3">
                           <div>
                              <span className="pr-2 font-mono">{api.version}</span>
                              <Badge>Atual</Badge>
                           </div>
                           <p className="text-sm text-slate-400">Lançada a 2 dias atrás</p>
                           <span className="text-sm">● Conserto de bugs e melhoras na performance</span>
                        </div>
                     </div>
                     <div className="flex">
                        <div className="flex flex-col items-center">
                           <Badge>
                              <Check className="w-3 h-3 translate-y-[1px]" />
                           </Badge>
                           <div className="w-px h-full bg-slate-600"></div>
                        </div>
                        <div className="pl-3 pt-3">
                           <span className="pr-2 font-mono">v0.9.6</span>
                           <p className="text-sm text-slate-400">Lançada a 3 meses</p>
                           <span className="text-sm">● Melhorias na performance</span>
                        </div>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="endpoints">
                  <div>
                     <div className="background2">
                        <div className="p-4">
                           <Title className="pb-1 text-lg">
                              <Code2 className="w-5 h-5 text-slate-300" />
                              Endpoints Dispovíneis
                           </Title>
                           <p className="text-slate-400 text-sm">Todos os Endpoints disponívies da API: {api.title}</p>
                        </div>
                        <table className="min-w-full text-sm text-left">
                           <thead className="text-xs text-slate-400 bg-slate-800/50 border-b border-slate-700/50">
                              <tr>
                                 <th className="px-4 py-3 w-20">Endpoint</th>
                                 <th className="px-4 py-3">Método</th>
                                 <th className="px-4 py-3">Descrição</th>
                                 <th className="px-4 py-3">Ações</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-700/30">
                              {api.subEndpoints.map((endpoint) => (
                                 <tr key={endpoint.path} className="hover:bg-slate-800/50 text-slate-400 font-mono">
                                    <td className="px-4 py-2.5 text-sm font-mono text-slate-300">{endpoint.path}</td>
                                    <td className="px-4 py-2.5 text-slate-300 font-semibold font-sans">
                                       <Badge variant={endpoint.path === "DELETE" ? "red" : endpoint.method === "POST" ? "green" : endpoint.method === "PUT" ? "yellow" : "blue"}>
                                          {endpoint.method}
                                       </Badge>
                                    </td>
                                    <td className="px-4 py-2.5 text-slate-300 font-semibold">"Uma descrição breve sobre oque esse endpoint faz"</td>
                                    <td className="px-4 py-2.5">
                                       <button className="flex items-center px-2 py-1 gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                                          <FileText className="w-3 h-3" />
                                          Detalhes
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="documentation">
                  <div className="background2 p-4">
                     <Title className="pb-1 text-lg">
                        <FileText className="w-5 h-5 text-slate-300" />
                        Documentação
                     </Title>
                     <p className="text-slate-400 text-sm pb-6">Documentação da API: {api.title}</p>
                     <div className="pb-4">
                        <h1 className="text-lg font-bold font-mono pb-1">Começando</h1>
                        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta magni iusto natus est praesentium aut a debitis facilis, delectus, sit asperiores consequuntur dicta iure sed enim et minus vitae.</p>
                     </div>
                     <div className="pb-4">
                        <h1 className="text-lg font-bold font-mono pb-1">Autenticação</h1>
                        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus deserunt voluptates:</p>
                        <div className="bg-slate-800/70 rounded-lg p-3 mt-2 flex gap-2 font-mono">
                           <span className="text-red-500">Authorization:</span>
                           <span className="text-cyan-500">Bearer</span>
                           <span>YOUR_API_KEY</span>
                        </div>
                     </div>
                     <div className="pb-4">
                        <h1 className="text-lg font-bold font-mono pb-1">Limite de chamadas</h1>
                        <p className="text-slate-400 text-sm">Lorem ipsum dolor 1000 amet consectetur adipisicing elit. Voluptas soluta magni iusto natus est praesentium aut a debitis facilis, delectus, sit asperiores consequuntur dicta iure sed enim et minus vitae.</p>
                     </div>
                     <div className="pt-4 flex justify-between">
                        <Button variant="blue">
                           <FileText className="w-4 h-4" />
                           Documentação Completa
                        </Button>
                        <Button variant="border">
                           <Code2 className="w-4 h-4" />
                           Referência da API
                        </Button>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="settings">
                  <div className="background2 p-4">
                     <Title className="pb-1 text-lg">
                        <Settings className="w-5 h-5" />
                        Configurações da API
                     </Title>
                     <p className="text-slate-400 text-sm pb-6">Configure as opções de: {api.title}</p>
                     <div className="flex flex-col gap-3 pb-6">
                        <div className="flex items-center justify-between">
                           <div>
                              <h2>Status da API</h2>
                              <p className="text-xs text-slate-400">Habilite ou desabilite essa API</p>
                           </div>
                           <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                           <div>
                              <h2>Requer Autenticação</h2>
                              <p className="text-xs text-slate-400">Requer uma chave API para todas as requests</p>
                           </div>
                           <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                           <div>
                              <h2>CORS habilitada</h2>
                              <p className="text-xs text-slate-400">Permite cross-origin requests</p>
                           </div>
                           <Switch />
                        </div>
                        <div>
                           <h2>Limite de chamadas</h2>
                           <Input type="number" placeholder="1000" className="mt-2" />
                        </div>
                        <div>
                           <h2>Tamanho máximo do burst</h2>
                           <Input type="number" placeholder="50" className="mt-2" />
                        </div>
                     </div>
                     <Button variant="blue">
                        <Settings className="w-4 h-4" />
                        Salvar Configurações
                     </Button>
                  </div>
               </TabsContent>
            </Tabs>
            <div className="pt-4 flex gap-3 justify-end">
               <DialogClose asChild>
                  <Button variant="border">Fechar</Button>
               </DialogClose>
            </div>
         </CardContent>
      </Card>
   );
}
