import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SwitchComplete } from "@/components/ui/switchComplete";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotificacaoDePreferencias() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <Bell className="w-6 h-6 text-slate-400" />
               <CardTitle>Notificação de preferencias</CardTitle>
            </CardHeader>
            <CardContent>
               <SwitchComplete title="Notificação por E-mail" description="Receba uma notificação por e-mail" checked={true} />
               <div className="pb-3">
                  <Label className="text-slate-400 font-normal">E-mail de notificação</Label>
                  <Input type="email" placeholder="exemplo@email.com" />
               </div>
               <SwitchComplete title="Notificação por SMS" description="Receba uma notificação por SMS" checked={false} />
               <div className="pb-3">
                  <Label className="text-slate-400 font-normal">Número de telefone</Label>
                  <Input type="text" placeholder="11 99999-9999" />
               </div>
               <SwitchComplete title="Notificação pelo Dashboard" description="Receba uma notificação no Dashboard" checked={false} />
               <Button variant="green">Salvar preferências</Button>
            </CardContent>
         </Card>
      </>
   )
}