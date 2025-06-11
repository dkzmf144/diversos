const galoSelect = document.getElementById("galoSelect");
const nomeGaloSelecionado = document.getElementById("nomeGaloSelecionado");
const energiaValor = document.getElementById("energiaValor");
const alimentarSecao = document.getElementById("alimentarSecao");

let galos = JSON.parse(localStorage.getItem("meusGalos")) || [];
let galoIndexSelecionado = null;

galos.forEach((galo, index) => {
  if (galo.energia === undefined) galo.energia = 100; // Garantir que todos têm energia
  const option = document.createElement("option");
  option.value = index;
  option.textContent = galo.nome;
  galoSelect.appendChild(option);
});

galoSelect.addEventListener("change", () => {
  galoIndexSelecionado = galoSelect.value;
  if (galoIndexSelecionado !== "") {
    atualizarInfo();
    alimentarSecao.style.display = "block";
  } else {
    alimentarSecao.style.display = "none";
  }
});

function alimentar() {
  if (galoIndexSelecionado === null) return;

  let galo = galos[galoIndexSelecionado];
  galo.energia = Math.min(100, galo.energia + 20); // Alimenta +20 até no máximo 100

  localStorage.setItem("meusGalos", JSON.stringify(galos));
  atualizarInfo();
  alert(`${galo.nome} foi alimentado! Energia agora é ${galo.energia}%`);
}

function atualizarInfo() {
  const galo = galos[galoIndexSelecionado];
  nomeGaloSelecionado.textContent = galo.nome;
  energiaValor.textContent = galo.energia;
}
