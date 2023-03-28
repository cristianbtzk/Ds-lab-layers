
export default class Medicacao {
  private id: string;
  private nome: string; 
  private unidade: string; 
  private quantidade: number; 
  private valor: number; 

  constructor(id: string, nome: string, unidade: string, quantidade: number, valor: number ){
    this.id = id;
    this.nome = nome;
    this.unidade = unidade;
    this.quantidade = quantidade;
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
  
  public getQuantidade(): string {
    return this.nome
  }
  
}