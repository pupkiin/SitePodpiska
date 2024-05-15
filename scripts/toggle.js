if (width < 1000) {
  let tog = document.querySelector('.portfolio__button_right')
  let list = document.querySelector('.portfolio__types_list');
  tog.addEventListener('click', function (e) {
    list.classList.toggle('activeTog');
  });
}