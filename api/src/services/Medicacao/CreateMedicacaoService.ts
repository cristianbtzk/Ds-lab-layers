import Medicacao from '../../classes/Medicacao';
import IMedicacaoPersistence from '../../persistence/Medicacao/IMedicacaoPersistence';

export default class CreateMedicacaoService {
  private medicacaoPersistence: IMedicacaoPersistence;
  constructor(medicacaoPersistence: IMedicacaoPersistence) {
    this.medicacaoPersistence = medicacaoPersistence;
  }

  async execute(medicacao: Medicacao) {
    return this.medicacaoPersistence.gravar(medicacao)
  }
}