import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Mail, RotateCcw } from "lucide-react";

// Componentes
import { Version } from "@/app/version";
import { Dot } from "@/components/ui/dot";
import { Title } from "@/components/ui/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Component Defaults
import Canva from "@/components/ui/canva";
import Particles from "@/components/ui/particles";
import AlterraLogo from "@/components/ui/alterra-logo";

export default function ForgotPassword() {
   return (
      <>
         <Canva />
         <Particles />
         <div className="w-full flex items-center justify-center">
            <div className="w-[400px]">
               <AlterraLogo />
               <Card className="">
                  <CardHeader className="flex-col gap-1 pb-4 md:pt-4 md:pb-0">
                     <div className="flex justify-between items-center">
                        <CardTitle>Resetar Senha</CardTitle>
                        <div className="flex items-center space-x-1">
                           <Dot className="w-2 h-2 bg-gray-700" />
                           <Dot className="w-2 h-2 bg-alterra" />
                           <Dot className="w-2 h-2 bg-white" />
                        </div>
                     </div>
                     <CardDescription>
                        Não se preocupe, nós podemos ajudar!
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                     <div className="flex flex-col items-center text-center py-4 pb-6">
                        <span className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-full">
                           <Mail className="w-8 h-8 text-alterra" />
                        </span>
                        <Title className="text-lg pb-0">Recuperar tenha</Title>
                        <p className="text-sm text-slate-400">Nós envie o seu endereço de E-mail e mandaremos instruções para resetar a sua senha!</p>
                     </div>

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
                     <Button variant="alterra" className="w-full p-0">
                        <Link href="/" className="w-full h-full flex items-center justify-center">
                           <RotateCcw className="mr-2 h-4 w-4" />
                           Resetar senha
                        </Link>
                     </Button>

                     <div className="flex flex-col gap-4 text-center pt-6">
                        <p>
                           Lembrou da senha?{" "}
                           <Link className="text-alterra hover:underline" href="/login">
                              Voltar ao login
                           </Link>
                        </p>
                     </div>
                     <Version />
                  </CardContent>
               </Card>
            </div>
         </div>
      </>
   );
}
