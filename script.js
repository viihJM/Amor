// Esperar até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Configurar a data do aniversário (20 de março de 2025)
    const birthday = new Date("March 20, 2025 00:00:00").getTime();
    
    // Botão de iniciar - COLOCADO NO INÍCIO PARA GARANTIR QUE SEJA CONFIGURADO LOGO
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function() {
            const intro = document.getElementById("intro");
            const mainContent = document.getElementById("mainContent");
            
            if (intro && mainContent) {
                intro.classList.add("hidden");
                mainContent.classList.remove("hidden");
                createHearts();
                startCountdown();
            } else {
                console.error("Elementos intro ou mainContent não encontrados");
            }
        });
    } else {
        console.error("Botão de início não encontrado");
    }
    
    // Botão de mensagem especial
    const messageButton = document.getElementById("messageButton");
    if (messageButton) {
        messageButton.addEventListener("click", function() {
            alert("Você é a razão do meu sorriso todos os dias. Eu te amo mais do que as palavras podem expressar. Feliz aniversário, meu amor!");
        });
    }
    
    // Lista de elogios para exibir em rotação
    const compliments = [
        "Lindo",
        "Maravilhoso",
        "Incrível",
        "Carinhoso",
        "Inteligente",
        "Especial",
        "Engraçado",
        "Dedicado",
        "Apaixonante",
        "Perfeito",
        "Adorável",
        "Único",
        "Encantador",
        "Meu Amor",
        "Meu Tudo",
        "Meu Príncipe",
        "Meu Mundo"
    ];
    
    // Função para mostrar elogios em rotação
    let complimentIndex = 0;
    const complimentsElement = document.getElementById("compliments");
    
    function showNextCompliment() {
        if (complimentsElement) {
            complimentsElement.style.opacity = 0;
            
            setTimeout(() => {
                complimentsElement.textContent = compliments[complimentIndex];
                complimentsElement.style.opacity = 1;
                complimentIndex = (complimentIndex + 1) % compliments.length;
            }, 500);
        }
    }
    
    // Iniciar rotação de elogios
    if (complimentsElement) {
        showNextCompliment();
        setInterval(showNextCompliment, 2000);
    }
    
    // Função da contagem regressiva
    function startCountdown() {
        const countdownInterval = setInterval(function() {
            // Data e hora atuais
            const now = new Date().getTime();
            
            // Distância entre agora e a data do aniversário
            const distance = birthday - now;
            
            // Cálculos de tempo para dias, horas, minutos e segundos
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Exibir o resultado nos elementos com IDs correspondentes
            const daysElement = document.getElementById("days");
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");
            const secondsElement = document.getElementById("seconds");
            
            if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            // Se a contagem regressiva terminar
            if (distance < 0) {
                clearInterval(countdownInterval);
                const messageElement = document.querySelector(".message");
                const titleElement = document.querySelector("h1");
                const countdownNumbers = document.querySelectorAll(".countdown-number");
                
                if (messageElement) messageElement.textContent = "FELIZ ANIVERSÁRIO MEU AMOR!!! ❤️❤️❤️";
                if (titleElement) titleElement.textContent = "Hoje é seu dia!";
                countdownNumbers.forEach(item => {
                    item.textContent = "00";
                });
            }
        }, 1000);
    }
    
    // Criar corações flutuantes
    function createHearts() {
        const heartsContainer = document.getElementById("hearts");
        if (!heartsContainer) return;
        
        const heartSymbols = ["❤️", "💖", "💕", "💘", "💓", "💗", "💞"];
        
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            
            // Posição inicial aleatória na base da tela
            const left = Math.random() * 100;
            heart.style.left = `${left}%`;
            
            // Velocidade e tamanho aleatórios
            const duration = 5 + Math.random() * 5;
            const size = 0.5 + Math.random() * 1.5;
            heart.style.fontSize = `${size}rem`;
            heart.style.animationDuration = `${duration}s`;
            
            heartsContainer.appendChild(heart);
            
            // Remover o coração após a animação terminar
            setTimeout(() => {
                if (heart.parentNode === heartsContainer) {
                    heartsContainer.removeChild(heart);
                }
            }, duration * 1000);
        }, 300);
    }
});