import IReceitaPersistence from "./IReceitaPersistence";

import Receita from "../../classes/Receita";
import fs from 'fs/promises'
import Medicacao from "../../classes/Medicacao";
import Paciente from "../../classes/Paciente";

type ReceitaFile = {
  id: string;
  data: Date;
  medicacoes: {
    id: string;
    nome: string;
    unidade: string;
    valor: number;
  }[];
  paciente: {
    id: string;
    nome: string;
    peso: number;
    altura: number;
  };
}

export default class ReceitaJSONPersistence implements IReceitaPersistence {
  async excluir(id: string) {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))

    const receitasToWrite = receitas.filter((p: any) => p.id !== id)

    await fs.writeFile('db/receitas.json', JSON.stringify(receitasToWrite))
  }

  async gravar(m: Receita) {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))

    const receitasToWrite = [...receitas, m]

    await fs.writeFile('db/receitas.json', JSON.stringify(receitasToWrite))
  }

  async listar() {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))
    if (!receitas.length) return []
    const receitasFormatadas = receitas.map((r: ReceitaFile) => {
      const paciente = new Paciente(r.paciente.id, r.paciente.nome, r.paciente.peso, r.paciente.altura)
      const medicacoes = r.medicacoes.length ? r.medicacoes.map(m => new Medicacao(m.id, m.nome, m.unidade, m.valor)) : []

      return new Receita(r.id, r.data, paciente, medicacoes)
    })
    return receitasFormatadas
  }

  async update(receita: Receita) {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))

    const receitasToWrite = receitas.map((r: ReceitaFile) => {
      if (r.id !== receita.getId()) return r

      return receita
    })

    await fs.writeFile('db/receitas.json', JSON.stringify(receitasToWrite))
    return receita
  }

  async buscarId(id: string) {
    const receitas = JSON.parse(await fs.readFile('db/receitas.json', 'utf8'))

    const receita: ReceitaFile = receitas.find((m: ReceitaFile) => m.id === id)
    if (!receita) return null
    const paciente = new Paciente(receita.paciente.id, receita.paciente.nome, receita.paciente.peso, receita.paciente.altura)
    const medicacoes = receita.medicacoes.length ? receita.medicacoes.map(m => new Medicacao(m.id, m.nome, m.unidade, m.valor)) : []
    return new Receita(receita.id, receita.data, paciente, medicacoes)
  }
}