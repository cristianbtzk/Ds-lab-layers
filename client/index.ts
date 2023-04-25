import promptS from 'prompt-sync'
import Medicacao from './src/classes/Medicacao'
import Paciente from './src/classes/Paciente'
import Receita from './src/classes/Receita'
import MedicacaoController from './src/controller/MedicacaoController'
import PacienteController from './src/controller/PacienteController'
import ReceitaController from './src/controller/ReceitaController'

const pacienteController = new PacienteController()

const medicacaoController = new MedicacaoController()

const receitaController = new ReceitaController()

const prompt = promptS();

(async () => {
  while (true) {
    console.log('1 - Criar usuário')
    console.log('2 - Deletar usuário')
    console.log('3 - Mostrar usuários')
    console.log('4 - Cadastrar medicação')
    console.log('5 - Deletar medicação')
    console.log('6 - Exibir medicação')
    console.log('7 - Cadastrar receita')
    console.log('8 - Deletar receita')
    console.log('9 - Exibir receitas')
    console.log('10 - Adicionar medicação à receita')
    console.log('11 - Calcular valor total de receita')
    console.log('0 - Sair')

    const opcao = Number(prompt("Informe a opção: "))
    console.log(opcao)

    switch (opcao) {
      case 0:
        return
      case 1:
        const nome = prompt('Nome: ')
        const peso = Number(prompt('Peso: '))
        const altura = Number(prompt('Altura: '))

        pacienteController.create(nome, peso, altura)
        break;

      case 2:
        const idPaciente = prompt('Id: ')
        pacienteController.excluir(idPaciente)
        console.log('Paciente excluído')

        break;

      case 3:
        const pacientes = await pacienteController.listar()
        pacientes.forEach((paciente: Paciente) => {
          console.log(paciente);

        });
        break;

      case 4:
        const nomeMed = prompt('Nome: ')
        const unidadeMed = prompt('Unidade: ')
        const valorMed = Number(prompt('Valor: '))

        medicacaoController.create(nomeMed, unidadeMed, valorMed)
        break;

      case 5:
        const idMedicacao = prompt('Id: ')
        medicacaoController.excluir(idMedicacao)
        console.log('Medicação excluída')

        break

      case 6:
        const medicacoes = await medicacaoController.listar()
        medicacoes.forEach((medicacao: Medicacao) => {
          console.log(medicacao);

        });
        break;

      case 7:
        const idPacienteReceita = prompt('Qual o id do paciente: ')

        await receitaController.create(idPacienteReceita)
        break;

      case 8:
        const idReceita = prompt('Qual o id da receita: ')

        receitaController.excluir(idReceita)
        console.log('Receita excluída');
        break;

      case 9:
        const receitas = await receitaController.listar()
        receitas.forEach((receita: Receita) => {
          console.log(receita.toString());

        });
        break;

      case 10:
        const idReceita10 = prompt('Qual o id da receita: ')
        const idMedicacao10 = prompt('Qual o id da medicação: ')

        await receitaController.adicionarMedicacao(idReceita10, idMedicacao10)
        console.log('Medicação adicionada');
        break;

      case 11:
        const idReceita11 = prompt('Qual o id da receita: ')

        const totalReceita = await receitaController.calcularValorTotal(idReceita11)
        console.log('Total da receita: R$ ' + totalReceita);
        break;

      default:
        break;
    }

  }
})()