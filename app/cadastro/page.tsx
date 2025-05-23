"use client"

import { useState } from "react"
import Link from "next/link"
import { Diamond, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Diamond className="h-6 w-6" />
              <span>RS Joias</span>
            </Link>
            <h1 className="text-2xl font-bold">Crie sua conta</h1>
            <p className="text-sm text-muted-foreground">Preencha os dados abaixo para criar sua conta</p>
          </div>
          <div className="mt-8 grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">Nome</Label>
                    <Input
                      id="first-name"
                      placeholder="João"
                      autoCapitalize="words"
                      autoComplete="given-name"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Sobrenome</Label>
                    <Input
                      id="last-name"
                      placeholder="Silva"
                      autoCapitalize="words"
                      autoComplete="family-name"
                      autoCorrect="off"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="nome@exemplo.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full">
                  Criar Conta
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Google</Button>
              <Button variant="outline">Facebook</Button>
            </div>
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="font-medium underline underline-offset-4 hover:text-primary">
                Faça login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
