import { colors } from './colors.js';

const refs = {
  buttonStart: document.querySelector('button[data-action= "start"]'),
  buttonStop: document.querySelector('button[data-action= "stop"]'),
  bodyEL: document.querySelector('body'),
};
const timeInterval = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', onStartButtonClick);
refs.buttonStop.addEventListener('click', onStopButtonClick);

let startInterval;

function onStartButtonClick() {
  refs.buttonStart.setAttribute('disabled', true);
  startInterval = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);

    console.log(`${randomColor} : ${colors[randomColor]}`);

    refs.bodyEL.style.backgroundColor = colors[randomColor];
  }, timeInterval);
}

function onStopButtonClick() {
  clearInterval(startInterval);
  refs.buttonStart.removeAttribute('disabled');
}
