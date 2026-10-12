const ausgabe = document.querySelector("#ausgabe");

export function zeigeMeldung(text) {
  ausgabe.innerHTML = `<p class="text-center text-base-content/60">${text}</p>`;
}

export function zeigePokemon(pokemon) {
  if (!pokemon) {
    zeigeMeldung("Kein Pokemon gefunden, bitte überprüfe die Schreibweise.");
    return;
  }

  let typen = "";
  for (const eintrag of pokemon.types) {
    typen += `<div class="badge badge-secondary">${eintrag.type.name}</div>`;
  }

  const groesse = pokemon.height / 10;
  const gewicht = pokemon.weight / 10;

  ausgabe.innerHTML = `
  <div class="hover-3d block w-full">
    <div class="card bg-base-100 shadow-md">
      <figure class="pt-6">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="h-50" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title capitalize">${pokemon.name}</h2>
        <p>Nr. ${pokemon.id}</p>
        <div class="flex gap-2">${typen}</div>
        <p class="text-sm">Größe: ${groesse} m | Gewicht: ${gewicht} kg</p>
      </div>
    </div>
    <div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div>
  </div>
`;
}

const galerie = document.querySelector("#galerie");

export function zeigeGalerie(liste) {
  let kartenHtml = "";

  for (const pokemon of liste) {
    const groesse = pokemon.height / 10;
    const gewicht = pokemon.weight / 10;
    kartenHtml += `
  <div class="card bg-base-100 shadow-md">
        <figure class="pt-4">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        </figure>
        <div class="card-body items-center p-4 text-center">
          <h3 class="font-bold capitalize">${pokemon.name}</h3>
          <p class="text-sm">Nr. ${pokemon.id}</p>
          <p class="text-sm">Größe: ${groesse} m | Gewicht: ${gewicht} kg</p>
          
        </div> 
      </div>
  `;
  }

  galerie.innerHTML = kartenHtml;
}
