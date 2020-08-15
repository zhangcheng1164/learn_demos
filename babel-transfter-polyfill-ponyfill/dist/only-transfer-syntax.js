"use strict";
/*
对应的babel.config.js为
module.exports = {
  presets: ['@babel/env'],
}

只对 class 这种syntax进行 转换，没有对Promise这种api进行polyfill
而且 对syntax的转换的辅助函数是 强编码，不是require

*/
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
