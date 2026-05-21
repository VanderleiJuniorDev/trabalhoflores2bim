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
Descritivo: Programa principal que apresenta o menu interativo de 18 exercícios.
            O usuário escolhe uma opção (0-18); o programa executa o exercício
            correspondente, exibe o resultado e retorna ao menu ao pressionar
            Enter. A opção 0 encerra o programa.
*******************************************************************************/

import { perguntar, pressioneEnter, fecharInput } from "./utils/input";

import { exercicio01 } from "./exercicios/exercicio01";
import { exercicio02 } from "./exercicios/exercicio02";
import { exercicio03 } from "./exercicios/exercicio03";
import { exercicio04 } from "./exercicios/exercicio04";
import { exercicio05 } from "./exercicios/exercicio05";
import { exercicio06 } from "./exercicios/exercicio06";
import { exercicio07 } from "./exercicios/exercicio07";
import { exercicio08 } from "./exercicios/exercicio08";
import { exercicio09 } from "./exercicios/exercicio09";
import { exercicio10 } from "./exercicios/exercicio10";
import { exercicio11 } from "./exercicios/exercicio11";
import { exercicio12 } from "./exercicios/exercicio12";
import { exercicio13 } from "./exercicios/exercicio13";
import { exercicio14 } from "./exercicios/exercicio14";
import { exercicio15 } from "./exercicios/exercicio15";
import { exercicio16 } from "./exercicios/exercicio16";
import { exercicio17 } from "./exercicios/exercicio17";
import { exercicio18 } from "./exercicios/exercicio18";

type Exercicio = {
  numero: number;
  titulo: string;
  executar: () => Promise<void>;
};

const exercicios: Exercicio[] = [
  { numero: 1,  titulo: "Soma de dois números",                 executar: exercicio01 },
  { numero: 2,  titulo: "Verificar par ou ímpar",               executar: exercicio02 },
  { numero: 3,  titulo: "Calcular média de três notas",         executar: exercicio03 },
  { numero: 4,  titulo: "Converter Celsius para Fahrenheit",    executar: exercicio04 },
  { numero: 5,  titulo: "Exibir números pares de 1 a 20",       executar: exercicio05 },
  { numero: 6,  titulo: "Ler 5 números e armazenar em array",   executar: exercicio06 },
  { numero: 7,  titulo: "Encontrar maior número em um array",   executar: exercicio07 },
  { numero: 8,  titulo: "Contar vogais em uma string",          executar: exercicio08 },
  { numero: 9,  titulo: "Calculadora simples",                  executar: exercicio09 },
  { numero: 10, titulo: "Ordenar array em ordem crescente",     executar: exercicio10 },
  { numero: 11, titulo: "Classe Pessoa",                        executar: exercicio11 },
  { numero: 12, titulo: "Classe Aluno",                         executar: exercicio12 },
  { numero: 13, titulo: "Classe Carro",                         executar: exercicio13 },
  { numero: 14, titulo: "Tabuada",                              executar: exercicio14 },
  { numero: 15, titulo: "Calculadora de IMC",                   executar: exercicio15 },
  { numero: 16, titulo: "Validar senha",                        executar: exercicio16 },
  { numero: 17, titulo: "Jogo de adivinhação",                  executar: exercicio17 },
  { numero: 18, titulo: "Contar palavras em uma string",        executar: exercicio18 },
];

function exibirMenu(): void {
  console.clear();
  console.log("=== MENU DE EXERCÍCIOS ===");
  for (const ex of exercicios) {
    const numeroFormatado = ex.numero.toString().padStart(2, " ");
    console.log(`${numeroFormatado} - ${ex.titulo}`);
  }
  console.log(" 0 - Sair");
  console.log("");
}

async function main(): Promise<void> {
  while (true) {
    exibirMenu();
    const entrada = await perguntar("Escolha uma opção (0-18): ");
    const opcao = Number(entrada);

    if (entrada === "" || Number.isNaN(opcao) || opcao < 0 || opcao > 18) {
      console.log("\nOpção inválida! Digite um número entre 0 e 18.");
      await pressioneEnter();
      continue;
    }

    if (opcao === 0) {
      console.log("\nEncerrando o programa. Até logo!");
      fecharInput();
      break;
    }

    const exercicio = exercicios.find((ex) => ex.numero === opcao);
    if (!exercicio) {
      console.log("\nExercício não encontrado.");
      await pressioneEnter();
      continue;
    }

    console.clear();
    console.log(`=== EXERCÍCIO ${exercicio.numero} ===`);
    console.log(exercicio.titulo);
    console.log("");

    try {
      await exercicio.executar();
    } catch (erro) {
      console.log(`\nOcorreu um erro ao executar o exercício: ${(erro as Error).message}`);
    }

    await pressioneEnter();
  }
}

main();
