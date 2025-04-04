import Image from "next/image";
import { Bell, Cog, LogOut, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const user = [
   { icon: User, label: "Perfil", href: "/dashboard/configuracoes" },
   { icon: Cog, label: "Configurações", href: "/dashboard/configuracoes" },
   { icon: LogOut, label: "Sair", href: "" },
]

// Imagem
import Alterra from "@/../public/imgs/alterra.gif";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between py-4 border-b border-slate-700/50 mb-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <Image src={Alterra} alt="Alterra Logo" className="w-10" />
            <span className="text-2xl font-bold ml-2">
              Alterra <span className="text-[#FF8601]">Corps</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 rounded-full px-3 py-1.5 border border-slate-700/50 backdrop-blur-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search systems..."
                className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder:text-slate-500"
              />
            </div>

            <Button size="icon" className="relative bg-transparent border-0">
              <Bell className="h-7 w-7 text-slate-400" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-alterra rounded-full" />
            </Button>

            <div className="flex items-center space-x-3">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Avatar className="size-[45px] select-none items-center justify-center overflow-hidden rounded-full cursor-pointer">
                    <AvatarImage
                      className="size-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s"
                      alt=""
                    />
                    <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">
                      AKA
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[280px] bg-gray-900 text-white rounded-md shadow-md border border-gray-600 py-1"
                    align="end"
                  >
                    <DropdownMenu.Item asChild>
                      <div className="flex items-center gap-2 px-3 py-1 text-sm outline-none">
                        <Avatar className="size-[35px] select-none items-center justify-center overflow-hidden rounded-full cursor-pointer">
                          <AvatarImage
                            className="size-full object-cover"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s"
                            alt=""
                          />
                          <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">
                            AKA
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-[14px]">Roboute Guilliman</p>
                          <span className="text-[12px] text-gray-500">
                            ultramarine@macragge.com
                          </span>
                        </div>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                    {user.map((item) => (
                      <DropdownMenu.Item asChild key={item.label}>
                        {item.label === "Sair" ? (
                          <div className="flex flex-col w-full outline-none">
                            <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                            <div className="px-1">
                              <Link
                                href={item.href}
                                className="w-full flex items-center gap-2 px-2 py-2 rounded-sm hover:bg-red-700/40 transition outline-none text-sm"
                              >
                                {item.icon && <item.icon className="w-4 h-4" />}
                                {item.label}
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="px-1 outline-none">
                            <Link
                              href={item.href}
                              className="w-full flex items-center gap-2 px-2 py-2 rounded-sm hover:bg-gray-700 transition outline-none text-sm"
                            >
                              {item.icon && <item.icon className="w-4 h-4" />}
                              {item.label}
                            </Link>
                          </div>
                        )}
                      </DropdownMenu.Item>
                    ))}
                    <DropdownMenu.Arrow className="fill-gray-900" />
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
