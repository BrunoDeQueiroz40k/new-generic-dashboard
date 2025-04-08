import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Mail, LockKeyhole, LogIn, Github } from "lucide-react";

// Componentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Component Defaults
import Canva from "@/components/ui/canva";
import Particles from "@/components/ui/particles";
import AlterraLogo from "@/components/ui/alterra-logo";
import { Version } from "@/app/version";

export default function Login() {
  return (
    <>
      <Canva />
      <Particles />
      <div className="w-full flex items-center justify-center">
        <div className="w-[400px]">
          <AlterraLogo />
          <Card className="">
            <CardHeader className="pb-4 md:pt-4 md:pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Fazer Login</CardTitle>
                <div className="flex items-center space-x-1">
                  <Dot className="w-2 h-2 bg-gray-700" />
                  <Dot className="w-2 h-2 bg-alterra" />
                  <Dot className="w-2 h-2 bg-white" />
                </div>
              </div>
              <CardDescription>
                Faça login para acessar o sistema
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div>
                  <Mail className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="pl-10 mt-2 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <div>
                  <LockKeyhole className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite a sua senha"
                    className="pl-10 mt-2 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>

              <Button variant="alterra" className="w-full mt-2">
                <LogIn className="mr-2 h-4 w-4" />
                <Link href="/dashboard">Fazer Login</Link>
              </Button>

              <div className="text-center pt-4">
                <Link href="" className="text-alterra hover:underline">Esqueceu sua senha?</Link>
              </div>

              <div className="relative flex items-center justify-center py-4">
                <Separator className="absolute w-full bg-slate-700/50" />
                <span className="relative px-2 bg-slate-900/70 text-sm text-slate-500">
                  Ou continue com
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/70 text-slate-300">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                  Google
                </Button>
                <Button className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/70 text-slate-300">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>

              <div className="flex flex-col gap-4 text-center pt-6">
                <Link href="/" className="text-alterra hover:underline">
                  Configurar autenticação de 2 fatores
                </Link>
                <div>
                  <p>
                    Não tem uma conta?{" "}
                    <Link className="text-alterra hover:underline" href="/register">
                      Registrar-se
                    </Link>
                  </p>
                </div>
              </div>
              <Version />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
