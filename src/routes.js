import { Router } from 'express'

import ContaCorrenteController from './controllers/ContaCorrenteController'

const routes = Router()

routes.get('/contasCorrente', ContaCorrenteController.list)
routes.post('/contaCorrente', ContaCorrenteController.create)

routes.post('/depositar', ContaCorrenteController.deposit)

export default routes
