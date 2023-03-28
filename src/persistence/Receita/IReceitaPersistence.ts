import Receita from '../../classes/Receita'

export default interface IReceitaPersistence {
  gravar(receita: Receita): Promise<void>;
  excluir(id: string): Promise<void>;
  listar(): Promise<Receita[]>;
}