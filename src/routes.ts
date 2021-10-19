import { Router } from 'express'
import { AuthenticateuserController } from './controllers/AuthenticateuserController'
import { Authenticateuserservices } from './services/AuthenticateUserservices'

const route = Router()

route.post('/authenticate', new AuthenticateuserController().handle)

export { route }
