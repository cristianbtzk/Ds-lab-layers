import IMedicacaoPersistence from "./IMedicacaoPersistence";
import dbClient from '../../lib/db'
import Medicacao from "../../classes/Medicacao";

type MedicacaoFile = {
  id: string;
  nome: string;
  quantidade: number;
  unidade: string;
  valor: number;
}


export default class MedicacaoJSONPersistence implements IMedicacaoPersistence {
  async excluir(id: string) {
    const connection = await dbClient()

    const sql = 'DELETE FROM medicacoes WHERE id=$1;'
    return await connection.query(sql, [id])

  }

  async gravar(m: Medicacao) {
    const connection = await dbClient()

    const sql = `INSERT INTO medicacoes(id, nome, unidade, valor) values ($1, $2, $3, $4) RETURNING *`
    const values = [m.getId(), m.getNome(), m.getUnidade(), m.getValor()]

    const { rows } = await connection.query(sql, values)
    return new Medicacao(rows[0].id, rows[0].nome, rows[0].unidade, rows[0].valor)
  }

  async listar() {
    const connection = await dbClient()
    const query = 'SELECT * FROM medicacoes'
    const { rows } = await connection.query(query)
    if (!rows.length) return []
    const result = rows.map(row => new Medicacao(row.id, row.nome, row.unidade, row.valor))
    return result
  }

  async buscarId(id: string) {
    const connection = await dbClient()
    const query = 'SELECT * FROM medicacoes WHERE id=$1'
    const res = await connection.query(query, [id])
    return res as unknown as Medicacao
  }
}


