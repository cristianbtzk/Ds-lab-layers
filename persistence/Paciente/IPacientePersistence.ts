import Paciente from '../../classes/Paciente'

export default interface IPacientePersistence {
  gravar(paciente: Paciente): void;
  excluir(paciente: Paciente): void;
  listar(): Paciente[];
}