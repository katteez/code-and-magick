'use strict';

window.getRandomElementExcept = (function () {
  var getRandomElement = function (arr) {
    var randomElementIndex = Math.floor(Math.random() * arr.length);
    return arr[randomElementIndex];
  };

  return function (arr, arrCurrentElement) {
    var arrRandomElement;
    var arrExceptRepeatingElements = [];

    // Создаем новый массив, равный переданному,
    // но без повторяющихся элементов и без текущего элемента
    for (var i = 0; i < arr.length; i++) {
      if (arrExceptRepeatingElements.indexOf(arr[i]) === -1 && arr[i] !== arrCurrentElement) {
        arrExceptRepeatingElements.push(arr[i]);
      }
    }

    arrRandomElement = getRandomElement(arrExceptRepeatingElements);
    return arrRandomElement;
  };
})();
