import { Copy, Eye, Key } from "lucide-react";

// Componentes
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Label } from "@/components/ui/label";

interface DetalhesProps {
   chave: {
      title: string;
      key: string;
      type: string;
      created: string;
      used: string;
      status: string;
      permission: string[];
      detalhes: {
         requests: number;
         rate: string;
         response: string;
      };
   };
}

export function GerenciarChavesAPIsDetalhesDialog({ chave }: DetalhesProps) {
   return (
      <>
         <Card className="max-h-[95vh] overflow-y-auto futuristic-scroll pt-6">
            <CardHeader className="flex-col items-start gap-2 pb-0">
               <CardTitle className="w-full text-slate-200">
                  <div className="flex-1 flex items-center justify-between">
                     <div className="flex items-center gap-2 w-full">
                        <span className="p-2 bg-cyan-500/20 border border-cyan-500/50 rounded-xl">
                           <Key className="w-5 h-5 text-cyan-500" />
                        </span>
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,_#06b6d4,_#3b82f6)] bg-[length:200%_200%]">
                           {chave.title}
                        </span>
                     </div>
                     <Badge variant={`${chave.status === "Ativo" ? "green" : chave.status === "Revogado" ? "red" : "slate"}`}>
                        {chave.status}
                     </Badge>
                  </div>
               </CardTitle>
               <CardDescription>Detelhes e estatísticas de uso da Chave API</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 overflow-x-visible">
               <div className="p-4 background2">
                  <Title>
                     <Key className="w-4 h-4 text-cyan-500" />
                     Informações da Chave
                  </Title>
                  <div className="flex gap-4">
                     <div>
                        <Label>Chave API</Label>
                        <div className="w-full flex gap-2 pb-2 pt-1">
                           <span className="flex-1 border border-slate-700/80 p-1 px-4 rounded-md">
                              {chave.key}
                           </span>
                           <div className="flex">
                              <button className="p-1.5 px-2.5 rounded-lg hover:bg-slate-700/70">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 px-2.5  rounded-lg hover:bg-slate-700/70">
                                 <Copy className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <span className="font-semibold text-slate-300 pb-2 pt-1">Tipo</span>
                        <Badge variant={`${chave.type === "Produção" ? "green" : chave.type === "Desenvolvimento" ? "blue" : chave.type === "Teste" ? "yellow" : "purple"}`}>
                           {chave.type}
                        </Badge>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </>
   )
}