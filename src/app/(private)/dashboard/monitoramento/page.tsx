import { Loading } from "@/components/ui/loading";
import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/page";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Monitoramento() {
   return (
      <>
         <Loading />
         <Page>
            <PageHeader>
               <PageTitle>
                  <ChartNoAxesColumnIncreasing className="w-6 h-6 mr-2 text-alterra" />
                  Monitoramento de Consumo da API
               </PageTitle>
               <PageDescription>Acompanhe o uso, desempenho e erros da sua API.</PageDescription>
            </PageHeader>
            <PageContent>

            </PageContent>
         </Page>
      </>
   )
}
