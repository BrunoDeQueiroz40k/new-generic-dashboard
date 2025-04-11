"use client";

import { useState } from "react";
import { Copy, Ellipsis, Eye, LayoutGrid, Menu, Plus, Search, Shield } from "lucide-react";

// Componentes
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dot } from "@/components/ui/dot";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GerenciarChavesAPIsInfos } from "./(components)/GerenciarChavesAPIsInfos";
import { GerenciarChavesAPIsDialog } from "./(components)/GerenciarChavesAPIsDialog";

const chaves = [
  { title: "Production Key", key: "alterra_45JKgf345bytGTBi", type: "Produção", created: "Set 15, 2023, 07:30", used: "1 ano atrás", status: "Ativo" },
  { title: "Development Key", key: "alterra_12345abcV54GBFd", type: "Desenvolvimento", created: "Out 10, 2023, 14:20", used: "2 meses atrás", status: "Revogado" },
  { title: "Integração", key: "alterra_67890xyzCGR4R4g", type: "Parceria", created: "Ago 05, 2023, 09:15", used: "3 semanas atrás", status: "Ativo" },
  { title: "Testing Key", key: "alterra_54321def3gt43ggt", type: "Teste", created: "Jul 20, 2023, 11:45", used: "5 dias atrás", status: "Inativo" },
  { title: "Backup Key", key: "alterra_backup_98765uvw", type: "Produção", created: "Jun 01, 2023, 08:00", used: "6 meses atrás", status: "Ativo" },
];

export function GerenciarNovasChavesAPIs() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  return (
    <>
      <Card className="flex-1">
        <CardHeader>
          <Shield className="w-6 h-6 text-slate-400" />
          <CardTitle>Gerenciar Chaves APIs</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <GerenciarChavesAPIsInfos />
          </div>
          <div className="flex justify-between pt-6 pb-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Pesquisar por APIs"
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <div className="bg-slate-800 rounded-md p-1 flex">
                  <button onClick={() => setViewType("grid")} className={`p-1.5 rounded-md ${viewType === "grid" ? "bg-slate-700" : ""}`}>
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button onClick={() => setViewType("list")} className={`p-1.5 rounded-md ${viewType === "list" ? "bg-slate-700" : ""}`}>
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="produção">
                    <div className="flex items-center gap-2">
                      <Dot className="w-2 h-2 bg-green-500" />
                      <p>Produção</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="teste">
                    <div className="flex items-center gap-2">
                      <Dot className="w-2 h-2 bg-yellow-500" />
                      <p>Teste</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="parceria">
                    <div className="flex items-center gap-2">
                      <Dot className="w-2 h-2 bg-purple-500" />
                      <p>Parceria</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="desenvolvimento">
                    <div className="flex items-center gap-2">
                      <Dot className="w-2 h-2 bg-blue-500" />
                      <p>Desenvolvimento</p>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="blue">
                    <Plus className="w-4 h-4" />
                    Criar nova API
                  </Button>
                </DialogTrigger>
                <DialogContent className="">
                  <GerenciarChavesAPIsDialog />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="overflow-x-auto bg-slate-800/40 rounded-md w-full">
            <table className="min-w-full text-sm text-left">
              <thead className="text-xs text-slate-400 border-b border-slate-700/50">
                <tr>
                  <th className="px-4 py-3 w-20">NOME</th>
                  <th className="px-4 py-3 w-[180px]">CHAVE</th>
                  <th className="px-4 py-3">TIPO</th>
                  <th className="px-4 py-3">CRIADO</th>
                  <th className="px-4 py-3">USADO</th>
                  <th className="px-4 py-3">STATUS</th>
                  <th className="px-4 py-3">AÇÕES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {chaves.map((chave) => (
                  <tr key={chave.key} className="hover:bg-slate-800/50">
                    <td className="px-4 py-4 text-slate-200 w-[150px]">
                      {chave.title}
                    </td>
                    <td className="flex items-center justify-between h-full w-[300px] px-4 py-4 text-slate-300 font-semibold font-mono">
                      <span className="bg-slate-700/80 p-0.5 px-2 rounded-md">
                        {chave.key}
                      </span>
                      <div className="flex">
                        <button className="p-1.5 rounded-lg hover:bg-slate-700/70">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-slate-700/70">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="w-[150px]">
                      <Badge variant={`${chave.type === "Produção" ? "green" : chave.type === "Desenvolvimento" ? "blue" : chave.type === "Teste" ? "yellow" : "purple"}`}>
                        {chave.type}
                      </Badge>
                    </td>
                    <td className="text-slate-400 text-sm">{chave.created}</td>
                    <td className="text-slate-400 text-sm">{chave.used}</td>
                    <td>
                      <Badge variant={`${chave.status === "Ativo" ? "green" : chave.status === "Revogado" ? "red" : "slate"}`}>
                        {chave.status}
                      </Badge>
                    </td>
                    <td className="flex gap-1 translate-y-[3px]">
                      <button className="flex items-center px-2 py-1 gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                        <Eye className="w-4 h-4" />
                        Detalhes
                      </button>
                      <button className="flex items-center px-2 py-1 gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                        <Ellipsis className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
