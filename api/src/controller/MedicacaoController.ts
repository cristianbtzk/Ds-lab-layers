import { Request, Response } from "express";
import Medicacao from "../classes/Medicacao";
import MedicacaoPostgresPersistence from "../persistence/Medicacao/MedicacaoPostgresPersistence"
import CreateMedicacaoService from "../services/Medicacao/CreateMedicacaoService"
import DeleteMedicacaoService from "../services/Medicacao/DeleteMedicacaoService";
import ListMedicacaosService from "../services/Medicacao/ListMedicacoesService";
import generateUUID from "../utils/generateUUID";

const medicacaoPostgresPersistence = new MedicacaoPostgresPersistence()

export default class MedicacaoController {
  async create(request: Request, response: Response) {
    const {
      nome,
      unidade,
      valor
    } = request.body
    const createMedicacaoService = new CreateMedicacaoService(medicacaoPostgresPersistence)
    const id = generateUUID()
    const medicacao = new Medicacao(id, nome, unidade, valor)
    const med = await createMedicacaoService.execute(medicacao)
    return response.json(med)
  }

  async excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteMedicacaoService = new DeleteMedicacaoService(medicacaoPostgresPersistence)
    deleteMedicacaoService.execute(id)
    return response.json()
  }

  async listar(request: Request, response: Response) {
    const listMedicacaosService = new ListMedicacaosService(medicacaoPostgresPersistence)
    const result = await listMedicacaosService.execute()
    return response.json(result)
  }
}