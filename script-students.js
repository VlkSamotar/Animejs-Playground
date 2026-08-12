// ================================================================
// ANIME.JS PLAYGROUND – STUDENTSKÁ VERZE SCRIPTU
// Tvým úkolem je doplnit jednotlivé animace pomocí funkce anime().
// Postupuj podle zadání v index.html.
// ================================================================


// 🥉 ÚROVEŇ 1 – ZÁKLADNÍ ANIMACE
// ---------------------------------------------------------------
// Cíl: po kliknutí na .box-basic spustit animaci:
// - translateX
// - scale
// - opacity
// - duration + easing

const basicBox = document.querySelector('.box-basic');

basicBox.addEventListener('click', () => {
    // TODO: doplň animaci pomocí anime()
    // Ukázka:
    // anime({
    //   targets: '.box-basic',
    //   translateX: 150,
    //   scale: 1.3,
    //   opacity: 0.6,
    //   duration: 800,
    //   easing: 'easeOutQuad'
    // });
});



// 🥈 ÚROVEŇ 2 – POKROČILÉ ANIMACE
// ---------------------------------------------------------------
// Cíl: po kliknutí na .box-advanced vytvořit animaci:
// - rotate
// - borderRadius
// - easing
// - direction: 'alternate' nebo loop

const advancedBox = document.querySelector('.box-advanced');

advancedBox.addEventListener('click', () => {
    // TODO: doplň animaci pomocí anime()
    // Ukázka:
    // anime({
    //   targets: '.box-advanced',
    //   rotate: '1turn',
    //   borderRadius: ['10%', '50%'],
    //   duration: 1200,
    //   easing: 'easeInOutSine',
    //   direction: 'alternate',
    //   loop: 2
    // });
});



// 🥇 ÚROVEŇ 3 – MINI GALERIE EFEKTŮ
// ---------------------------------------------------------------
// Cíl: každá kartička má jinou animaci při kliknutí.
// Inspirace:
// 1 – rotate
// 2 – translate
// 3 – backgroundColor
// 4 – borderRadius
// 5 – pulzování (scale up/down)
// 6 – fade-out + translate

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {

        // TODO: doplň animace podle indexu
        // Ukázka struktury:
        //
        // switch (index) {
        //   case 0:
        //     anime({ targets: card, rotate: '1turn' });
        //     break;
        //   case 1:
        //     anime({ targets: card, translateY: -40 });
        //     break;
        //   ...
        // }

    });
});



// 💎 BONUS – TIMELINE
// ---------------------------------------------------------------
// Cíl: vytvořit timeline animaci, která postupně animuje různé prvky.
// Použij anime.timeline().
// Ukázka:
/*
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
*/

// TODO: vytvoř vlastní timeline animaci