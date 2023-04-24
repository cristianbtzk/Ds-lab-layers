import IPacientePersistence from "./IPacientePersistence";

import Paciente from "../../classes/Paciente";
import fs from 'fs/promises'

export default class PacienteJSONPersistence implements IPacientePersistence {
  async excluir(id: string) {
    const pacientes = JSON.parse(await fs.readFile('db/pacientes.json', 'utf8'))

    const pacientesToWrite = pacientes.filter((p: any) => p.id !== id)
    
    await fs.writeFile('db/pacientes.json', JSON.stringify(pacientesToWrite))
  }

  async gravar(p: Paciente) {
    const pacientes = JSON.parse(await fs.readFile('db/pacientes.json', 'utf8'))
    console.log(pacientes)
    const pacientesToWrite = [...pacientes, p]
    
    await fs.writeFile('db/pacientes.json', JSON.stringify(pacientesToWrite))
  }

  async listar() {
    const pacientes = JSON.parse(await fs.readFile('db/pacientes.json', 'utf8'))
    
    if(!pacientes.length) return []

    const pacientesFormatados = pacientes.map((p: any) => new Paciente(p.id, p.nome, p.peso, p.altura))
    return pacientesFormatados
  }

  async buscarId(id: string) {
    const pacientes = JSON.parse(await fs.readFile('db/pacientes.json', 'utf8'))
  
    const paciente = pacientes.find((p: any) => p.id === id)
    if(!paciente) return null

    return new Paciente(paciente.id, paciente.nome, paciente.peso, paciente.altura)
  }
}