import { Link } from 'react-router-dom'

const Home = () => {
  return <>
    <Link to="/medicacoes/all">Listar medicação</Link>
    <br />
    <Link to="/medicacoes/add">Adicionar medicação</Link>
    <br />
    <Link to="/pacientes/all">Listar Pacientes</Link>
    <br />
    <Link to="/pacientes/add">Adicionar paciente</Link>
    <br />
    <Link to="/receitas/all">Listar receitas</Link>
    <br />
    <Link to="/receitas/add">Adicionar receita</Link>
  </>
}

export default Home