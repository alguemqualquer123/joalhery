"use client"

import { useState } from "react"
import { Eye, EyeOff, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientePage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Minha Conta</h1>
      </div>
      <Tabs defaultValue="perfil" className="space-y-4">
        <TabsList>
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="endereco">Endereços</TabsTrigger>
          <TabsTrigger value="senha">Senha</TabsTrigger>
        </TabsList>
        <TabsContent value="perfil" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Atualize suas informações pessoais aqui.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nome</Label>
                  <Input id="first-name" defaultValue="João" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Sobrenome</Label>
                  <Input id="last-name" defaultValue="Silva" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" defaultValue="(11) 98765-4321" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" defaultValue="123.456.789-00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birth-date">Data de Nascimento</Label>
                <Input id="birth-date" type="date" defaultValue="1990-01-01" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="endereco" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Endereços</CardTitle>
              <CardDescription>Gerencie seus endereços de entrega.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Endereço Principal</h3>
                    <p className="text-sm text-muted-foreground">
                      João Silva
                      <br />
                      Rua das Flores, 123
                      <br />
                      Jardim Primavera
                      <br />
                      São Paulo, SP - 01234-567
                      <br />
                      Brasil
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Endereço de Trabalho</h3>
                    <p className="text-sm text-muted-foreground">
                      João Silva
                      <br />
                      Av. Paulista, 1000, Sala 123
                      <br />
                      Bela Vista
                      <br />
                      São Paulo, SP - 01310-100
                      <br />
                      Brasil
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Adicionar Novo Endereço</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="senha" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alterar Senha</CardTitle>
              <CardDescription>Atualize sua senha para manter sua conta segura.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <div className="relative">
                  <Input id="current-password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
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
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <div className="relative">
                  <Input id="new-password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Input id="confirm-password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Atualizar Senha</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
