import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, ChartNoAxesCombined, ShieldCheck } from "lucide-react";

export function StatusDaConta() {
  return (
    <>
      <div className="border-green-500/30 bg-slate-800/50 rounded-lg border p-4 relative overflow-hidden flex-1">
        <div className="flex items-center justify-between mb-3 border-b border-slate-700/50 pb-2">
          <div className="text-sm text-slate-300">Status da Conta</div>
          <ShieldCheck className="h-5 w-5 text-green-500" />
        </div>
        <div className="flex justify-between">
          <div className="w-full mb-1 flex flex-col gap-2 text-slate-400 text-sm">
            <span className="flex justify-between">
              <p>Status da Conta:</p>
              <Badge variant="green">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></div>
                Ativo
              </Badge>
            </span>
            <span className="flex justify-between">
              <p>Plano:</p>
              <p className="text-cyan-400 font-semibold">Enterprise</p>
            </span>
            <span className="flex justify-between">
              <p>Próximo Pagamento:</p>
              <p>Jan 15, 2025</p>
            </span>
            <span className="flex justify-between">
              <p>Chave ativas:</p>
              <p>10 Ativas</p>
            </span>
          </div>
        </div>

        <div className="pt-2 mt-2 border-t border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">API Quota</div>
            <div className="text-sm text-cyan-400">75% usado</div>
          </div>
          <Progress value={75} className="h-2 bg-slate-700">
            <div className="h-full rounded-full" style={{ width: `75%` }} />
          </Progress>
        </div>
        <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-green-500 to-emerald-500"></div>
      </div>
    </>
  );
}

/*
        <div className="absolute bottom-2 right-2 flex items-center">
          <BadgeCheck className="h-5 w-5 text-green-500" />
        </div>
*/
