import { Bitcoin, CheckCircle2, CreditCard, Pencil, Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
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
                  <DialogContent className="background2 p-6">
                     <DialogHeader>
                        <DialogTitle className="text-slate-200">Adicionar novo método de pagamento</DialogTitle>
                        <DialogDescription className="text-slate-400 text-sm font-normal">Adicione um novo método para a sua conta</DialogDescription>
                     </DialogHeader>
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