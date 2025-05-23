import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Diamond, ShieldCheck, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Diamond className="h-6 w-6" />
            <span>RS Joias</span>
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
      <main className="w-screen flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elegância em Cada Detalhe
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Descubra nossa coleção exclusiva de joias que combinam design contemporâneo com artesanato
                    tradicional.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/colecoes">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                      Explorar Coleção
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Coleção de joias de luxo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossas Coleções</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossas coleções exclusivas, criadas com os materiais mais finos e atenção meticulosa aos
                  detalhes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <Link href="/colecoes/diamantes" className="absolute inset-0 z-10" />
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Coleção de diamantes"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Diamantes</h3>
                  <p className="text-sm text-gray-500">Brilho eterno em cada peça</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Link href="/colecoes/ouro" className="absolute inset-0 z-10" />
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Coleção de ouro"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Ouro</h3>
                  <p className="text-sm text-gray-500">Elegância dourada para todos os momentos</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Link href="/colecoes/prata" className="absolute inset-0 z-10" />
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Coleção de prata"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Prata</h3>
                  <p className="text-sm text-gray-500">Sofisticação em design contemporâneo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Por que escolher RS Joias?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compromisso com qualidade, autenticidade e satisfação do cliente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Diamond className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Qualidade Premium</h3>
                <p className="text-sm text-gray-500">
                  Todas as nossas joias são feitas com materiais de alta qualidade e pedras certificadas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Entrega Segura</h3>
                <p className="text-sm text-gray-500">
                  Entregamos em todo o Brasil com seguro e embalagem especial para suas joias.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Garantia Vitalícia</h3>
                <p className="text-sm text-gray-500">
                  Oferecemos garantia vitalícia em todas as nossas peças contra defeitos de fabricação.
                </p>
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
                <Diamond className="h-6 w-6" />
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
