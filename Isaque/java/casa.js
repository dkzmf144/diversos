// Exemplo de funcionalidade para os botões "Comprar"
document.querySelectorAll('.imovel').forEach(imovel => {
    imovel.addEventListener('click', () => {
        alert('Imóvel comprado com sucesso!');
    });
});
