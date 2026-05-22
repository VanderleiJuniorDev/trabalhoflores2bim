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
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
*******************************************************************************/

import { perguntarNumero } from "../utils/input";

export async function exercicio02(): Promise<void> {
  const numero = await perguntarNumero("Digite um numero inteiro: ");
  const resultado = numero % 2 === 0 ? "PAR" : "IMPAR";

  console.log(`Resultado: O numero ${numero} e ${resultado}.`);
}
