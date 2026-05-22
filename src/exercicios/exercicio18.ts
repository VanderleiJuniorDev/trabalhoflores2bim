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
Descritivo: Escreva um programa que conte quantas palavras existem em uma string.
*******************************************************************************/




import { perguntar } from "../utils/input";

function contarPalavras(texto: string): number {
  const textoLimpo = texto.trim();

  if (textoLimpo === "") {
    return 0;
  }

  return textoLimpo.split(/\s+/).length;
}

export async function exercicio18(): Promise<void> {
  const texto = await perguntar("Digite uma frase: ");
  const quantidade = contarPalavras(texto);

  console.log(`Quantidade de palavras: ${quantidade}`);
}
