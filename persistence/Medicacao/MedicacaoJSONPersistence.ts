import IMedicacaoPersistence from "./IMedicacaoPersistence";

import medicacoes from '../../db/medicacoes.json'
import Medicacao from "../../classes/Medicacao";
import fs from 'fs'

type MedicacaoFile = {
  nome: string;
  quantidade: number;
  unidade: string;
  valor: number;
}

export default class MedicacaoJSONPersistence implements IMedicacaoPersistence {
  excluir(p: Medicacao) {

  }

  async gravar(m: Medicacao) {
    const medicacoesToWrite = [...medicacoes, m]
    
    fs.writeFileSync('db/medicacoes.json', JSON.stringify(medicacoesToWrite))
  }

  listar() {
    const medicacoesFormatadas = medicacoes.map((m: MedicacaoFile) => new Medicacao(m.nome, m.unidade, m.quantidade, m.valor))
    return medicacoesFormatadas
  }
}