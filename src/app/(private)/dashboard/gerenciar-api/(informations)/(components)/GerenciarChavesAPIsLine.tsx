import { Copy, Ellipsis, Eye } from "lucide-react";

// Componentes
import { Badge } from "@/components/ui/badge";

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
      </>
   )
}