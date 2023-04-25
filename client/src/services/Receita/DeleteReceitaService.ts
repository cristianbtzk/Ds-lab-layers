import IReceitaPersistence from '../../persistence/Receita/IReceitaPersistence';

export default class DeleteReceitaService {
  private receitaPersistence: IReceitaPersistence;
  constructor(receitaPersistence: IReceitaPersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(id: string) {
    this.receitaPersistence.excluir(id)
  }
}