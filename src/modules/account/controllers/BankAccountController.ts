import { Request, Response } from 'express'
import AccountYieldJob from '../job/AccountYieldJob'

import BankAccount from '../schemas/BankAccount'

class BankAccountController {
  public async listOne (req: Request, res: Response): Promise<Response> {
    const account = await BankAccount.findOne({ accountNumber: Number(req.params.numeroConta) })

    return res.json(account)
  }

  public async listAll (req: Request, res: Response): Promise<Response> {
    const bankAccounts = await BankAccount.find()

    return res.json(bankAccounts)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const bankAccount = await BankAccount.create(req.body)

    if (bankAccount.balance > 0) {
      AccountYieldJob.scheduleYield(bankAccount.accountNumber)
    }

    return res.json(bankAccount)
  }

  public async getOne (accountNumber: number): Promise<any> {
    const bankAccount = await BankAccount.findOne({ accountNumber: accountNumber })

    return bankAccount
  }

  public async updateBalance (accountNumber: number, value: number): Promise<any> {
    const bankAccount = await BankAccount.updateOne({ accountNumber: accountNumber }, { $inc: { balance: value } })

    return bankAccount
  }
}

export default new BankAccountController()
