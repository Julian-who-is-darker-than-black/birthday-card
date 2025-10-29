document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const cardInside = document.getElementById('cardInside');
    const closeBtn = document.getElementById('closeBtn');
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('birthdayAudio');
    let isMusicPlaying = false;

    // Открытие открытки при клике на конверт
    envelope.addEventListener('click', function() {
        cardInside.classList.remove('hidden');
        envelope.style.display = 'none'; // Прячем конверт
    });

    // Закрытие открытки
    closeBtn.addEventListener('click', function() {
        cardInside.classList.add('hidden');
        envelope.style.display = 'block'; // Показываем конверт снова
    });

    // Управление музыкой
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            audio.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Включить музыку';
        } else {
            audio.play();
            musicBtn.innerHTML = '<i class="fas fa-stop"></i> Выключить музыку';
        }
        isMusicPlaying = !isMusicPlaying;
    });
});
