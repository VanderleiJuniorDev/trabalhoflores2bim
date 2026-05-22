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

// Explicação: Este exercício lê 5 números do usuário, armazena-os em um array
// e em seguida exibe todos os elementos do array. A implementação será
// desenvolvida pelo grupo.

export async function exercicio06(): Promise<void> {
  console.log("Exercício ainda não implementado.");
}
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lerNumeros(): void {
  console.log("EXERCÍCIO 6");

  const numeros: number[] = [];
  const total: number = 5;

  function lerNumero(index: number): void {
    if (index < total) {
      rl.question(`Digite o ${index + 1}º número: `, (input: string) => {
        const numero: number = parseFloat(input);

        if (isNaN(numero)) {
          console.log("Entrada inválida. Digite um número válido.");
          lerNumero(index); // repete a mesma posição
        } else {
          numeros.push(numero);
          lerNumero(index + 1);
        }
      });
    } else {
      console.log("\nNúmeros armazenados no array:");
      numeros.forEach((num: number, i: number) => {
        console.log(`  [${i}] = ${num}`);
      });
      console.log(`\nArray completo: [${numeros.join(", ")}]`);

      rl.question("\nPressione Enter para continuar...", () => {
        rl.close();
      });
    }
  }

  lerNumero(0);
}

lerNumeros();
