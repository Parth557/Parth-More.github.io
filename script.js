// AOS animations
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
  
  // Contact form simulation
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thanks! Your message has been sent successfully 🚀");
    e.target.reset();
  });
  