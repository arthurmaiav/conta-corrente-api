import { Request, Response } from 'express'
import { TransactionModel } from '../../../shared/models/TransactionModel'
import { TransactionTypeEnum } from '../../../shared/enum/TransactionTypeEnum'
import TransactionHistoryController from '../../transactionHistory/controllers/TransactionHistoryController'

import BankAccount from '../schemas/BankAccount'

class TransactionController {
  public async deposit (req: Request, res: Response) {
    await BankAccount.findOneAndUpdate({ accountNumber: req.body.accountNumber }, { $inc: { balance: req.body.value } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully deposited: ${req.body.valor} at account: ${updatedDocument.accountNumber}.`)
          TransactionHistoryController.save(new TransactionModel(req.body.accountNumber, req.body.value, TransactionTypeEnum.DEPOSIT))
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
          TransactionHistoryController.save(new TransactionModel(req.body.accountNumber, req.body.value, TransactionTypeEnum.WITHDRAWAL))
          return res.status(200).json(updatedDocument)
        } else {
          console.log(`Withdrawal failed, account ${req.body.numero} not found.`)
          return res.status(404).json({ error: 'Account not found.' })
        }
      })
      .catch(err => {
        console.error(`Failed to find and withdrawal: ${err}`)
        return res.status(500).json({ error: `Unexpected error: ${err}` })
      })
  }

  public async payment (req: Request, res: Response) {
    await BankAccount.findOneAndUpdate({ accountNumber: req.body.accountNumber }, { $inc: { balance: -req.body.value } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully paid: ${req.body.valor}, account: ${updatedDocument.accountNumber}.`)
          TransactionHistoryController.save(new TransactionModel(req.body.accountNumber, req.body.value, TransactionTypeEnum.PAYMENT))
          return res.status(200).json(updatedDocument)
        } else {
          console.log(`Payment failed, account ${req.body.numero} not found.`)
          return res.status(404).json({ error: 'Account not found.' })
        }
      })
      .catch(err => {
        console.error(`Failed to pay: ${err}`)
        return res.status(500).json({ error: `Unexpected error: ${err}` })
      })
  }
}

export default new TransactionController()
