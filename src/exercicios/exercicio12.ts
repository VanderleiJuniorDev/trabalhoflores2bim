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
Descritivo: Escreva um programa que use herança para criar uma classe Aluno que
            herda de Pessoa e adiciona um atributo matricula.
*******************************************************************************/

import { randomUUID } from "node:crypto";
import { perguntar } from "../utils/input";

// Explicação: Este exercício cria a classe Aluno que herda de Pessoa,
// adicionando o atributo matrícula.

//Classe Pai
interface Pessoa {
    nome : String;
    idade : number;
    email : String; 
    telefone : String;
}

//Classe Filha que extende pessoa e portanto carrega os atributos
interface Aluno extends Pessoa {
    matricula : String;
}

export async function exercicio12(): Promise<void> {
  const nome : String = await perguntar("Digite o Nome do Aluno: ");
  const idade : String = await perguntar("Digite a Idade do Aluno: ");
  const email : String = await perguntar("Digite o Email do Aluno: ");
  const telefone : String = await perguntar("Digite o Telefone do Aluno: ");
  const matricula : String = randomUUID();

  const aluno: Aluno = {
    nome: nome,
    idade: Number(idade),
    email: email,
    telefone: telefone,
    matricula: matricula
};

  console.log(`Matrícula gerada com sucesso para o Aluno ${aluno.nome} : ${aluno.matricula}`);
}