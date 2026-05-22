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
Descritivo: Escreva um programa que valide uma senha de acordo com os seguintes
            criterios: pelo menos 8 caracteres, pelo menos uma letra maiuscula,
            pelo menos uma letra minuscula e pelo menos um numero.
*******************************************************************************/

import { perguntar } from "../utils/input";

// Explicacao: Este exercicio recebe uma senha e faz as verificacoes
// diretamente, sem usar funcoes auxiliares.

export async function exercicio16(): Promise<void> {
  const senha = await perguntar("Digite uma senha: ");
  const temOitoCaracteres = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);

  if (temOitoCaracteres && temMaiuscula && temMinuscula && temNumero) {
    console.log("Senha valida!");
  } else {
    console.log("Senha invalida. Verifique os criterios:");
    console.log(`- Minimo 8 caracteres: ${temOitoCaracteres ? "sim" : "nao"}`);
    console.log(`- Uma letra maiuscula: ${temMaiuscula ? "sim" : "nao"}`);
    console.log(`- Uma letra minuscula: ${temMinuscula ? "sim" : "nao"}`);
    console.log(`- Um numero: ${temNumero ? "sim" : "nao"}`);
  }
}
