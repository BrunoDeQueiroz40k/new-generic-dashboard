import { Info, Trash2 } from "lucide-react";

// Componentes
import { Button } from "@/components/ui/button";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export function GerenciarChavesAPIsRevokeDialog() {
   return (
      <>
         <Card className="max-w-[450px]">
            <CardHeader className="flex-col items-start gap-1 pb-0">
               <DialogTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-red-500" />
                  Revogar Chave API
               </DialogTitle>
               <CardDescription>Você tem certeza que deseja regenerar essa chave?</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="border border-red-500/50 rounded-md p-4 bg-red-500/10 text-red-400">
                  Revogar esta chave a invalidará imediatamente. Quaisquer aplicativos ou serviços que utilizem esta chave não poderão mais acessar suas APIs.
               </div>
               <div className="flex items-center justify-end gap-2 pt-4">
                  <DialogClose asChild>
                     <Button>Cancelar</Button>
                  </DialogClose>
                  <DialogClose asChild>
                     <Button variant="red">
                        <Trash2 className="w-5 h-5" />
                        Revogar
                     </Button>
                  </DialogClose>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
