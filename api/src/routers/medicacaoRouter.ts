import { Request, Response, Router } from 'express'
import MedicacaoController from '../controller/MedicacaoController'

const router = Router()

const medicacaoController = new MedicacaoController()

export default router
  .get('/medicacao', medicacaoController.listar)
  .post('/medicacao', medicacaoController.create)
  .delete('/medicacao/:id', medicacaoController.excluir)