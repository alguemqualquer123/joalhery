"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Diamond, Home, LogOut, Menu, Package, Settings, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/produtos",
      label: "Produtos",
      icon: Package,
      active: pathname === "/dashboard/produtos",
    },
    {
      href: "/dashboard/pedidos",
      label: "Pedidos",
      icon: ShoppingBag,
      active: pathname === "/dashboard/pedidos",
    },
    {
      href: "/dashboard/clientes",
      label: "Clientes",
      icon: Users,
      active: pathname === "/dashboard/clientes",
    },
    {
      href: "/dashboard/relatorios",
      label: "Relatórios",
      icon: BarChart3,
      active: pathname === "/dashboard/relatorios",
    },
    {
      href: "/dashboard/configuracoes",
      label: "Configurações",
      icon: Settings,
      active: pathname === "/dashboard/configuracoes",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setOpen(false)}>
                <Diamond className="h-6 w-6" />
                <span>RS Joias</span>
              </Link>
              <div className="my-4 h-px bg-muted" />
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                    route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => setOpen(false)}>
                <LogOut className="h-5 w-5" />
                Sair
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Diamond className="h-6 w-6" />
          <span className="hidden md:inline-block">RS Joias</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
