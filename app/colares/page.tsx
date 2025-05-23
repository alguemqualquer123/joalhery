import Link from "next/link"
import Image from "next/image"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

// Dados de exemplo para colares
const colares = [
  {
    id: 3,
    nome: "Colar de Diamantes em Cascata",
    preco: 5999.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Diamantes",
  },
  {
    id: 6,
    nome: "Corrente Veneziana de Ouro",
    preco: 1899.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Ouro",
  },
  {
    id: 10,
    nome: "Colar de Prata com Pingente",
    preco: 299.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Prata",
  },
  {
    id: 14,
    nome: "Colar com Safira Azul",
    preco: 2899.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Pedras Preciosas",
  },
  {
    id: 17,
    nome: "Colar de Pérolas Akoya",
    preco: 2499.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Pérolas",
  },
  {
    id: 28,
    nome: "Gargantilha de Ouro com Diamantes",
    preco: 3999.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Diamantes",
  },
  {
    id: 29,
    nome: "Colar Choker de Prata",
    preco: 599.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Prata",
  },
  {
    id: 30,
    nome: "Colar Longo com Ametista",
    preco: 1299.99,
    imagem: "/placeholder.svg?height=400&width=400",
    categoria: "Pedras Preciosas",
  },
]

export default function ColaresPage() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Colares</h1>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossa coleção exclusiva de colares, desde gargantilhas de diamantes até colares de pérolas e
                  correntes de ouro.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 space-y-6">
                <div className="hidden md:block space-y-4">
                  <h2 className="text-xl font-bold">Filtros</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Categorias</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diamantes" />
                          <Label htmlFor="diamantes">Diamantes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ouro" />
                          <Label htmlFor="ouro">Ouro</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="prata" />
                          <Label htmlFor="prata">Prata</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pedras-preciosas" />
                          <Label htmlFor="pedras-preciosas">Pedras Preciosas</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perolas" />
                          <Label htmlFor="perolas">Pérolas</Label>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-2">Preço</h3>
                      <div className="space-y-4">
                        <Slider defaultValue={[3000]} max={10000} step={100} />
                        <div className="flex justify-between">
                          <span className="text-sm">R$ 0</span>
                          <span className="text-sm">R$ 10.000</span>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-2">Ordenar por</h3>
                      <RadioGroup defaultValue="relevancia">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="relevancia" id="relevancia" />
                          <Label htmlFor="relevancia">Relevância</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="preco-menor" id="preco-menor" />
                          <Label htmlFor="preco-menor">Menor Preço</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="preco-maior" id="preco-maior" />
                          <Label htmlFor="preco-maior">Maior Preço</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-recentes" id="mais-recentes" />
                          <Label htmlFor="mais-recentes">Mais Recentes</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Filter className="mr-2 h-4 w-4" />
                        Filtros
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filtros</SheetTitle>
                        <SheetDescription>Refine sua busca por colares</SheetDescription>
                      </SheetHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h3 className="font-medium mb-2">Categorias</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="diamantes-mobile" />
                              <Label htmlFor="diamantes-mobile">Diamantes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="ouro-mobile" />
                              <Label htmlFor="ouro-mobile">Ouro</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="prata-mobile" />
                              <Label htmlFor="prata-mobile">Prata</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="pedras-preciosas-mobile" />
                              <Label htmlFor="pedras-preciosas-mobile">Pedras Preciosas</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="perolas-mobile" />
                              <Label htmlFor="perolas-mobile">Pérolas</Label>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-medium mb-2">Preço</h3>
                          <div className="space-y-4">
                            <Slider defaultValue={[3000]} max={10000} step={100} />
                            <div className="flex justify-between">
                              <span className="text-sm">R$ 0</span>
                              <span className="text-sm">R$ 10.000</span>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-medium mb-2">Ordenar por</h3>
                          <RadioGroup defaultValue="relevancia">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="relevancia" id="relevancia-mobile" />
                              <Label htmlFor="relevancia-mobile">Relevância</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="preco-menor" id="preco-menor-mobile" />
                              <Label htmlFor="preco-menor-mobile">Menor Preço</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="preco-maior" id="preco-maior-mobile" />
                              <Label htmlFor="preco-maior-mobile">Maior Preço</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mais-recentes" id="mais-recentes-mobile" />
                              <Label htmlFor="mais-recentes-mobile">Mais Recentes</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full">Aplicar Filtros</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {colares.map((colar) => (
                    <div key={colar.id} className="group relative overflow-hidden rounded-lg border">
                      <Link href={`/produtos/${colar.id}`} className="absolute inset-0 z-10" />
                      <div className="relative h-[250px] w-full overflow-hidden">
                        <Image
                          src={colar.imagem || "/placeholder.svg"}
                          alt={colar.nome}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{colar.nome}</h3>
                        <p className="text-sm text-gray-500">{colar.categoria}</p>
                        <p className="text-sm font-medium text-primary mt-1">
                          {colar.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
