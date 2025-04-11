import { Activity, Key, Shield } from "lucide-react";

// Componentes
import { Luz } from "@/components/ui/luz";
import { Badge } from "@/components/ui/badge";
import { Dot } from "@/components/ui/dot";

const info = [
  {
    title: "5 Chaves Ativas",
    description: "Chaves ativas para uso",
    icon: Key,
    badge: "Ativo",
    message: "Total de chamadas",
    info: "294,565",
  },
  {
    title: "98.1% Sucesso",
    description: "Taxa média de sucesso",
    icon: Activity,
    badge: "Status",
    message: "Taxa média de resposta",
    info: "124 ms",
  },
  {
    title: "Todas as Chaves Seguras",
    description: "Nenhuma chave foi comprometida",
    icon: Shield,
    badge: "Segurança",
    message: "Ultima verificação",
    info: "4 horas atrás",
  },
];

export function GerenciarChavesAPIsInfos() {
  return (
    <>
      <div className="flex gap-6 justify-between">
        {info.map((item) => (
          <div
            key={item.title}
            className={`p-4 background transition flex-1 relative overflow-hidden ${item.badge === "Ativo"
              ? "!border-green-500/25"
              : item.badge === "Status"
                ? "!border-blue-500/25"
                : "!border-purple-500/25"
              }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`border rounded-full p-2.5 ${item.icon === Key
                  ? "bg-green-500/30 border-green-500"
                  : item.icon === Activity
                    ? "bg-blue-500/30 border-blue-500"
                    : "bg-purple-500/30 border-purple-500"
                  }`}
              >
                <item.icon
                  className={`w-5 h-5 ${item.icon === Key
                    ? "text-green-500"
                    : item.icon === Activity
                      ? "text-blue-500"
                      : "text-purple-500"
                    }`}
                />
              </span>
              <span>
                <Badge
                  variant={`${item.badge === "Ativo"
                    ? "green"
                    : item.badge === "Status"
                      ? "blue"
                      : "purple"
                    }`}
                >
                  {item.badge === "Ativo" ? (
                    <span className="relative flex items-center h-2 w-2 mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 translate-y-[0.5px]"></span>
                      <Dot className="w-2 h-2" />
                    </span>
                  ) : null}
                  {item.badge}
                </Badge>
              </span>
            </div>
            <div className="border-b border-slate-700/50 pb-4 pt-4">
              <h1 className="text-lg font-semibold text-slate-200 pb-1">
                {item.title}
              </h1>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
            <div className="flex justify-between items-center pt-2">
              <p className="text-sm text-slate-400">{item.message}</p>
              <span className="font-semibold text-slate-300">{item.info}</span>
            </div>
            <Luz
              className={`-bottom-10 -right-12 h-32 w-52 opacity-10 ${item.badge === "Ativo"
                ? "from-green-500 to-emerald-500"
                : item.badge === "Status"
                  ? "from-cyan-500 to-blue-500"
                  : "from-fuchsia-500 to-purple-500"
                }`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
