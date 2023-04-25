import { Router } from 'express'
import ReceitaController from '../controller/ReceitaController'

const router = Router()

const receitaController = new ReceitaController()

export default router
  .get('/receita', receitaController.listar)
  .post('/receita', receitaController.create)
  .delete('/receita/:id', receitaController.excluir)