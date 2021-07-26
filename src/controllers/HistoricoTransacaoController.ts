import { Request, Response } from 'express'

import HistoricoTransacao from '../schemas/HistoricoTransacao'

class HistoricoTransacaoController {
  public async listAll (req: Request, res: Response): Promise<Response> {
    const historicoTransacao = await HistoricoTransacao.find()

    return res.json(historicoTransacao)
  }

  public async statement (req: Request, res: Response): Promise<Response> {
    const statement = await HistoricoTransacao.find({ numeroConta: req.body.numeroConta })

    return res.json(statement)
  }

  public async save (req: Request, res: Response): Promise<Response> {
    const transaction = await HistoricoTransacao.create(req.body)

    return res.json(transaction)
  }
}

export default new HistoricoTransacaoController()
