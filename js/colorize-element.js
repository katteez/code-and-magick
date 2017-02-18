'use strict';

window.colorizeElement = function (element, colors, elementCurrentColor, changeColor) {
  var getColor = function () {
    elementCurrentColor = window.getRandomElementExcept(colors, elementCurrentColor);
  };
  element.addEventListener('click', function () {
    getColor();
    changeColor(element, elementCurrentColor);
  });
  element.addEventListener('keydown', function () {
    if (window.keydownHandler.isEnterKeyPressed(event)) {
      getColor();
      changeColor(element, elementCurrentColor);
    }
  });
};
