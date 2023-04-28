import IReceitaPersistence from "./IReceitaPersistence";
import dbClient from '../../lib/db'

import Receita from "../../classes/Receita";
import fs from 'fs/promises'
import Medicacao from "../../classes/Medicacao";
import Paciente from "../../classes/Paciente";

type ReceitaFile = {
  id: string;
  data: Date;
  receitas: {
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
    const connection = await dbClient()

    const sql = 'DELETE FROM receitas WHERE id=$1;'
    await connection.query(sql, [id])
    return
  }

  async gravar(m: Receita) {
    const connection = await dbClient()

    const sql = `INSERT INTO receitas(id, data, pacienteId) values ($1, $2, $3)`
    const values = [m.getId(), m.getData(), m.getPaciente()?.getId()]

    await connection.query(sql, values)
    return m
  }

  async listar() {
    const connection = await dbClient()
    const query = 'SELECT r.*, m.nome, m.unidade, m.valor, rm.medicacaoId FROM receitas r LEFT JOIN receita_medicacoes rm ON r.id = rm.receitaId LEFT JOIN medicacoes m ON m.id=rm.medicacaoId'
    const { rows } = await connection.query(query)
    if (!rows.length) return []
    console.log(rows)
    const r = rows.reduce((accum, row) => {
      let receita: Receita = accum.find((r: Receita) => r.getId() === row.id)
      if (receita) {
        if(row.medicacaoid) {
          const medicacao = new Medicacao(row.medicacaoId, row.nome, row.unidade, row.valor)
          receita.addMedicacao(medicacao)
        }

        return accum
      }

      const medicacoes = row.medicacaoid ? [new Medicacao(row.medicacaoId, row.nome, row.unidade, row.valor)] : []
      const paciente = null
      return [...accum,
        new Receita(row.id, new Date(row.data), paciente, medicacoes)
      ]
    }, [])
    const result = rows.map(row => new Receita(row.id, row.data, row.pacienteid, row.medicamentos || []))
    return r
  }

  async update(receita: Receita) {
    return receita
  }

  async buscarId(id: string) {
    const connection = await dbClient()
    const query = 'SELECT * FROM receitas'
    const res = await connection.query(query)
    return res as unknown as Receita
  }

  async addMedicamento(idReceita: string, idMedicamento: string): Promise<void> {
    const connection = await dbClient()
    const query = 'INSERT INTO receita_medicacoes(receitaId, medicacaoId) VALUES ($1, $2)'
    await connection.query(query, [idReceita, idMedicamento])
  }
}