"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _ProfileUserservice = require('../services/ProfileUserservice');

class ProfileUserController {
  async handle(req, res) {
    const { user_id } = req

    const service = new (0, _ProfileUserservice.ProfileUserservice)()

    const result = await service.execute(user_id)
    return res.json(result)
  }
}

exports.ProfileUserController = ProfileUserController;
