import { Response, Request } from 'express'
import { Get3Last } from '../services/Get3Last'

class GetLast3MessageServiceController {
  async handle(req: Request, res: Response) {
    const service = new Get3Last()

    const result = await service.execute()

    return res.json(result)
  }
}

export { GetLast3MessageServiceController }
