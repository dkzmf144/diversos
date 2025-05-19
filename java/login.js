document.getElementById("btn-entrar").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const dadosSalvos = localStorage.getItem("usuario_" + email);

    if (!dadosSalvos) {
      alert("Usuário não encontrado!");
      return;
    }

    const usuario = JSON.parse(dadosSalvos);

    if (usuario.senha === senha) {
      alert("Login realizado com sucesso! Bem-vindo, " + usuario.nome + "!");
      // Aqui você pode redirecionar, por exemplo:
      // window.location.href = "pagina-protegida.html";
    } else {
      alert("Senha incorreta!");
    }
  });

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
