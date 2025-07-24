// Mostrar WhatsApp solo desde la sección frase-limona
function handleWhatsAppVisibility() {
  const whatsappButton = document.querySelector('.whatsapp-fijo');
  const fraseLimona = document.querySelector('.frase-limona');
  
  if (!fraseLimona || !whatsappButton) return;
  
  const fraseLimonaRect = fraseLimona.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Mostrar cuando la sección frase-limona esté visible en pantalla
  if (fraseLimonaRect.top <= windowHeight && fraseLimonaRect.bottom >= 0) {
    whatsappButton.classList.add('show');
  } else {
    whatsappButton.classList.remove('show');
  }
}

// Ejecutar al hacer scroll
window.addEventListener('scroll', handleWhatsAppVisibility);
// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', handleWhatsAppVisibility);
// Ejecutar al redimensionar
window.addEventListener('resize', handleWhatsAppVisibility);

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const svgEditado = document.querySelector('.svg-editado');
  const svgListon = document.querySelector('.svg-liston');
  
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
  // Cambiar z-index del contenedor y el listón cuando el menú se abre/cierra
  if (mobileMenu.classList.contains('active')) {
    svgEditado.style.zIndex = '1';
    svgListon.style.zIndex = '1';
  } else {
    svgEditado.style.zIndex = '1001';
    svgListon.style.zIndex = '1001';
  }
}

function closeMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const svgEditado = document.querySelector('.svg-editado');
  const svgListon = document.querySelector('.svg-liston');
  
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  
  // Restaurar z-index original
  svgEditado.style.zIndex = '1001';
  svgListon.style.zIndex = '1001';
}

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(event) {
      const nav = document.querySelector('nav');
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (!nav.contains(event.target) && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });

    // Cerrar menú al cambiar el tamaño de ventana
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });