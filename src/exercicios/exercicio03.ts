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
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
*******************************************************************************/

// Explicação: Este exercício solicita três notas ao usuário e calcula a média
// aritmética entre elas. A implementação será desenvolvida pelo grupo.


 
// Importa as funções utilitárias de leitura e pausa do módulo input
import { perguntarNumero, pressioneEnter } from "../utils/input";

// Exporta a função para que o main.ts possa chamá-la no menu
export async function exercicio03(): Promise<void> {

  // Exibe o título do exercício no console
  console.log("=== Exercício 3 - Média de Notas ===\n");

  // Informa ao usuário o que ele deve fazer
  console.log("Informe as três notas para calcular a média:\n");

  // Solicita a primeira nota e valida se é um número válido
  const n1: number = await perguntarNumero("Primeira nota: ");

  // Solicita a segunda nota e valida se é um número válido
  const n2: number = await perguntarNumero("Segunda nota: ");

  // Solicita a terceira nota e valida se é um número válido
  const n3: number = await perguntarNumero("Terceira nota: ");

  // Calcula a média aritmética somando as três notas e dividindo por 3
  const media: number = (n1 + n2 + n3) / 3;

  // Exibe as notas que foram informadas pelo usuário
  console.log(`\nAs notas informadas foram ${n1}, ${n2} e ${n3}.`);

  // Exibe a média calculada com duas casas decimais
  console.log(`A média calculada é: ${media.toFixed(2)}`);

  // Aguarda o usuário pressionar Enter antes de voltar ao menu
  await pressioneEnter();
}