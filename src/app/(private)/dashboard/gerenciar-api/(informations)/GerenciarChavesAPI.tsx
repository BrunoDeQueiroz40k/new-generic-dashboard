import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function GerenciarChavesAPI() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <Shield className="w-6 h-6 text-slate-400" />
               <CardTitle>Gerenciar Chaves</CardTitle>
            </CardHeader>
            <CardContent>
               
            </CardContent>
         </Card>
      </>
   )
}