import {
  Activity,
  CheckCircle,
  CircleOff,
  CircleX,
  Clock,
  Code2,
  FileText,
  Info,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";

// Componentes
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dot } from "@/components/ui/dot";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const apis = [
  {
    title: "User Authentication API",
    status: "ativo",
    description: "API usada para autenticação e autorização",
    updated: "Updated Jan 15, 2024, 11:30",
    version: "v2.3.1",
    usage: 73,
    icon: CheckCircle,
    endpoint: "/login",
  },
  {
    title: "Payment Gateway API",
    status: "ativo",
    description: "API para processamento de pagamentos",
    updated: "Updated Dez 10, 2023, 14:20",
    version: "v1.8.0",
    usage: 45,
    icon: CheckCircle,
    endpoint: "/dashboard/faturamento",
  },
  {
    title: "Data Analytics API",
    status: "manutenção",
    description: "API para análise de dados e relatórios",
    updated: "Updated Fev 5, 2024, 09:15",
    version: "v3.0.0",
    usage: 15,
    icon: Info,
    endpoint: "/dashboard/relatorios",
  },
  {
    title: "Notification Service API",
    status: "error",
    description: "API para envio de notificações",
    updated: "Updated Jan 20, 2024, 16:45",
    version: "v2.5.2",
    usage: 97,
    icon: CircleX,
    endpoint: "/dashboard/configuracoes",
  },
  {
    title: "Inventory Management API",
    status: "inativo",
    description: "API para gerenciamento de inventário",
    updated: "Updated Nov 25, 2023, 12:00",
    version: "v1.4.3",
    usage: 0,
    icon: CircleOff,
    endpoint: "/dashboard/gerenciamento-api",
  },
];

export function MinhasAPIs() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Minhas APIs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Pesquisar API"
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200"
              />
            </div>
            <div className="flex">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="ativos">Ativo</SelectItem>
                  <SelectItem value="ivativos">Inativo</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="manutenção">Manutenção</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="blue" className="ml-4">
                <Plus className="w-4 h-4" />
                Criar nova API
              </Button>
            </div>
          </div>
          {apis.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-lg background px-4 py-2.5 transition"
            >
              <div className="flex flex-col gap-1 flex-11/12">
                <div className="flex items-center gap-2">
                  <item.icon
                    className={`w-4.5 h-4.5 ${
                      item.icon === CheckCircle
                        ? "text-green-500"
                        : item.icon === Info
                        ? "text-yellow-500"
                        : item.icon === CircleX
                        ? "text-red-500"
                        : "text-slate-400"
                    }`}
                  />
                  <h1 className="font-semibold">{item.title}</h1>
                  <Badge
                    variant={
                      item.status === "ativo"
                        ? "green"
                        : item.status === "manutenção"
                        ? "yellow"
                        : item.status === "error"
                        ? "red"
                        : "slate"
                    }
                  >
                    {item.status === "ativo" ? (
                      <Dot />
                    ) : item.status === "manutenção" ? (
                      <Settings className="w-3 h-3" />
                    ) : item.status === "error" ? (
                      <X className="w-3 h-3" />
                    ) : (
                      <CircleOff className="w-3 h-3" />
                    )}
                    <span className="translate-y-[-1px]">{item.status}</span>
                  </Badge>
                </div>
                <p className="text-sm text-slate-400">{item.description}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    {item.endpoint}
                  </span>
                  <span className="flex items-center">
                    <Code2 className="w-3 h-3 mr-1" />
                    Versão:
                    {item.version}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.updated}</span>
                  </span>
                </div>
              </div>
              <div className="flex gap-5 flex-1">
                <div>
                  <div className="flex gap-18 items-center justify-between">
                    <span className="text-slate-400 text-sm">Usage</span>
                    <span
                      className={`text-sm ${
                        item.usage >= 85
                          ? "text-red-500"
                          : item.usage >= 65
                          ? "text-amber-500"
                          : item.usage >= 36
                          ? "text-cyan-500"
                          : item.usage <= 35
                          ? "text-emerald-500"
                          : item.usage === 0
                          ? "text-slate-400"
                          : ""
                      }`}
                    >
                      {item.usage}%
                    </span>
                  </div>
                  <Progress
                    value={item.usage}
                    className={`[&>*]:bg-gradient-to-r ${
                      item.usage >= 85
                        ? "[&>*]:from-orange-800 [&>*]:to-red-600"
                        : item.usage >= 65
                        ? "[&>*]:from-amber-500 [&>*]:to-orange-500"
                        : item.usage >= 45
                        ? "[&>*]:from-cyan-500 [&>*]:to-blue-600"
                        : item.usage <= 35
                        ? "[&>*]:from-emerald-500 [&>*]:to-green-600"
                        : item.usage === 0
                        ? "text-slate-400"
                        : ""
                    }`}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.usage}` }}
                    />
                  </Progress>
                </div>
                <div className="flex gap-4">
                  <Button variant="border" className="p-2 py-0">
                    <Activity className="w-4 h-4" />
                    Status
                  </Button>
                  <Button variant="border" className="p-2 py-0">
                    <FileText className="w-4 h-4" />
                    Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
