// Componentes
import { Badge } from "@/components/ui/badge";

const processo = [
  { PID: 1024, nome: "system_core.exe", user: "ADMIN", cpu: "12.4%", memory: "345 MB", status: "rodando", statusColor: "green", },
  { PID: 1025, nome: "network_service.exe", user: "SYSTEM", cpu: "8.3%", memory: "200 MB", status: "rodando", statusColor: "green", },
  { PID: 1026, nome: "user_interface.exe", user: "USER", cpu: "5.1%", memory: "150 MB", status: "rodando", statusColor: "green", },
  { PID: 1027, nome: "database_service.exe", user: "DB_ADMIN", cpu: "20.0%", memory: "500 MB", status: "rodando", statusColor: "green", },
  { PID: 1028, nome: "backup_service.exe", user: "BACKUP", cpu: "2.5%", memory: "100 MB", status: "ausente", statusColor: "orange", },
  { PID: 1029, nome: "antivirus.exe", user: "SECURITY", cpu: "15.0%", memory: "400 MB", status: "rodando", statusColor: "green", },
];

export function Processos() {
  return (
    <>
      <div className="overflow-x-auto bg-slate-800/30 rounded-lg border border-slate-700/50 w-full">
        <table className="min-w-full text-sm text-left">
          <thead className="text-xs text-slate-400 bg-slate-800/50 border-b border-slate-700/50">
            <tr>
              <th className="px-4 py-3 w-20">PID</th>
              <th className="px-4 py-3">Process</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">CPU</th>
              <th className="px-4 py-3">Memory</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {processo.map((p) => (
              <tr key={p.PID} className="hover:bg-slate-800/50">
                <td className="px-4 py-2.5 text-slate-500">{p.PID}</td>
                <td className="px-4 py-2.5 text-slate-300">{p.nome}</td>
                <td className="px-4 py-2.5 text-slate-400">{p.user}</td>
                <td className="px-4 py-2.5 text-cyan-400">{p.cpu}</td>
                <td className="px-4 py-2.5 text-emerald-400">{p.memory}</td>
                <td className="py-2.5 text-center">
                  <Badge
                    variant={p.statusColor as "green" | "orange"}
                    className="text-xs capitalize"
                  >
                    {p.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
