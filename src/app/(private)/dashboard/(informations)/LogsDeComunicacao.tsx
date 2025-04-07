import { MessageSquare, Mic } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// Componentes
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot } from "@/components/ui/dot";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  {
    id: 1,
    sender: "User",
    content: "Olá, preciso de ajuda com o pedido #12345.",
    time: "12:45",
  },
  {
    id: 2,
    sender: "Admin",
    content: "Claro! O que você precisa saber?",
    time: "14:30",
  },
  {
    id: 3,
    sender: "Admin",
    content: "Tentativa de login incomum bloqueado no IP 192.168.1.45",
    time: "15:00",
  },
  { id: 4, sender: "User", content: "Obrigado pela ajuda!", time: "21:00" },
  {
    id: 5,
    sender: "User",
    content: "Qual é o status do meu pedido?",
    time: "03:00",
  },
];

export function LogsDeComunicacao() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 pb-0">
          <MessageSquare className="w-5 h-5 m-0 text-blue-500" />
          <CardTitle className="text-lg">Log de Comunicações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 px-3 flex tems-center justify-between"
            >
              <div className="flex gap-2">
                <div>
                  <Avatar className="select-none items-center justify-center overflow-hidden rounded-full cursor-pointer">
                    <AvatarImage
                      className="object-cover size-[45px] rounded-full"
                      src=""
                      alt=""
                    />
                    <AvatarFallback className="flex size-[45px] rounded-full items-center justify-center bg-gray-600 font-medium">
                      AKA
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col gap-1 ml-2">
                  <span className="text-slate-300">{message.sender}</span>
                  <span className="text-slate-400 text-sm">
                    {message.content}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-slate-500 text-sm">{message.time}</span>
                <Dot className="bg-blue-500 ml-2" />
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex gap-3 border-t border-slate-700/50 pt-4">
          <Input type="text" placeholder="Digite uma mensagem" />
          <Button variant="blue">
            <Mic className="w-5 h-5" />
          </Button>
          <Button variant="green">
            <MessageSquare className="w-5 h-5" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
