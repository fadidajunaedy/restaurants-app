import 'regenerator-runtime';
import '../styles/style.css';

const hamburgerButton = document.getElementById('hamburgerButton');
const navigationDrawer = document.getElementById('navigationDrawer');
hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('navbar__open');
  navigationDrawer.classList.toggle('navbar__open');
});

console.log('Hello Coders!');
