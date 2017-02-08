'use strict';

window.utils = {
  getRandomElement: function (arr) {
    var randomElementIndex = Math.floor(Math.random() * arr.length);
    return arr[randomElementIndex];
  },
  getRandomElementExcept: function (arr, arrCurrentElement) {
    var arrRandomElement;
    do {
      arrRandomElement = window.utils.getRandomElement(arr);
    } while (arrRandomElement === arrCurrentElement);
    return arrRandomElement;
  }
};
