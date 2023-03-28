import Paciente from '../../classes/Paciente';
import IPacientePersistence from '../../persistence/Paciente/IPacientePersistence';

export default class ListPacientesService {
  private receitaPersistence: IPacientePersistence;
  constructor(receitaPersistence: IPacientePersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(): Promise<Paciente[]> {
    return this.receitaPersistence.listar()
  }
}