import Paciente from './Paciente'
import Medicacao from './Medicacao'

export default class Receita {
  private data: Date; 
  private medicacoes: Medicacao[]; 
  private paciente: Paciente;

  constructor(data: Date, paciente: Paciente, medicacoes: Medicacao[]){
    this.data = data
    this.paciente = paciente;
    this.medicacoes = medicacoes
  }

  addMedicacao(m: Medicacao) {
    this.medicacoes.push(m)
  }

  public getData(): Date {
    return this.data
  } 
  
}