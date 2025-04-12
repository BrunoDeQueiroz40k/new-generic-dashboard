"use client";

import { useState } from "react";
import { LayoutGrid, Menu, Plus, Search, Shield } from "lucide-react";

// Componentes
import {
  Dialog,
  DialogContent,
  DialogTitle,
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GerenciarChavesAPIsInfos } from "./(components)/GerenciarChavesAPIsInfos";
import { GerenciarChavesAPIsCriarDialog } from "./(components)/GerenciarChavesAPIsCriarDialog";
import { GerenciarChavesAPIsLine } from "./(components)/GerenciarChavesAPIsLine";
import { GerenciarChavesAPIsGrid } from "./(components)/GerenciarChavesAPIsGrid";

export function GerenciarNovasChavesAPIs() {
  const [viewType, setViewType] = useState<"list" | "grid">("list");

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
                <div className="bg-slate-800 rounded-md p-1 flex gap-1">
                  <button onClick={() => setViewType("list")} className={`p-1.5 rounded-md hover:bg-slate-700 transition ${viewType === "list" ? "bg-slate-700" : ""}`}>
                    <Menu className="w-5 h-5" />
                  </button>
                  <button onClick={() => setViewType("grid")} className={`p-1.5 rounded-md hover:bg-slate-700 transition ${viewType === "grid" ? "bg-slate-700" : ""}`}>
                    <LayoutGrid className="w-5 h-5" />
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
                <DialogContent>
                  <DialogTitle>
                    <GerenciarChavesAPIsCriarDialog />
                  </DialogTitle>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {
            viewType === "list" ? (
              <GerenciarChavesAPIsLine />
            ) : (
              <GerenciarChavesAPIsGrid />
            )
          }
        </CardContent>
      </Card>
    </>
  );
}
