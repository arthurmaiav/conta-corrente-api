import { Request, Response } from 'express'

import BankAccount from '../schemas/BankAccount'

class BankAccountController {
  public async list (req: Request, res: Response): Promise<Response> {
    const bankAccount = await BankAccount.find()

    return res.json(bankAccount)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const bankAccount = await BankAccount.create(req.body)

    return res.json(bankAccount)
  }
}

export default new BankAccountController()
