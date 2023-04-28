import Receita from '../../classes/Receita';
import IReceitaPersistence from '../../persistence/Receita/IReceitaPersistence';

export default class UpdateReceitaService {
  private receitaPersistence: IReceitaPersistence;
  constructor(receitaPersistence: IReceitaPersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(idReceita: string, idMedicacao: string) {
    this.receitaPersistence.addMedicamento(idReceita, idMedicacao)
  }
}