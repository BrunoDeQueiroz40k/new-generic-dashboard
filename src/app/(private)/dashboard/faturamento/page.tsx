import { Faturas } from "./Faturas";
import { CreditCard } from "lucide-react";
import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/page";

export default function Faturamento() {
   return (
      <>
         <Page>
            <PageHeader>
               <PageTitle>
                  <CreditCard className="w-6 h-6 mr-2 text-alterra" />
                  Faturamentos
               </PageTitle>
               <PageDescription>Gerencie suas faturas, pagamentos e planos de assinatura.</PageDescription>
            </PageHeader>
            <PageContent>
               <Faturas />
            </PageContent>
         </Page>
      </>
   );
}