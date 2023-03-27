import Medicacao from "../classes/Medicacao";
import IMedicacaoPersistence from "../persistence/Medicacao/IMedicacaoPersistence";

export default class MedicacaoController {
  private medicacaoPersistence : IMedicacaoPersistence;
  
  constructor(persistence: IMedicacaoPersistence) {
    this.medicacaoPersistence = persistence
  }

  create(nome: string, unidade: string, quantidade: number, valor: number) {
    const medicacao = new Medicacao(nome, unidade, quantidade, valor)
    this.medicacaoPersistence.gravar(medicacao)
  }

  excluir(medicacao: Medicacao) {
    this.medicacaoPersistence.excluir(medicacao)
  }

  listar() {
    return this.medicacaoPersistence.listar()
  }
}