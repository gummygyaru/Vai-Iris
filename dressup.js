// How many items in each category
const ITEMS = {
  hair: 4,
  eyes: 4,
  mouth: 3,
  outfit: 4,
  accessory: 5
};

document.addEventListener("DOMContentLoaded", () => {

  Object.keys(ITEMS).forEach(cat => {
    const container = document.querySelector(`.category[data-category="${cat}"] .items`);

    for (let i = 1; i <= ITEMS[cat]; i++) {
      let thumb = document.createElement("img");
      thumb.src = `assets/${cat}/${cat}${i}.png`;
      thumb.alt = `${cat} ${i}`;
      thumb.onclick = () => {
        document.getElementById(cat).src = thumb.src;
      };
      container.appendChild(thumb);
    }
  });

});

function resetOutfit() {
  document.getElementById("hair").src = "assets/hair/hair1.png";
  document.getElementById("eyes").src = "assets/eyes/eyes1.png";
  document.getElementById("mouth").src = "assets/mouth/mouth1.png";
  document.getElementById("outfit").src = "assets/outfits/outfit1.png";
  document.getElementById("accessory").src = "";
}
