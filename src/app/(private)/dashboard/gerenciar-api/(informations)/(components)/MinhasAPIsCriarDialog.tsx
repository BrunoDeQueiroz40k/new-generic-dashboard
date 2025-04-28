import { Plus, PlusCircle, X } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const status = [
   { id: "dev", title: "Desenvolvimento", value: "desenvolvimento", description: "Para testar e desenvolver ambientes" },
   { id: "teste", title: "Teste", value: "teste", description: "Para testes automáticos e CI/CD e integração" },
   { id: "production", title: "Produção", value: "produção", description: "Para livre proução de ambientes" },
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
                           <Button variant="border" className="border-dashed border-slate-500 h-8 text-xs px-3 hover:text-cyan-400 gap-1">
                              <Plus className="w-3 h-3" />
                              Adicionar novo Endpoint
                           </Button>
                        </div>
                        <div>
                           <div className="bg-slate-900/10 border border-slate-600 p-3 rounded-md">
                              <div className="flex justify-between items-center">
                                 <div className="flex gap-2 items-center">
                                    <Badge variant="blue">GET</Badge>
                                    <span className="font-mono text-slate-300">/users</span>
                                 </div>
                                 <button className="hover:bg-slate-800 rounded-md transition p-1.5"><X className="w-4 h-4" /> </button>
                              </div>
                              <div className="pt-3">
                                 <Label className="text-slate-300 font-normal">Descrição</Label>
                                 <Input defaultValue="Pega uma lista de todos os usuários" placeholder="Coloque uma descrição para o endpoint" className="my-1" />
                              </div>
                              <div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="autenticacao">
                     <div className="background2 p-4">

                     </div>
                  </TabsContent>

                  <TabsContent value="avancado">
                     <div className="background2 p-4">

                     </div>
                  </TabsContent>
               </Tabs>
               <div className="pt-4 flex gap-3 justify-end">
                  <DialogClose asChild>
                     <Button variant="border">Cancelar</Button>
                  </DialogClose>
                  <Button variant="blue">
                     <Plus className="w-4 h-4" />
                     Criar Nova API
                  </Button>
               </div>
            </CardContent>
         </Card>
      </>
   )
}