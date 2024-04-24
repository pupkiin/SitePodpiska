const cards = document.querySelectorAll('.questions__item');

for (let card of cards) {
  card.addEventListener('click', () => {
    console.log(card.children);
    card.firstElementChild.classList.toggle('front__rotate');
    card.lastElementChild.classList.toggle('back__rotate');
  })
}
