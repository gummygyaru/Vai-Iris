// Number of options per category
const optionsCount = {
  hair: 10,
  eyes: 10,
  mouth: 10,
  outfit: 10,
  accessory: 10
};

// Paths to assets
const assetPaths = {
  hair: 'assets/hair/hair',
  eyes: 'assets/eyes/eyes',
  mouth: 'assets/mouth/mouth',
  outfit: 'assets/outfits/outfit',
  accessory: 'assets/accessories/accessory'
};

// Populate item buttons dynamically
document.querySelectorAll('.category').forEach(category => {
  const cat = category.dataset.category;
  const container = category.querySelector('.items');

  for (let i = 1; i <= optionsCount[cat]; i++) {
    const img = document.createElement('img');
    img.src = `${assetPaths[cat]}${i}.png`;
    img.alt = `${cat} ${i}`;
    img.classList.add('option');
    img.addEventListener('click', () => changePart(cat, i));
    container.appendChild(img);
  }
});

// Change avatar part when clicked
function changePart(part, index) {
  const el = document.getElementById(part);
  el.src = `${assetPaths[part]}${index}.png`;
}

// Reset avatar to default
function resetOutfit() {
  document.getElementById('hair').src = `${assetPaths.hair}1.png`;
  document.getElementById('eyes').src = `${assetPaths.eyes}1.png`;
  document.getElementById('mouth').src = `${assetPaths.mouth}1.png`;
  document.getElementById('outfit').src = `${assetPaths.outfit}1.png`;
  document.getElementById('accessory').src = '';
}
