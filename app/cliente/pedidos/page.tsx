import Link from "next/link"
import { ArrowUpRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Dados de exemplo para pedidos
const pedidos = [
  {
    id: "#12345",
    data: "15/05/2023",
    status: "Entregue",
    total: 1999.99,
    itens: 2,
  },
  {
    id: "#12346",
    data: "02/06/2023",
    status: "Em processamento",
    total: 3499.99,
    itens: 1,
  },
  {
    id: "#12347",
    data: "18/07/2023",
    status: "Enviado",
    total: 2699.99,
    itens: 3,
  },
  {
    id: "#12348",
    data: "30/08/2023",
    status: "Entregue",
    total: 4999.99,
    itens: 2,
  },
  {
    id: "#12349",
    data: "12/09/2023",
    status: "Cancelado",
    total: 1299.99,
    itens: 1,
  },
]

export default function PedidosPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Meus Pedidos</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pedidos</CardTitle>
          <CardDescription>Visualize e acompanhe todos os seus pedidos.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Itens</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido.id}>
                  <TableCell className="font-medium">{pedido.id}</TableCell>
                  <TableCell>{pedido.data}</TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        pedido.status === "Entregue"
                          ? "bg-green-100 text-green-800"
                          : pedido.status === "Em processamento"
                            ? "bg-blue-100 text-blue-800"
                            : pedido.status === "Enviado"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {pedido.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    {pedido.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>{pedido.itens}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Link href={`/cliente/pedidos/${pedido.id}`} className="flex items-center">
                        Detalhes
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Rastreamento de Pedidos</CardTitle>
          <CardDescription>Rastreie seus pedidos em trânsito.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Pedido #12346</h3>
                <p className="text-sm text-muted-foreground">Em trânsito - Previsão de entrega: 10/06/2023</p>
                <div className="mt-2 h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-3/4 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Pedido #12347</h3>
                <p className="text-sm text-muted-foreground">Em trânsito - Previsão de entrega: 22/07/2023</p>
                <div className="mt-2 h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-1/2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Ver Todos os Rastreamentos</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
