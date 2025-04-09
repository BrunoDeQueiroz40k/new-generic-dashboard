import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileCode, FileText, Plus, Search } from "lucide-react";

const logs = [
   { timestamp: "20-12-2023 14:32", title: "Development Key", ip: "192.168.1.45", endpoint: "api/data/users", method: "GET", status: 200, responseTime: "43ms" },
   { timestamp: "20-12-2023 14:35", title: "Production Key", ip: "192.168.1.46", endpoint: "api/data/orders", method: "POST", status: 200, responseTime: "56ms" },
   { timestamp: "20-12-2023 14:40", title: "Testing Key", ip: "192.168.1.47", endpoint: "api/data/products", method: "GET", status: 404, responseTime: "12ms" },
   { timestamp: "20-12-2023 14:45", title: "Production Key", ip: "192.168.1.48", endpoint: "api/data/customers", method: "PUT", status: 200, responseTime: "89ms" },
   { timestamp: "20-12-2023 14:50", title: "Development Key", ip: "192.168.1.49", endpoint: "api/data/inventory", method: "DELETE", status: 404, responseTime: "34ms" },
   { timestamp: "20-12-2023 14:55", title: "Production Key", ip: "192.168.1.50", endpoint: "api/data/reports", method: "GET", status: 200, responseTime: "22ms" },
   { timestamp: "20-12-2023 15:00", title: "Testing Key", ip: "192.168.1.51", endpoint: "api/data/analytics", method: "POST", status: 200, responseTime: "67ms" },
];

export function LogsDeAcesso() {
   return (
      <>
         <Card>
            <CardHeader>
               <FileCode className="w-6 h-6 text-slate-400" />
               <CardTitle>Logs de Acesso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="flex justify-between">
                  <div className="relative w-full max-w-md">
                     <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                     <Input
                        placeholder="Pesquisar por Logs"
                        className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200"
                     />
                  </div>
                  <div className="flex gap-4">
                     <Select>
                        <SelectTrigger>
                           <SelectValue placeholder="Filtrar Método" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                           <SelectItem value="todos">Todos os Métodos</SelectItem>
                           <SelectItem value="post">POST</SelectItem>
                           <SelectItem value="get">GET</SelectItem>
                           <SelectItem value="put">PUT</SelectItem>
                           <SelectItem value="delete">DELETE</SelectItem>
                        </SelectContent>
                     </Select>
                     <Select>
                        <SelectTrigger>
                           <SelectValue placeholder="Filtrar por data" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-slate-200">
                           <SelectItem value="todos">Ultimas 24 horas</SelectItem>
                           <SelectItem value="post">1 dia atrás</SelectItem>
                           <SelectItem value="get">Ultima semana</SelectItem>
                           <SelectItem value="put">Ultimo mês</SelectItem>
                           <SelectItem value="delete">Ultimo ano</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>
               <div className="overflow-x-auto bg-slate-800/30 rounded-lg border border-slate-700/50 w-full">
                  <table className="min-w-full text-sm text-left">
                     <thead className="text-xs text-slate-400 bg-slate-800/50 border-b border-slate-700/50">
                        <tr>
                           <th className="px-4 py-3 w-20">Timestamp</th>
                           <th className="px-4 py-3">Chave API</th>
                           <th className="px-4 py-3">Endereço IP</th>
                           <th className="px-4 py-3">Endpoint</th>
                           <th className="px-4 py-3">Método</th>
                           <th className="px-4 py-3">Status</th>
                           <th className="px-4 py-3">Time</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-700/30">
                        {logs.map((log) => (
                           <tr key={log.ip} className="hover:bg-slate-800/50 text-slate-400 font-mono">
                              <td className="px-4 py-2.5 text-xs text-slate-500 w-[150px]">{log.timestamp}</td>
                              <td className="px-4 py-2.5 text-slate-300 font-semibold">{log.title}</td>
                              <td className="px-4 py-2.5 text-xs">{log.ip}</td>
                              <td className="px-4 py-2.5">{log.endpoint}</td>
                              <td className="px-4 py-2.5 text-cyan-400">
                                 <Badge variant={`${log.method === "GET" ? "blue" : log.method === "PUT" ? "yellow" : log.method === "DELETE" ? "red" : "green"}`}>
                                    <span className="translate-y-[1px]">{log.method}</span>
                                 </Badge>
                              </td>
                              <td className="px-4 py-2.5 text-emerald-400">
                                 <Badge variant={`${log.status === 200 ? "green" : log.status === 404 ? "red" : "yellow"}`}>
                                    <span className="translate-y-[1px]">{log.status}</span>
                                 </Badge>
                              </td>
                              <td className="px-4 py-2.5">{log.responseTime}</td>
                              <td className="px-4 py-2.5">
                                 <button className="flex items-center px-2 py-1 gap-1 cursor-pointer hover:bg-transparent text-slate-400 hover:text-slate-300">
                                    <FileText className="w-3 h-3" />
                                    Detalhes
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
   )
}