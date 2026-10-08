// index.js

import { getPokemon } from "./api.js";
import { zeigePokemon } from "./ui.js";
import { zeigeMeldung } from "./ui.js";

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
