document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.querySelector('.hero button');
  exploreBtn.addEventListener('click', () => {
    document.getElementById('prodotti').scrollIntoView({ behavior: 'smooth' });
  });
});

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
