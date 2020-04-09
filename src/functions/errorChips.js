export function errorChips () {
  let chips = document.createElement('div');
  chips.classList.add('chips');
  let message = document.createTextNode("Wrong value!");
  chips.appendChild(message);
  let chiepsField = document.querySelector('.chieps-field');
  chiepsField.appendChild(chips);

  setTimeout(() => {
    chips.remove();
    }, 3000)
}
