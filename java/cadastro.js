document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio tradicional do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    // Validação simples
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Simulação de "registro" salvando no localStorage
    const usuario = {
      nome,
      email,
      senha, // ⚠️ Isso é só para fins didáticos! Nunca salve senhas assim em produção.
    };

    localStorage.setItem("usuario_" + email, JSON.stringify(usuario));
    alert("Usuário cadastrado com sucesso!");

    // Limpa o formulário
    form.reset();
  });

  // Código do menu toggle (se necessário)
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
