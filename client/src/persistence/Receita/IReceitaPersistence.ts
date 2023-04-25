import Receita from '../../classes/Receita'

export default interface IReceitaPersistence {
  buscarId(id: string): Promise<Receita | null>;
  gravar(receita: Receita): Promise<void>;
  excluir(id: string): Promise<void>;
  listar(): Promise<Receita[]>;
  update(receita: Receita): Promise<Receita>;
}