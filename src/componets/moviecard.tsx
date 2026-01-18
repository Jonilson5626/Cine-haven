import Image from 'next/image'
import Link from 'next/link'

interface MovieProps {
  id: number
  title: string
  poster_url: string
  year: number
  rating: number
}

export default function MovieCard({ movie }: { movie: MovieProps }) {
  return (
    <Link href={`/filme/${movie.id}`} className="group relative block">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
        <Image
          src={movie.poster_url}
          alt={movie.title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <div className="mt-3">
        <h3 className="truncate text-sm font-bold text-white">{movie.title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{movie.year}</span>
          <span className="flex items-center text-yellow-400">
            ★ {movie.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  )
}
