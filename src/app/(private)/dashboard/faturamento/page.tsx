import { Faturas } from "./(informations)/Faturas";
import { CreditCard } from "lucide-react";
import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/page";
import { FaturamentoInfo } from "./(informations)/FaturamentoInfo";
import { DespesasMensais } from "./(informations)/DespesasMensais";
import { CirculoDeCusto } from "./(informations)/CirculoDeCusto";
import { UsoDeRecursos } from "./(informations)/UsoDeRecursos";
import { AlertaDeUso } from "./(informations)/AlertasDeUso";

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
               <FaturamentoInfo />
               <div className="flex gap-6">
                  <DespesasMensais />
                  <CirculoDeCusto />
               </div>
               <div className="flex gap-6">
                  <UsoDeRecursos />
                  <AlertaDeUso />
               </div>
            </PageContent>
         </Page>
      </>
   );
}
