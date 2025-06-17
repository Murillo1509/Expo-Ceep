
function celebrate() {
    const message = document.getElementById("message");
    message.innerHTML = "🎊 Viva a conexão entre o campo e a cidade no Paraná! 🌾🏙️💚";
    message.style.color = "#006400";
    message.style.fontWeight = "bold";
    message.setAttribute('aria-live', 'polite');
}
function toggleContrast() {
    const body = document.body;
    const status = document.getElementById("contrast-status");
    body.classList.toggle("high-contrast");

    if (body.classList.contains("high-contrast")) {
        status.innerText = "Modo alto contraste ativado.";
    } else {
        status.innerText = "Modo alto contraste desativado.";
    }
}
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function lerTexto(texto) {
    const synth = window.speechSynthesis;
    synth.cancel(); 
    const status = document.getElementById("contrast-status");
    if (status) status.innerText = "🔊 Iniciando leitura..."; 

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    synth.speak(utterance);
}

function lerPagina() {
    const conteudo = document.querySelector("main").innerText;
    lerTexto(conteudo);
}
function pararLeitura() {
    window.speechSynthesis.cancel(); 
    const status = document.getElementById("contrast-status");
    if (status) status.innerText = "🔇 Leitura pausada."; 
}
