import Paciente from '../../classes/Paciente'

export default interface IPacientePersistence {
  gravar(paciente: Paciente): void;
  excluir(id: string): void;
  listar(): Promise<Paciente[]>;
  buscarId(id: string): Promise<Paciente | null>;
}