// pedido_de_casamento.js
document.addEventListener('DOMContentLoaded', function() {
    const naoButton = document.getElementById('nao-button');

    naoButton.addEventListener('mouseover', function() {
        naoButton.classList.add('hidden'); // Adiciona a classe que faz o botão desaparecer
    });

    naoButton.addEventListener('mouseleave', function() {
        naoButton.classList.remove('hidden'); // Remove a classe quando o mouse sai
    });
});
