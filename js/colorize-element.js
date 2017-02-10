'use strict';

window.colorizeElement = (function () {
  var ENTER_KEY_CODE = 13;

  var isEnterKeyPressed = function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  };

  return function (element, colors, property) {
    var currentColor = element.style[property];

    var changeColor = function () {
      currentColor = window.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    };

    element.addEventListener('click', changeColor);
    element.addEventListener('keydown', function () {
      if (isEnterKeyPressed(event)) {
        changeColor();
      }
    });
  };
})();
