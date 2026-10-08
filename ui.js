const ausgabe = document.querySelector("#ausgabe");

export function zeigeMeldung(text) {
  ausgabe.innerHTML = `<p class="text-center text-base-content/60">${text}</p>`;
}

export function zeigePokemon(pokemon) {
  if (!pokemon) {
    zeigeMeldung("Kein Pokemon gefunden, bitte überprüfe die Schreibweise.");
    return;
  }

  const typenHtml = pokemon.types
    .map(
      (eintrag) =>
        `<div class="badge badge-secondary">${eintrag.type.name}</div>`,
    )
    .join("");

  const groesse = pokemon.height / 10;
  const gewicht = pokemon.weight / 10;

  ausgabe.innerHTML = `
  <div class="hover-3d block w-full">
    <div class="card bg-base-100 shadow-md">
      <figure class="pt-6">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="h-50" style="image-rendering: pixelated;" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title capitalize">${pokemon.name}</h2>
        <p>Nr. ${pokemon.id}</p>
        <div class="flex gap-2">${typenHtml}</div>
        <p class="text-sm">Größe: ${groesse} m &nbsp;|&nbsp; Gewicht: ${gewicht} kg</p>
      </div>
    </div>
    <div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div>
  </div>
`;
}
