import { useEffect, useState } from "react"
import api from "../../services/api"

const Listar = () => {
  const [pacientes, setPacientes] = useState([])

  async function handleDeletePaciente(id) {
    await api.delete(`/paciente/${id}`)
    setPacientes(prev => prev.filter(pac => pac.id !== id))
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/paciente')
      console.log(data)
      setPacientes(data)
    })()
  }, [])

  return <>
    {pacientes.length !== 0 && <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Peso</th>
          <th>Altura</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map(m => <tr key={m.id}>
          <td>{m.id}</td>
          <td>{m.nome}</td>
          <td>{m.peso}</td>
          <td>{m.altura}</td>
          <td><button onClick={() => handleDeletePaciente(m.id)}>Deletar</button></td>
        </tr>)}
      </tbody>
    </table>}
  </>
}

export default Listar