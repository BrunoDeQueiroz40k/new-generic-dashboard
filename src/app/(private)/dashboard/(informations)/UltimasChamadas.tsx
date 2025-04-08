import { Timer } from "lucide-react";

// Componentes
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const apis = [
   { api: "/api/users/profile", type: "GET", status: "200", time: "2 min atrás", lag: "42ms" },
   { api: "/api/orders/list", type: "POST", status: "200", time: "5 min atrás", lag: "120ms" },
   { api: "/api/products/details", type: "GET", status: "200", time: "10 min atrás", lag: "85ms" },
   { api: "/api/auth/login", type: "POST", status: "429", time: "15 min atrás", lag: "300ms" },
   { api: "/api/notifications", type: "GET", status: "200", time: "20 min atrás", lag: "60ms" },
];

export function UltimasChamadas() {
   return (
      <>
         <Card className="w-full h-fit">
            <CardHeader className="flex flex-row items-center px-4 py-4 pb-2 gap-2">
               <Timer className="h-5 w-5 m-0 text-cyan-500" />
               <CardTitle className="text-lg">Chamadas APIs</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
            {
               apis.map((item) => (
                  <div key={item.api} className="border-b border-slate-700/50 w-full px-4 pt-2 hover:bg-slate-800/50 transition">
                     <div className="flex items-center justify-between gap-8">
                        <h1 className="text-sm text-cyan-500 font-mono">{item.api}</h1>
                        <Badge variant={item.status === "200" ? "green" : item.status === "429" ? "yellow" : "slate"}>{item.status}</Badge>
                     </div>
                     <div className="flex items-center justify-between mt-1 mb-2">
                        <div className="flex gap-1">
                           <span className="text-xs text-slate-500 font-mono">{item.type}</span>
                           <span className="text-xs text-slate-500 font-mono">• {item.time}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">{item.lag}</span>
                     </div>
                  </div>
               ))
            }
            </CardContent>
         </Card>
      </>
   )
}