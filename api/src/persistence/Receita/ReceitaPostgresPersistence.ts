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
    const query = 'SELECT * FROM receitas'
    const { rows } = await connection.query(query)
    if (!rows.length) return []
    console.log(rows)
    const result = rows.map(row => new Receita(row.id, row.data, row.pacienteid, row.medicamentos || []))
    return result
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
}