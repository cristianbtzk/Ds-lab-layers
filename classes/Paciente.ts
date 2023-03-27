
export default class Paciente {
  private nome: string; 
  private peso: number; 
  private altura: number; 

  constructor(nome: string, peso: number, altura: number ){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  public getNome(): string {
    return this.nome
  } 
  
  public getPeso(): number {
    return this.peso
  }
  
  public getAltura(): number {
    return this.altura
  }
  
}