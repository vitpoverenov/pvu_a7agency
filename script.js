'use strict';


/* Add event on element */

const addEventOnElem = function (elem, type, callback) {
  if (elem.lenght > 1) {
    for (let i = 0; i < elem.lenght; i++) {
      elem[i].addEventListener (type, callback)
    }
  } else {
    elem.addEventListener(type, callback)
  }
}