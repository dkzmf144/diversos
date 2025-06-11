let meusGalos = JSON.parse(localStorage.getItem("meusGalos")) || [];

const container = document.getElementById("meus-galos");

function salvar() {
  localStorage.setItem("meusGalos", JSON.stringify(meusGalos));
}

function atualizarTela() {
  container.innerHTML = "";
  if (meusGalos.length === 0) {
    container.innerHTML =
      "<p>Você ainda não tem galos. Vá comprar um na página de compra!</p>";
    return;
  }

  meusGalos.forEach((galo, index) => {
    const div = document.createElement("div");
    div.className = "galo-card";

    div.innerHTML = `
      <img src="${galo.img}" alt="${galo.nome}" />
      <h2>${galo.nome}</h2>
      <div class="atributo"><span>Velocidade:</span> ${galo.velocidade} <button onclick="treinar(${index}, 'velocidade')">Treinar</button></div>
      <div class="atributo"><span>Força:</span> ${galo.forca} <button onclick="treinar(${index}, 'forca')">Treinar</button></div>
      <div class="atributo"><span>Resistência:</span> ${galo.resistencia} <button onclick="treinar(${index}, 'resistencia')">Treinar</button></div>
      <div class="atributo"><span>Precisão:</span> ${galo.precisao} <button onclick="treinar(${index}, 'precisao')">Treinar</button></div>
      <div class="atributo"><span>Energia:</span> ${galo.energia}</div>
      <div class="atributo"><span>Fome:</span> ${galo.fome}</div>
      <button class="alimentar-btn" onclick="alimentar(${index})">Alimentar</button>
    `;

    container.appendChild(div);
  });
}

function treinar(index, atributo) {
  const galo = meusGalos[index];
  if (galo.energia < 10) {
    alert("O galo está cansado! Alimente ele antes de treinar.");
    return;
  }

  galo[atributo] += 1;
  galo.energia -= 10;
  galo.fome += 5;

  salvar();
  atualizarTela();
}

function alimentar(index) {
  const galo = meusGalos[index];
  if (galo.fome === 0) {
    alert("O galo não está com fome.");
    return;
  }

  galo.fome = Math.max(0, galo.fome - 20);
  galo.energia = Math.min(100, galo.energia + 30);

  salvar();
  atualizarTela();
}

atualizarTela();
