const sprueche = [
  "Jeder Trainer hat mal klein angefangen.",
  "Aus jedem Ei kann etwas großes schlüpfen.",
  "Ein gutes Team schlägt jeden Einzelkämpfer.",
  "Gib niemals auf, auch nicht nach der zehnten Niederlage.",
  "Ich will der Aller Beste sein, wie keiner vor mir war!",
  "Die Stärke eines Pokémons hängt nicht von seiner Größe ab.",
];

const spruchElement = document.querySelector("#spruch");
let index = 0;

function zeigeSpruch() {
  spruchElement.textContent = sprueche[index];
  index = index + 1;

  if (index >= sprueche.length) {
    index = 0;
  }
}

export function starteSprueche() {
  zeigeSpruch();
  setInterval(zeigeSpruch, 5000);
}
