"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("Hello ".concat(name));
};

greet('Mario');
greet('Luigi');
greet('Toad');

var User = function User() {
  _classCallCheck(this, User);

  this.score = 0;
};
