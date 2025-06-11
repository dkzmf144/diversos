const canvas = document.getElementById("arenaCanvas");
const ctx = canvas.getContext("2d");

const vidaGalo1 = document.getElementById("vidaGalo1");
const vidaGalo2 = document.getElementById("vidaGalo2");

const nomeGalo1 = document.getElementById("nomeGalo1");
const nomeGalo2 = document.getElementById("nomeGalo2");

const botaoBatalha = document.getElementById("iniciarBatalha");

let galo1 = {
  nome: "Galo Vermelho",
  vida: 100,
  x: 150,
  y: 280,
  width: 100,
  height: 100,
  imgSrc: "../imagens/galopretobriga.jfif",
};

let galo2 = {
  nome: "Galo Azul",
  vida: 100,
  x: 550,
  y: 280,
  width: 100,
  height: 100,
  imgSrc: "../imagens/galovermelhobriga.jfif",
};

const imgGalo1 = new Image();
const imgGalo2 = new Image();

function carregarImagens() {
  imgGalo1.src = galo1.imgSrc;
  imgGalo2.src = galo2.imgSrc;
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha galos
  ctx.drawImage(imgGalo1, galo1.x, galo1.y, galo1.width, galo1.height);
  ctx.drawImage(imgGalo2, galo2.x, galo2.y, galo2.width, galo2.height);
}

function atualizarVida() {
  vidaGalo1.textContent = galo1.vida;
  vidaGalo2.textContent = galo2.vida;
}

function ataqueAleatorio() {
  const dano1 = Math.floor(Math.random() * 15) + 5;
  const dano2 = Math.floor(Math.random() * 15) + 5;

  galo1.vida -= dano2;
  galo2.vida -= dano1;

  if (galo1.vida < 0) galo1.vida = 0;
  if (galo2.vida < 0) galo2.vida = 0;
}

function checarVencedor() {
  if (galo1.vida === 0 || galo2.vida === 0) {
    clearInterval(batalhaInterval);
    const vencedor = galo1.vida > 0 ? galo1.nome : galo2.nome;
    alert(`🔥 ${vencedor} venceu a batalha!`);
    botaoBatalha.disabled = false;
  }
}

let batalhaInterval = null;

function iniciarBatalha() {
  botaoBatalha.disabled = true;
  galo1.vida = 100;
  galo2.vida = 100;
  atualizarVida();

  batalhaInterval = setInterval(() => {
    ataqueAleatorio();
    atualizarVida();
    desenhar();
    checarVencedor();
  }, 1000);
}

imgGalo1.onload = desenhar;
imgGalo2.onload = desenhar;

carregarImagens();

botaoBatalha.addEventListener("click", iniciarBatalha);
ar;
