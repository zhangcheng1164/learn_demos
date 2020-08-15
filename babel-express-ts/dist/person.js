"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    (0, _classCallCheck2.default)(this, Person);
    this.name = name;
    this.age = age;
  }

  (0, _createClass2.default)(Person, [{
    key: "say",
    value: function say() {
      return `i am ${this.name}, i am ${this.age} years old`;
    }
  }]);
  return Person;
}();

var _default = Person;
exports.default = _default;