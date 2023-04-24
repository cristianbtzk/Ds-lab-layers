import { Request, Response } from "express";
import Medicacao from "../classes/Medicacao";
import MedicacaoJSONPersistence from "../persistence/Medicacao/MedicacaoJSONPersistence"
import CreateMedicacaoService from "../services/Medicacao/CreateMedicacaoService"
import DeleteMedicacaoService from "../services/Medicacao/DeleteMedicacaoService";
import ListMedicacaosService from "../services/Medicacao/ListMedicacoesService";
import generateUUID from "../utils/generateUUID";

const medicacaoJSONPersistence = new MedicacaoJSONPersistence()

export default class MedicacaoController {
  async create(request: Request, response: Response) {
    const {
      nome,
      unidade,
      valor
    } = request.body

    const createMedicacaoService = new CreateMedicacaoService(medicacaoJSONPersistence)
    const id = generateUUID()
    const medicacao = new Medicacao(id, nome, unidade, valor)
    createMedicacaoService.execute(medicacao)
  }

  excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteMedicacaoService = new DeleteMedicacaoService(medicacaoJSONPersistence)
    deleteMedicacaoService.execute(id)
    return response.json()
  }

  listar(request: Request, response: Response) {
    const listMedicacaosService = new ListMedicacaosService(medicacaoJSONPersistence)

    return response.json(listMedicacaosService.execute())
  }
}