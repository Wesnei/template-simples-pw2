
import Link from "next/link"

export default function Home(){

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl cursor-pointer"
    
      >
        Bem Vindo Ao Meu Site
      </h1>
      <p className="mt-3 text-lg text-zinc-400">
        Este é um site de exemplo criado com Next.js e Tailwind CSS.
      </p>
      
    <Link href="/contato" className="mt-3 bg-red-600 text-white font-bold">NAVEGAR</Link>
    </main>
  )
}

