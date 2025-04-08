// Componentes
import { Progress } from "@/components/ui/progress";

const status = [
  { title: "Sistema", value: 75, color: "" },
  {
    title: "Banco de Dados",
    value: 63,
    color: "[&>*]:bg-gradient-to-r [&>*]:from-red-500 [&>*]:to-orange-500",
  },
  {
    title: "Armazenamento",
    value: 60,
    color: "[&>*]:bg-gradient-to-r [&>*]:from-green-500 [&>*]:to-yellow-500",
  },
  {
    title: "Rede",
    value: 40,
    color: "[&>*]:bg-gradient-to-r [&>*]:from-purple-500 [&>*]:to-pink-500",
  },
];

export function StatusDoSistema() {
  return (
    <>
      <div className="px-4 py-2">
        <h1 className="font-mono text-sm text-slate-500 pb-2">STATUS DO SISTEMA</h1>
        {status.map((item) => (
          <div key={item.title} className="mb-3">
            <div className="flex items-center justify-between text-slate-400 text-[13px]">
              <span>{item.title}</span>
              <span>{item.value}%</span>
            </div>
            <Progress
              value={item.value}
              className={`h-2 bg-slate-700 ${item.color}`}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </Progress>
          </div>
        ))}
      </div>
    </>
  );
}
