"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var emoji = require('node-emoji')
const fire = emoji.get('fire')
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes');
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _socketio = require('socket.io');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config()

const { PORT, GITHUB_CLIENT_ID } = process.env

const app = _express2.default.call(void 0, )

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query

  return res.json(`Codigo: ${code}`)
})

app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ))
app.use(_routes.route)

// app.listen(PORT, () => {
//   console.log(` Api Running on Port Boat: ${PORT}`)
// })

const serverHTTP = _http2.default.createServer(app)

serverHTTP.listen(PORT, () => {
  console.log(`${fire} Api Running on Port Boat: ${PORT}`)
})

const io = new (0, _socketio.Server)(serverHTTP, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('User connected!')
})

exports.serverHTTP = serverHTTP; exports.io = io;

exports. default = app
