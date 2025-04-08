"use client";

import { usePathname } from "next/navigation";

// Componentes
import { Header } from "./(navigation)/Header";
import { Sidebar } from "./(navigation)/Sidebar";

// Componentes Defaults
import Canva from "@/components/ui/canva";

//import { AlertProvider } from "@/components/Alert";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // Rotas onde o Sidebar e Header NÃO devem aparecer
  const hiddenRoutes = ["/login", "/register", "/recuperar-senha"];
  // Verifica se a rota atual inicia com alguma das ocultas
  const hideNavigation = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      <Canva />
      <div className="flex justify-center w-full p-4 relative z-10">
        {/* Exibir Sidebar e Header apenas se não estiver nas rotas ocultas */}
        <div className="min-w-[93%] [@media(min-width:1600px)]:min-w-[77%]">
          {!hideNavigation && <Header />}
          <div className="flex w-full">
            {!hideNavigation && <Sidebar />}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

//<AlertProvider></AlertProvider>
// {!hideNavigation && <Header />}
