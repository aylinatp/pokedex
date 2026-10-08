export async function getPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );

    if (!response.ok) {
      throw new Error("Pokemon nicht gefunden");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
