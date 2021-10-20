"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
const fire = emoji.get('fire')
var emoji = require('node-emoji')

_dotenv2.default.config()

const { PORT } = process.env

_app.serverHTTP.listen(PORT, () => {
  console.log(` Api Running on Port Boat: ${PORT}`)
})

exports. default = _app.serverHTTP
