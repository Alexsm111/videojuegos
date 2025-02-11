import { Link } from "react-router-dom";

function GameCard({ id, title, posterUrl }) {
  return (
    <Link to={`/gameDetails/${id}`}>
      <div className="bg-gradient-to-t from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative group">
          <img
            alt={title}
            title={title}
            src={posterUrl || "/placeholder.svg"}
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h2 className="text-white text-xl font-bold truncate hover:text-primary-400 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
