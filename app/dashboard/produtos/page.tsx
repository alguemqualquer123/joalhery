"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Package, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Dados de exemplo para produtos
const produtos = [
  {
    id: 1,
    nome: "Anel de Diamante Solitário",
    categoria: "Anéis",
    preco: 4999.99,
    estoque: 15,
    status: "Em estoque",
  },
  {
    id: 2,
    nome: "Colar de Ouro 18k",
    categoria: "Colares",
    preco: 1799.99,
    estoque: 8,
    status: "Em estoque",
  },
  {
    id: 3,
    nome: "Brincos de Prata com Zircônia",
    categoria: "Brincos",
    preco: 899.99,
    estoque: 22,
    status: "Em estoque",
  },
  {
    id: 4,
    nome: "Pulseira de Ouro Rosé",
    categoria: "Pulseiras",
    preco: 1299.99,
    estoque: 3,
    status: "Baixo estoque",
  },
  {
    id: 5,
    nome: "Relógio de Luxo Diamond",
    categoria: "Relógios",
    preco: 7999.99,
    estoque: 5,
    status: "Em estoque",
  },
  {
    id: 6,
    nome: "Conjunto de Joias Safira",
    categoria: "Conjuntos",
    preco: 5499.99,
    estoque: 0,
    status: "Sem estoque",
  },
  {
    id: 7,
    nome: "Pingente de Esmeralda",
    categoria: "Pingentes",
    preco: 2499.99,
    estoque: 7,
    status: "Em estoque",
  },
]

export default function ProdutosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("todos")

  const filteredProducts = produtos.filter((produto) => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "todos" || produto.categoria === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Produtos</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Produtos</CardTitle>
            <CardDescription>Gerencie seu catálogo de produtos, estoque e preços.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todas Categorias</SelectItem>
                      <SelectItem value="Anéis">Anéis</SelectItem>
                      <SelectItem value="Colares">Colares</SelectItem>
                      <SelectItem value="Brincos">Brincos</SelectItem>
                      <SelectItem value="Pulseiras">Pulseiras</SelectItem>
                      <SelectItem value="Relógios">Relógios</SelectItem>
                      <SelectItem value="Conjuntos">Conjuntos</SelectItem>
                      <SelectItem value="Pingentes">Pingentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((produto) => (
                      <TableRow key={produto.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                              <Package className="h-4 w-4" />
                            </div>
                            <span>{produto.nome}</span>
                          </div>
                        </TableCell>
                        <TableCell>{produto.categoria}</TableCell>
                        <TableCell>
                          {produto.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                        <TableCell>{produto.estoque}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              produto.status === "Em estoque"
                                ? "bg-green-100 text-green-800"
                                : produto.status === "Baixo estoque"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {produto.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Abrir menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash className="mr-2 h-4 w-4" />
                                Excluir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
