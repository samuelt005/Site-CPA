const toggleButton = document.querySelector('.dark_mode_button');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark_mode');
});