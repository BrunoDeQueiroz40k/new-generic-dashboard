import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FileKey } from "lucide-react";

export function GerarNovaChaveAPI() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <FileKey className="w-6 h-6 text-slate-400" />
               <CardTitle>Gerar Nova Chave API</CardTitle>
            </CardHeader>
         </Card>
      </>
   )
}