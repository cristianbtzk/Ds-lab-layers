import Paciente from "../classes/Paciente";
import PacienteJSONPersistence from "../persistence/Paciente/PacienteJSONPersistence"
import CreatePacienteService from "../services/Paciente/CreatePacienteService"
import DeletePacienteService from "../services/Paciente/DeletePacienteService";
import ListPacientesService from "../services/Paciente/ListPacientesService";
import generateUUID from "../utils/generateUUID";

const pacienteJSONPersistence = new PacienteJSONPersistence()

export default class PacienteController {
  async create(nome: string, peso: number, altura: number) {
    const createPacienteService = new CreatePacienteService(pacienteJSONPersistence)
    const id = generateUUID()
    const paciente = new Paciente(id, nome, peso, altura)
    createPacienteService.execute(paciente)
  }

  excluir(id: string) {
    const deletePacienteService = new DeletePacienteService(pacienteJSONPersistence)
    deletePacienteService.execute(id)
  }

  listar(): Promise<Paciente[]> {
    const listPacientesService = new ListPacientesService(pacienteJSONPersistence)

    return listPacientesService.execute()
  }
}