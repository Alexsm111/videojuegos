import { useEffect, useState } from "react";
import { getGamesBy } from '../../services/games';
import GameCard from '../../components/GameCard';

function Games() {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const results = await getGamesBy("action");

        if (Array.isArray(results) && results.length > 0) {
          setGames(results);
        } else {
          console.error("No se encontraron juegos de acción.");
          setGames([]); // Evita que sea undefined
        }
      } catch (error) {
        console.error("Error al obtener los videojuegos:", error);
        setGames([]); // Evita el crash si la API falla
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="py-12 bg-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-200 mb-6 text-center">
        Videojuegos Populares
      </h1>
      <div className="container px-4 mx-auto">
        {isLoading ? (
          <p className="text-gray-400 text-center text-xl">Cargando...</p>
        ) : games.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {games.map((game) => (
              <div
                key={game.id}
                className="game-card bg-gray-700 p-4 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-600"
              >
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.name}
                  posterUrl={game.background_image || "https://via.placeholder.com/300"}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-400 text-center text-lg">No se encontraron juegos de acción.</p>
        )}
      </div>
    </section>
  );
}

export default Games;
