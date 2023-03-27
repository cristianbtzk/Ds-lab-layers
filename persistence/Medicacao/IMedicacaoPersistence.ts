import Medicacao from '../../classes/Medicacao'

export default interface IMedicacaoPersistence {
  gravar(medicacao: Medicacao): void;
  excluir(medicacao: Medicacao): void;
  listar(): Medicacao[];
}