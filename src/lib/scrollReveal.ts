import ScrollReveal from 'scrollreveal';

// Función para las animaciones de ScrollReveal
export function scrollAnimation() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false,
  });
  
  sr.reveal(`.explore-data, .explore-user, .gallery-text, .footer-image`);
  sr.reveal(`.home-card`, { delay: 350, distance: '100px', interval: 100 });
  sr.reveal(`.testimonials-data, .home-social, .gallery-nothing`, { origin: 'left' });
  sr.reveal(`.footer-content`, { delay: 350 });
  // COORREGIR ESTOS BUGS
  // sr.reveal(`.explore-data, .explore-user, .footer-content`);
  // sr.reveal(`.home-card`, { delay: 350, distance: '100px', interval: 100 });
  // sr.reveal(`.home-content, .location-data, .join-image, .services-data`, { origin: 'right' });
  // sr.reveal(`.location-image, .join-data, .services-image, .testimonials-data, .home-social, .footer-image`, { origin: 'left' });
  // sr.reveal(`.popular-card`, { interval: 200 });
};