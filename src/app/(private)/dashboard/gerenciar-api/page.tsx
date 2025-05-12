import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/page";
import { Key } from "lucide-react";
import { MinhasAPIs } from "./(informations)/MinhasAPIs";
import { LogsDeAcesso } from "./(informations)/LogsDeAcesso";
import { GerenciarNovasChavesAPIs } from "./(informations)/GerenciarChavesAPI";

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
               <GerenciarNovasChavesAPIs />
               <LogsDeAcesso />
            </PageContent>
         </Page>
      </>
   )
}
