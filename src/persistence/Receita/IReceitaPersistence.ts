import Receita from '../../classes/Receita'

export default interface IReceitaPersistence {
  gravar(receita: Receita): void;
  excluir(receita: Receita): void;
  listar(): Promise<Receita[]>;
}