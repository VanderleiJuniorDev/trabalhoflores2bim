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
Data: 12 de Maio de 2026
Descritivo: 7 - Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/

function encontrarMaiorNumero(numeros: number[]): number {
  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

export async function exercicio07(): Promise<void> {
  const arrayNumeros: number[] = [10, 25, 7, 42, 18];
  const maiorNumero = encontrarMaiorNumero(arrayNumeros);

  console.log("Array:", arrayNumeros);
  console.log("O maior numero do array e:", maiorNumero);
}
