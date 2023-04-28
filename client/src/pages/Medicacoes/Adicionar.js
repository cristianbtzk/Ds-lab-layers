import { useState } from "react"
import api from "../../services/api"

const Adicionar = () => {
  const [nome, setNome] = useState('')
  const [unidade, setUnidade] = useState('')
  const [valor, setValor] = useState('')

  async function handleSubmit() {
    await api.post(`/medicacao`, {
      nome, unidade, valor: Number(valor)
    })
  }

  return <form action="" onSubmit={handleSubmit}>
    <p>Nome</p>
    <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome" />
    <p>Unidade</p>
    <input onChange={(e) => setUnidade(e.target.value)} type="text" placeholder="unidade" />
    <p>Valor</p>
    <input onChange={(e) => setValor(e.target.value)} type="text" placeholder="value" />
    <button type="submit">Enviar</button>
  </form>
}

export default Adicionar