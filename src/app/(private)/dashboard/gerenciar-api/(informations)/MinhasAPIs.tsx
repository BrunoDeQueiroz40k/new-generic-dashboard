"use client";

import {
  Activity,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CircleOff,
  CircleX,
  Clock,
  Code2,
  Codesandbox,
  FileText,
  Info,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";

// Componentes
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Componentes Defaults
import api from "../(informations)/(json)/apis.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MinhasAPIsDetalhesDialog } from "./(components)/MinhasAPIsDetalhesDialog";

const iconMap = {
  CheckCircle: CheckCircle,
  Info: Info,
  CircleX: CircleX,
  CircleOff: CircleOff,
};

const ITEMS_PER_PAGE = 5;

const apis = api.map((api) => ({
  ...api,
  icon: iconMap[api.icon as keyof typeof iconMap],
}));

export function MinhasAPIs() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(apis.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentApis = apis.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <Codesandbox className="w-6 h-6 text-slate-400" />
          <CardTitle>Minhas APIs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Pesquisar por APIs"
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
          {currentApis.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-lg background px-4 py-2.5 transition"
            >
              <div className="flex flex-col gap-1 flex-11/12">
                <div className="flex items-center gap-2">
                  <item.icon
                    className={`w-4.5 h-4.5 ${item.icon === CheckCircle
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
                      item.status === "Ativo"
                        ? "green"
                        : item.status === "Manutenção"
                          ? "yellow"
                          : item.status === "Error"
                            ? "red"
                            : "slate"
                    }
                  >
                    {item.status === "Ativo" ? (
                      <Dot />
                    ) : item.status === "Manutenção" ? (
                      <Settings className="w-3 h-3" />
                    ) : item.status === "Error" ? (
                      <X className="w-3 h-3" />
                    ) : (
                      <CircleOff className="w-3 h-3" />
                    )}
                    <span>{item.status}</span>
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
                    Versão: {item.version}
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
                      className={`text-sm ${item.usage >= 85
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
                    className={`${item.usage >= 85
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="border" className="p-2 py-0">
                        <FileText className="w-4 h-4" />
                        Detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <MinhasAPIsDetalhesDialog api={item} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}

          {/* Paginação */}
          <div className="flex justify-between items-center mt-4 font-mono">
            <span className="text-slate-500">
              Página {currentPage} de {totalPages}
            </span>
            <div className="flex items-center gap-2">
              <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}
                className="h-7 py-2 px-2 rounded bg-slate-700 text-white disabled:opacity-30 ">
                <ChevronLeft size={16} />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} onClick={() => changePage(i + 1)}
                  className={`h-7 py-2 px-3 font-mono ${currentPage === i + 1 ? "bg-slate-500/50 hover:bg-slate-500/70" : ""}`}>
                  {i + 1}
                </Button>
              ))}
              <Button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}
                className="h-7 py-2 px-2 rounded bg-slate-700 text-white disabled:opacity-30">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
