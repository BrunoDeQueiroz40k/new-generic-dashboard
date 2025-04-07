import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const armazenamento = [
  {
    title: "System Drive (C:)",
    used: "325 GB",
    free: "325",
    total: "512 GB",
    porcentage: "63%",
    type: "SSD",
  },
  {
    title: "Data Drive (D:)",
    used: "1285 GB",
    free: "1285",
    total: "2048 GB",
    porcentage: "63%",
    type: "HDD",
  },
  {
    title: "Backup Drive (E:)",
    used: "1865 GB",
    free: "1865",
    total: "4096 GB",
    porcentage: "46%",
    type: "HDD",
  },
  {
    title: "External Drive (F:)",
    used: "210 GB",
    free: "210",
    total: "1024 GB",
    porcentage: "21%",
    type: "SSD",
  },
];

const calculatePercentage = (used: string, total: string): number => {
  const usedValue = parseFloat(used.replace(" GB", ""));
  const totalValue = parseFloat(total.replace(" GB", ""));
  return Math.round((usedValue / totalValue) * 100);
};

const calculateFreeSpace = (used: string, total: string): string => {
  const usedValue = parseFloat(used.replace(" GB", ""));
  const totalValue = parseFloat(total.replace(" GB", ""));
  const freeSpace = totalValue - usedValue;
  return `${freeSpace} GB`;
};

armazenamento.forEach((item) => {
  item.porcentage = `${calculatePercentage(item.used, item.total)}%`;
  item.free = `${calculateFreeSpace(item.free, item.total)}`;
});

export function Armazenamento() {
  return (
    <>
      <div className="grid grid-cols-2 rounded-lg gap-4 p-4 border bg-slate-800/30 border-slate-700/50 min-h-[300px]">
        {armazenamento.map((item) => (
          <div
            className="border border-slate-500/30 bg-slate-800/50 rounded-lg p-4 py-3"
            key={item.title}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-slate-300">{item.title}</h1>
              <Badge variant="slate">{item.type}</Badge>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-slate-500 text-xs font-semibold">
                {item.used} / {item.total}
              </span>
              <span className="text-slate-400 text-xs font-semibold">
                {item.porcentage}
              </span>
            </div>
            <Progress
              value={parseFloat(item.porcentage)}
              className="h-2 bg-slate-700 [&>*]:bg-gray-200/90 mt-2"
            >
              <div className="h-full rounded-full" style={{ width: `75%` }} />
            </Progress>
            <div className="flex items-center justify-between mt-3">
              <p className="text-slate-500 text-xs font-semibold">
                Livre: {item.free}
              </p>
              <Link
                href="#"
                className="text-slate-500 text-xs font-semibold hover:underline"
              >
                Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
