
export default class Medicacao {
  private id: string;
  private nome: string; 
  private unidade: string; 
  private valor: number; 

  constructor(id: string, nome: string, unidade: string, valor: number ){
    this.id = id;
    this.nome = nome;
    this.unidade = unidade;
    this.valor = valor;
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
  
  public getUnidade(): string {
    return this.unidade
  }
  
  public getValor(): number {
    return this.valor
  }
  
  public toString(): string {
    return `Id: ${this.id}, nome: ${this.nome}, unidade: ${this.unidade}, valor: ${this.valor}`
  }
}