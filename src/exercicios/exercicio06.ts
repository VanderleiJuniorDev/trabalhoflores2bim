/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
    25004000-1 - Nome do Aluno 1
    25004001-2 - Nome do Aluno 2
    25004001-3 - Nome do Aluno 3
    25004001-4 - Nome do Aluno 4
    25004001-5 - Nome do Aluno 5
Data: 21 de Maio de 2026
Descritivo: Escreva um programa que leia 5 números do usuário e os armazene em
            um array, depois exiba todos os números.
*******************************************************************************/

import { perguntarNumero } from "../utils/input";

export async function exercicio06(): Promise<void> {
  const numeros: number[] = [];

  for (let i = 0; i < 5; i++) {
    const numero = await perguntarNumero(`Digite o ${i + 1}o numero: `);
    numeros.push(numero);
  }

  console.log("\nNumeros armazenados no array:");
  numeros.forEach((num, i) => {
    console.log(`[${i}] = ${num}`);
  });
  console.log(`\nArray completo: [${numeros.join(", ")}]`);
}
