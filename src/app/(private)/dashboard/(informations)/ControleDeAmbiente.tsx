import { Bell, CircleOff, Cog, Shield, Zap } from "lucide-react";

// Componentes
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const controle = [
   { title: "Controle de Energia", icon: Zap, status: false },
   { title: "Notificações gerais", icon: Bell, status: true },
   { title: "Protocolo de segurança", icon: Shield, status: true },
   { title: "Auto Desligar", icon: CircleOff, status: false },
]

export function ControleDeAmbiente() {
   return (
      <>
         <Card className="w-full h-fit">
            <CardHeader className="flex flex-row items-center px-4 py-4 pb-2 gap-2">
               <Cog className="w-5 h-5 m-0 text-slate-400" />
               <CardTitle className="text-lg">Controle do Ambiente</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
               {
                  controle.map((item) => (
                     <div key={item.title} className="flex items-center justify-between pb-4 w-full gap-4">
                        <div className="flex items-center">
                           <item.icon className="w-4 h-4 text-cyan-500" />
                           <span className="text-slate-400 text-sm pl-2">{item.title}</span>
                        </div>
                        <Switch defaultChecked={item.status} />
                     </div>
                  ))
               }
            </CardContent>
         </Card>
      </>
   )
}