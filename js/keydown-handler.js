'use strict';

window.keydownHandler = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  return {
    isEnterKeyPressed: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    },
    isEscKeyPressed: function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
    }
  };
})();
