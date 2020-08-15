"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _person = _interopRequireDefault(require("./person"));

var _student = _interopRequireDefault(require("./student"));

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send('hello world');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/persons', function (req, res) {
  var p1 = new _person.default('zhangsan', 11);
  var p2 = new _person.default('lisi111aaa', 22);
  res.send([p1.say(), p2.say()]);
});
app.get('/student', function (req, res) {
  var a = new _student.default('zhangsan');
  a.addFriend('lisi', 'wangwu', 'zhaoliu', 'maqi');
  res.send(a.friends);
});
app.listen(4000, function () {});