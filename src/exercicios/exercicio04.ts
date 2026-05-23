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
Descritivo: Faça um programa que converta uma temperatura em graus Celsius para
            Fahrenheit, utilizando a fórmula: F = (C × 9/5) + 32.
*******************************************************************************/

// Explicação: Este exercício recebe uma temperatura em graus Celsius e aplica a
// fórmula F = (C × 9/5) + 32 para obter o valor em Fahrenheit. A implementação

import { perguntar } from "../utils/input";
import { converterTemp } from "../utils/metodosUtils";

export async function exercicio04(): Promise<void> {

  const request = await perguntar("Digite a temperatura em Celsius: ");

  const responseTemp = converterTemp(Number(request));

  return console.log(`A temperatura ${request}°C equivalem a ${responseTemp}°F`);
  
}

