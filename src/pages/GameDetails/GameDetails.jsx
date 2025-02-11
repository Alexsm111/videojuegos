import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamesBy } from '../../services/games';

function GameDetails() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                console.log("Fetching details for game ID:", id);  // 🔍 Depuración
                const gameData = await getGamesBy(id);

                if (gameData && gameData.name) {
                    setGame(gameData);
                } else {
                    console.error("No se encontró información del juego.");
                    setGame(null);
                }
            } catch (error) {
                console.error("Error al obtener los detalles del juego:", error);
                setGame(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGameDetails();
    }, [id]);

    if (isLoading) return <p className="text-center text-xl text-gray-300">Cargando...</p>;
    if (!game) return <p className="text-center text-xl text-red-500">Juego no encontrado.</p>;

    return (
        <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
            <h1 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8">{game.name}</h1>
            <img 
                src={game.background_image || "https://via.placeholder.com/600"} 
                alt={game.name} 
                className="w-full h-96 object-cover rounded-3xl shadow-xl mb-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            />
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">{game.description_raw || "Descripción no disponible."}</p>
            <div className="text-gray-300 mb-6 space-y-3">
                <p><strong className="text-yellow-300">Géneros:</strong> {game.genres?.length ? game.genres.map(g => g.name).join(", ") : "No disponible"}</p>
                <p><strong className="text-yellow-300">Plataformas:</strong> {game.platforms?.length ? game.platforms.map(p => p.platform.name).join(", ") : "No disponible"}</p>
            </div>
            <div className="flex justify-center gap-6 mt-12">
                <a 
                    href={game.website || "#"} 
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg rounded-full shadow-xl transform transition-all duration-500 hover:scale-105 hover:from-yellow-600 hover:to-yellow-800"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Visitar sitio web
                </a>
                <a 
                    href="#"
                    className="px-8 py-4 bg-gray-700 text-white text-lg rounded-full shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-gray-600"
                >
                    Volver
                </a>
            </div>
        </div>
    );
}

export default GameDetails;
