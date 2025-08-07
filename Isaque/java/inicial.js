const destinos = [
  "midia.html", // 🎬 Mídia e Entretenimento
  "comida.html", // 🍔 Comida e Bebida
  "dinheiro.html", // 💰 Dinheiro e Serviços
  "viagem.html", // ✈️ Viagem e Transporte
  "saude.html", // 💊 Moda e Saúde
];

document.querySelectorAll(".menu div").forEach((item, index) => {
  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");

  item.addEventListener("click", () => {
    location.href = destinos[index]; // Redireciona para a URL correspondente
  });

  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      item.click(); // Acessibilidade: tecla Enter ou Espaço
    }
  });
});
