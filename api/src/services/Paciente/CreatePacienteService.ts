import Paciente from '../../classes/Paciente';
import IPacientePersistence from '../../persistence/Paciente/IPacientePersistence';

export default class CreatePacienteService {
  private pacientePersistence: IPacientePersistence;
  constructor(pacientePersistence: IPacientePersistence) {
    this.pacientePersistence = pacientePersistence;
  }

  async execute(paciente: Paciente) {
    return this.pacientePersistence.gravar(paciente)
  }
}