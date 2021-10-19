import { Response, Request } from 'express'
import { Get3Last } from '../services/Get3Last'
import { ProfileUserservice } from '../services/ProfileUserservice'

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const service = new ProfileUserservice()

    const result = await service.execute(user_id)
    return res.json(result)
  }
}

export { ProfileUserController }
