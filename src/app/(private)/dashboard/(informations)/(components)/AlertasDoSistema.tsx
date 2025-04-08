import {
  CheckCircle2,
  CircleAlert,
  Download,
  OctagonAlert,
} from "lucide-react";

// Componentes
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const alert = [
  {
    title: "Scaneamento completo",
    description: "Nenhuma ameaça encontrada",
    time: "14:32",
    color: "text-blue-500",
    colorBg: "bg-blue-500/30",
    icon: CircleAlert,
  },
  {
    title: "Lentidão Detectada",
    description: "Lentidão incomum em atividade",
    time: "16:32",
    color: "text-yellow-500",
    colorBg: "bg-yellow-500/30",
    icon: CircleAlert,
  },
  {
    title: "Update disponivel",
    description: "Versão 12.250 pronta para instalação",
    time: "17:32",
    color: "text-cyan-500",
    colorBg: "bg-cyan-500/30",
    icon: Download,
  },
  {
    title: "Backup completo",
    description: "Backup do disco E: foi um sucesso",
    time: "14:32",
    color: "text-green-500",
    colorBg: "bg-green-500/30",
    icon: CheckCircle2,
  },
];

export function AlertasDoSistema() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center px-4 py-4 pb-2 gap-2">
          <OctagonAlert className="w-5 h-5 m-0 text-alterra" />
          <CardTitle className="text-lg">Alertas do Sistema</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {alert.map((item) => (
            <div key={item.title} className="pb-4 flex gap-2">
              <div
                className={`rounded-full h-fit w-fit p-1 ${item.colorBg} flex items-center justify-center`}
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h1 className="text-sm text-slate-300">{item.title}</h1>
                  <span className="text-xs text-slate-500">{item.time}</span>
                </div>
                <span className="text-xs text-slate-400">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
