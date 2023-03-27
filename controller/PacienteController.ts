import Paciente from "../classes/Paciente";
import IPacientePersistence from "../persistence/Paciente/IPacientePersistence";

export default class PacienteController {
  private pacientePersistence : IPacientePersistence;
  constructor(persistence: IPacientePersistence) {
    this.pacientePersistence = persistence
  }

  create(nome: string, peso: number, altura: number) {
    const paciente = new Paciente(nome, peso, altura)
    this.pacientePersistence.gravar(paciente)
  }

  excluir(paciente: Paciente) {
    this.pacientePersistence.excluir(paciente)
  }

  listar() {
    return this.pacientePersistence.listar()
  }
}