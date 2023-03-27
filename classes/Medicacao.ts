
export default class Medicacao {
  private nome: string; 
  private unidade: string; 
  private quantidade: number; 
  private valor: number; 

  constructor(nome: string, unidade: string, quantidade: number, valor: number ){
    this.nome = nome;
    this.unidade = unidade;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  public getNome(): string {
    return this.nome
  } 
  
  public getUnidade(): string {
    return this.unidade
  }
  
  public getQuantidade(): string {
    return this.nome
  }
  
}