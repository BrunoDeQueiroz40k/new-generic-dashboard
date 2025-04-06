import {
  LayoutDashboard,
  Key,
  CreditCard,
  ChartNoAxesColumnIncreasing,
  Search,
  BadgeHelp,
  FileText,
  ChartSpline,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    title: "PRINCIPAL",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      {
        icon: Key,
        label: "Gerenciar APIs",
        href: "/dashboard/gerenciar-api",
      },
      {
        icon: CreditCard,
        label: "Faturamento",
        href: "/dashboard/faturamento",
      },
      {
        icon: ChartNoAxesColumnIncreasing,
        label: "Monitoramento",
        href: "/dashboard/monitoramento",
      },
      {
        icon: Search,
        label: "Consulta de Dados",
        href: "/dashboard/consulta-de-dados",
      },
    ],
  },
  {
    title: "SUPORTE",
    items: [
      { icon: BadgeHelp, label: "Suporte", href: "/dashboard/suporte" },
      {
        icon: FileText,
        label: "Documentação",
        href: "/dashboard/documentacao",
      },
      {
        icon: ChartSpline,
        label: "Relatórios",
        href: "/dashboard//relatorios",
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="col-span-12 md:col-span-3 lg:col-span-2 mr-6">
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardContent className="py-4 px-2">
            <nav className="space-y-4">
              {menuItems.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xs font-semibold text-gray-400 mb-2 px-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items?.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 text-sm rounded-sm px-7 py-2 transition-colors ${
                            pathname === item.href
                              ? "text-alterra"
                              : "text-gray-300 hover:text-alterra hover:bg-slate-800/50"
                          }`}
                        >
                          {item.icon && <item.icon className="w-[18px] h-[18px]" />}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="flex justify-center"> 
              <Separator className="my-4 bg-slate-700/50 w-[90%]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
