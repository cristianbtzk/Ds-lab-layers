import Receita from '../../classes/Receita';
import IReceitaPersistence from '../../persistence/Receita/IReceitaPersistence';

export default class CreateReceitaService {
  private receitaPersistence: IReceitaPersistence;
  constructor(receitaPersistence: IReceitaPersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(Receita: Receita) {
    return this.receitaPersistence.gravar(Receita)
  }
}