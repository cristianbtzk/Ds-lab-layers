import Paciente from '../../classes/Paciente';
import IPacientePersistence from '../../persistence/Paciente/IPacientePersistence';

export default class DeletePacienteService {
  private pacientePersistence: IPacientePersistence;
  constructor(pacientePersistence: IPacientePersistence) {
    this.pacientePersistence = pacientePersistence;
  }

  async execute(id: string) {
    this.pacientePersistence.excluir(id)
  }
}