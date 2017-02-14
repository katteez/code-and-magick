'use strict';

window.colorizeElement = function (element, callback) {
  element.addEventListener('click', callback);
  element.addEventListener('keydown', function () {
    if (window.keydownHandler.isEnterKeyPressed(event)) {
      callback();
    }
  });
};
