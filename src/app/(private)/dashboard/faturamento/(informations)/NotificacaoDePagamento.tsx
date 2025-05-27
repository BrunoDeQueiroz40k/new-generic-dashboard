import { Bell } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SwitchComplete } from "@/components/ui/switchComplete";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function NotificacaoDePagamento() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <Bell className="w-6 h-6 text-slate-400" />
               <CardTitle>Notificação de pagamento</CardTitle>
            </CardHeader>
            <CardContent>
               <SwitchComplete title="Geração de faturas" description="Receba uma notificação quando uma fatura for gerada" checked={true} />
               <SwitchComplete title="Pagamento bem sucedido" description="Receba uma notificação quando um pagamento for realizado com sucesso" checked={true} />
               <SwitchComplete title="Pagamento falhou" description="Receba uma notificação quando um pagamento falhar" checked={false} />
               <SwitchComplete title="Pagamento pendente" description="Receba uma notificação quando um pagamento estiver pendente" checked={true} />
               <div className="pt-3">
                  <Label className="text-slate-400 font-normal">Dias antes do pagamento para notificação</Label>
                  <Select>
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="3 dias antes" />
                     </SelectTrigger>
                     <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                        <SelectItem value="3">3 dias antes</SelectItem>
                        <SelectItem value="5">5 dias antes</SelectItem>
                        <SelectItem value="7">7 dias antes</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
