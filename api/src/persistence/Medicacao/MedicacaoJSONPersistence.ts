import IMedicacaoPersistence from "./IMedicacaoPersistence";

import Medicacao from "../../classes/Medicacao";
import fs from 'fs/promises'

type MedicacaoFile = {
  id: string;
  nome: string;
  quantidade: number;
  unidade: string;
  valor: number;
}

export default class MedicacaoJSONPersistence implements IMedicacaoPersistence {
  async excluir(id: string) {
    const medicacoes = JSON.parse(await fs.readFile('db/medicacoes.json', 'utf8'))

    const medicacoesToWrite = medicacoes.filter((m: MedicacaoFile) => m.id !== id)
    
    await fs.writeFile('db/medicacoes.json', JSON.stringify(medicacoesToWrite))
  }

  async gravar(m: Medicacao) {
    const medicacoes = JSON.parse(await fs.readFile('db/medicacoes.json', 'utf8'))

    const medicacoesToWrite = [...medicacoes, m]
    
    await fs.writeFile('db/medicacoes.json', JSON.stringify(medicacoesToWrite))
  }

  async listar() {
    const medicacoes = JSON.parse(await fs.readFile('db/medicacoes.json', 'utf8'))
    if(!medicacoes.length) return []

    const medicacoesFormatadas = medicacoes.map((m: MedicacaoFile) => new Medicacao(m.id, m.nome, m.unidade, m.valor))
    return medicacoesFormatadas
  }

  async buscarId(id: string) {
    const medicacoes = JSON.parse(await fs.readFile('db/medicacoes.json', 'utf8'))
  
    const medicacao: MedicacaoFile = medicacoes.find((m: MedicacaoFile) => m.id === id)
    if(!medicacao) return null

    return new Medicacao(medicacao.id, medicacao.nome, medicacao.unidade, medicacao.valor)
  }
}


