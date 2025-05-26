import { CreditCard } from "lucide-react";

import { Planos } from "./(informations)/Planos";
import { Faturas } from "./(informations)/Faturas";
import { AlertaDeUso } from "./(informations)/AlertasDeUso";
import { UsoDeRecursos } from "./(informations)/UsoDeRecursos";
import { CirculoDeCusto } from "./(informations)/CirculoDeCusto";
import { DespesasMensais } from "./(informations)/DespesasMensais";
import { FaturamentoInfo } from "./(informations)/FaturamentoInfo";
import { MetodoDePagamento } from "./(informations)/MetodoDePagamento";
import { NotificacaoDePagamento } from "./(informations)/NotificacaoDePagamento";
import { NotificacaoDePreferencias } from "./(informations)/NotificacaoDePreferencias";
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
               <FaturamentoInfo />
               <div className="flex gap-6">
                  <DespesasMensais />
                  <CirculoDeCusto />
               </div>
               <div className="flex gap-6">
                  <UsoDeRecursos />
                  <AlertaDeUso />
               </div>
               <MetodoDePagamento />
               <Planos />
               <div className="flex gap-6">
                  <NotificacaoDePagamento />
                  <NotificacaoDePreferencias />
               </div>
            </PageContent>
         </Page>
      </>
   );
}
