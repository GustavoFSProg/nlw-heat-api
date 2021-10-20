import { Response, Router } from 'express'
import { AuthenticateuserController } from './controllers/AuthenticateuserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { GetLast3MessageServiceController } from './controllers/GetLast3MessageServiceController'
import { ProfileUserController } from './controllers/ProfileuserController'
const route = Router()

route.post('/authenticate', new AuthenticateuserController().handle)
route.post('/messages', ensureAuthenticated, new CreateMessageController().handle)
route.get('/messages/last3', new GetLast3MessageServiceController().handle)
route.get('/profile', ensureAuthenticated, new ProfileUserController().handle)
route.get('/', (res: Response) => {
  res.status(200).send({ API: 'API Running on heroko!' })
})

export { route }
