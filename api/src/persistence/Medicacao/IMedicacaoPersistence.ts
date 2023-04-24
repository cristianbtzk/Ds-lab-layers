import Medicacao from '../../classes/Medicacao'

export default interface IMedicacaoPersistence {
  gravar(medicacao: Medicacao): void;
  excluir(id: string): void;
  listar(): Promise<Medicacao[]>;
  buscarId(id: string): Promise<Medicacao | null>;
}

