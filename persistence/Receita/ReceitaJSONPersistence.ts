import IReceitaPersistence from "./IReceitaPersistence";

import receitas from '../../db/receitas.json'
import Receita from "../../classes/Receita";
import fs from 'fs'
import Medicacao from "../../classes/Medicacao";
import Paciente from "../../classes/Paciente";

type ReceitaFile = {
  data: Date;
  medicacoes: Medicacao[];
  paciente: Paciente;
}

export default class ReceitaJSONPersistence implements IReceitaPersistence {
  excluir(p: Receita) {

  }

  async gravar(m: Receita) {
    const receitasToWrite = [...receitas, m]
    
    fs.writeFileSync('db/receitas.json', JSON.stringify(receitasToWrite))
  }

  listar() {
    const receitasFormatadas = receitas.map((r: ReceitaFile) => new Receita(r.data, r.paciente, r.medicacoes))
    return receitasFormatadas
  }
}