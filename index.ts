import promptS from 'prompt-sync'
import Medicacao from './src/classes/Medicacao'
import Paciente from './src/classes/Paciente'
import MedicacaoController from './src/controller/MedicacaoController'
import PacienteController from './src/controller/PacienteController'

const pacienteController = new PacienteController()

const medicacaoController = new MedicacaoController()

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
        const quantidadeMed = Number(prompt('Quantidade: '))
        const valorMed = Number(prompt('Valor: '))

        medicacaoController.create(nomeMed, unidadeMed, quantidadeMed, valorMed)
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

      default:
        break;
    }

  }
})()