import { Request, Response } from 'express'
import { Authenticateuserservices } from '../services/AuthenticateUserservices'

class AuthenticateuserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body

    const service = new Authenticateuserservices()

    const result = await service.execute(code)

    return res.json(result)

    // service.execute('222222')
  }
}

export { AuthenticateuserController }
