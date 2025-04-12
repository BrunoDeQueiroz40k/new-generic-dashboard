import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Copy, Ellipsis, Eye, RefreshCcw, Trash2 } from "lucide-react";

// Componentes
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GerenciarChavesAPIsDetalhesDialog } from "./GerenciarChavesAPIsDetalhesDialog";

// Componentes Default
import chaves from "../(json)/chaves.json";

export function GerenciarChavesAPIsLine() {
   return (
      <>
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
                     <tr key={chave.key} className="hover:bg-slate-800/50 transition hover:text-cyan-500">
                        <td className="px-4 py-4 w-[150px] font-bold">
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
                           <Dialog>
                              <DialogTrigger asChild>
                                 <button className="flex items-center px-2 py-1 translate-y-[2px] gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                                    <Eye className="w-5 h-5" />
                                    Detalhes
                                 </button>
                              </DialogTrigger>
                              <DialogContent className="">
                                 <GerenciarChavesAPIsDetalhesDialog chave={chave} />
                              </DialogContent>
                           </Dialog>
                           <DropdownMenu.Root>
                              <DropdownMenu.Trigger asChild>
                                 <button className="flex items-center px-2 translate-y-[2px] gap-1 cursor-pointer hover:bg-slate-700/60 rounded-lg transition text-slate-400 hover:text-slate-300">
                                    <Ellipsis className="w-6 h-6" />
                                 </button>
                              </DropdownMenu.Trigger>
                              <DropdownMenu.Portal>
                                 <DropdownMenu.Content className="min-w-[150px] background2 !backdrop-blur-[7px] text-white py-1 z-10">
                                    <DropdownMenu.Item asChild>
                                       <div className="px-1 outline-none">
                                          <button className="w-full flex items-center gap-4 px-2 py-2 rounded-sm hover:bg-gray-700 transition outline-none text-sm">
                                             <RefreshCcw className="w-4 h-4 text-cyan-500" />
                                             Regenerar
                                          </button>
                                       </div>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item asChild>
                                       <div className="px-1 outline-none">
                                          <button className="w-full flex items-center gap-4 px-2 py-2 rounded-sm hover:bg-gray-700 transition outline-none text-sm">
                                             <Trash2 className="w-4 h-4 text-red-400" />
                                             Revogar
                                          </button>
                                       </div>
                                    </DropdownMenu.Item>
                                 </DropdownMenu.Content>
                              </DropdownMenu.Portal>
                           </DropdownMenu.Root>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}