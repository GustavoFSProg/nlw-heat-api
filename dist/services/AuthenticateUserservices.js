"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

var _Prisma = require('../Prisma'); var _Prisma2 = _interopRequireDefault(_Prisma);
var _jsonwebtoken = require('jsonwebtoken');












class Authenticateuserservices {
  async execute(code) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data: accessTokenResponse } = await _axios2.default.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })

    const response = await _axios2.default.get('https://api.github.com/user', {
      headers: {
        authorization: `bearer ${accessTokenResponse.access_token}`,
      },
    })

    const { login, id, avatar_url, name } = response.data

    let user = await _Prisma2.default.user.findFirst({
      where: {
        git_hub_id: id,
      },
    })

    if (!user) {
      user = await _Prisma2.default.user.create({
        data: {
          git_hub_id: id,
          name,
          login,
          avatar_url,
        },
      })
    }

    const token = _jsonwebtoken.sign.call(void 0, 
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return { token, user }
  }
}

exports.Authenticateuserservices = Authenticateuserservices;
