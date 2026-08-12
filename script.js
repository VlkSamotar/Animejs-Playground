// ================================================================
// ANIME.JS PLAYGROUND – SCRIPT.JS
// Tento soubor obsahuje ukázkové animace pro jednotlivé úrovně.
// Studenti mohou kód upravovat, rozšiřovat a experimentovat.
// ================================================================


// 🥉 ÚROVEŇ 1 – ZÁKLADNÍ ANIMACE
// ---------------------------------------------------------------

const basicBox = document.querySelector('.box-basic');

basicBox.addEventListener('click', () => {
    anime({
        targets: '.box-basic',
        translateX: 150,
        scale: 1.3,
        opacity: 0.6,
        duration: 800,
        easing: 'easeOutQuad'
    });
});


// 🥈 ÚROVEŇ 2 – POKROČILÉ ANIMACE
// ---------------------------------------------------------------

const advancedBox = document.querySelector('.box-advanced');

advancedBox.addEventListener('click', () => {
    anime({
        targets: '.box-advanced',
        rotate: '1turn',
        borderRadius: ['10%', '50%'],
        duration: 1200,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: 2
    });
});


// 🥇 ÚROVEŇ 3 – MINI GALERIE EFEKTŮ
// ---------------------------------------------------------------

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {

        // Každá kartička má jiný efekt
        switch (index) {

            case 0: // 1 – otočení
                anime({
                    targets: card,
                    rotate: '1turn',
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                break;

            case 1: // 2 – posun
                anime({
                    targets: card,
                    translateY: -40,
                    duration: 600,
                    easing: 'easeOutBack'
                });
                break;

            case 2: // 3 – změna barvy
                anime({
                    targets: card,
                    backgroundColor: '#e94e77',
                    duration: 500,
                    easing: 'linear'
                });
                break;

            case 3: // 4 – změna tvaru
                anime({
                    targets: card,
                    borderRadius: ['12px', '50%'],
                    duration: 700,
                    easing: 'easeInOutQuad'
                });
                break;

            case 4: // 5 – pulzování
                anime({
                    targets: card,
                    scale: [
                        { value: 1.3, duration: 300 },
                        { value: 1.0, duration: 300 }
                    ],
                    easing: 'easeInOutSine'
                });
                break;

            case 5: // 6 – rozpad (fade + translate)
                anime({
                    targets: card,
                    opacity: 0,
                    translateY: 60,
                    duration: 700,
                    easing: 'easeInQuad'
                });
                break;
        }
    });
});


// 💎 BONUS – TIMELINE UKÁZKA
// ---------------------------------------------------------------
// (Studenti mohou aktivovat kliknutím na libovolný prvek nebo tlačítko)

const timelineDemo = () => {
    const tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 500
    });

    tl.add({
        targets: '.box-basic',
        translateX: 100
    })
        .add({
            targets: '.box-advanced',
            rotate: '0.5turn'
        })
        .add({
            targets: '.card',
            scale: 1.2
        })
        .add({
            targets: '.card',
            scale: 1.0
        });
};

// timelineDemo(); // volitelné