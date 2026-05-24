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
Descritivo: Escreva um programa que defina uma classe Pessoa com atributos nome
            e idade, e métodos para exibir esses atributos.
*******************************************************************************/

// Importa as funções para ler texto e número do usuário pelo console
import { perguntar, perguntarNumero } from "../utils/input";

// Define a classe Pessoa com os atributos nome e idade
class Pessoa {

  // Declara o atributo 'nome' do tipo string, acessível publicamente
  public nome: string;

  // Declara o atributo 'idade' do tipo number, acessível publicamente
  public idade: number;

  // O construtor é o método chamado automaticamente ao criar um novo objeto da classe
  // Recebe nome e idade como parâmetros e atribui aos atributos do objeto
  constructor(nome: string, idade: number) {

    // 'this.nome' se refere ao atributo da classe, 'nome' ao parâmetro recebido
    this.nome = nome;

    // 'this.idade' se refere ao atributo da classe, 'idade' ao parâmetro recebido
    this.idade = idade;
  }

  // Método que exibe o nome da pessoa no console
  exibirNome(): void {
    console.log(`Nome: ${this.nome}`);
  }

  // Método que exibe a idade da pessoa no console
  exibirIdade(): void {
    console.log(`Idade: ${this.idade} anos`);
  }

  // Método que exibe todos os atributos da pessoa de uma vez
  exibirDados(): void {
    console.log(`Pessoa: ${this.nome}, ${this.idade} anos`);
  }
}

// Declara a função principal do exercício como assíncrona para usar await na leitura de dados
export async function exercicio11(): Promise<void> {

  // Exibe um título no console para identificar o exercício
  console.log("=== Classe Pessoa ===");

  // Solicita ao usuário o nome da pessoa e aguarda a entrada
  const nome: string = await perguntar("Digite o nome da pessoa: ");

  // Solicita ao usuário a idade da pessoa e aguarda a entrada
  const idade: number = await perguntarNumero("Digite a idade da pessoa: ");

  // Cria um novo objeto da classe Pessoa usando a palavra-chave 'new'
  // Passa o nome e a idade digitados como argumentos para o construtor
  const pessoa: Pessoa = new Pessoa(nome, idade);

  // Exibe uma linha em branco para separar a entrada da saída
  console.log("");

  // Chama o método exibirNome() do objeto para mostrar o nome
  pessoa.exibirNome();

  // Chama o método exibirIdade() do objeto para mostrar a idade
  pessoa.exibirIdade();

  // Chama o método exibirDados() do objeto para mostrar todos os dados juntos
  pessoa.exibirDados();
}
