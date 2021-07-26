import { Request, Response } from 'express'

import TransactionHistory from '../schemas/TransactionHistory'

class TransactionHistoryController {
  public async listAll (req: Request, res: Response): Promise<Response> {
    const historicoTransacao = await TransactionHistory.find()

    return res.json(historicoTransacao)
  }

  public async statement (req: Request, res: Response): Promise<Response> {
    const statement = await TransactionHistory.find({ accountNumber: req.body.accountNumber })

    return res.json(statement)
  }

  public async save (req: Request): Promise<void> {
    await TransactionHistory.create(req.body)
  }
}

export default new TransactionHistoryController()
