const galoSelect = document.getElementById("galoSelect");
const infoGalo = document.getElementById("infoGalo");
const nomeGalo = document.getElementById("nomeGalo");
const pontos = document.getElementById("pontos");

const forca = document.getElementById("forca");
const velocidade = document.getElementById("velocidade");
const resistencia = document.getElementById("resistencia");
const precisao = document.getElementById("precisao");

let galos = JSON.parse(localStorage.getItem("meusGalos")) || [];
let galoSelecionado = null;

galos.forEach((galo, index) => {
  if (!galo.stats) {
    galo.stats = { forca: 0, velocidade: 0, resistencia: 0, precisao: 0 };
    galo.pontosTreino = 5; // Valor inicial de pontos
  }
  const option = document.createElement("option");
  option.value = index;
  option.textContent = galo.nome;
  galoSelect.appendChild(option);
});

galoSelect.addEventListener("change", () => {
  const index = galoSelect.value;
  if (index === "") {
    infoGalo.style.display = "none";
    return;
  }

  galoSelecionado = galos[index];
  atualizarInfo();
  infoGalo.style.display = "block";
});

function atualizarInfo() {
  nomeGalo.textContent = galoSelecionado.nome;
  pontos.textContent = galoSelecionado.pontosTreino;
  forca.textContent = galoSelecionado.stats.forca;
  velocidade.textContent = galoSelecionado.stats.velocidade;
  resistencia.textContent = galoSelecionado.stats.resistencia;
  precisao.textContent = galoSelecionado.stats.precisao;
}

function evoluir(attr) {
  if (galoSelecionado.pontosTreino <= 0) {
    alert("Sem pontos disponíveis!");
    return;
  }

  galoSelecionado.stats[attr]++;
  galoSelecionado.pontosTreino--;

  localStorage.setItem("meusGalos", JSON.stringify(galos));
  atualizarInfo();
}
