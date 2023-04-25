import { Request, Response } from "express";
import Paciente from "../classes/Paciente";
import PacientePostgresPersistence from "../persistence/Paciente/PacientePostgresPersistence"
import CreatePacienteService from "../services/Paciente/CreatePacienteService"
import DeletePacienteService from "../services/Paciente/DeletePacienteService";
import ListPacientesService from "../services/Paciente/ListPacientesService";
import generateUUID from "../utils/generateUUID";

const pacientePostgresPersistence = new PacientePostgresPersistence()

export default class PacienteController {
  async create(request: Request, response: Response) {
    const {
      nome,
      peso,
      altura
    } = request.body
    const createPacienteService = new CreatePacienteService(pacientePostgresPersistence)
    const id = generateUUID()
    const paciente = new Paciente(id, nome, peso, altura)
    const pacienteCriado = await createPacienteService.execute(paciente)

    return response.json(pacienteCriado)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deletePacienteService = new DeletePacienteService(pacientePostgresPersistence)
    await deletePacienteService.execute(id)
    return response.json()
  }

  async listar(request: Request, response: Response) {
    const listPacientesService = new ListPacientesService(pacientePostgresPersistence)

    const pacientes = await listPacientesService.execute()
    return response.json(pacientes)
  }
}