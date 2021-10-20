"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _CreateServiceMessage = require('../services/CreateServiceMessage');

class CreateMessageController {
  async handle(req, res) {
    const { message } = req.body
    const { user_id } = req

    const service = new (0, _CreateServiceMessage.CreateServiceMessage)()

    const result = await service.execute(message, user_id)

    return res.json(result)
  }
}

exports.CreateMessageController = CreateMessageController;
