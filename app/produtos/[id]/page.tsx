"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo para produtos
const produtos = {
  1: {
    id: 1,
    nome: "Anel Solitário de Diamante",
    preco: 4999.99,
    categoria: "Anéis",
    material: "Ouro 18k",
    pedra: "Diamante 1ct",
    descricao:
      "Um clássico anel solitário com diamante de 1 quilate, lapidação brilhante, montado em ouro 18k. Perfeito para pedidos de casamento ou ocasiões especiais.",
    detalhes: [
      "Diamante certificado GIA",
      "Ouro 18k branco, amarelo ou rosé",
      "Lapidação brilhante redonda",
      "Peso do diamante: 1.00ct",
      "Cor: D-F",
      "Pureza: VS1-VS2",
    ],
    imagens: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    tamanhos: ["14", "15", "16", "17", "18", "19", "20"],
    cores: ["Ouro Branco", "Ouro Amarelo", "Ouro Rosé"],
    avaliacoes: [
      {
        nome: "Maria Silva",
        nota: 5,
        comentario: "Produto excepcional! Qualidade impecável e entrega rápida.",
        data: "15/05/2023",
      },
      {
        nome: "João Santos",
        nota: 5,
        comentario: "Perfeito para o pedido de casamento. Minha noiva amou!",
        data: "02/06/2023",
      },
    ],
  },
  // Adicione mais produtos conforme necessário
}

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const [quantidade, setQuantidade] = useState(1)
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("")
  const [corSelecionada, setCorSelecionada] = useState("")
  const [imagemAtiva, setImagemAtiva] = useState(0)

  const produto = produtos[Number.parseInt(params.id) as keyof typeof produtos]

  if (!produto) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link href="/colecoes">
          <Button className="mt-4">Voltar para Coleções</Button>
        </Link>
      </div>
    )
  }

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1)
  }

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-xl font-bold">RS Joias</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/colecoes" className="text-sm font-medium hover:underline underline-offset-4">
              Coleções
            </Link>
            <Link href="/aneis" className="text-sm font-medium hover:underline underline-offset-4">
              Anéis
            </Link>
            <Link href="/colares" className="text-sm font-medium hover:underline underline-offset-4">
              Colares
            </Link>
            <Link href="/brincos" className="text-sm font-medium hover:underline underline-offset-4">
              Brincos
            </Link>
            <Link href="/sobre" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button size="sm">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <Link href="/aneis" className="inline-flex items-center text-sm font-medium text-muted-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Anéis
          </Link>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={produto.imagens[imagemAtiva] || "/placeholder.svg"}
                  alt={produto.nome}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {produto.imagens.map((imagem, index) => (
                  <button
                    key={index}
                    onClick={() => setImagemAtiva(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border ${
                      imagemAtiva === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image
                      src={imagem || "/placeholder.svg"}
                      alt={`${produto.nome} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{produto.nome}</h1>
                <p className="text-2xl font-bold text-primary mt-2">
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({produto.avaliacoes.length} avaliações)</span>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground">{produto.descricao}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Tamanho</Label>
                  <RadioGroup
                    value={tamanhoSelecionado}
                    onValueChange={setTamanhoSelecionado}
                    className="flex flex-wrap gap-2 mt-2"
                  >
                    {produto.tamanhos.map((tamanho) => (
                      <div key={tamanho} className="flex items-center space-x-2">
                        <RadioGroupItem value={tamanho} id={`tamanho-${tamanho}`} className="sr-only" />
                        <Label
                          htmlFor={`tamanho-${tamanho}`}
                          className={`flex h-10 w-10 items-center justify-center rounded-md border cursor-pointer ${
                            tamanhoSelecionado === tamanho
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-input"
                          }`}
                        >
                          {tamanho}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label className="text-base font-medium">Cor do Ouro</Label>
                  <RadioGroup
                    value={corSelecionada}
                    onValueChange={setCorSelecionada}
                    className="flex flex-wrap gap-2 mt-2"
                  >
                    {produto.cores.map((cor) => (
                      <div key={cor} className="flex items-center space-x-2">
                        <RadioGroupItem value={cor} id={`cor-${cor}`} className="sr-only" />
                        <Label
                          htmlFor={`cor-${cor}`}
                          className={`px-4 py-2 rounded-md border cursor-pointer ${
                            corSelecionada === cor
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-input"
                          }`}
                        >
                          {cor}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label className="text-base font-medium">Quantidade</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon" onClick={decrementarQuantidade} disabled={quantidade <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantidade}</span>
                    <Button variant="outline" size="icon" onClick={incrementarQuantidade}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Material:</span>
                      <span className="text-sm">{produto.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Pedra:</span>
                      <span className="text-sm">{produto.pedra}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Categoria:</span>
                      <span className="text-sm">{produto.categoria}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="detalhes" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
                <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
                <TabsTrigger value="entrega">Entrega</TabsTrigger>
              </TabsList>
              <TabsContent value="detalhes" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Especificações do Produto</h3>
                    <ul className="space-y-2">
                      {produto.detalhes.map((detalhe, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm">{detalhe}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="avaliacoes" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Avaliações dos Clientes</h3>
                    <div className="space-y-6">
                      {produto.avaliacoes.map((avaliacao, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{avaliacao.nome}</span>
                              <div className="flex">
                                {[...Array(avaliacao.nota)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{avaliacao.data}</span>
                          </div>
                          <p className="text-sm">{avaliacao.comentario}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="entrega" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Informações de Entrega</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Frete Grátis</h4>
                        <p className="text-sm text-muted-foreground">
                          Para compras acima de R$ 2.000,00 em todo o Brasil.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Prazo de Entrega</h4>
                        <p className="text-sm text-muted-foreground">
                          • São Paulo e região metropolitana: 1-2 dias úteis
                          <br />• Demais capitais: 2-3 dias úteis
                          <br />• Interior: 3-5 dias úteis
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Embalagem Especial</h4>
                        <p className="text-sm text-muted-foreground">
                          Todas as joias são entregues em embalagem de presente exclusiva da RS Joias.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-black text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span>RS Joias</span>
              </Link>
              <p className="text-sm text-gray-400">Elegância e sofisticação em cada detalhe. Desde 2010.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Navegação</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/colecoes" className="hover:text-white">
                    Coleções
                  </Link>
                </li>
                <li>
                  <Link href="/aneis" className="hover:text-white">
                    Anéis
                  </Link>
                </li>
                <li>
                  <Link href="/colares" className="hover:text-white">
                    Colares
                  </Link>
                </li>
                <li>
                  <Link href="/brincos" className="hover:text-white">
                    Brincos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informações</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/sobre" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-white">
                    Termos e Condições
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <p className="text-sm text-gray-400">Inscreva-se para receber novidades e ofertas exclusivas.</p>
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Seu email"
                  type="email"
                />
                <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} RS Joias. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
