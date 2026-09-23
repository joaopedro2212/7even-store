// Substitua pelo link do seu servidor do Discord
const DISCORD_LINK = "https://discord.gg/SEULINKAQUI";

// Lista de produtos disponíveis na loja
const products = [
  {
    id: 1,
    title: "Gift Card Google Play R$ 30",
    price: "R$ 30,00",
    image: "https://via.placeholder.com/250x140?text=Google+Play"
  },
  {
    id: 2,
    title: "Gift Card PlayStation R$ 50",
    price: "R$ 50,00",
    image: "https://via.placeholder.com/250x140?text=PlayStation"
  },
  {
    id: 3,
    title: "Gift Card Xbox R$ 100",
    price: "R$ 100,00",
    image: "https://via.placeholder.com/250x140?text=Xbox"
  },
  {
    id: 4,
    title: "Discord Nitro Mensal",
    price: "R$ 25,00",
    image: "https://via.placeholder.com/250x140?text=Discord+Nitro"
  }
];

// Função para carregar os produtos na tela
function renderProducts() {
  const container = document.getElementById("productGrid");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.title}">
        <div class="product-title">${product.title}</div>
        <div class="product-price">${product.price}</div>
      </div>
      <a href="${DISCORD_LINK}" target="_blank" class="btn-buy">Comprar no Discord</a>
    `;

    container.appendChild(card);
  });
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", renderProducts);