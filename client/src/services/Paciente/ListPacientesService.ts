import Paciente from '../../classes/Paciente';
import IPacientePersistence from '../../persistence/Paciente/IPacientePersistence';

export default class ListPacientesService {
  private pacientePersistence: IPacientePersistence;
  constructor(pacientePersistence: IPacientePersistence) {
    this.pacientePersistence = pacientePersistence;
  }

  async execute(): Promise<Paciente[]> {
    return this.pacientePersistence.listar()
  }
}