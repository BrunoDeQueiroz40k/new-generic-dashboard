import { Landmark } from "lucide-react";

const banco = [{ saldo: 1250 }];

const pendencias = [
  { item: "INV-2024-12-01", data: "01/01/2025", valor: 2500 },
  { item: "INV-2024-12-02", data: "15/01/2025", valor: 1500 },
];

export function ResumoDePagamento() {
  return (
    <>
      <div className="border-purple-500/30 bg-slate-800/50 rounded-lg border p-4 relative overflow-hidden flex-1/4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-700/50 pb-2">
          <div className="text-sm text-slate-300">Resumo de Pagamento</div>
          <Landmark className="h-5 w-5 text-purple-500" />
        </div>
        <div className="w-full flex gap-4">
          <div className="bg-slate-800 p-2 rounded-md border border-slate-700/50 text-slate-400">
            <div className="flex flex-col gap-1 items-center">
              <p>Saldo Disponível</p>
              <span className="text-green-500 font-semibold text-lg">
                {banco[0].saldo.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <div className="flex flex-col text-center pt-2">
                <span className="text-slate-400 text-sm">
                  Último pagamento:
                </span>
                <span className="text-cyan-400">R$ 2,500.00</span>
                <span className="text-slate-400 text-sm">em Dez 15, 2024</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {pendencias.map((pendencia) => (
              <div key={pendencia.item} className="flex items-center justify-between bg-slate-800/50 p-2 mb-2 rounded-md border border-slate-700/50 flex-1">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Pendencia</p>
                  <p className="text-xs text-slate-500">{pendencia.data}</p>
                </div>
                <p className="text-sm text-slate-400">{pendencia.item}</p>
                <span className="text-amber-500">
                  {pendencia.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between mt-3 border-t border-slate-700/50 pt-2">
              <h2>Divida Total:</h2>
              <span className="text-red-400 text-lg font-semibold">
                R$ 4,000.00
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-purple-500 to-fuchsia-500"></div>
      </div>
    </>
  );
}

{
  /* <div className="flex">
                <span className="text-slate-500 text-sm">
                  Último pagamento:{" "}
                  <span className="text-cyan-500">R$ 2,500.00</span> em Dez 15,
                  2024
                </span>
              </div> */
}
