import { RefreshCcw } from "lucide-react";

// Componentes
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";

export function GerenciarChavesAPIsRegenerateDialog() {
   return (
      <>
         <Card className="max-w-[450px]">
            <CardHeader className="flex-col items-start gap-1 pb-0">
               <DialogTitle className="flex items-center gap-2">
                  <RefreshCcw className="w-5 h-5 text-cyan-500" />
                  Regenerar Chave API
               </DialogTitle>
               <CardDescription>Você tem certeza que deseja regenerar essa chave?</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex gap-2 border border-yellow-500/50 rounded-md p-4 bg-yellow-500/10 text-yellow-400">
                  Regenerar esta chave invalidará a chave atual e criará uma nova. Você precisará atualizar quaisquer aplicativos ou serviços que utilizem esta chave.
               </div>
               <div className="flex items-center justify-end gap-2 pt-4">
                  <DialogClose asChild>
                     <Button>Cancelar</Button>
                  </DialogClose>
                  <DialogClose asChild>
                     <Button variant="blue">
                        <RefreshCcw className="w-5 h-5" />
                        Regenerar
                     </Button>
                  </DialogClose>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
