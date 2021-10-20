"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _AuthenticateuserController = require('./controllers/AuthenticateuserController');
var _CreateMessageController = require('./controllers/CreateMessageController');
var _ensureAuthenticated = require('./middleware/ensureAuthenticated');
var _GetLast3MessageServiceController = require('./controllers/GetLast3MessageServiceController');
var _ProfileuserController = require('./controllers/ProfileuserController');
const route = _express.Router.call(void 0, )

route.post('/authenticate', new (0, _AuthenticateuserController.AuthenticateuserController)().handle)
route.post('/messages', _ensureAuthenticated.ensureAuthenticated, new (0, _CreateMessageController.CreateMessageController)().handle)
route.get('/messages/last3', new (0, _GetLast3MessageServiceController.GetLast3MessageServiceController)().handle)
route.get('/profile', _ensureAuthenticated.ensureAuthenticated, new (0, _ProfileuserController.ProfileUserController)().handle)

exports.route = route;
