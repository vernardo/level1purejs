import { updateCounter } from './updater';

const clickmeButton = document.querySelector('#clickme-button');

let counter = 0;
clickmeButton.addEventListener('click', () => {
  counter = updateCounter(counter);
  document.querySelector('#counter').innerHTML = counter;
});