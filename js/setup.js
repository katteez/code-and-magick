'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenButton = document.querySelector('.setup-open-icon');
  var setupWindow = document.querySelector('.setup');
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
  var elementCurrentColor;

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

  var changeColor = function (element, colors, property) {
    elementCurrentColor = element.style[property];
    elementCurrentColor = window.getRandomElementExcept(colors, elementCurrentColor);
    element.style[property] = elementCurrentColor;
  };

  window.colorizeElement(wizardCoat, function () {
    changeColor(wizardCoat, wizardCoatColors, 'fill');
  });
  window.colorizeElement(wizardEyes, function () {
    changeColor(wizardEyes, wizardEyesColors, 'fill');
  });
  window.colorizeElement(fireball, function () {
    changeColor(fireball, fireballColors, 'backgroundColor');
  });
})();
