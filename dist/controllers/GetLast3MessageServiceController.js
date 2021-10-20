"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _Get3Last = require('../services/Get3Last');

class GetLast3MessageServiceController {
  async handle(req, res) {
    const service = new (0, _Get3Last.Get3Last)()

    const result = await service.execute()

    return res.json(result)
  }
}

exports.GetLast3MessageServiceController = GetLast3MessageServiceController;
