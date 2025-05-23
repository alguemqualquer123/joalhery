import Link from "next/link"
import Image from "next/image"
import { Award, Diamond, Heart, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SobrePage() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Nossa História</h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Desde 2010, a RS Joias tem sido sinônimo de elegância, qualidade e sofisticação no mundo das joias
                    de luxo.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="História da RS Joias"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Missão</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Criar joias excepcionais que celebram os momentos mais importantes da vida, combinando tradição
                  artesanal com design contemporâneo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Diamond className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Qualidade Excepcional</h3>
                <p className="text-sm text-gray-500">
                  Utilizamos apenas os materiais mais finos e pedras preciosas certificadas em todas as nossas criações.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Paixão pelo Artesanato</h3>
                <p className="text-sm text-gray-500">
                  Cada peça é cuidadosamente elaborada por nossos mestres joalheiros com décadas de experiência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Excelência no Atendimento</h3>
                <p className="text-sm text-gray-500">
                  Oferecemos uma experiência personalizada e exclusiva para cada cliente, do primeiro contato ao
                  pós-venda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Atelier RS Joias"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nosso Atelier</h2>
                  <p className="text-gray-500 md:text-xl">
                    Em nosso atelier, localizado no coração de São Paulo, combinamos técnicas tradicionais de joalheria
                    com tecnologia de ponta para criar peças únicas e atemporais.
                  </p>
                  <p className="text-gray-500">
                    Nossa equipe de designers e artesãos trabalha em estreita colaboração para garantir que cada joia
                    atenda aos mais altos padrões de qualidade e beleza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Valores</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Os valores que guiam nossa empresa e definem nossa identidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Confiança</h3>
                <p className="text-sm text-gray-500">
                  Construímos relacionamentos duradouros baseados na transparência e honestidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Excelência</h3>
                <p className="text-sm text-gray-500">
                  Buscamos a perfeição em cada detalhe, desde o design até o acabamento final.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Relacionamento</h3>
                <p className="text-sm text-gray-500">
                  Valorizamos cada cliente e criamos experiências memoráveis e personalizadas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Diamond className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Inovação</h3>
                <p className="text-sm text-gray-500">
                  Combinamos tradição com inovação para criar joias únicas e contemporâneas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Faça Parte da Nossa História
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra nossa coleção exclusiva e encontre a joia perfeita para celebrar seus momentos especiais.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/colecoes">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Explorar Coleções
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    Entre em Contato
                  </Button>
                </Link>
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
