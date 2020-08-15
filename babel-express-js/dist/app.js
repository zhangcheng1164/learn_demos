"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.promise.js");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _person = _interopRequireDefault(require("./person"));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get("/", async (req, res) => {
  const greeting = await new _person.default('zhangsan').say();
  res.send(greeting);
});
app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});