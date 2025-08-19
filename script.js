// Pulsante Prodotti
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.querySelector('.hero button');
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'prodotti.html';
  });
});


//Pulsante Aggiunto al carrello
document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.card-body button');
  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h3').textContent;
      alert(`${productName} aggiunto al carrello!`);
      // Qui potresti salvare i dati in localStorage o inviarli a un backend
    });
  });
});


// Gestione stato active per il menu
const links = document.querySelectorAll('nav ul li a');
const currentUrl = window.location.href;
let found = false;
links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
    found = true;
  }
});

if (!found) {
  links[0].classList.add('active'); // Home è il primo link
}


//Gestione menu hamburger
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });