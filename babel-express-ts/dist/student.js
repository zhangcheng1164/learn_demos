"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Student = /*#__PURE__*/function () {
  function Student(name) {
    (0, _classCallCheck2.default)(this, Student);
    this.name = name;
    (0, _defineProperty2.default)(this, "friends", []);
  }

  (0, _createClass2.default)(Student, [{
    key: "addFriend",
    value: function addFriend() {
      var _this$friends;

      (_this$friends = this.friends).push.apply(_this$friends, arguments);
    }
  }]);
  return Student;
}();

var _default = Student;
exports.default = _default;