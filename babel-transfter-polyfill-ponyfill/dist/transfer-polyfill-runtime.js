"use strict";

/*
babel.config.js:
module.exports = {
  presets: ['@babel/env'],
  plugins: [
    '@babel/transform-runtime',
    ['polyfill-corejs3', {
      method: 'usage-global',
    }]
  ]
}

对syntax进行转换， 对API进行了polyfill，并且对于辅助函数不是硬编码，而是require
npm i @babel/runtime 

*/

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person = /*#__PURE__*/function () {
  function Person(name) {
    (0, _classCallCheck2.default)(this, Person);
    this.name = name;
  }

  (0, _createClass2.default)(Person, [{
    key: "say",
    value: function say() {
      var _this = this;

      Promise.resolve('hello').then(function (d) {
        return console.log(d + _this.name);
      });
    }
  }]);
  return Person;
}();

new Person('zhangsan').say();
