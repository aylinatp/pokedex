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
export async function getPokemonListe(anzahl) {
  const liste = [];
  for (let i = 1; i <= anzahl; i++) {
    const pokemon = await getPokemon(i);
    if (pokemon) {
      liste.push(pokemon);
    }
  }

  return liste;
}
