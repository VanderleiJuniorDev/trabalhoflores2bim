/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
    25036114-2 - Vanderlei Oliveira Junior
    225355474-2 - Silvia de Oliveira
    25004001-3 - Nome do Aluno 3
    25004001-4 - Nome do Aluno 4
    25004001-5 - Nome do Aluno 5
Data: 21 de Maio de 2026
Descritivo: Utilitário para leitura de entrada do console via readline (Node.js).
            Fornece funções auxiliares assíncronas para capturar strings, números
            e pausar a execução até o usuário pressionar Enter.
*******************************************************************************/

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Lê uma linha de texto do console com a mensagem informada.
 */
export function perguntar(mensagem: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(mensagem, (resposta) => {
      resolve(resposta.trim());
    });
  });
}

/**
 * Lê um número do console. Repete a pergunta enquanto a entrada for inválida.
 */
export async function perguntarNumero(mensagem: string): Promise<number> {
  while (true) {
    const entrada = await perguntar(mensagem);
    const numero = Number(entrada.replace(",", "."));
    if (!Number.isNaN(numero) && entrada.length > 0) {
      return numero;
    }
    console.log("Entrada inválida. Digite um número válido.");
  }
}

/**
 * Pausa a execução até o usuário pressionar Enter.
 */
export async function pressioneEnter(): Promise<void> {
  await perguntar("\nPressione Enter para continuar...");
}

/**
 * Encerra a interface readline (necessário ao sair do programa).
 */
export function fecharInput(): void {
  rl.close();
}
