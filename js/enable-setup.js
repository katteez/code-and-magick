'use strict';

window.enableSetup = (function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupWindow = document.querySelector('.setup');
  var setupClose = setupWindow.querySelector('.setup-close');
  var setupSubmit = setupWindow.querySelector('.setup-submit');
  var onSetupClose;

  var closeSetupWindowByEnterKey = function (event) {
    if (window.keydownHandler.isEnterKeyPressed(event)) {
      closeSetupWindow();
    }
  };

  var closeSetupWindowByEscKey = function (event) {
    if (window.keydownHandler.isEscKeyPressed(event)) {
      closeSetupWindow();
    }
  };

  var closeSetupWindow = function () {
    setupClose.setAttribute('aria-pressed', true);
    setupOpen.setAttribute('aria-pressed', false);
    setupWindow.classList.add('invisible');
    document.removeEventListener('keydown', closeSetupWindowByEscKey);
    setupClose.removeEventListener('click', closeSetupWindow);
    setupClose.removeEventListener('keydown', closeSetupWindowByEnterKey);
    setupSubmit.removeEventListener('click', closeSetupWindow);
    setupSubmit.removeEventListener('keydown', closeSetupWindowByEnterKey);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var showSetupWindow = function (callback) {
    setupOpen.setAttribute('aria-pressed', true);
    setupClose.setAttribute('aria-pressed', false);
    setupWindow.classList.remove('invisible');
    document.addEventListener('keydown', closeSetupWindowByEscKey);
    setupClose.addEventListener('click', closeSetupWindow);
    setupClose.addEventListener('keydown', closeSetupWindowByEnterKey);
    setupSubmit.addEventListener('click', closeSetupWindow);
    setupSubmit.addEventListener('keydown', closeSetupWindowByEnterKey);
    onSetupClose = callback;
  };

  return showSetupWindow;
})();
