"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("core-js-pure/stable/promise/index.js"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Dog = /*#__PURE__*/function () {
  function Dog(dog) {
    (0, _classCallCheck2.default)(this, Dog);
    (0, _defineProperty2.default)(this, "color", 'black');
    var name = dog.name,
        age = dog.age;
    this.name = name;
    this.age = age;
  }

  (0, _createClass2.default)(Dog, [{
    key: "say",
    value: function say() {
      var _this = this;

      _index.default.resolve('hello').then(function (data) {
        console.log(data, _this.name, _this.color);
      });
    }
  }]);
  return Dog;
}();

new Dog({
  name: 'zz',
  age: 11
}).say();