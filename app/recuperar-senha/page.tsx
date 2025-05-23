"use client"

import Link from "next/link"
import { Diamond } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RecuperarSenhaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Diamond className="h-6 w-6" />
              <span>RS Joias</span>
            </Link>
            <h1 className="text-2xl font-bold">Recuperar Senha</h1>
            <p className="text-sm text-muted-foreground">
              Digite seu email para receber um link de recuperação de senha
            </p>
          </div>
          <div className="mt-8 grid gap-6">
            <form>
              <div className="grid gap-4">
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
                <Button type="submit" className="w-full">
                  Enviar Link de Recuperação
                </Button>
              </div>
            </form>
            <div className="text-center text-sm">
              Lembrou sua senha?{" "}
              <Link href="/login" className="font-medium underline underline-offset-4 hover:text-primary">
                Voltar para o login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
