import { useState } from "react"
import api from "../../services/api"

const Adicionar = () => {
  const [idPaciente, setIdPaciente] = useState('')

  async function handleSubmit() {
    await api.post(`/receita`, {
      idPaciente
    })
  }

  return <form action="" onSubmit={handleSubmit}>
    <p>Id paciente</p>
    <input onChange={(e) => setIdPaciente(e.target.value)} type="text" placeholder="Id do paciente" />
    
    <button type="submit">Enviar</button>
  </form>
}

export default Adicionar