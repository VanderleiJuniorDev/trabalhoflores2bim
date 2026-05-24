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
Descritivo: Escreva um programa que solicite um número inteiro e exiba sua
            tabuada de 1 a 10.
*******************************************************************************/

// Importa a função perguntarNumero para ler um número digitado pelo usuário
import { perguntarNumero } from "../utils/input";

// Declara a função principal do exercício como assíncrona para usar await na leitura de dados
export async function exercicio14(): Promise<void> {

  // Exibe um título no console para identificar o exercício
  console.log("=== Tabuada ===");

  // Solicita ao usuário um número inteiro e aguarda a entrada
  const numero: number = await perguntarNumero("Digite um número inteiro: ");

  // Exibe um cabeçalho indicando de qual número é a tabuada
  console.log(`\nTabuada de ${numero}:`);

  // Inicia um laço for de 1 a 10 para calcular cada linha da tabuada
  for (let i: number = 1; i <= 10; i++) {

    // Calcula o resultado da multiplicação do número pelo valor atual de i
    const resultado: number = numero * i;

    // Exibe a linha da tabuada formatada com template string (ex: 5 x 1 = 5)
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
