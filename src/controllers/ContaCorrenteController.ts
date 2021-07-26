import { Request, Response } from 'express'

import ContaCorrente from '../schemas/ContaCorrente'

class ContaCorrenteController {
  public async deposit (req: Request, res: Response) {
    await ContaCorrente.findOneAndUpdate({ numero: req.body.numero }, { $inc: { saldo: req.body.valor } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully deposited: ${req.body.valor} at account: ${updatedDocument.numero}.`)
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
    await ContaCorrente.findOneAndUpdate({ numero: req.body.numero }, { $inc: { saldo: -req.body.valor } })
      .then(updatedDocument => {
        if (updatedDocument) {
          console.log(`Successfully withdrew: ${req.body.valor} at account: ${updatedDocument.numero}.`)
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
