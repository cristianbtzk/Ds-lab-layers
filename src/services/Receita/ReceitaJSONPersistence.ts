import IReceitaPersistence from "./IReceitaPersistence";

import Receita from "../../classes/Receita";
import fs from 'fs/promises'
import Medicacao from "../../classes/Medicacao";
import Paciente from "../../classes/Paciente";

type ReceitaFile = {
  id: string;
  data: Date;
  medicacoes: Medicacao[];
  paciente: Paciente;
}

export default class ReceitaJSONPersistence implements IReceitaPersistence {
  excluir(p: Receita) {

  }

  async gravar(m: Receita) {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))

    const receitasToWrite = [...receitas, m]
    
    await fs.writeFile('db/receitas.json', JSON.stringify(receitasToWrite))
  }

  async listar() {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))
    if(!receitas.length) return []
    const receitasFormatadas = receitas.map((r: ReceitaFile) => new Receita(r.id, r.data, r.paciente, r.medicacoes))
    return receitasFormatadas
  }
}