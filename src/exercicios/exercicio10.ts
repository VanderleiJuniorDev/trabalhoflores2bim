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
Descritivo: Escreva um programa que ordene um array de números em ordem crescente.
*******************************************************************************/

// Importa a função perguntarNumero para ler números digitados pelo usuário
import { perguntarNumero } from "../utils/input";

// Declara a função principal do exercício como assíncrona para usar await na leitura de dados
export async function exercicio10(): Promise<void> {

  // Exibe um título no console para identificar o exercício
  console.log("=== Ordenar Array em Ordem Crescente ===");

  // Solicita ao usuário quantos números ele deseja inserir no array
  const quantidade: number = await perguntarNumero("Quantos números deseja inserir? ");

  // Cria um array vazio do tipo number para armazenar os números digitados
  const numeros: number[] = [];

  // Inicia um laço for para ler cada número do usuário, repetindo conforme a quantidade informada
  for (let i: number = 0; i < quantidade; i++) {

    // Solicita o número da posição atual (i+1 para exibir a partir de 1 em vez de 0)
    const num: number = await perguntarNumero(`Digite o ${i + 1}º número: `);

    // Adiciona o número digitado ao final do array usando o método push
    numeros.push(num);
  }

  // Exibe o array original (antes da ordenação) no console
  console.log(`\nArray original: [${numeros.join(", ")}]`);

  // Usa o método sort() para ordenar o array em ordem crescente
  // A função (a, b) => a - b compara dois elementos:
  // Se o resultado for negativo, 'a' vem antes de 'b'
  // Se o resultado for positivo, 'b' vem antes de 'a'
  // Se o resultado for zero, a ordem não muda
  numeros.sort((a: number, b: number) => a - b);

  // Exibe o array já ordenado em ordem crescente no console
  console.log(`Array ordenado: [${numeros.join(", ")}]`);
}
