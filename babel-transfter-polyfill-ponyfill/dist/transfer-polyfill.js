"use strict";

/*
babel.config.js
module.exports = {
  presets: ['@babel/env'],
  plugins: [
    ['polyfill-corejs3', {
      method: 'usage-global',
    }]
  ]
}
此时 不仅对syntax进行转换，还对Promise这种api进行了pollyfill
但是辅助函数依旧是强编码

此时需要npm i core-js@3
*/

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
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
