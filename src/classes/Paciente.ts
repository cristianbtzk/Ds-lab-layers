
export default class Paciente {
  private id: string;
  private nome: string; 
  private peso: number; 
  private altura: number; 

  constructor(id: string, nome: string, peso: number, altura: number ){
    this.id = id;
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
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

  public toString(): string {
    return `Id: ${this.id}, nome: ${this.nome}, peso: ${this.peso}, altura: ${this.altura}`
  }
  
}