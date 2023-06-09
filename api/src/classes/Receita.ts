import Paciente from './Paciente'
import Medicacao from './Medicacao'

export default class Receita {
  private id: string;
  private data: Date; 
  private medicacoes: Medicacao[]; 
  private paciente: Paciente | null;

  constructor(id: string, data: Date, paciente: Paciente | null, medicacoes: Medicacao[]){
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

  public calcularTotal(): number {
    return this.medicacoes.reduce((accum, medicacao: Medicacao) => accum + medicacao.getValor(), 0)
  }

  public getPaciente(): Paciente | null {
    return this.paciente;
  }

  public toString(): string {
    return `Id: ${this.id}, data: ${this.data}, medicações: ${this.medicacoes}, paciente: ${this.paciente?.toString()}`
  }
  
}