const categories = {
  hair: 3,
  eyes: 3,
  mouth: 2,
  outfits: 3,
  accessory: 4
};

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(categories).forEach(cat => {
    const itemsWrapper = document.querySelector(`div[data-cat="${cat}"] .items`);
    for (let i = 1; i <= categories[cat]; i++) {
      const img = document.createElement("img");
      img.src = `assets/${cat}/${cat}${i}.png`;
      img.alt = `${cat} ${i}`;
      img.onclick = () => document.getElementById(cat).src = img.src;
      itemsWrapper.appendChild(img);
    }
  });
});

function resetLook() {
  document.getElementById("hair").src = "assets/hair/hair1.png";
  document.getElementById("eyes").src = "assets/eyes/eyes1.png";
  document.getElementById("mouth").src = "assets/mouth/mouth1.png";
  document.getElementById("outfit").src = "assets/outfits/outfit1.png";
  document.getElementById("accessory").src = "";
}
