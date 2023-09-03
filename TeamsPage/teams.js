const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const image = card.querySelector('.image');
  const holo = card.querySelector('.holo');

  card.addEventListener('mouseenter', () => {
    holo.style.opacity = 1;
  });

  card.addEventListener('mouseleave', () => {
    holo.style.opacity = 0;
  });
});
