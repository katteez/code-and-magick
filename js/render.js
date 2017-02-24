'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.style.position = 'static';
    wizardElement.style.width = 50;
    wizardElement.style.height = 50;

    var wizardElementDescendants = wizardElement.querySelectorAll('*');
    for (var i = 0; i < wizardElementDescendants.length; i++) {
      var name = wizardElementDescendants[i].getAttribute('id');
      if (name) {
        wizardElementDescendants[i].removeAttribute('id');
        wizardElementDescendants[i].setAttribute('class', name);
      }
    }

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.setAttribute('title', wizard.name);

    return wizardElement;
  };

})();
