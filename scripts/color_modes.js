const toggleButton = document.querySelector('.dark_mode_button');
const imgElements = document.getElementsByClassName('images_header');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
  for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].classList.toggle('dark_mode_img');
  }
  bodyElement.classList.toggle('dark_mode');
});
