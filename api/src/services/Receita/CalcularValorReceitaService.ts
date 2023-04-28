import IReceitaPersistence from '../../persistence/Receita/IReceitaPersistence';

export default class CalcularValorReceitaService {
  private receitaPersistence: IReceitaPersistence;
  constructor(receitaPersistence: IReceitaPersistence) {
    this.receitaPersistence = receitaPersistence;
  }

  async execute(idReceita: string): Promise<number> {
    const receita = await this.receitaPersistence.buscarId(idReceita)

    if (!receita) throw new Error("Receita não existe");

    return receita.calcularTotal()
  }
}