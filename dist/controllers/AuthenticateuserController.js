"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _AuthenticateUserservices = require('../services/AuthenticateUserservices');

class AuthenticateuserController {
  async handle(req, res) {
    const { code } = req.body

    const service = new (0, _AuthenticateUserservices.Authenticateuserservices)()

    try {
      const result = await service.execute(code)
      return res.json(result)
    } catch (error) {
      return res.json(error.message)
    }

    // service.execute('222222')
  }
}

exports.AuthenticateuserController = AuthenticateuserController;
