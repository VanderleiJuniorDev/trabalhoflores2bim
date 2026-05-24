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
Descritivo: Escreva um programa que defina uma interface Veiculo com métodos
            acelerar() e frear(), e implemente essa interface em uma classe Carro.
*******************************************************************************/

// Explicação: Este exercício define a interface Veiculo (com os métodos
// acelerar() e frear()) e implementa esses comportamentos na classe Carro. A
// implementação será desenvolvida pelo grupo.


// Importa as funções utilitárias de leitura e pausa do módulo input
import { perguntar, perguntarNumero, pressioneEnter } from "../utils/input";

// Define a interface Veiculo com os métodos que toda classe de veículo deve implementar
interface Veiculo {
  // Método obrigatório para acelerar o veículo em uma quantidade de km/h
  acelerar(quantidade: number): void;

  // Método obrigatório para frear o veículo em uma quantidade de km/h
  frear(quantidade: number): void;
}

// Classe Carro que implementa obrigatoriamente os métodos da interface Veiculo
class Carro implements Veiculo {

  // Propriedade que armazena a marca do carro
  marca: string;

  // Propriedade que armazena o modelo do carro
  modelo: string;

  // Propriedade que armazena a velocidade atual, iniciando em 0
  velocidade: number = 0;

  // Construtor que recebe marca e modelo ao criar o objeto
  constructor(marca: string, modelo: string) {
    this.marca = marca;   // Atribui a marca informada à propriedade da classe
    this.modelo = modelo; // Atribui o modelo informado à propriedade da classe
  }

  // Método que aumenta a velocidade atual pelo valor informado
  acelerar(quantidade: number): void {
    this.velocidade += quantidade; // Soma a quantidade à velocidade atual
    console.log(`O carro acelerou ${quantidade} km/h. Velocidade atual: ${this.velocidade} km/h`);
  }

  // Método que reduz a velocidade atual pelo valor informado, sem deixar abaixo de 0
  frear(quantidade: number): void {
    this.velocidade = Math.max(0, this.velocidade - quantidade); // Garante que a velocidade não fique negativa
    console.log(`O carro freou ${quantidade} km/h. Velocidade atual: ${this.velocidade} km/h`);
  }
}

// Exporta a função para que o main.ts possa chamá-la no menu
export async function exercicio13(): Promise<void> {

  // Exibe o título do exercício no console
  console.log("============ Exercicio 13=================- Interface Veiculo / Classe Carro ===\n");

  // Informa ao usuário o que ele deve fazer
  console.log("VAMOS DAR VIDA A UM CARRO.\n Informe os dados abaixo:\n");

  // Solicita a marca do carro ao usuário
  const marca: string = await perguntar("MARCA:  ");

  // Solicita o modelo do carro ao usuário
  const modelo: string = await perguntar("MODELO: ");

  // Cria um novo objeto Carro com a marca e modelo informados
  const carro = new Carro(marca, modelo);

  // Exibe os dados do carro recém criado com velocidade inicial zero
  console.log(`\nCarro ${carro.marca} ${carro.modelo} criado. Velocidade inicial: ${carro.velocidade} km/h\n`);

  // Solicita o valor de aceleração e valida se é um número válido
  const acelerada: number = await perguntarNumero("Quantos km/h deseja acelerar? ");

  // Chama o método acelerar do carro com o valor informado
  carro.acelerar(acelerada);

  // Solicita o valor de frenagem e valida se é um número válido
  const freada: number = await perguntarNumero("Quantos km/h deseja frear? ");

  // Chama o método frear do carro com o valor informado
  carro.frear(freada);

  // Exibe a velocidade final do carro após acelerar e frear
  console.log(`\nVelocidade final do ${carro.marca} ${carro.modelo}: ${carro.velocidade} km/h`);

  // Aguarda o usuário pressionar Enter antes de voltar ao menu
  await pressioneEnter();
}