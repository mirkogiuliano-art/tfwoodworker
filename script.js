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
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
