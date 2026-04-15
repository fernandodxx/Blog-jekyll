/**
 * Table of Contents Interactivity
 * ScrollSpy + Smooth Scroll
 */

(function() {
  'use strict';

  // Só executa se houver TOC
  const toc = document.querySelector('.toc');
  if (!toc) return;

  const tocLinks = toc.querySelectorAll('.toc-link');
  if (tocLinks.length === 0) return;

  const tocItems = toc.querySelectorAll('.toc-item');
  const headingsMap = new Map();

  // Mapeia links para seus headings correspondentes
  tocLinks.forEach(link => {
    const targetId = link.getAttribute('data-target');
    if (targetId) {
      const heading = document.getElementById(targetId);
      if (heading) {
        headingsMap.set(targetId, {
          link: link,
          item: link.closest('.toc-item'),
          heading: heading
        });
      }
    }
  });

  if (headingsMap.size === 0) return;

  let activeId = null;

  // IntersectionObserver para detectar qual heading está visível
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, observerOptions);

  // Observa todos os headings mapeados
  headingsMap.forEach((data) => {
    observer.observe(data.heading);
  });

  // Também monitora o scroll para casos onde nenhum heading está visível
  // (mostra o mais próximo do topo)
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateActiveOnScroll() {
    const scrollPos = window.scrollY + 100;
    let currentId = null;
    let minDistance = Infinity;

    headingsMap.forEach((data, id) => {
      const headingTop = data.heading.getBoundingClientRect().top + window.scrollY;
      const distance = Math.abs(headingTop - scrollPos);

      if (headingTop <= scrollPos + 50 && distance < minDistance) {
        minDistance = distance;
        currentId = id;
      }
    });

    if (currentId && currentId !== activeId) {
      setActiveSection(currentId);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Define a seção ativa
  function setActiveSection(id) {
    if (activeId === id) return;

    // Remove classe ativa do item anterior
    tocItems.forEach(item => item.classList.remove('toc-item--active'));
    tocLinks.forEach(link => {
      link.removeAttribute('aria-current');
    });

    // Adiciona classe ativa ao novo item
    const data = headingsMap.get(id);
    if (data) {
      data.item.classList.add('toc-item--active');
      data.link.setAttribute('aria-current', 'true');
      activeId = id;

      // Scroll automático no TOC para manter item visível
      scrollTocToActive(data.item);
    }
  }

  // Scroll suave no TOC para manter item ativo visível
  function scrollTocToActive(activeItem) {
    const tocRect = toc.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const isAbove = itemRect.top < tocRect.top;
    const isBelow = itemRect.bottom > tocRect.bottom;

    if (isAbove || isBelow) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

  // Smooth scroll ao clicar nos links
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Foco no heading para acessibilidade
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Seta a seção inicialmente visível
  updateActiveOnScroll();
})();
