import { RefreshCcw } from "lucide-react";

// Componentes
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export function GerenciarChavesAPIsRegenerateDialog() {
   return (
      <>
         <Dialog>
            <DialogTrigger className="w-full flex items-center gap-4 px-2 py-2 rounded-sm hover:bg-gray-700 transition outline-none text-sm">
               <RefreshCcw className="w-4 h-4 text-cyan-500" />
               Regenerar
            </DialogTrigger>
            <DialogContent>
               <Card>
                  <CardHeader>
                     <DialogTitle className="">
                        <RefreshCcw className="w-4 h-4 text-cyan-500" />
                        Regenerar Chave API
                     </DialogTitle>
                     <CardDescription>Você tem certeza que deseja regenerar essa chave?</CardDescription>
                  </CardHeader>
                  <CardContent className="">
                     Regenerar esta chave invalidará a chave atual e criará uma nova. Você precisará atualizar quaisquer aplicativos ou serviços que utilizem esta chave.
                  </CardContent>
               </Card>
            </DialogContent>
         </Dialog>
      </>
   )
}