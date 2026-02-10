// Smoothly scroll internal anchor links for a polished landing-page feel.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Reveal cards as they enter the viewport.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.feature-card, .work-card').forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(14px)';
  card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(card);
});

// Class hook used by intersection observer.
const style = document.createElement('style');
style.textContent = '.is-visible{opacity:1 !important; transform: translateY(0) !important;}';
document.head.appendChild(style);
