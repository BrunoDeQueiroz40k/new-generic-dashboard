import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Mail, LockKeyhole, UserPlus2, Lock, User } from "lucide-react";

// Compoentes
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Component Defaults
import Canva from "@/components/ui/canva";
import Particles from "@/components/ui/particles";
import AlterraLogo from "@/components/ui/alterra-logo";
import { Version } from "@/app/version";

export default function Register() {
  return (
    <>
      <Canva />
      <Particles />
      <div className="w-full flex items-center justify-center">
        <div className="w-[450px]">
          <AlterraLogo />
          <Card className="bg-slate-900/70 border-slate-700/50 backdrop-blur-md overflow-hidden pb-4">
            <CardHeader className="pb-4 md:pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Criar Conta</CardTitle>
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                  <div className="h-2 w-2 rounded-full bg-alterra"></div>
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
              <CardDescription>Crie sua conta e se junte a nós</CardDescription>
            </CardHeader>

            <CardContent className="md:pt-4 pb-0">
              <div className="flex gap-4">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <div>
                    <User className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                    <Input
                      id="nome"
                      type="nome"
                      placeholder="John"
                      className="pl-10 mt-2 md:mt-1 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="sobremone">Sobrenome</Label>
                  <Input
                    id="sobremone"
                    type="sobremone"
                    placeholder="Warhammer"
                    className="mt-2 md:mt-1 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <div>
                  <Mail className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="johnwarhammer@gmail.com"
                    className="pl-10 mt-2 md:mt-1 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <div>
                  <Lock className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite a sua senha"
                    className="pl-10 mt-2 md:mt-1 mb-4 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <div>
                  <LockKeyhole className="absolute text-slate-400 mt-2.5 ml-2.5 w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    type="confirmPassword"
                    placeholder="Confirme a sua senha"
                    className="pl-10 mt-2 md:mt-1 bg-slate-800/50 border-slate-700/50 text-slate-200"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 py-6">
                <Checkbox
                  id="terms"
                  className="border-slate-700 data-[state=checked]:bg-alterra data-[state=checked]:border-alterra"
                />
                <Label htmlFor="terms">
                  Eu aceito os{" "}
                  <Link href="#" className="text-alterra hover:underline">
                    Termos de serviço
                  </Link>
                  {" "}e{" "}
                  <Link href="#" className="text-alterra hover:underline">
                    Política de privacidade
                  </Link>
                </Label>
              </div>

              <Button variant="alterra" className="w-full">
                <UserPlus2 className="mr-2 h-4 w-4 p-0" />
                Cadastrar-se
              </Button>

              <div className="flex flex-col gap-4 text-center pt-4">
                <p>
                  Já possuí tem uma conta?{" "}
                  <Link className="text-alterra hover:underline" href="/login">
                    Login
                  </Link>
                </p>
              </div>
            </CardContent>
            <Version />
          </Card>
        </div>
      </div>
    </>
  );
}
