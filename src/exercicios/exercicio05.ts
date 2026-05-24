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
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20.
*******************************************************************************/

// Declara a função principal do exercício como assíncrona para manter o padrão dos demais exercícios
export async function exercicio05(): Promise<void> {

  // Exibe um título no console para identificar o exercício
  console.log("Números pares de 1 a 20:");

  // Inicia um laço for que percorre os números de 1 a 20
  for (let i: number = 1; i <= 20; i++) {

    // Verifica se o número atual é par usando o operador módulo (%)
    // Se o resto da divisão por 2 for igual a 0, o número é par
    if (i % 2 === 0) {

      // Exibe o número par no console
      console.log(i);
    }
  }
}
