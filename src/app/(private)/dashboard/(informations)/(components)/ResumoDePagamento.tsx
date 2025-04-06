import { Landmark } from "lucide-react";

const banco = [{ saldo: 1250 }];

export function ResumoDePagamento() {
  return (
    <>
      <div className="border-purple-500/30 bg-slate-800/50 rounded-lg border p-4 relative overflow-hidden flex-1/4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-700/50 pb-2">
          <div className="text-sm text-slate-300">Resumo de Pagamento</div>
          <Landmark className="h-5 w-5 text-purple-500" />
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-800 p-2 rounded-md border border-slate-700/50 text-slate-400">
            <div className="flex justify-between">
              <p>Saldo Disponível</p>
              <span className="text-green-500 font-semibold">
                {banco[0].saldo.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <span className="text-slate-500 text-sm">
              {/* Último pagamento: R$ 2,500.00 em Dez 15, 2024 */}
            </span>
          </div>
          <div>
            <h1 className="text-slate-400">Faturas Pendentes</h1>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-purple-500 to-fuchsia-500"></div>
      </div>
    </>
  );
}
