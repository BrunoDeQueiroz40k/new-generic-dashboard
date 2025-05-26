import { Plus, PlusCircle, X } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SwitchComplete } from "@/components/ui/switchComplete";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MinhasAPIsCriarDialogAdicionarNovoEndpoint } from "./MinhasAPIsCriarDialogAdicionarNovoEndpoint";

const status = [
   { id: "dev", title: "Desenvolvimento", value: "desenvolvimento", description: "Para testar e desenvolver ambientes" },
   { id: "teste", title: "Teste", value: "teste", description: "Para testes automáticos e CI/CD e integração" },
   { id: "production", title: "Produção", value: "produção", description: "Para livre proução de ambientes" },
]

const auth = [
   { id: "1", title: "Chave API" },
   { id: "2", title: "OAuth 2.0" },
   { id: "3", title: "JWT" },
   { id: "4", title: "Sem autenticação" },
]

export function MinhasAPIsCriarDialog() {
   return (
      <>
         <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
            <CardHeader className="flex-col items-start gap-1">
               <div className="flex items-center gap-2">
                  <PlusCircle className="w-6 h-6 text-cyan-500" />
                  <DialogTitle className="text-xl font-bold">Criar nova chave API</DialogTitle>
               </div>
               <CardDescription>Configure e crie uma nova API para a sua infraestrutura</CardDescription>
            </CardHeader>
            <CardContent>
               <Tabs defaultValue="info">
                  <TabsList className="mb-2">
                     <TabsTrigger value="info">Informações básicas</TabsTrigger>
                     <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                     <TabsTrigger value="autenticacao">Autenticação</TabsTrigger>
                     <TabsTrigger value="avancado">Avançado</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info">
                     <div className="background2 p-4 flex flex-col gap-4">
                        <div>
                           <Label>Nome da API</Label>
                           <Input placeholder="Coloque o nome da API" className="my-1" />
                           <p className="text-xs text-slate-500">Coloque um nome descritivo para a sua API</p>
                        </div>
                        <div>
                           <Label>Descrição</Label>
                           <Textarea placeholder="Coloque uma descrição sobre o que sua API faz" className="my-1" />
                        </div>
                        <div className="flex gap-4">
                           <div>
                              <Label>Versão</Label>
                              <Input defaultValue="v1.0.0" placeholder="Ex: v1.0.0" className="my-1" />
                           </div>
                           <div>
                              <Label>Path base</Label>
                              <div className="flex items-center">
                                 <div className="bg-slate-600 py-2 px-3 rounded-l-md">
                                    <span className="text-slate-300">/api/</span>
                                 </div>
                                 <Input placeholder="users" className="my-1 rounded-l-none" />
                              </div>
                           </div>
                        </div>
                        <div>
                           <Label>Tipo de chave</Label>
                           <RadioGroup defaultValue="desenvolvimento" className="my-1 mt-3 gap-0.5">
                              {
                                 status.map((key) => (
                                    <div key={key.value} className="flex items-center gap-2 px-2 py-1 hover:bg-slate-800/60 rounded-lg transition">
                                       <RadioGroupItem value={key.value} id={key.id} />
                                       <Label htmlFor={key.id} id={key.id} className="flex items-center gap-2 cursor-pointer text-slate-200">
                                          <Dot className={`w-2 h-2 ${key.value === "desenvolvimento" ? "bg-blue-500" : key.value === "teste" ? "bg-yellow-500" : key.value === "produção" ? "bg-green-500" : "bg-purple-500"}`} />
                                          {key.title}
                                          <span className="text-sm font-normal text-slate-400">- {key.description}</span>
                                       </Label>
                                    </div>
                                 ))
                              }
                           </RadioGroup>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="endpoints">
                     <div className="background2 p-4">
                        <div className="flex items-center justify-between pb-4">
                           <Title className="pb-0">
                              Endpoints da API
                           </Title>
                           <Dialog>
                              <DialogTrigger asChild>
                                 <Button variant="border" className="border-dashed border-slate-500 h-8 text-xs px-3 hover:text-cyan-400 gap-1">
                                    <Plus className="w-3 h-3" />
                                    Adicionar novo Endpoint
                                 </Button>
                              </DialogTrigger>
                              <DialogContent>
                                 <MinhasAPIsCriarDialogAdicionarNovoEndpoint />
                              </DialogContent>
                           </Dialog>
                        </div>

                        <div className="flex flex-col gap-4">
                           <div className="bg-slate-900/10 border border-slate-600 p-3 rounded-md">
                              <div className="flex justify-between items-center">
                                 <div className="flex gap-2 items-center">
                                    <Badge variant="blue">GET</Badge>
                                    <span className="font-mono text-slate-300">/users</span>
                                 </div>
                                 <button className="hover:bg-slate-800 rounded-md transition p-1.5"><X className="w-4 h-4" /></button>
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal">Descrição</Label>
                                 <Input defaultValue="Pega uma lista de todos os usuários" placeholder="Coloque uma descrição para o endpoint" className="my-1" />
                              </div>
                              <div className="flex gap-4 pt-4">
                                 <div className="flex-1">
                                    <Label className="font-normal">Tipo da Resposta</Label>
                                    <Select>
                                       <SelectTrigger className="mt-1 w-full">
                                          <SelectValue placeholder="JSON" />
                                       </SelectTrigger>
                                       <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                                          <SelectItem value="nenhum">Nenhum</SelectItem>
                                          <SelectItem value="json">JSON</SelectItem>
                                          <SelectItem value="formData">Form Data</SelectItem>
                                          <SelectItem value="raw">Raw</SelectItem>
                                          <SelectItem value="binary">Binary</SelectItem>
                                       </SelectContent>
                                    </Select>
                                 </div>
                                 <div className="flex-1">
                                    <Label className="font-normal">Duração do Cache</Label>
                                    <div className="flex items-center">
                                       <Input defaultValue="60" placeholder="Ex: 100" className="my-1 rounded-r-none" />
                                       <div className="bg-slate-600 py-2 px-3 rounded-r-md">
                                          <span className="text-slate-400">Segundos</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="bg-slate-900/10 border border-slate-600 p-3 rounded-md">
                              <div className="flex justify-between items-center">
                                 <div className="flex gap-2 items-center">
                                    <Badge variant="green">POST</Badge>
                                    <span className="font-mono text-slate-300">/users</span>
                                 </div>
                                 <button className="hover:bg-slate-800 rounded-md transition p-1.5"><X className="w-4 h-4" /> </button>
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal">Descrição</Label>
                                 <Input defaultValue="Pega uma lista de todos os usuários" placeholder="Coloque uma descrição para o endpoint" className="my-1" />
                              </div>
                              <div className="flex gap-4 pt-4">
                                 <div className="flex-1">
                                    <Label className="font-normal">Tipo da Resposta</Label>
                                    <Select>
                                       <SelectTrigger className="mt-1 w-full">
                                          <SelectValue placeholder="JSON" />
                                       </SelectTrigger>
                                       <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                                          <SelectItem value="nenhum">Nenhum</SelectItem>
                                          <SelectItem value="json">JSON</SelectItem>
                                          <SelectItem value="formData">Form Data</SelectItem>
                                          <SelectItem value="raw">Raw</SelectItem>
                                          <SelectItem value="binary">Binary</SelectItem>
                                       </SelectContent>
                                    </Select>
                                 </div>
                                 <div className="flex-1">
                                    <Label className="font-normal">Request Body</Label>
                                    <Select>
                                       <SelectTrigger className="mt-1 w-full">
                                          <SelectValue placeholder="JSON" />
                                       </SelectTrigger>
                                       <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                                          <SelectItem value="nenhum">Nenhum</SelectItem>
                                          <SelectItem value="json">JSON</SelectItem>
                                          <SelectItem value="formData">Form Data</SelectItem>
                                          <SelectItem value="raw">Raw</SelectItem>
                                          <SelectItem value="binary">Binary</SelectItem>
                                       </SelectContent>
                                    </Select>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="autenticacao">
                     <div className="background2 p-4">
                        <Title className="pb-0">Configurações de Autenticação</Title>
                        <p className="text-sm text-slate-500 pb-4">Configure o como os cliente irão se authenticar com a sua API</p>
                        <Label className="text-sm">Tipo da autenticação</Label>
                        <RadioGroup defaultValue="desenvolvimento" className="my-1 mt-2 gap-0.5">
                           {
                              auth.map((key) => (
                                 <div key={key.id} className="flex items-center gap-2 px-2 py-1 hover:bg-slate-800/60 rounded-lg transition">
                                    <RadioGroupItem value={key.title} id={key.id} />
                                    <Label htmlFor={key.id} title={key.title} className="flex items-center gap-2 cursor-pointer text-slate-200">
                                       {key.title}
                                    </Label>
                                 </div>
                              ))
                           }
                        </RadioGroup>
                        <div className="pt-2">
                           <Label>Localização da Chave API</Label>
                           <Select>
                              <SelectTrigger className="mt-1 w-full">
                                 <SelectValue placeholder="Header (X-API-Key)" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                                 <SelectItem value="nenhum">Nenhum</SelectItem>
                                 <SelectItem value="header">Header (X-API-Key)</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="pt-4 space-y-3">
                           <div className="flex items-center justify-between">
                              <SwitchComplete title="Auto-gerar Chaves API" description="Gere automaticamente chaves APIs para novos clientes" checked={true} />
                           </div>
                           <div className="flex items-center justify-between pb-2">
                              <SwitchComplete title="Expiração de chave" description="Habilite para expirar a chave API automaticamente" checked={true} />
                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="avancado">
                     <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                           <div className="background2 p-4 flex-1">
                              <Title className="pb-0">Limite de taxa</Title>
                              <p className="text-xs text-slate-500 pb-4">Configure os limite de requisições da API</p>
                              <div className="flex items-center justify-between pb-2">
                                 <SwitchComplete title="Habilitar limite de taxa" description="Limite o número de requisições" checked={true} />
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal text-slate-400">Requisições por minuto</Label>
                                 <Input defaultValue="60" placeholder="Coloque uma quantidade de requisições" className="mt-1" />
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal text-slate-400">Bust limit</Label>
                                 <Input defaultValue="10" placeholder="Coloque umaa quantidade de bust" className="mt-1" />
                                 <span className="text-xs text-slate-500">Máximo de requisições permitida por um bust</span>
                              </div>
                           </div>
                           <div className="background2 p-4 flex-1">
                              <Title className="pb-0">Configurações CORS</Title>
                              <p className="text-xs text-slate-500 pb-4">Configure recuros de compartilhamento Cross-Origin</p>
                              <div className="flex items-center justify-between pb-2">
                                 <SwitchComplete title="Habilitar CORS" description="Permitir requisições cross-origin para a sua API" checked={true} />
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal text-slate-400">Métodos permitidos</Label>
                                 <Input defaultValue="GET, POST, PUT, DELETE, OPTIONS" placeholder="GET, POST, PUT, DELETE, OPTIONS" className="mt-1" />
                              </div>
                              <div className="pt-3">
                                 <Label className="font-normal text-slate-400">Permitir Origens</Label>
                                 <Input defaultValue="*" placeholder="Coloque o ponto de origem" className="mt-1" />
                                 <span className="text-xs text-slate-500">Use * para habilitar as origens ou dominios específicos</span>
                              </div>
                           </div>
                        </div>
                        <div className="background2 p-4">
                           <Title className="pb-0">Caching e Performance</Title>
                           <p className="text-xs text-slate-500 pb-4">Configurações de cache e performance</p>
                           <div className="flex items-center justify-between pb-2">
                              <SwitchComplete title="Permitir Cache" description="Resposta em cache para melhorar a performance" checked={true} />
                           </div>
                           <div className="flex gap-4">
                              <div className="flex-1">
                                 <Label className="font-normal text-slate-400">Duração do Cache Padrão</Label>
                                 <div className="flex items-center">
                                    <Input defaultValue="300" placeholder="Ex: 100" className="my-1 rounded-r-none" />
                                    <div className="bg-slate-600 py-2 px-3 rounded-r-md">
                                       <span className="text-slate-400">Segundos</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex-1">
                                 <Label className="font-normal text-slate-400">Permitir Origens</Label>
                                 <Select>
                                    <SelectTrigger className="mt-1 w-full">
                                       <SelectValue placeholder="Standard" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                                       <SelectItem value="standard">Standard</SelectItem>
                                    </SelectContent>
                                 </Select>
                              </div>
                           </div>
                           <div className="flex items-center justify-between py-2">
                              <SwitchComplete title="Comprenssão" description="Comprenssar respostas da API" checked={true} />
                           </div>
                        </div>
                     </div>
                  </TabsContent>
               </Tabs>
               <div className="pt-4 flex gap-3 justify-end">
                  <DialogClose asChild>
                     <Button variant="red">Cancelar</Button>
                  </DialogClose>
                  <Button variant="green">
                     <Plus className="w-4 h-4" />
                     Criar Nova API
                  </Button>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
