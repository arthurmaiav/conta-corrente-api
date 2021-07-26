import { Router } from 'express'

import BankAccountController from './modules/account/controllers/BankAccountController'
import TransactionController from './modules/account/controllers/TransactionController'
import TransactionHistoryController from './modules/transaction/controllers/TransactionHistoryController'

const routes = Router()

routes.get('/contasCorrente', BankAccountController.list)
routes.post('/contaCorrente', BankAccountController.create)

routes.post('/depositar', TransactionController.deposit)
routes.post('/sacar', TransactionController.withdrawal)

routes.get('/extrato', TransactionHistoryController.statement)

export default routes
