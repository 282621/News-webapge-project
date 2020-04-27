import getInfo from './Utility/getData.js';
import getWeather from './Utility/getWeather.js';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
};

hamburger.addEventListener('click', handleClick);

getInfo();
getWeather();
