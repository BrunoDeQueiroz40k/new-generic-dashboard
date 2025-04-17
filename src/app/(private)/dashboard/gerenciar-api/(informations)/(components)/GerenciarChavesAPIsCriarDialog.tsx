import { Info, KeyRound, KeySquare, Plus } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DialogTitle, DialogClose } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const chaves = [
   { id: "dev", title: "Desenvolvimento", value: "desenvolvimento", description: "Para testar e desenvolver ambientes" },
   { id: "teste", title: "Teste", value: "teste", description: "Para testes automáticos e CI/CD e integração" },
   { id: "production", title: "Produção", value: "produção", description: "Para livre proução de ambientes" },
   { id: "partner", title: "Parceiros", value: "parceiros", description: "Para integrações de fora" },
]

export function GerenciarChavesAPIsCriarDialog() {
   return (
      <>
         <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll">
            <CardHeader className="flex-col items-start gap-1 pb-0">
               <DialogTitle className="flex items-center gap-2 text-slate-200">
                  <KeyRound className="w-5 h-5 text-cyan-500" />
                  Criar uma nova chave API
               </DialogTitle>
               <CardDescription>Gere uma nova chave API para acessar suas APIs</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 overflow-x-visible">
               <div>
                  <Label htmlFor="api-key-name">Nome da chave API</Label>
                  <Input type="text" placeholder="e.q.exemplo" className="mt-2 mb-2" />
                  <p className="text-slate-500 text-xs">Escolha um nome descritivo para as suas chaves</p>
               </div>
               <div className="py-4 px-2 border bg-slate-700/30 border-slate-700 rounded-lg">
                  <Title className="px-4">
                     <KeySquare className="w-4 h-4 text-slate-400" />
                     Tipo da Chave
                  </Title>
                  <RadioGroup defaultValue="desenvolvimento">
                     {
                        chaves.map((key) => (
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
               <div className="p-4 border bg-slate-700/30 border-slate-700 rounded-lg">
                  <Title>
                     <Info className="w-4 h-4 text-slate-400" />
                     Permissões
                  </Title>
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center justify-between">
                        <div>
                           <span className="text-base">Acesso de Leitura</span>
                           <p className="text-sm text-slate-400">Permite somente a leitura das APIs</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                     <div className="flex items-center justify-between">
                        <div>
                           <span className="text-base">Acesso de Escrita</span>
                           <p className="text-sm text-slate-400">Permite a criação e atualização de dados</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                     <div className="flex items-center justify-between">
                        <div>
                           <span className="text-base">Acesso de Deletar</span>
                           <p className="text-sm text-slate-400">Permite deletar dados</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                  </div>
               </div>
               <div>
                  <Title>Expiração</Title>
                  <Select>
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="30 dias" />
                     </SelectTrigger>
                     <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                        <SelectItem value="todos">Nunca expirará</SelectItem>
                        <SelectItem value="produção">30 dias</SelectItem>
                        <SelectItem value="teste">90 dias</SelectItem>
                        <SelectItem value="parceria">1 ano</SelectItem>
                        <SelectItem value="desenvolvimento">Customizar data</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
               <div className="flex gap-2 justify-end">
                  <DialogClose asChild>
                     <Button>Cancelar</Button>
                  </DialogClose>
                  <DialogClose asChild>
                     <Button variant="blue">
                        <Plus className="w-4 h-4" />
                        Criar Chave
                     </Button>
                  </DialogClose>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
