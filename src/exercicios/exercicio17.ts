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
Data: 22 de Maio de 2026
Descritivo: Desenvolva um jogo onde o computador sorteie um número entre 1 e
            100, e o usuário tente adivinhá-lo. O programa deve dar dicas
            ("maior" ou "menor") até o acerto.
*******************************************************************************/

import { perguntar } from "../utils/input";
import { sorteador } from "../utils/metodosUtils";

// Explicação: Este exercício sorteia um número entre 1 e 100 e solicita ao
// usuário que tente adivinhá-lo. A cada tentativa, exibe dica "maior" ou
// "menor" até o acerto.

export async function exercicio17(): Promise<void> {

  let num = Number(await perguntar("Digite o número da sorte: "));

  const numSorte = sorteador();

  while (num !== numSorte) {

    if (num > numSorte) {
      console.log("Dica: o número da sorte é menor");
    } else {
      console.log("Dica: o número da sorte é maior");
    }

    num = Number(await perguntar("Tente novamente: "));
  }

  console.log("Parabéns! Você acertou!");
}