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

    const sql = `INSERT INTO medicacoes(id, nome, unidade, valor) values ($1, $2, $3, $4)`
    const values = [m.getId(), m.getNome(), m.getUnidade(), m.getValor()]

    const algo = await connection.query(sql, values)
    return
  }

  async listar() {
    const connection = await dbClient()
    const query = 'SELECT * FROM medicacoes'
    const res = await connection.query(query)
    const s =  res.rows
    console.log('s')
    console.log(s)
    return s as unknown as Medicacao[]
  }

  async buscarId(id: string) {
    const connection = await dbClient()
    const query = 'SELECT * FROM medicacoes'
    const res = await connection.query(query)
    return res as unknown as Medicacao
  }
}


