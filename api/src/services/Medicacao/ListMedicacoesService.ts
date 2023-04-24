import Medicacao from '../../classes/Medicacao';
import IMedicacaoPersistence from '../../persistence/Medicacao/IMedicacaoPersistence';

export default class ListMedicacoesService {
  private medicacaoPersistence: IMedicacaoPersistence;
  constructor(medicacaoPersistence: IMedicacaoPersistence) {
    this.medicacaoPersistence = medicacaoPersistence;
  }

  async execute() {
    return this.medicacaoPersistence.listar()
  }
}