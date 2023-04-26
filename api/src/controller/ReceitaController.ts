import Receita from "../classes/Receita";


import MedicacaoPostgresPersistence from "../persistence/Medicacao/MedicacaoPostgresPersistence"
import ReceitaPostgresPersistence from "../persistence/Receita/ReceitaPostgresPersistence"
import PacientePostgresPersistence from "../persistence/Paciente/PacientePostgresPersistence"
import CalcularValorReceitaService from "../services/Receita/CalcularValorReceitaService"
import CreateReceitaService from "../services/Receita/CreateReceitaService"
import DeleteReceitaService from "../services/Receita/DeleteReceitaService";
import ListReceitasService from "../services/Receita/ListReceitasService";
import AddMedicacaoService from "../services/Receita/AddMedicacaoService";
import generateUUID from "../utils/generateUUID";
import { Request, Response } from "express";

const medicacaoPostgresPersistence = new MedicacaoPostgresPersistence()
const pacientePostgresPersistence = new PacientePostgresPersistence()
const receitaPostgresPersistence = new ReceitaPostgresPersistence()

export default class ReceitaController {
  async create(request: Request, response: Response) {
    const {
      idPaciente
    } = request.body
    const createReceitaService = new CreateReceitaService(receitaPostgresPersistence)
    const id = generateUUID()
    
    const paciente = await pacientePostgresPersistence.buscarId(idPaciente)
    const receita = new Receita(id, new Date(), paciente, [])
    const r = await createReceitaService.execute(receita)
    return response.json(r)
  }

  excluir(request: Request, response: Response) {
    const { id } = request.params
    const deleteReceitaService = new DeleteReceitaService(receitaPostgresPersistence)
    deleteReceitaService.execute(id)
    return response.json()
  }

  async listar(request: Request, response: Response){
    const listReceitasService = new ListReceitasService(receitaPostgresPersistence)

    const receitas = await listReceitasService.execute()
    return response.json(receitas)
  }

  async adicionarMedicacao(request: Request, response: Response) {
    const { idReceita } = request.params
    const {
      idMedicacao
    } = request.body
    const addMedicacaoService = new AddMedicacaoService(receitaPostgresPersistence)
    const medicacao = await medicacaoPostgresPersistence.buscarId(idMedicacao)
    const receita = await receitaPostgresPersistence.buscarId(idReceita)

    if(!medicacao || !receita) return
    await addMedicacaoService.execute(idReceita, idMedicacao)
    return response.json()
  }

  async calcularValorTotal(request: Request, response: Response){
    const { idReceita } = request.params

    const calcularValorReceitaService = new CalcularValorReceitaService(receitaPostgresPersistence)
    
    const total = await calcularValorReceitaService.execute(idReceita)
    return total
  }
}