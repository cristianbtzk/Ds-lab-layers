import IPacientePersistence from "./IPacientePersistence";
import dbClient from '../../lib/db'

import Paciente from "../../classes/Paciente";
import fs from 'fs/promises'

export default class PacienteJSONPersistence implements IPacientePersistence {
  async excluir(id: string) {
    const connection = await dbClient()

    const sql = 'DELETE FROM pacientes WHERE id=$1;'
    return await connection.query(sql, [id])
  }

  async gravar(p: Paciente) {
    const connection = await dbClient()

    const sql = `INSERT INTO pacientes(id, nome, peso, altura) values ($1, $2, $3, $4)`
    const values = [p.getId(), p.getNome(), p.getPeso(), p.getAltura()]

    await connection.query(sql, values)
    return p
  }

  async listar() {
    const connection = await dbClient()
    const query = 'SELECT * FROM pacientes'
    const { rows } = await connection.query(query)
    if (!rows.length) return []
    const result = rows.map(row => new Paciente(row.id, row.nome, row.peso, row.altura))
    return result
  }

  async buscarId(id: string) {
    const connection = await dbClient()
    const query = 'SELECT * FROM pacientes WHERE id=$1 LIMIT 1'
    const { rows } = await connection.query(query, [id])
    if (!rows.length) return null
    const row = rows[0]
    return new Paciente(row.id, row.nome, row.peso, row.altura)
  }
}