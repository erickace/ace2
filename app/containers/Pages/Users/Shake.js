import React from 'react';

/**
 * funcion movimiento temblor, dos formas en warning y en error
**/
var shakingElements = [];
var shake = function (element, magnitude = 16, angular = false) {
  var tiltAngle = 1;
  var counter = 1;
  var numberOfShakes = 15;
  var startX = 0,
    startY = 0,
    startAngle = 0;
  var magnitudeUnit = magnitude / numberOfShakes;

  var randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (shakingElements.indexOf(element) === -1) {
    shakingElements.push(element);
    if (angular) {
      angularShake();
    } else {
      upAndDownShake();
    }
  }
  function upAndDownShake() {
    if (counter < numberOfShakes) {
      element.style.transform = 'translate(' + startX + 'px, ' + startY + 'px)';
      magnitude -= magnitudeUnit;
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);
      element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
      counter += 1;
      requestAnimationFrame(upAndDownShake);
    }
    if (counter >= numberOfShakes) {
      element.style.transform = 'translate(' + startX + ', ' + startY + ')';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }
  function angularShake() {
    if (counter < numberOfShakes) {
      //console.log(tiltAngle);
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      magnitude -= magnitudeUnit;
      var angle = Number(magnitude * tiltAngle).toFixed(2);
      //console.log(angle);
      element.style.transform = 'rotate(' + angle + 'deg)';
      counter += 1;
      tiltAngle *= -1;
      requestAnimationFrame(angularShake);
    }
    if (counter >= numberOfShakes) {
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }
};

export default shake;