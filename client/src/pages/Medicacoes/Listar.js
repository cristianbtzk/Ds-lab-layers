import { useEffect, useState } from "react"
import api from "../../services/api"

const Listar = () => {
  const [medicacoes, setMedicacoes] = useState([])

  async function handleDeleteMedicacao(id) {
    await api.delete(`/medicacao/${id}`)
    setMedicacoes(prev => prev.filter(med => med.id !== id))
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/medicacao')
      console.log(data)
      setMedicacoes(data)
    })()
  }, [])

  return <>
    {medicacoes.length !== 0 && <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Unidade</th>
          <th>Valor</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        {medicacoes.map(m => <tr key={m.id}>
          <td>{m.id}</td>
          <td>{m.nome}</td>
          <td>{m.unidade}</td>
          <td>{m.valor}</td>
          <td><button onClick={() => handleDeleteMedicacao(m.id)}>Deletar</button></td>
        </tr>)}
      </tbody>
    </table>}
  </>
}

export default Listar