import { Aperture } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StatusDaConta } from "./(components)/StatusDaConta";
import { TempoDoSistema } from "./(components)/TempoDoSistema";
import { ResumoDePagamento } from "./(components)/ResumoDePagamento";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemOverview() {
  return (
    <>
      <div className="flex gap-4">
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-700/50">
            <CardTitle className="flex items-center">
              <Aperture className="mr-2 h-6 w-6 text-cyan-500" />
              Visão Geral do Sistema
            </CardTitle>
            <div>
              <Badge variant="cyan" className="mr-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                ATIVO
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="w-full flex gap-6">
              <StatusDaConta />
              <ResumoDePagamento />
            </div>
          </CardContent>
        </Card>
        <TempoDoSistema />
      </div>
    </>
  );
}
