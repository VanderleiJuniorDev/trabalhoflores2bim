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
Descritivo: Escreva um programa que conte o número de vogais em uma string
            fornecida pelo usuário.
*******************************************************************************/

// Explicação: Este exercício recebe uma string e conta quantas vogais (a, e, i,
// o, u, considerando acentuações e maiúsculas/minúsculas) ela possui. A
// implementação será desenvolvida pelo grupo.

export async function exercicio08(): Promise<void> {
  console.log("Exercício ainda não implementado.");
}
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarVogais(): void {
  console.log("EXERCÍCIO 8");

  rl.question("Digite uma string: ", (input: string) => {
    const texto: string = input.toLowerCase();

  
    const vogais: string[] = [
      "a", "e", "i", "o", "u",
      "á", "é", "í", "ó", "ú",
      "â", "ê", "î", "ô", "û",
      "ã", "õ", "à", "ä", "ë",
    ];

    let contador: number = 0;
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

    rl.question("\nPressione Enter para continuar...", () => {
      rl.close();
    });
  });
}

contarVogais();
