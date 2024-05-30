document.addEventListener("DOMContentLoaded", function() {
    const naoButton = document.querySelector("button:nth-of-type(2)"); // Seleciona o segundo botão
    
    naoButton.addEventListener("mouseenter", function() {
        // Gera coordenadas aleatórias para a nova posição do botão
        const randomX = Math.random() * (window.innerWidth - naoButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - naoButton.offsetHeight);
        
        // Define a nova posição do botão
        naoButton.style.position = "absolute";
        naoButton.style.left = randomX + "px";
        naoButton.style.top = randomY + "px";
    });
});