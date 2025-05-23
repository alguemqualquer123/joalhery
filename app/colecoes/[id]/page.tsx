import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

// Dados de exemplo para coleções
const colecoes = {
  diamantes: {
    id: "diamantes",
    nome: "Coleção Diamantes",
    descricao:
      "Nossa coleção de diamantes apresenta peças exclusivas com diamantes certificados de alta qualidade. Cada joia é cuidadosamente elaborada para destacar o brilho e a beleza natural dessas pedras preciosas.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 1,
        nome: "Anel Solitário de Diamante",
        preco: 4999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 2,
        nome: "Brincos de Diamante Gota",
        preco: 3499.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 3,
        nome: "Colar de Diamantes em Cascata",
        preco: 5999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 4,
        nome: "Pulseira Tennis de Diamantes",
        preco: 4299.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  ouro: {
    id: "ouro",
    nome: "Coleção Ouro",
    descricao:
      "Nossa coleção de ouro apresenta peças elegantes em ouro 18k, combinando tradição e design contemporâneo. Cada joia é criada para trazer sofisticação e brilho ao seu dia a dia.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 5,
        nome: "Anel de Ouro com Esmeralda",
        preco: 2999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 6,
        nome: "Corrente Veneziana de Ouro",
        preco: 1899.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 7,
        nome: "Pulseira de Ouro Italiana",
        preco: 2499.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 8,
        nome: "Brincos Argola de Ouro",
        preco: 1299.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  prata: {
    id: "prata",
    nome: "Coleção Prata",
    descricao:
      "Nossa coleção de prata combina a beleza atemporal da prata 925 com designs modernos e versáteis. Peças perfeitas para o uso diário, trazendo elegância com um toque contemporâneo.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 9,
        nome: "Anel de Prata com Zircônia",
        preco: 399.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 10,
        nome: "Colar de Prata com Pingente",
        preco: 299.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 11,
        nome: "Brincos de Prata Geométricos",
        preco: 249.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 12,
        nome: "Pulseira de Prata com Berloques",
        preco: 349.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  "pedras-preciosas": {
    id: "pedras-preciosas",
    nome: "Coleção Pedras Preciosas",
    descricao:
      "Nossa coleção de pedras preciosas apresenta joias com safiras, rubis, esmeraldas e outras gemas raras. Cada peça destaca a cor vibrante e a beleza natural dessas pedras excepcionais.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 13,
        nome: "Anel com Rubi Birmânia",
        preco: 3999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 14,
        nome: "Colar com Safira Azul",
        preco: 2899.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 15,
        nome: "Brincos com Esmeralda Colombiana",
        preco: 3499.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 16,
        nome: "Pulseira com Ametistas",
        preco: 1899.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  perolas: {
    id: "perolas",
    nome: "Coleção Pérolas",
    descricao:
      "Nossa coleção de pérolas traz a elegância clássica e atemporal dessas gemas do mar. Pérolas cultivadas de alta qualidade em designs que vão do tradicional ao contemporâneo.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 17,
        nome: "Colar de Pérolas Akoya",
        preco: 2499.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 18,
        nome: "Brincos de Pérola com Diamantes",
        preco: 1899.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 19,
        nome: "Pulseira de Pérolas Multicoloridas",
        preco: 1299.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 20,
        nome: "Anel com Pérola do Taiti",
        preco: 1999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  relogios: {
    id: "relogios",
    nome: "Coleção Relógios",
    descricao:
      "Nossa coleção de relógios combina precisão suíça com design elegante. Peças que unem funcionalidade e estilo, perfeitas para complementar qualquer visual com sofisticação.",
    imagem: "/placeholder.svg?height=800&width=800",
    produtos: [
      {
        id: 21,
        nome: "Relógio Automático Diamond",
        preco: 7999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 22,
        nome: "Relógio Feminino com Pulseira de Ouro",
        preco: 5999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 23,
        nome: "Relógio Masculino Cronógrafo",
        preco: 4999.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
      {
        id: 24,
        nome: "Relógio Unissex Minimalista",
        preco: 3499.99,
        imagem: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
}

export default function ColecaoPage({ params }: { params: { id: string } }) {
  const colecao = colecoes[params.id as keyof typeof colecoes]

  if (!colecao) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Coleção não encontrada</h1>
        <Link href="/colecoes">
          <Button className="mt-4">Voltar para Coleções</Button>
        </Link>
      </div>
    )
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <Link href="/colecoes" className="inline-flex items-center text-sm font-medium text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Coleções
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src={colecao.imagem || "/placeholder.svg"}
                  alt={colecao.nome}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{colecao.nome}</h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">{colecao.descricao}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produtos da Coleção</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore os produtos exclusivos da nossa {colecao.nome.toLowerCase()}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {colecao.produtos.map((produto) => (
                <div key={produto.id} className="group relative overflow-hidden rounded-lg border">
                  <Link href={`/produtos/${produto.id}`} className="absolute inset-0 z-10" />
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={produto.imagem || "/placeholder.svg"}
                      alt={produto.nome}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{produto.nome}</h3>
                    <p className="text-sm font-medium text-primary">
                      {produto.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
