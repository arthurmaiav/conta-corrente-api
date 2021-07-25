import { Router } from 'express'

import ContaCorrenteController from './controllers/ContaCorrenteController'

const routes = Router()

routes.get('/contasCorrente', ContaCorrenteController.list)
routes.post('/contaCorrente', ContaCorrenteController.create)

export default routes
