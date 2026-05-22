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
Descritivo: Escreva um programa que conte o número de vogais em uma string
            fornecida pelo usuário.
*******************************************************************************/

import { perguntar } from "../utils/input";

export async function exercicio08(): Promise<void> {
  const input = await perguntar("Digite uma string: ");
  const texto = input.toLowerCase();
  const vogais = [
    "a", "e", "i", "o", "u",
    "á", "é", "í", "ó", "ú",
    "â", "ê", "î", "ô", "û",
    "ã", "õ", "à", "ä", "ë",
  ];

  let contador = 0;
  const vogaisEncontradas: string[] = [];

  for (const char of texto) {
    if (vogais.includes(char)) {
      contador++;
      vogaisEncontradas.push(char);
    }
  }

  console.log(`\nTexto digitado: "${input}"`);
  console.log(`Vogais encontradas: [${vogaisEncontradas.join(", ")}]`);
  console.log(`Total de vogais: ${contador}`);
}
