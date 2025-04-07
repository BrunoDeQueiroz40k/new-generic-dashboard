"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Button } from "@/components/ui/button";

// Componentes Defaults
import Particles from "@/components/ui/particles";
import AlterraLogo from "@/components/ui/alterra-logo";

export default function NotFound() {
  return (
    <div className="w-full flex items-center justify-center">
      <Particles />

      <div className="relative z-10 px-4 max-w-md">
        <AlterraLogo />

        {/* Main card */}
        <Card className="bg-slate-900/70 border-slate-700/50 backdrop-blur-md overflow-hidden">
          <CardHeader className="pb-4 md:pb-0">
            <div className="flex justify-between items-center">
              <CardTitle className="text-slate-100 text-xl flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                Error 404
              </CardTitle>
              <div className="flex space-x-1">
                <Dot className="w-2 h-2 bg-gray-700" />
                <Dot className="w-2 h-2 bg-alterra" />
                <Dot className="w-2 h-2 bg-white" />
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center justify-center py-6 md:py-0">
              <div className="w-24 h-24 relative mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-alterra/50 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-4 border-dashed border-white/50  rounded-full animate-spin-slower"></div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <span className="text-4xl font-bold text-slate-200">404</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
              <p className="text-slate-400 text-center mb-4">
                A página que você está procurando não existe ou foi removida.
                Você pode ter digitado o endereço incorretamente ou a página
                pode ter sido movida para outro local.
              </p>

              <div className="w-full max-w-xs p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 font-mono text-xs text-slate-400">
                <div className="text-red-400">{">"} ERROR_CODE: 0x80070002</div>
                <div>{">"} LOCATION: /alterra/system/path</div>
                <div>{">"} STATUS: resource_not_found</div>
                <div className="mt-2 text-cyan-400">
                  {">"} Initiating recovery protocol...
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center space-x-4 pt-2 md:pt-0">
            <Button
              variant="border"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button
              variant="border"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
              asChild
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </CardFooter>
          <div className="flex gap-1.5 items-center justify-center pb-4 pt-2">
            <Dot className="bg-alterra" />
            <span className="text-xs text-slate-500 font-mono">ALTERRA OS v12.245</span>
            <Dot className="bg-alterra" />
          </div>
        </Card>
      </div>
    </div>
  );
}
