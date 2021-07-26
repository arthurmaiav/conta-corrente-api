import { Request, Response } from 'express'

import BankAccount from '../schemas/BankAccount'

class TransactionController {
  public async deposit (req: Request, res: Response) {
    await BankAccount.findOneAndUpdate({ accountNumber: req.body.accountNumber }, { $inc: { balance: req.body.value } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully deposited: ${req.body.valor} at account: ${updatedDocument.accountNumber}.`)
          return res.status(200).json(updatedDocument)
        } else {
          console.log(`Deposit failed, account ${req.body.numero} not found.`)
          return res.status(400).json({ error: 'Account not found.' })
        }
      })
      .catch(err => {
        console.error(`Failed to find and deposit: ${err}`)
        return res.status(500).json({ error: 'Unexpected error.' })
      })
  }

  public async withdrawal (req: Request, res: Response) {
    await BankAccount.findOneAndUpdate({ accountNumber: req.body.accountNumber }, { $inc: { balance: -req.body.value } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully withdrew: ${req.body.valor} at account: ${updatedDocument.accountNumber}.`)
          return res.status(200).json(updatedDocument)
        } else {
          console.log(`Withdrawal failed, account ${req.body.numero} not found.`)
          return res.status(404).json({ error: 'Account not found.' })
        }
      })
      .catch(err => {
        console.error(`Failed to find and withdrawal: ${err}`)
        return res.status(500).json({ error: 'Unexpected error.' })
      })
  }
}

export default new TransactionController()
