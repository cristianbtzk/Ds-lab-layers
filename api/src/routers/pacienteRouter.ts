import { Router } from 'express'
import PacienteController from '../controller/PacienteController'

const router = Router()

const pacienteController = new PacienteController()

export default router
  .get('/paciente', pacienteController.listar)
  .post('/paciente', pacienteController.create)
  .delete('/paciente/:id', pacienteController.excluir)