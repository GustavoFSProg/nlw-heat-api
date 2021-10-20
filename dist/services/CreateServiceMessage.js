"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Prisma = require('../Prisma'); var _Prisma2 = _interopRequireDefault(_Prisma);
var _app = require('../app');

class CreateServiceMessage {
  async execute(text, user_id) {
    const message = await _Prisma2.default.message.create({
      data: {
        text,
        user_id,
      },

      include: {
        user: true,
      },
    })

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    }

    _app.io.emit('new_message', infoWS)
    return message
  }
}

exports.CreateServiceMessage = CreateServiceMessage;
