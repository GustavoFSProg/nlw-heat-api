"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Prisma = require('../Prisma'); var _Prisma2 = _interopRequireDefault(_Prisma);

class ProfileUserservice {
  async execute(user_id) {
    const user = await _Prisma2.default.user.findFirst({
      where: {
        id: user_id,
      },
    })

    return user
  }
}

exports.ProfileUserservice = ProfileUserservice;
