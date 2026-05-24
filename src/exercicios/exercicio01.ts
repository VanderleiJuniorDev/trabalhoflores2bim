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
Descritivo: Escreva um programa que receba dois números inteiros e exiba a soma deles.
*******************************************************************************/

// Importa a função perguntarNumero do módulo de utilitários para ler números do usuário
import { perguntarNumero } from "../utils/input";

// Declara a função principal do exercício como assíncrona, pois usa entrada do usuário (await)
export async function exercicio01(): Promise<void> {

  // Solicita ao usuário o primeiro número inteiro e aguarda a resposta
  const numero1: number = await perguntarNumero("Digite o primeiro número inteiro: ");

  // Solicita ao usuário o segundo número inteiro e aguarda a resposta
  const numero2: number = await perguntarNumero("Digite o segundo número inteiro: ");

  // Calcula a soma dos dois números e armazena na variável 'soma'
  const soma: number = numero1 + numero2;

  // Exibe o resultado da soma no console usando template string para formatar a saída
  console.log(`A soma de ${numero1} + ${numero2} é igual a ${soma}`);
}
