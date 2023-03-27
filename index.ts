import promptS from 'prompt-sync'
import MedicacaoController from './controller/medicacao'
import PacienteController from './controller/paciente'
import MedicacaoJSONPersistence from './persistence/Medicacao/MedicacaoJSONPersistence'
import PacienteJSONPersistence from './persistence/Paciente/PacienteJSONPersistence'

const userPersistence = new PacienteJSONPersistence()
const pacienteController = new PacienteController(userPersistence)

const medicacaoPersistence = new MedicacaoJSONPersistence()
const medicacaoController = new MedicacaoController(medicacaoPersistence)

const prompt = promptS();

(() => {
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

    const opcao = Number(prompt("Informe a opção:"))
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

      case 3:
        const pacientes = pacienteController.listar()
        pacientes.forEach(paciente => {
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

      case 6:
        const medicacoes = medicacaoController.listar()
        medicacoes.forEach(medicacao => {
          console.log(medicacao);

        });
        break;

      default:
        break;
    }

  }
})()