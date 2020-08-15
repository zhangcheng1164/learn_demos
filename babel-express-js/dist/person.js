"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

class Person {
  constructor(name) {
    this.name = name;
  }

  async say() {
    const greeting = await Promise.resolve('你好');
    return `${greeting} ${this.name}`;
  }

}

var _default = Person;
exports.default = _default;