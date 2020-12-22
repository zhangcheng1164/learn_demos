"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

class Dog {
  constructor(dog) {
    (0, _defineProperty2.default)(this, "color", 'black');
    let {
      name,
      age
    } = dog;
    this.name = name;
    this.age = age;
  }

  say() {
    _promise.default.resolve('hello').then(data => {
      console.log(data, this.name, this.color);
    });
  }

}

new Dog({
  name: 'zz',
  age: 11
}).say();
