import { supabase } from '@/lib/supabase'
import MovieCard from '@/components/MovieCard'
import HeroSlider from '@/components/HeroSlider'
import Sidebar from '@/components/Sidebar'

// Esta função roda no SERVIDOR (Server Component), ultra rápida
export default async function Home() {
  // Busca filmes direto do banco
  const { data: movies } = await supabase
    .from('filmes')
    .select('*')
    .order('created_at', { ascending: false })

  const destaques = movies?.filter(m => m.destaque) || []

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 md:ml-64 transition-all">
        {/* Banner Principal */}
        <HeroSlider movies={destaques} />

        <div className="p-6 md:p-10 space-y-10">
          <section>
            <h2 className="mb-6 text-2xl font-bold border-l-4 border-purple-500 pl-4">
              🔥 Lançamentos Recentes
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
