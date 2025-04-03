document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("visible");
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const toggleButton = document.getElementById("menu-toggle");

  // Verifica se o clique foi fora do menu e do botão
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.add("hidden");
    menu.classList.remove("visible");
  }
});
