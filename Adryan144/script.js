const imagens = [
    'imagem/1679662998_en-idei-club-p-pc-gamer-setup-dizain-pinterest-2.jpg',
    'imagem/computador-pc-gamer.jpeg',
    'imagem/custom-built-gaming-pcs-norse-inspired-power-and-performance-regen-computers.webp'   
];

let indice = 0;

function trocarImagem() {
    indice = (indice + 1) % imagens.length;
    const imagemElement = document.getElementById('imagem');
    if (imagemElement) {
        imagemElement.src = imagens[indice];
    }
}

setInterval(trocarImagem, 3000);
