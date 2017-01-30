'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupWindow = document.querySelector('.setup');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupOpen.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});

var getNextArrayItem = function (arr) {
  if (isNaN(arr.$index)) {
    arr.$index = -1;
  }
  arr.$index = ++arr.$index % arr.length;
  return arr[arr.$index];
};

var getRandomArrayItem = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getNextArrayItem(wizardCoatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomArrayItem(wizardEyesColors);
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomArrayItem(fireballColors);
});
