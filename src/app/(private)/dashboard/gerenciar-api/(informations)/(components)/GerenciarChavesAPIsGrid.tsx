import { useState } from "react";
import { ChevronLeft, ChevronRight, Copy, Ellipsis, Eye, RefreshCcw, Trash, Trash2 } from "lucide-react";

// Componentes
import { Luz } from "@/components/ui/luz";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";

// Componentes Default
import chaves from "../(json)/chaves.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GerenciarChavesAPIsDetalhesDialog } from "./GerenciarChavesAPIsDetalhesDialog";

const ITEMS_PER_PAGE = 3;

const chave = chaves.map((key) => ({
   ...key
}));

export function GerenciarChavesAPIsGrid() {
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = Math.ceil(chave.length / ITEMS_PER_PAGE);

   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const currentKey = chave.slice(startIndex, startIndex + ITEMS_PER_PAGE);

   const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   };

   return (
      <>
         <div className="flex justify-between gap-4 w-full">
            {
               currentKey.map((chave) => (
                  <div key={chave.key} className="flex-1 flex flex-col gap-4 p-4 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-700/30 transition relative overflow-hidden">
                     <div className="flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                           <Title className="text-lg pb-2">{chave.title}</Title>
                           <Badge variant={`${chave.status === "Ativo" ? "green" : chave.status === "Revogado" ? "red" : "slate"}`}>
                              {chave.status}
                           </Badge>
                        </div>
                        <div className="w-full flex gap-2 py-2">
                           <span className="flex-1 border border-slate-700/80 p-1 px-4 rounded-md">
                              {chave.key}
                           </span>
                           <div className="flex">
                              <button className="p-1.5 px-2.5 rounded-lg hover:bg-slate-700/70">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 px-2.5  rounded-lg hover:bg-slate-700/70">
                                 <Copy className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-3 font-mono">
                        <div className="flex items-center justify-between">
                           <h2 className="text-slate-300">TIPO:</h2>
                           <Badge variant={`${chave.type === "Produção" ? "green" : chave.type === "Desenvolvimento" ? "blue" : chave.type === "Teste" ? "yellow" : "purple"}`}>
                              {chave.type}
                           </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                           <h2 className="text-slate-300">CRIADO EM:</h2>
                           <span className="text-xs text-slate-400">{chave.created}</span>
                        </div>
                        <div className="flex items-center justify-between">
                           <h2 className="text-slate-300">ULTIMO USO:</h2>
                           <span className="text-xs text-slate-400">{chave.used}</span>
                        </div>
                     </div>
                     <div className="flex justify-between gap-2 border-t border-slate-700/50 mt-4 pt-4">
                        <Dialog>
                           <DialogTrigger asChild>
                              <button className="flex items-center px-2 py-1 gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                                 <Eye className="w-5 h-5" />
                                 Detalhes
                              </button>
                           </DialogTrigger>
                           <DialogContent className="">
                              <GerenciarChavesAPIsDetalhesDialog chave={chave} />
                           </DialogContent>
                        </Dialog>
                        <div className="flex gap-2">
                           <Button className="hover:text-cyan-500">
                              <RefreshCcw className="w-4 h-4" />
                              Regenerar
                           </Button>
                           <Button className="text-red-400">
                              <Trash2 className="w-4 h-4" />
                           </Button>
                        </div>
                     </div>
                     <Luz className={`${chave.type === "Produção" ? "from-green-500 to-emerald-500" : chave.type === "Desenvolvimento" ? "from-blue-500 to-cyan-500" : chave.type === "Teste" ? "from-yellow-500 to-amber-500" : "from-purple-500 to-fuchsia-500-500"}`} />
                  </div>
               ))
            }
         </div>
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
      </>
   )
}