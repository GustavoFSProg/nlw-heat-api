import { Router } from 'express'
import { AuthenticateuserController } from './controllers/AuthenticateuserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { Authenticateuserservices } from './services/AuthenticateUserservices'

const route = Router()

route.post('/authenticate', new AuthenticateuserController().handle)
route.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

export { route }
