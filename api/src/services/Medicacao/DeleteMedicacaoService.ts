import Medicacao from '../../classes/Medicacao';
import IMedicacaoPersistence from '../../persistence/Medicacao/IMedicacaoPersistence';

export default class DeleteMedicacaoService {
  private medicacaoPersistence: IMedicacaoPersistence;
  constructor(medicacaoPersistence: IMedicacaoPersistence) {
    this.medicacaoPersistence = medicacaoPersistence;
  }

  async execute(id: string) {
    this.medicacaoPersistence.excluir(id)
  }
}