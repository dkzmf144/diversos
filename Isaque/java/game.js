const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const arenaBg = new Image();
arenaBg.src = "imagens/arena.jpg";

const galoVermelhoImg = new Image();
galoVermelhoImg.src = "../imagens/galopretobriga.jfif";

const galoAzulImg = new Image();
galoAzulImg.src = "../imagens/";

const galo1 = {
  x: 150,
  y: 250,
  width: 100,
  height: 100,
  life: 100,
};

const galo2 = {
  x: 550,
  y: 250,
  width: 100,
  height: 100,
  life: 100,
};

function drawGalo(galo, img) {
  ctx.drawImage(img, galo.x, galo.y, galo.width, galo.height);
}

function drawLifeBars() {
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText(`❤️ Galo Vermelho: ${galo1.life}`, 30, 30);
  ctx.fillText(`💙 Galo Azul: ${galo2.life}`, 550, 30);
}

function update() {
  ctx.drawImage(arenaBg, 0, 0, canvas.width, canvas.height);
  drawGalo(galo1, galoVermelhoImg);
  drawGalo(galo2, galoAzulImg);
  drawLifeBars();
}

function ataqueAleatorio() {
  const dano1 = Math.floor(Math.random() * 15);
  const dano2 = Math.floor(Math.random() * 15);

  galo1.life -= dano2;
  galo2.life -= dano1;

  if (galo1.life <= 0 || galo2.life <= 0) {
    clearInterval(combate);
    setTimeout(() => {
      const vencedor = galo1.life > galo2.life ? "🐓 Vermelho" : "🐓 Azul";
      alert(`${vencedor} venceu a batalha!`);
    }, 500);
  }
}

const combate = setInterval(() => {
  ataqueAleatorio();
  update();
}, 1000);

arenaBg.onload = update;
