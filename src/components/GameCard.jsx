import { Link } from "react-router-dom"

function GameCard({ id, title, posterUrl }) {
  return (
    <Link to={`/gameDetails/${id}`}>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="relative group">
          <img
            alt={title}
            title={title}
            src={posterUrl || "/placeholder.svg"}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h2 className="text-white text-2xl font-extrabold truncate hover:text-primary-400 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default GameCard