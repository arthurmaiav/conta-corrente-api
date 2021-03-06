import { Router } from 'express'

import BankAccountController from './modules/account/controllers/BankAccountController'
import TransactionController from './modules/account/controllers/TransactionController'
import TransactionHistoryController from './modules/transactionHistory/controllers/TransactionHistoryController'

const routes = Router()

routes.get('/contaCorrente/:numeroConta', BankAccountController.listOne)
routes.get('/contasCorrente', BankAccountController.listAll)
routes.post('/contaCorrente', BankAccountController.create)

routes.post('/depositar', TransactionController.deposit)
routes.post('/sacar', TransactionController.withdrawal)
routes.post('/pagar', TransactionController.payment)

routes.get('/extrato/:numeroConta', TransactionHistoryController.statement)

export default routes
