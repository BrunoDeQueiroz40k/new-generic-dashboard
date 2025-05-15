import { Bitcoin, CheckCircle2, CreditCard, Pencil, Plus, Trash, Wallet } from "lucide-react";

// Componentes
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const metodo = [
   { icon: CreditCard, title: "Visa termina com 4242", expires: "Expira em 09/29", default: true },
   { icon: CreditCard, title: "MasterCard termina com 5555", expires: "Expira em 31/31", default: false },
   { icon: Bitcoin, title: "Carteira bitcoin", expires: "Endereço: 3FZbgl29...", default: false },
]

export function MetodoDePagamento() {
   return (
      <>
         <Card>
            <CardHeader className="">
               <CardTitle>Método de pagamento</CardTitle>
               <Dialog>
                  <DialogTrigger asChild>
                     <Button variant="blue" className="shrink-0">
                        <Plus className="h-4 w-4" />
                        Adicionar novo método
                     </Button>
                  </DialogTrigger>
                  <DialogContent className="background2 p-6 text-slate-200">
                     <DialogHeader>
                        <DialogTitle className="text-slate-200">Adicionar novo método de pagamento</DialogTitle>
                        <DialogDescription className="text-slate-400 text-sm font-normal">Adicione um novo método para a sua conta</DialogDescription>
                     </DialogHeader>
                     <Tabs defaultValue="creditCard" className="pt-4">
                        <TabsList className="mb-4">
                           <TabsTrigger value="creditCard" className="gap-2">
                              <CreditCard className="w-4 h-4" />
                              Cartão de crédito
                           </TabsTrigger>
                           <TabsTrigger value="crypto" className="gap-2">
                              <Bitcoin className="w-4 h-4" />
                              Crypto
                           </TabsTrigger>
                           <TabsTrigger value="pix" className="gap-2">
                              <Wallet className="w-4 h-4" />
                              Pix
                           </TabsTrigger>
                        </TabsList>

                        <TabsContent value="creditCard">
                           <div className="flex flex-col items-center">
                              {/* Cartão */}
                              <div className="space-y-4 w-[70%]">
                                 <div className="relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-20"></div>
                                    <div className="relative w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
                                       <div className="px-4 py-3 flex justify-between items-start">
                                          <div className="w-12 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded opacity-80"></div>
                                          <div className="text-xs text-slate-400">Novo cartão</div>
                                       </div>
                                       <div className="px-4 py-3 text-lg tracking-widest text-slate-300 font-mono">•••• •••• •••• ••••</div>

                                       <div className="px-4 mt-3 flex items-center justify-between h-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                                          <div className="text-xs text-slate-400">
                                             <div>Titular do cartão</div>
                                             <div className="text-slate-300 mt-1">SEU NOME</div>
                                          </div>
                                          <div className="text-xs text-slate-400">
                                             <div>Expira em</div>
                                             <div className="text-slate-300 mt-1">MM/YY</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="pt-4">
                                 <Label className="text-slate-400">Número do cartão</Label>
                                 <Input placeholder="0000 0000 0000 0000" />
                                 <div className="flex gap-4 pt-4">
                                    <div className="w-full">
                                       <Label className="text-slate-400">Titular do cartão</Label>
                                       <Input placeholder="John Doe" />
                                    </div>
                                    <div className="flex gap-2">
                                       <div>
                                          <Label className="text-slate-400">Expira em</Label>
                                          <Input placeholder="MM/YY" />
                                       </div>
                                       <div>
                                          <Label className="text-slate-400">CCV</Label>
                                          <Input placeholder="000" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="flex items-center gap-1.5 pt-4">
                                    <Checkbox id="default" />
                                    <Label htmlFor="default" className="text-slate-400 font-normal">Marcar como método de pagamento padrão</Label>
                                 </div>
                              </div>
                           </div>
                        </TabsContent>
                     </Tabs>
                  </DialogContent>
               </Dialog>
            </CardHeader>
            <CardContent>
               {
                  metodo.map((item) => (
                     <div key={item.title} className="background2 mb-4 p-3 px-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                           <span className="p-2 bg-cyan-500/15 rounded-full">
                              <item.icon className={`w-5 h-5 ${item.icon === CreditCard ? "text-cyan-500" : "text-yellow-300"}`} />
                           </span>
                           <div>
                              <h1>{item.title}</h1>
                              <p className="text-xs text-slate-400">{item.expires}</p>
                           </div>
                        </div>
                        {item.default === true ? (
                           <div className="flex items-center gap-4">
                              <span className="text-cyan-500 font-semibold font-mono p-1 px-4 bg-cyan-500/20 text-sm rounded-md">Padrão</span>
                              <button className="cursor-pointer flex gap-2 items-center text-slate-400 hover:text-cyan-500 font-medium text-sm">
                                 <Pencil className="w-4 h-4" />
                                 Editar
                              </button>
                           </div>
                        ) : (
                           <div className="flex items-center gap-4">
                              <button className="cursor-pointer flex gap-2 items-center text-slate-400 hover:text-cyan-500 font-medium text-sm">
                                 <Pencil className="w-4 h-4" />
                                 Editar
                              </button>
                              <button className="cursor-pointer flex gap-2 items-center text-slate-400 hover:text-cyan-500 font-medium text-sm">
                                 <CheckCircle2 className="w-4 h-4 translate-y-[2px]" />
                                 marcar como padrão
                              </button>
                              <button className="cursor-pointer flex gap-2 items-center text-red-400 hover:text-red-500 font-medium text-sm">
                                 <Trash className="w-4 h-4" />
                                 Remover
                              </button>
                           </div>
                        )}
                     </div>
                  ))
               }
            </CardContent>
         </Card>
      </>
   )
}
