'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenButton = document.querySelector('.setup-open-icon');
  var setupWindow = document.querySelector('.setup');
  var wizard = setupWindow.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireball = setupWindow.querySelector('.setup-fireball-wrap');
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var wizardCoatCurrentColor = wizardCoat.style.fill;
  var wizardEyesCurrentColor = window.getComputedStyle(wizardEyes).fill;
  var fireballCurrentColor = window.getComputedStyle(fireball).backgroundColor;

  var focusSetupOpenButton = function () {
    setupOpenButton.focus();
  };

  setupOpen.addEventListener('keydown', function (event) {
    if (window.keydownHandler.isEnterKeyPressed(event)) {
      window.enableSetup(focusSetupOpenButton);
    }
  });

  setupOpen.addEventListener('click', function () {
    window.enableSetup();
  });

  var changeFillColor = function (element, color) {
    element.style.fill = color;
  };
  var changeBackgroundColor = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, wizardCoatCurrentColor, changeFillColor);
  window.colorizeElement(wizardEyes, wizardEyesColors, wizardEyesCurrentColor, changeFillColor);
  window.colorizeElement(fireball, fireballColors, fireballCurrentColor, changeBackgroundColor);
})();
