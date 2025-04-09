import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/page";
import { Key } from "lucide-react";
import { MinhasAPIs } from "./(informations)/MinhasAPIs";
import { LogsDeAcesso } from "./(informations)/LogsDeAcesso";
import { GerarNovaChaveAPI } from "./(informations)/GerarNovaChaveAPI";
import { GerenciarChavesAPI } from "./(informations)/GerenciarChavesAPI";

export default function GerenciarAPIs() {
   return (
      <>
         <Page>
            <PageHeader>
               <PageTitle>
                  <Key className="w-6 h-6 mr-2 text-alterra" />
                  Gerenciar APIs
               </PageTitle>
               <PageDescription>Gerencia suas APIs, Chaves e controles de acesso</PageDescription>
            </PageHeader>
            <PageContent>
               <MinhasAPIs />
               <div className="flex gap-4 justify-between">
                  <GerarNovaChaveAPI />
                  <GerenciarChavesAPI />
               </div>
               <LogsDeAcesso />
            </PageContent>
         </Page>
      </>
   )
}