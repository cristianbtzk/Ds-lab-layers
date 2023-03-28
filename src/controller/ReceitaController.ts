import Receita from "../classes/Receita";
import ReceitaJSONPersistence from "../persistence/Receita/ReceitaJSONPersistence"
import PacienteJSONPersistence from "../persistence/Paciente/PacienteJSONPersistence"
import CreateReceitaService from "../services/Receita/CreateReceitaService"
import DeleteReceitaService from "../services/Receita/DeleteReceitaService";
import ListReceitasService from "../services/Receita/ListReceitasService";
import generateUUID from "../utils/generateUUID";

const pacienteJSONPersistence = new PacienteJSONPersistence()
const receitaJSONPersistence = new ReceitaJSONPersistence()

export default class ReceitaController {
  async create(idPaciente: string) {
    const createReceitaService = new CreateReceitaService(receitaJSONPersistence)
    const id = generateUUID()
    console.log('id');
    console.log(id);
    
    const paciente = await pacienteJSONPersistence.buscarId(idPaciente)
    console.log('paciente');
    console.log(paciente);
    
    const receita = new Receita(id, new Date(), paciente, [])
    console.log(receita)
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
}