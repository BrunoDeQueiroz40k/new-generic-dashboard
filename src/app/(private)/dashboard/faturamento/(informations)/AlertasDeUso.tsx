import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SwitchComplete } from "@/components/ui/switchComplete";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AlertaDeUso() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <AlertCircle className="w-6 h-6 text-slate-400" />
               <CardTitle>Alertas de Uso</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="background2 p-3 pb-0 mb-3">
                 <SwitchComplete title="80% da Alocação da API" description="Notificação por E-mail quando atingir 80% do uso mensal da API" checked={true} />
               </div>
               <div className="background2 p-3 pb-0 mb-3">
                  <SwitchComplete title="90% da Alocação da API" description="Notificação por E-mail quando atingir 90% do uso mensal da API" checked={true} />
               </div>
               <div className="background2 p-3 pb-0 mb-3">
                  <SwitchComplete title="Alerta de (%) Customizada" description="Receba um alerta quando exceder o número customoziado" checked={false} />
               </div>
               <div>
                  <Label htmlFor="api-key-name" className="text-xs text-slate-400">Threshold customizado ($)</Label>
                  <div className="flex items-center gap-2">
                     <Input type="text" placeholder="1500" className="mt-0.5" />
                     <Button>Setar</Button>
                  </div>
               </div>
            </CardContent>
         </Card>
      </>
   )
}
