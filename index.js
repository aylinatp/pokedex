import { getPokemon } from "./api.js";
import { zeigePokemon } from "./ui.js";
import { zeigeMeldung } from "./ui.js";
import { starteSprueche } from "./sprueche.js";
import { getPokemonListe } from "./api.js";
import { zeigeGalerie } from "./ui.js";

const eingabe = document.querySelector("#eingabe");
const suchenButton = document.querySelector("#suchen");

async function suchen() {
  const name = eingabe.value.trim().toLowerCase();

  if (name === "") {
    zeigeMeldung("Bitte gib einen Namen ein.");
    return;
  }

  zeigeMeldung("Lade...");

  const pokemon = await getPokemon(name);
  zeigePokemon(pokemon);
}

suchenButton.addEventListener("click", suchen);

eingabe.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    suchen();
  }
});

starteSprueche();

const sortierungSelect = document.querySelector("#sortierung");
let alle = [];

const sortierung = sortierungSelect.value;

function aktualisiereGalerie() {
  const sortierung = sortierungSelect.value;

  if (sortierung === "id-auf") {
    alle.sort((a, b) => a.id - b.id);
  } else if (sortierung === "id-ab") {
    alle.sort((a, b) => b.id - a.id);
  } else if (sortierung === "name-auf") {
    alle.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortierung === "name-ab") {
    alle.sort((a, b) => b.name.localeCompare(a.name));
  }

  zeigeGalerie(alle);
}

async function starteGalerie() {
  alle = await getPokemonListe(20);
  aktualisiereGalerie();
}

sortierungSelect.addEventListener("change", aktualisiereGalerie);

starteGalerie();
