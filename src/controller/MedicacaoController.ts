import Medicacao from "../classes/Medicacao";
import MedicacaoJSONPersistence from "../persistence/Medicacao/MedicacaoJSONPersistence"
import CreateMedicacaoService from "../services/Medicacao/CreateMedicacaoService"
import DeleteMedicacaoService from "../services/Medicacao/DeleteMedicacaoService";
import ListMedicacaosService from "../services/Medicacao/ListMedicacoesService";
import generateUUID from "../utils/generateUUID";

const medicacaoJSONPersistence = new MedicacaoJSONPersistence()

export default class MedicacaoController {
  async create(nome: string, unidade: string, quantidade: number, valor: number) {
    const createMedicacaoService = new CreateMedicacaoService(medicacaoJSONPersistence)
    const id = generateUUID()
    const medicacao = new Medicacao(id, nome, unidade, quantidade, valor)
    createMedicacaoService.execute(medicacao)
  }

  excluir(id: string) {
    const deleteMedicacaoService = new DeleteMedicacaoService(medicacaoJSONPersistence)
    deleteMedicacaoService.execute(id)
  }

  listar() {
    const listMedicacaosService = new ListMedicacaosService(medicacaoJSONPersistence)

    return listMedicacaosService.execute()
  }
}