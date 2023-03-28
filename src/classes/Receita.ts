import Paciente from './Paciente'
import Medicacao from './Medicacao'

export default class Receita {
  private id: string;
  private data: Date; 
  private medicacoes: Medicacao[]; 
  private paciente: Paciente;

  constructor(id: string, data: Date, paciente: Paciente, medicacoes: Medicacao[]){
    this.id = id;
    this.data = data
    this.paciente = paciente;
    this.medicacoes = medicacoes
  }

  addMedicacao(m: Medicacao) {
    this.medicacoes.push(m)
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getData(): Date {
    return this.data
  } 
  
}