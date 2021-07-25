import { Request, Response } from 'express'

import ContaCorrente from '../schemas/ContaCorrente'

class ContaCorrenteController {
  public async list (req: Request, res: Response): Promise<Response> {
    const contasCorrentes = await ContaCorrente.find()

    return res.json(contasCorrentes)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const contaCorrente = await ContaCorrente.create(req.body)

    return res.json(contaCorrente)
  }
}

export default new ContaCorrenteController()
