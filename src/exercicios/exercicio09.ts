/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
    25246894-2 - Lucas Alves Bonnet
    25153556-2 - Aline Rodrigues Iorkievicz
    25036114-2 - Vanderlei Oliveira Junior
    25181953-2 - Gilberto Espanga Junior
    25216347-2 - Kauany Paula da Silva
    25355474-2 - Silvia de Oliveira Fabro
    25178018-2 - Yuri Kauan de Paula

Data: 21 de Maio de 2026
Descritivo: Criar uma calculadora simples de quatro operações (+ - * /).
*******************************************************************************/

// Importa as funções para ler número e texto do usuário pelo console
import { perguntarNumero, perguntar } from "../utils/input";

// Declara a função principal do exercício como assíncrona para usar await na leitura de dados
export async function exercicio09(): Promise<void> {

  // Exibe um título no console para identificar o exercício
  console.log("=== Calculadora Simples ===");

  // Solicita ao usuário o primeiro número e aguarda a entrada
  const numero1: number = await perguntarNumero("Digite o primeiro número: ");

  // Solicita ao usuário o segundo número e aguarda a entrada
  const numero2: number = await perguntarNumero("Digite o segundo número: ");

  // Solicita ao usuário qual operação deseja realizar (+, -, * ou /)
  const operacao: string = await perguntar("Digite a operação (+, -, *, /): ");

  // Declara a variável que vai armazenar o resultado da operação
  let resultado: number;

  // Usa switch/case para verificar qual operação o usuário escolheu
  switch (operacao) {

    // Caso o usuário tenha digitado "+"
    case "+":
      // Realiza a soma dos dois números
      resultado = numero1 + numero2;
      break;

    // Caso o usuário tenha digitado "-"
    case "-":
      // Realiza a subtração do primeiro pelo segundo número
      resultado = numero1 - numero2;
      break;

    // Caso o usuário tenha digitado "*"
    case "*":
      // Realiza a multiplicação dos dois números
      resultado = numero1 * numero2;
      break;

    // Caso o usuário tenha digitado "/"
    case "/":
      // Verifica se o segundo número é zero, pois não é possível dividir por zero
      if (numero2 === 0) {
        // Exibe mensagem de erro e encerra a função com return
        console.log("Erro: não é possível dividir por zero!");
        return;
      }
      // Realiza a divisão do primeiro pelo segundo número
      resultado = numero1 / numero2;
      break;

    // Caso o usuário tenha digitado uma operação inválida (diferente de +, -, *, /)
    default:
      // Exibe mensagem de erro e encerra a função com return
      console.log("Operação inválida! Use apenas +, -, * ou /.");
      return;
  }

  // Exibe o resultado da operação no console usando template string
  console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
}
