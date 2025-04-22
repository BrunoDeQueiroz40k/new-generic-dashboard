// Componentes
import { Processos } from "./(components)/Processos";
import { Armazenamento } from "./(components)/Armazenamento";
import { ResumoDasAPIs } from "./(components)/ResumoDasAPIs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Resumo() {
  return (
    <>
      <Tabs defaultValue="api">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="api">APIs</TabsTrigger>
            <TabsTrigger value="processos">Processos</TabsTrigger>
            <TabsTrigger value="armazenamento">Armazenamento</TabsTrigger>
          </TabsList>
          <div className="flex gap-4 text-sm">
            <span className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              Status da Conta
            </span>
            <span className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
              Boletos pendentes
            </span>
          </div>
        </div>
        <TabsContent value="api">
          <ResumoDasAPIs />
        </TabsContent>
        <TabsContent value="processos" className="w-full">
          <Processos />
        </TabsContent>
        <TabsContent value="armazenamento">
          <Armazenamento />
        </TabsContent>
      </Tabs>
    </>
  );
}
