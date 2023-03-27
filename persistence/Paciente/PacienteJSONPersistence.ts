import IPacientePersistence from "./IPacientePersistence";

import pacientes from '../../db/pacientes.json'
import Paciente from "../../classes/Paciente";
import fs from 'fs'

export default class PacienteJSONPersistence implements IPacientePersistence {
  excluir(p: Paciente) {

  }

  async gravar(p: Paciente) {
    const pacientesToWrite = [...pacientes, p]
    console.log(JSON.stringify(p));
    
    fs.writeFileSync('db/pacientes.json', JSON.stringify(pacientesToWrite))
  }

  listar() {
    const pacientesFormatados = pacientes.map(p => new Paciente(p.nome, p.peso, p.altura))
    return pacientesFormatados
  }
}