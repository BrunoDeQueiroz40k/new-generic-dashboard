import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Plus, PlusCircle } from "lucide-react";

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
                           <Label htmlFor="api">Nome da API</Label>
                           <Input placeholder="Coloque o nome da API" className="my-1" />
                           <p className="text-xs text-slate-500">Coloque um nome descritivo para a sua API</p>
                        </div>
                        <div>
                           <Label htmlFor="api">Descrição</Label>
                           <Textarea placeholder="Coloque uma descrição sobre o que sua API faz" className="my-1" />
                        </div>
                        <div className="flex gap-4">
                           <div>
                              <Label htmlFor="api">Versão</Label>
                              <Input placeholder="Ex: v1.0.0" className="my-1" />
                           </div>
                           <div>

                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="endpoints">
                     <div className="background2 p-4">

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