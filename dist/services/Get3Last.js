"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Prisma = require('../Prisma'); var _Prisma2 = _interopRequireDefault(_Prisma);

class Get3Last {
  async execute() {
    const messages = await _Prisma2.default.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    })

    return messages
  }
}

exports.Get3Last = Get3Last;
