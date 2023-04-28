import { useState } from "react"
import api from "../../services/api"

const Adicionar = () => {
  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  async function handleSubmit() {
    await api.post(`/medicacao`, {
      nome, peso: Number(peso), altura: Number(altura)
    })
  }

  return <form action="" onSubmit={handleSubmit}>
    <p>Nome</p>
    <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome" />
    <p>Peso</p>
    <input onChange={(e) => setPeso(e.target.value)} type="text" placeholder="peso" />
    <p>Altura</p>
    <input onChange={(e) => setAltura(e.target.value)} type="text" placeholder="value" />
    <button type="submit">Enviar</button>
  </form>
}

export default Adicionar