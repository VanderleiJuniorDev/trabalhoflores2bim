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
Descritivo: Implemente uma calculadora de Índice de Massa Corporal (IMC) que
            receba peso (kg) e altura (m) e exiba o resultado com a classificação
            correspondente (ex: abaixo do peso, normal, etc.).
*******************************************************************************/

// Explicação: Este exercício recebe peso (kg) e altura (m) do usuário, calcula
// o IMC com a fórmula peso / (altura²) e exibe a classificação correspondente.
// A implementação será desenvolvida pelo grupo.

// Importa as funções utilitárias de leitura e pausa do módulo input
import { perguntarNumero, pressioneEnter } from "../utils/input";

// Função que recebe o IMC calculado e retorna a classificação conforme critérios da OMS
function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Abaixo do peso";        // IMC abaixo de 18.5 indica baixo peso
  if (imc < 25.0) return "Peso normal";            // IMC entre 18.5 e 24.9 é considerado normal
  if (imc < 30.0) return "Sobrepeso";              // IMC entre 25.0 e 29.9 indica sobrepeso
  if (imc < 35.0) return "Obesidade Grau I";       // IMC entre 30.0 e 34.9 indica obesidade grau I
  if (imc < 40.0) return "Obesidade Grau II";      // IMC entre 35.0 e 39.9 indica obesidade grau II
  return "Obesidade Grau III (Mórbida)";           // IMC acima de 40.0 indica obesidade mórbida
}

// Exporta a função para que o main.ts possa chamá-la no menu
export async function exercicio15(): Promise<void> {

  // Exibe o título do exercício no console
  console.log("=== Exercicio 15 - Calculadora de IMC ===\n");

  // Informa ao usuário o que ele deve fazer
  console.log("Informe seus dados para calcular o IMC:\n");

  // Solicita o peso em kg e valida se é um número válido
  const peso: number = await perguntarNumero("Peso em kg (ex: 70.5):       ");

  // Solicita a altura em metros e valida se é um número válido
  const altura: number = await perguntarNumero("Altura em metros (ex: 1.75): ");

  // Calcula o IMC usando a fórmula: peso dividido pela altura ao quadrado
  const imc: number = peso / (altura * altura);

  // Chama a função de classificação passando o IMC calculado
  const classificacao: string = classificarIMC(imc);

  // Exibe o IMC calculado com duas casas decimais
  console.log(`\nCom ${peso} kg e ${altura} m de altura, o seu IMC é ${imc.toFixed(2)} kg/m².`);

  // Exibe a classificação correspondente ao IMC
  console.log(`Classificação: ${classificacao}`);

  // Aguarda o usuário pressionar Enter antes de voltar ao menu
  await pressioneEnter();
}