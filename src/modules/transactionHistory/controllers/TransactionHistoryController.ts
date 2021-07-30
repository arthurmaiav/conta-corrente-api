import { Request, Response } from 'express'
import { TransactionModel } from '../../../shared/models/TransactionModel'

import TransactionHistory from '../schemas/TransactionHistory'

class TransactionHistoryController {
  public async listAll (req: Request, res: Response): Promise<Response> {
    const transactionHistory = await TransactionHistory.find()

    return res.json(transactionHistory)
  }

  public async statement (req: Request, res: Response): Promise<Response> {
    const statement = await TransactionHistory.find({ accountNumber: Number(req.params.numeroConta) }).sort({ createdAt: -1 })

    return res.json(statement)
  }

  public async save (transaction: TransactionModel): Promise<void> {
    await TransactionHistory.create(transaction)
  }
}

export default new TransactionHistoryController()
