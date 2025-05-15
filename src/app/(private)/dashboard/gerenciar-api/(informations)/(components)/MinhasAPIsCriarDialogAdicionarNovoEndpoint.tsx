import { Plus, X } from "lucide-react";

// Componentes
import { Title } from "@/components/ui/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function MinhasAPIsCriarDialogAdicionarNovoEndpoint() {
   return (
      <>
         <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
            <CardHeader className="flex-col items-start gap-1">
               <div className="flex items-center gap-2">
                  <Plus className="w-6 h-6 text-cyan-500" />
                  <DialogTitle className="text-xl font-bold">Adicionar novo Endpoint</DialogTitle>
               </div>
               <CardDescription>Configure seu novo endpoit para a sua API</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
               <div className="flex gap-4">
                  <div className="flex-1">
                     <Label>Método HTTP</Label>
                     <Select>
                        <SelectTrigger className="mt-1 w-full">
                           <SelectValue placeholder="GET" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                           <SelectItem value="get">GET</SelectItem>
                           <SelectItem value="post">POST</SelectItem>
                           <SelectItem value="put">PUT</SelectItem>
                           <SelectItem value="delete">DELETE</SelectItem>
                           <SelectItem value="patch">PATCH</SelectItem>
                           <SelectItem value="options">OPTIONS</SelectItem>
                           <SelectItem value="head">HEAD</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="flex-1/3">
                     <Label>Endpoint Path</Label>
                     <div className="flex items-center">
                        <div className="bg-slate-600 py-2 px-3 rounded-l-md">
                           <span className="text-slate-300">/api/</span>
                        </div>
                        <Input placeholder="users" className="my-1 rounded-l-none" />
                     </div>
                     <p className="text-xs text-slate-500">Exemplos: users, users/id, auth/login</p>
                  </div>
               </div>
               <div>
                  <Label className="font-normal">Descrição</Label>
                  <Input placeholder="Coloque uma descrição para o seu endpoint" className="my-1" />
               </div>
               <div className="background2 p-4">
                  <Title>Configuração de Requests</Title>
                  <div className="flex gap-4 pb-4">
                     <div className="flex-1">
                        <Label className="text-slate-400">Request Body Type</Label>
                        <Select>
                           <SelectTrigger className="mt-1 w-full">
                              <SelectValue placeholder="JSON" />
                           </SelectTrigger>
                           <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectItem value="Nenhum">Nenhum</SelectItem>
                              <SelectItem value="json">JSON</SelectItem>
                              <SelectItem value="formData">Form Data</SelectItem>
                              <SelectItem value="raw">Raw</SelectItem>
                              <SelectItem value="binary">Binary</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="flex-1">
                        <Label className="text-slate-400">Tipo do Conteúdo</Label>
                        <Select>
                           <SelectTrigger className="mt-1 w-full">
                              <SelectValue placeholder="application/json" />
                           </SelectTrigger>
                           <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectItem value="appJson">application/json</SelectItem>
                              <SelectItem value="appXml">application/xml</SelectItem>
                              <SelectItem value="formData">multipart/form-data</SelectItem>
                              <SelectItem value="urlencoded">application/x-www-form-urlencoded</SelectItem>
                              <SelectItem value="plain">text/plain</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                  </div>
                  <div>
                     <Label className="text-slate-400">Parâmetros request</Label>
                     <div className="flex items-center gap-2 pt-1">
                        <Select>
                           <SelectTrigger className="h-8">
                              <SelectValue placeholder="Query" />
                           </SelectTrigger>
                           <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectItem value="query">Query</SelectItem>
                              <SelectItem value="path">Path</SelectItem>
                              <SelectItem value="header">Header</SelectItem>
                           </SelectContent>
                        </Select>
                        <Input placeholder="Coloque os parâmetros do seu request" className="h-8" />
                        <Select>
                           <SelectTrigger className="h-8">
                              <SelectValue placeholder="String" />
                           </SelectTrigger>
                           <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectItem value="string">String</SelectItem>
                              <SelectItem value="number">Number</SelectItem>
                              <SelectItem value="boolean">Boolean</SelectItem>
                              <SelectItem value="array">Array</SelectItem>
                           </SelectContent>
                        </Select>
                        <div className="flex items-center gap-2 ml-2">
                           <p>Required:</p>
                           <Switch id="switch-1" defaultChecked />
                        </div>
                     </div>
                  </div>
                  <div className="pt-4">
                     <Button variant="border" className="w-full border-dashed bg-slate-950 border-slate-500 h-8 text-xs hover:text-cyan-400">
                        <Plus className="w-3 h-3" />
                        Adicionar parâmetros
                     </Button>
                  </div>
               </div>
               <div className="background2 p-4">
                  <Title>Configuração de Resposta</Title>
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <Label className="text-slate-400">Tipo de Resposta</Label>
                        <Select>
                           <SelectTrigger className="mt-1 w-full">
                              <SelectValue placeholder="JSON" />
                           </SelectTrigger>
                           <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectItem value="json">JSON</SelectItem>
                              <SelectItem value="xml">XML</SelectItem>
                              <SelectItem value="options">OPTIONS</SelectItem>
                              <SelectItem value="head">HEAD</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="flex-1">
                        <Label className="text-slate-400">Duração do Cache</Label>
                        <div className="flex items-center">
                           <Input defaultValue="60" placeholder="Ex: 100" className="my-1 rounded-r-none" />
                           <div className="bg-slate-600 py-2 px-3 rounded-r-md">
                              <span className="text-slate-400">Segundos</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="pt-4">
                     <Label className="text-slate-400">Status Code</Label>
                     <div className="flex gap-2 pt-2">
                        <Input defaultValue="200" placeholder="Ex: 404" className="h-8 flex-1" />
                        <Input defaultValue="Sucesso" placeholder="Ex: Not found" className="h-8 [flex:calc(1/2_*_165%)]" />
                        <button className="hover:bg-slate-800 rounded-md transition p-1.5 px-2 hover:text-red-400"><X className="w-4 h-4" /></button>
                     </div>
                     <div className="flex gap-2 pt-2">
                        <Input defaultValue="400" placeholder="Ex: 429" className="h-8 flex-1" />
                        <Input defaultValue="Bad Request" placeholder="Ex: Sucesso" className="h-8 [flex:calc(1/2_*_165%)]" />
                        <button className="hover:bg-slate-800 rounded-md transition p-1.5 px-2 hover:text-red-400"><X className="w-4 h-4" /></button>
                     </div>
                  </div>
                  <div className="pt-4">
                     <Button variant="border" className="w-full border-dashed bg-slate-950 border-slate-500 h-8 text-xs hover:text-cyan-400">
                        <Plus className="w-3 h-3" />
                        Adicionar status code
                     </Button>
                  </div>
               </div>
               <div className="flex gap-3 justify-end">
                  <DialogClose asChild>
                     <Button variant="border">Cancelar</Button>
                  </DialogClose>
                  <Button variant="blue">
                     <Plus className="w-4 h-4" />
                     Adicionar Endpoint
                  </Button>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
