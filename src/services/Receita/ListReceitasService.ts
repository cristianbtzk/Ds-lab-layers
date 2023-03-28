import Receita from '../../classes/Receita';
import IReceitaPersistence from '../../persistence/Receita/IReceitaPersistence';

export default class ListReceitasService {
  private receitaPersistence: IReceitaPersistence;
  constructor(receitaPersistence: IReceitaPersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(): Promise<Receita[]> {
    return this.receitaPersistence.listar()
  }
}