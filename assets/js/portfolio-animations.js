document.addEventListener("DOMContentLoaded", function () {
  //ScrollReveal
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.hero-content', {
      delay: 200,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
      duration: 1000
    });

    ScrollReveal().reveal('.section-title', {
      delay: 100,
      distance: '30px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 800,
      interval: 100 // Atraso entre elementos revelados em sequência
    });

    ScrollReveal().reveal('.section-description', {
      delay: 200,
      distance: '30px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 800
    });

    ScrollReveal().reveal('.project-card', {
      delay: 200,
      distance: '40px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 900,
      interval: 150, // Revela um card por vez
      cleanup: true // Remove a classe de animação após a animação
    });

    ScrollReveal().reveal('.tech-list li', {
      delay: 100,
      distance: '20px',
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 700,
      interval: 80, // Revela cada item da lista individualmente
      cleanup: true
    });
  } else {
    console.warn("ScrollReveal.js não carregado. As animações de rolagem não funcionarão.");
  }
});
