import Link from "next/link"
import { ArrowUpRight, DollarSign, Package, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.231,89</div>
                <p className="text-xs text-muted-foreground">+20.1% em relação ao mês passado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Novos Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% em relação ao mês passado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% em relação ao mês passado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+201 produtos adicionados este mês</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Visão Geral</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Gráfico de Vendas
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Pedidos Recentes</CardTitle>
                <CardDescription>Você recebeu 30 pedidos este mês.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Pedido #1234</p>
                      <p className="text-sm text-muted-foreground">Ana Silva • R$ 1.999,00</p>
                    </div>
                    <div className="ml-auto font-medium">Em processamento</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Pedido #1233</p>
                      <p className="text-sm text-muted-foreground">Carlos Oliveira • R$ 3.499,00</p>
                    </div>
                    <div className="ml-auto font-medium">Enviado</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Pedido #1232</p>
                      <p className="text-sm text-muted-foreground">Mariana Costa • R$ 2.699,00</p>
                    </div>
                    <div className="ml-auto font-medium">Entregue</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/dashboard/pedidos" className="flex items-center">
                    Ver todos os pedidos
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Análise de Vendas</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Gráfico de Análise de Vendas
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Anel de Diamante Solitário</p>
                      <p className="text-sm text-muted-foreground">124 vendas • R$ 247.876,00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Colar de Ouro 18k</p>
                      <p className="text-sm text-muted-foreground">98 vendas • R$ 176.400,00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Brincos de Prata com Zircônia</p>
                      <p className="text-sm text-muted-foreground">87 vendas • R$ 78.300,00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Relatório Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Gráfico de Relatório Mensal
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Resumo Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Receita Total</p>
                    </div>
                    <div className="font-medium">R$ 502.430,00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Custo de Produtos</p>
                    </div>
                    <div className="font-medium">R$ 201.972,00</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Despesas Operacionais</p>
                    </div>
                    <div className="font-medium">R$ 75.364,50</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Lucro Líquido</p>
                    </div>
                    <div className="font-medium">R$ 225.093,50</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/dashboard/relatorios" className="flex items-center">
                    Ver relatório completo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
