import Receita from '../../classes/Receita'

export default interface IReceitaPersistence {
  buscarId(id: string): Promise<Receita | null>;
  gravar(receita: Receita): Promise<Receita>;
  excluir(id: string): Promise<void>;
  listar(): Promise<Receita[]>;
  update(receita: Receita): Promise<Receita>;
  addMedicamento(idReceita: string, idMedicamento: string): Promise<void>;
}