const galosDisponiveis = [
  {
    nome: "Galo Vermelho",
    img: "../imagens/galovermelho.jpg",
    velocidade: 5,
    forca: 6,
    resistencia: 4,
    precisao: 7,
  },
  {
    nome: "Galo Verde",
    img: "../imagens/galoverde.jpg",
    velocidade: 7,
    forca: 4,
    resistencia: 5,
    precisao: 6,
  },
  {
    nome: "Galo Azul",
    img: "../imagens/galoazul.jpg",
    velocidade: 4,
    forca: 7,
    resistencia: 6,
    precisao: 5,
  },
];

const container = document.getElementById("galoContainer");

galosDisponiveis.forEach((galo, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${galo.img}" alt="${galo.nome}" />
    <h3>${galo.nome}</h3>
    <p>Velocidade: ${galo.velocidade}</p>
    <p>Força: ${galo.forca}</p>
    <p>Resistência: ${galo.resistencia}</p>
    <p>Precisão: ${galo.precisao}</p>
    <button onclick="comprarGalo(${index})">Comprar</button>
  `;
  container.appendChild(card);
});

function comprarGalo(index) {
  const galo = galosDisponiveis[index];
  const galosAtuais = JSON.parse(localStorage.getItem("meusGalos")) || [];

  galosAtuais.push({
    ...galo,
    energia: 100,
    fome: 0,
  });

  localStorage.setItem("meusGalos", JSON.stringify(galosAtuais));
  alert(`${galo.nome} comprado com sucesso!`);
}
