'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupWindow = document.querySelector('.setup');
var setupClose = setupWindow.querySelector('.setup-close');
var setupSubmit = setupWindow.querySelector('.setup-submit');
var wizard = setupWindow.querySelector('#wizard');
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
var fireball = setupWindow.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isPressedEnterKey = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var isPressedEscKey = function (event) {
  return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
};

var closeSetupWindowByEnterKey = function (event) {
  if (isPressedEnterKey(event)) {
    closeSetupWindow();
  }
};

var closeSetupWindowByEscKey = function (event) {
  if (isPressedEscKey(event)) {
    closeSetupWindow();
  }
};

var showSetupWindow = function () {
  setupWindow.classList.remove('invisible');
  document.addEventListener('keydown', closeSetupWindowByEscKey);
  setupClose.addEventListener('click', closeSetupWindow);
  setupClose.addEventListener('keydown', closeSetupWindowByEnterKey);
  setupSubmit.addEventListener('click', closeSetupWindow);
  setupSubmit.addEventListener('keydown', closeSetupWindowByEnterKey);
};

var closeSetupWindow = function () {
  setupWindow.classList.add('invisible');
  document.removeEventListener('keydown', closeSetupWindowByEscKey);
  setupClose.removeEventListener('click', closeSetupWindow);
  setupClose.removeEventListener('keydown', closeSetupWindowByEnterKey);
  setupSubmit.removeEventListener('click', closeSetupWindow);
  setupSubmit.removeEventListener('keydown', closeSetupWindowByEnterKey);
};

setupOpen.addEventListener('click', function () {
  showSetupWindow();
});

setupOpen.addEventListener('keydown', function (event) {
  if (isPressedEnterKey(event)) {
    showSetupWindow();
  }
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
