import { DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dot } from "@/components/ui/dot";
import { CircleOff, Settings, X } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";

interface DetalhesProps {
   api: {
      title: string;
      status: string;
      description: string;
      updated: string;
      version: string;
      usage: number;
      endpoint: string;
      requests: number;
      rate: string;
      response: string;
      subEndpoints: {
         path: string;
         method: string;
      }[];
   }
}

export function MinhasAPIsDetalhesDialog({ api }: DetalhesProps) {
   return (
      <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
         <CardHeader className="flex-col gap-1">
            <div className="flex justify-between items-center">
               <DialogTitle>{api.title}</DialogTitle>
               <Badge variant={`${api.status === "Ativo" ? "green" : api.status === "Manutenção" ? "yellow" : api.status === "Error" ? "red" : "slate"}`}>
                  {api.status === "Ativo" ? (
                     <Dot />
                  ) : api.status === "Manutenção" ? (
                     <Settings className="w-3 h-3" />
                  ) : api.status === "Error" ? (
                     <X className="w-3 h-3" />
                  ) : (
                     <CircleOff className="w-3 h-3" />
                  )}
                  <span className="translate-y-[-0.5px]">{api.status}</span>
               </Badge>
            </div>
            <CardDescription>{api.description}</CardDescription>
         </CardHeader>
         <CardContent>
            <Tabs>
               
            </Tabs>
         </CardContent>
      </Card>
   );
}
