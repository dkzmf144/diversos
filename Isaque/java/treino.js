const galoSelect = document.getElementById("galoSelect");
const treinosDiv = document.getElementById("treinos");
const nomeGaloSelecionado = document.getElementById("nomeGaloSelecionado");

let galos = JSON.parse(localStorage.getItem("meusGalos")) || [];
let galoIndexSelecionado = null;

galos.forEach((galo, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = galo.nome;
  galoSelect.appendChild(option);
});

galoSelect.addEventListener("change", () => {
  galoIndexSelecionado = galoSelect.value;
  if (galoIndexSelecionado !== "") {
    nomeGaloSelecionado.textContent = galos[galoIndexSelecionado].nome;
    treinosDiv.style.display = "block";
  } else {
    treinosDiv.style.display = "none";
  }
});

function treinar(atributo) {
  if (galoIndexSelecionado === null) return;

  galos[galoIndexSelecionado][atributo] += 1;

  localStorage.setItem("meusGalos", JSON.stringify(galos));
  alert(`${atributo.charAt(0).toUpperCase() + atributo.slice(1)} aumentado!`);
}
