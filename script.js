document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.volleyball-confetti');
    const introAnimation = document.getElementById('intro-animation');

    // Funktion: Begrüßungsseite ausblenden und entfernen
    function removeIntroAnimation() {
        introAnimation.style.display = 'none'; // Versteckt das Element nach der Animation
    }

    // Willkommens-Konfetti starten
    function startWelcomeConfetti() {
        const totalConfetti = 50; // Anzahl der Konfetti-Elemente
        for (let i = 0; i < totalConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.textContent = i % 2 === 0 ? '🎉' : '🏐'; // Wechsel zwischen 🎉 und 🏐
            confetti.style.position = 'absolute';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.fontSize = `${Math.random() * 20 + 20}px`;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            confettiContainer.appendChild(confetti);
        }

        // Deaktiviere Konfetti nach der längsten Animationszeit
        const longestAnimationDuration = 5; // Längste Animation in Sekunden
        setTimeout(() => {
            clearWelcomeConfetti();
        }, longestAnimationDuration * 1000); // Wartezeit bis Animation abgeschlossen ist
    }

    // Funktion: Konfetti entfernen
    function clearWelcomeConfetti() {
        while (confettiContainer.firstChild) {
            confettiContainer.removeChild(confettiContainer.firstChild);
        }
    }

    // Starte die Animationen
    setTimeout(() => {
        removeIntroAnimation(); // Begrüßungsseite entfernen
        startWelcomeConfetti(); // Willkommens-Konfetti starten
    }, 3000); // Wartezeit bis Begrüßungsanimation abgeschlossen ist
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'); // Alle Slides auswählen
    const playButton = document.getElementById('play-button'); // Play-Button auswählen
    const preview = document.getElementById('preview'); // Vorschau-Slide
    let currentSlideIndex = -1; // Start bei -1 für das Vorschaubild
    let isPlaying = false; // Status, ob die Diashow läuft

    // Ablaufzeiten für die Slides in Millisekunden
    const slideDurations = [
        2000,
        3000, // Slide 1 (2 Sekunden)
        3000, // Slide 2 (2 Sekunden)
        3000, // Slide 3 (2 Sekunden)
        5000, // Schwarzbild 1 (5 Sekunden)
        1000,  // Slide 4 (0,5 Sekunden)
        1000,  // Slide 5 (0,5 Sekunden)
        2000  // Schwarzbild 2 (2 Sekunden)
    ];

    // Funktion, um die aktuelle Slide anzuzeigen
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none'; // Nur aktuelle Slide anzeigen
        });
    }

    // Funktion, um die Diashow zu starten
    function playSlideshow() {
        if (isPlaying) return; // Verhindere mehrfaches Starten
        isPlaying = true;

        // Start mit dem ersten Slide, falls die Diashow neu gestartet wird
        if (currentSlideIndex === -1 || currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }

        function nextSlide() {
            if (currentSlideIndex >= slides.length) {
                isPlaying = false; // Beende die Diashow
                return;
            }

            showSlide(currentSlideIndex); // Zeige die aktuelle Slide
            setTimeout(() => {
                currentSlideIndex++; // Nächste Slide
                nextSlide(); // Rekursiv zur nächsten Slide wechseln
            }, slideDurations[currentSlideIndex]); // Dauer der aktuellen Slide
        }

        nextSlide(); // Starte die Diashow
    }

    // Event Listener für den Play-Button
    playButton.addEventListener('click', () => {
        if (!isPlaying) {
            playSlideshow(); // Starte die Diashow
        }
    });

    // Initialisiere mit dem Vorschaubild
    showSlide(-1);
});


