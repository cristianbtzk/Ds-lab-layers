import { useEffect, useState } from "react"
import api from "../../services/api"

const Listar = () => {
  const [receitas, setReceitas] = useState([])
  const [idReceita, setIdReceita] = useState('')
  const [idMedicacao, setIdMedicacao] = useState('')

  async function handleDeleteReceita(id) {
    await api.delete(`/receita/${id}`)
    setReceitas(prev => prev.filter(pac => pac.id !== id))
  }

  async function handleSubmit() {
    await api.post(`/receita/${idReceita}/medicacao`, {
      idMedicacao
    })
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/receita')
      setReceitas(data)
    })()
  }, [])

  return <>
    {receitas.length !== 0 && <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Data</th>
          <th>Medicações</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        {receitas.map(m => <tr key={m.id}>
          <td>{m.id}</td>
          <td>{new Date(m.data).toLocaleDateString()}</td>
          <td>{m.medicacoes.length !== 0 && m.medicacoes.map(med => med.nome).join(', ')}</td>
          <td><button onClick={() => handleDeleteReceita(m.id)}>Deletar</button></td>
        </tr>)}
      </tbody>
    </table>}

    <form onSubmit={handleSubmit}>
      <p>Adicionar medicamento à receita</p>
      <p>Id receita</p>
      <input onChange={(e) => setIdReceita(e.target.value)} type="text" placeholder="Id da receita" />
      <p>Id Medicamento</p>
      <input onChange={(e) => setIdMedicacao(e.target.value)} type="text" placeholder="Id do medicamento" />
      <button type="submit">Enviar</button>
    </form>
  </>
}

export default Listar