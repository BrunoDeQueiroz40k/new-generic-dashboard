"use client";

import { useEffect, useState } from "react";

// Componentes
import { Card, CardContent } from "@/components/ui/card";

export function TempoDoSistema() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Card className="h-fit">
        <CardContent className="p-0">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1 font-mono">
                SYSTEM TIME
              </div>
              <div className="text-3xl font-mono text-alterra mb-1">
                {formatTime(currentTime)}
              </div>
              <div className="text-sm text-slate-400">
                {formatDate(currentTime)}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 rounded-md px-3 py-2 border border-slate-700/50">
                <div className="text-xs text-slate-500 mb-1">Uptime</div>
                <div className="text-sm font-mono text-slate-200">
                  14d 06:42
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-md px-3 py-2 border border-slate-700/50">
                <div className="text-xs text-slate-500 mb-1">Time Zone</div>
                <div className="text-sm font-mono text-slate-200">
                  UTC-08:00
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
