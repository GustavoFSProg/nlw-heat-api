import { Request, Response } from 'express'
import { Authenticateuserservices } from '../services/AuthenticateUserservices'
import { CreateServiceMessage } from '../services/CreateServiceMessage'

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body
    const { user_id } = req

    const service = new CreateServiceMessage()

    const result = await service.execute(message, user_id)

    return res.json(result)
  }
}

export { CreateMessageController }
