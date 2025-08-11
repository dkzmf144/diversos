// Exemplo de funcionalidade para os botões "Comprar"
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão (como um envio de formulário)
        alert('Imóvel comprado com sucesso!');
    });
});

// Função para redirecionamento (exemplo simples de navegação)
function redirecionarParaImovel(imovelId) {
    window.location.href = `${imovelId}.html`;
}
