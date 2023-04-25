import Receita from "../classes/Receita";


import MedicacaoJSONPersistence from "../persistence/Medicacao/MedicacaoJSONPersistence"
import ReceitaJSONPersistence from "../persistence/Receita/ReceitaJSONPersistence"
import PacienteJSONPersistence from "../persistence/Paciente/PacienteJSONPersistence"
import CalcularValorReceitaService from "../services/Receita/CalcularValorReceitaService"
import CreateReceitaService from "../services/Receita/CreateReceitaService"
import DeleteReceitaService from "../services/Receita/DeleteReceitaService";
import ListReceitasService from "../services/Receita/ListReceitasService";
import UpdateReceitaService from "../services/Receita/UpdateReceitaService";
import generateUUID from "../utils/generateUUID";

const medicacaoJSONPersistence = new MedicacaoJSONPersistence()
const pacienteJSONPersistence = new PacienteJSONPersistence()
const receitaJSONPersistence = new ReceitaJSONPersistence()

export default class ReceitaController {
  async create(idPaciente: string) {
    const createReceitaService = new CreateReceitaService(receitaJSONPersistence)
    const id = generateUUID()
    
    const paciente = await pacienteJSONPersistence.buscarId(idPaciente)
    
    const receita = new Receita(id, new Date(), paciente, [])
    createReceitaService.execute(receita)
  }

  excluir(id: string) {
    const deleteReceitaService = new DeleteReceitaService(receitaJSONPersistence)
    deleteReceitaService.execute(id)
  }

  listar(): Promise<Receita[]> {
    const listReceitasService = new ListReceitasService(receitaJSONPersistence)

    return listReceitasService.execute()
  }

  async adicionarMedicacao(idReceita: string, idMedicacao: string): Promise<void> {
    const updateReceitaService = new UpdateReceitaService(receitaJSONPersistence)
    const medicacao = await medicacaoJSONPersistence.buscarId(idMedicacao)
    const receita = await receitaJSONPersistence.buscarId(idReceita)

    if(!medicacao || !receita) return
    receita.addMedicacao(medicacao)
    await updateReceitaService.execute(receita)
  }

  async calcularValorTotal(idReceita: string): Promise<number> {
    const calcularValorReceitaService = new CalcularValorReceitaService(receitaJSONPersistence)
    
    const total = await calcularValorReceitaService.execute(idReceita)
    return total
  }
}