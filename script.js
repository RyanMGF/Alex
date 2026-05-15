// Countdown Timer
const targetDate = Date.now() + 40 * 60 * 1000; // 40 minutos a partir de agora

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance > 0) {
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        document.getElementById('countdown-timer').innerHTML = '00:00';
    }
}

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);

// Inicializar
updateCountdown();