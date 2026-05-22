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
