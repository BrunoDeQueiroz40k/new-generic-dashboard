import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AlertaDeUso() {
   return (
      <>
         <Card className="flex-1">
            <CardHeader>
               <CardTitle>Alertas de Uso</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex items-center justify-between background2 p-3 mb-3">
                  <div>
                     <span className="text-base">80% da Alocação da API</span>
                     <p className="text-xs font-normal text-slate-400">Notificação por E-mail quando atingir 80% do uso mensal da API</p>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between background2 p-3 mb-3">
                  <div>
                     <span className="text-base">90% da Alocação da API</span>
                     <p className="text-xs font-normal text-slate-400">Notificação por E-mail quando atingir 9    0% do uso mensal da API</p>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between background2 p-3 mb-3">
                  <div>
                     <span className="text-base">Alerta de (%) Customizada</span>
                     <p className="text-xs font-normal text-slate-400">Receba um alerta quando exceder o número customoziado</p>
                  </div>
                  <Switch />
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
