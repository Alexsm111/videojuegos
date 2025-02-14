const API_KEY = "484b08a9f139446f8ed146d8f5cddf0a";
const BASE_URL = "https://api.rawg.io/api";

export const getGamesBy = async (queryOrId = "") => {
  try {
      let url;
      if (!queryOrId) {
          // ✅ API corregida: Obtener juegos mejor valorados y recientes
          url = `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=10&dates=2020-01-01,2024-12-31`;
      } else if (!isNaN(queryOrId)) {
          // ✅ Obtener detalles de un juego por ID (IMPORTANTE para GameDetails)
          url = `${BASE_URL}/games/${queryOrId}?key=${API_KEY}`;
      } else {
          // ✅ Obtener juegos por género
          url = `${BASE_URL}/games?key=${API_KEY}&genres=${queryOrId}&page_size=20`;
      }

      console.log("Fetching data from:", url);  // 🔍 Depuración

      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Error al obtener videojuegos: ${response.statusText}`);
      }
      const data = await response.json();

      // ✅ Si es una consulta por ID, devolvemos el objeto del juego, no `results`
      return !isNaN(queryOrId) ? data : data.results || [];
  } catch (error) {
      console.error("Error en la petición de videojuegos:", error);
      return !isNaN(queryOrId) ? null : [];
  }
};