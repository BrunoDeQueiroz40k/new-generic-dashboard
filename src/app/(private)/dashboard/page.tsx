import { Page } from "@/components/ui/page";
import { SystemOverview } from "./(informations)/SystemOverview";
import { TempoDoSistema } from "./(informations)/(components)/TempoDoSistema";
import { UltimasChamadas } from "./(informations)/UltimasChamadas";
import { LogsDeComunicacao } from "./(informations)/LogsDeComunicacao";
import { ControleDeAmbiente } from "./(informations)/ControleDeAmbiente";
import { AlertasDoSistema } from "./(informations)/(components)/AlertasDoSistema";

export default function Dashboard() {
  return (
    <>
      <Page>
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <SystemOverview />
            <LogsDeComunicacao />
          </div>
          <div className="space-y-6 min-w-[250px] max-w-[270px]">
            <TempoDoSistema />
            <UltimasChamadas />
            <ControleDeAmbiente />
            <AlertasDoSistema />
          </div>
        </div>
      </Page>
    </>
  );
}
