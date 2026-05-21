# Trabalho Prático 1 — Programação Front-End (ADS3B)

Projeto desenvolvido em **TypeScript puro** contendo a implementação dos 18 exercícios propostos pelo Professor José Carlos Domingues Flores, na disciplina de **Programação Front-End** do curso de **Análise e Desenvolvimento de Sistemas (ADS3B)** — Avaliação do 2º Bimestre.

---

## Objetivo

Desenvolver os algoritmos da lista de exercícios utilizando TypeScript para consolidar os aprendizados adquiridos e demonstrar a capacidade de aplicar as tecnologias na prática.

O projeto consiste em uma aplicação de **console interativa** que apresenta um **menu** com 18 exercícios. O usuário escolhe a opção desejada, fornece os dados de entrada solicitados, visualiza o resultado e, ao pressionar `Enter`, retorna ao menu principal. A opção `0` encerra o programa.

---

## Lista de Exercícios

| Nº  | Descrição                                                                 |
| --- | ------------------------------------------------------------------------- |
| 1   | Soma de dois números                                                      |
| 2   | Verificar se um número é par ou ímpar                                     |
| 3   | Calcular a média de três notas                                            |
| 4   | Converter Celsius para Fahrenheit                                         |
| 5   | Exibir números pares de 1 a 20                                            |
| 6   | Ler 5 números e armazenar em array                                        |
| 7   | Encontrar o maior número em um array                                      |
| 8   | Contar vogais em uma string                                               |
| 9   | Calculadora simples (+ − × ÷)                                             |
| 10  | Ordenar array em ordem crescente                                          |
| 11  | Classe `Pessoa` com nome e idade                                          |
| 12  | Classe `Aluno` herdando de `Pessoa`                                       |
| 13  | Interface `Veiculo` implementada pela classe `Carro`                      |
| 14  | Tabuada de 1 a 10                                                         |
| 15  | Calculadora de IMC com classificação                                      |
| 16  | Validar senha (8+ chars, maiúscula, minúscula, número)                    |
| 17  | Jogo de adivinhação (1 a 100, com dicas "maior"/"menor")                  |
| 18  | Contar palavras em uma string                                             |
| 0   | Sair do programa                                                          |

---

## Estrutura do Projeto

```
trabalhoflores2bim/
├── src/
│   ├── exercicios/
│   │   ├── exercicio01.ts
│   │   ├── exercicio02.ts
│   │   ├── ...
│   │   └── exercicio18.ts
│   ├── utils/
│   │   └── input.ts          # Funções auxiliares para leitura do console
│   └── main.ts               # Menu principal
├── dist/                     # Saída da compilação (gerada automaticamente)
├── package.json
├── tsconfig.json
└── README.md
```

Cada arquivo de exercício possui o cabeçalho obrigatório em formato de comentário com identificação do curso, disciplina, professor, turma, componentes do grupo, data e descritivo do exercício.

---

## Pré-requisitos

Antes de executar a aplicação, é necessário ter instalado em sua máquina:

- **Node.js** versão 18 ou superior — [https://nodejs.org](https://nodejs.org)
- **npm** (já vem junto com o Node.js)
- **TypeScript** (será instalado como dependência do projeto)
- **VSCode** (recomendado) — [https://code.visualstudio.com](https://code.visualstudio.com)

Para verificar se o Node.js e o npm estão instalados, execute no terminal:

```bash
node -v
npm -v
```

---

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

### 1. Clonar o repositório

```bash
git clone https://github.com/<usuario>/trabalhoflores2bim.git
cd trabalhoflores2bim
```

### 2. Instalar as dependências

```bash
npm install
```

Esse comando instalará o **TypeScript** e o **ts-node** (utilitário que permite executar arquivos `.ts` diretamente, sem necessidade de compilar previamente).

### 3. (Opcional) Compilar o projeto

Caso queira gerar os arquivos JavaScript compilados:

```bash
npm run build
```

Os arquivos compilados ficarão dentro do diretório `dist/`.

---

## Como Executar

### Modo de desenvolvimento (recomendado)

Executa diretamente o código TypeScript usando `ts-node`:

```bash
npm start
```

### Modo de produção

Após compilar o projeto (`npm run build`):

```bash
node dist/main.js
```

Ao iniciar a aplicação, o menu de exercícios será exibido no console:

```
=== MENU DE EXERCÍCIOS ===
1  - Soma de dois números
2  - Verificar par ou ímpar
3  - Calcular média de três notas
4  - Converter Celsius para Fahrenheit
5  - Exibir números pares de 1 a 20
6  - Ler 5 números e armazenar em array
7  - Encontrar maior número em um array
8  - Contar vogais em uma string
9  - Calculadora simples
10 - Ordenar array em ordem crescente
11 - Classe Pessoa
12 - Classe Aluno
13 - Classe Carro
14 - Tabuada
15 - Calculadora de IMC
16 - Validar senha
17 - Jogo de adivinhação
18 - Contar palavras em uma string
0  - Sair

Escolha uma opção (0-18):
```

---

## Fluxo de Uso

1. O programa exibe o menu com as 18 opções de exercícios.
2. O usuário digita o número da opção desejada (de `0` a `18`).
3. O título do exercício é exibido (ex.: `=== EXERCÍCIO 1 ===`).
4. O programa solicita os dados de entrada necessários.
5. O resultado é apresentado no console.
6. O usuário pressiona `Enter` para retornar ao menu.
7. Para encerrar o programa, escolhe-se a opção `0`.

---

## Tecnologias Utilizadas

- **TypeScript** — linguagem principal do projeto (puro, sem frameworks).
- **Node.js** — ambiente de execução.
- **ts-node** — execução direta de arquivos `.ts` em desenvolvimento.
- **readline** (módulo nativo do Node.js) — captura de entrada do usuário pelo console.

---

## Padrão de Cabeçalho dos Arquivos

Conforme exigido pelo enunciado, todo arquivo-fonte (`exercicioXX.ts`) contém o seguinte cabeçalho:

```typescript
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
Descritivo: Descrição do exercício correspondente
*******************************************************************************/
```

Além disso, cada arquivo inclui um comentário explicativo descrevendo como o código resolve o problema proposto.

---

## Critérios de Avaliação Atendidos

- ✅ **Funcionalidade (40%)** — todos os 18 exercícios implementados e funcionais.
- ✅ **Qualidade do código (20%)** — código organizado, modularizado, tipado e comentado.
- ✅ **Criatividade e Inovação (10%)** — interface amigável no console, validações de entrada e tratamento de erros.
- ✅ **Apresentação (10%)** — README completo e documentação clara.

---

## Componentes do Grupo

| RA          | Nome                       |
| ----------- | -------------------------- |
| 25004000-1  | Nome do Aluno 1            |
| 25004001-2  | Nome do Aluno 2            |
| 25004001-3  | Nome do Aluno 3            |
| 25004001-4  | Nome do Aluno 4            |
| 25004001-5  | Nome do Aluno 5            |

> Substitua os nomes e RAs acima pelos dados reais dos integrantes do grupo antes da entrega.

---

## Informações da Entrega

- **Disciplina:** Programação Front-End
- **Professor:** José Carlos Domingues Flores
- **Turma:** ADS3B
- **Prazo de entrega:** 24/05/2026
- **Data de apresentação:** 25/05/2026
- **E-mail para envio:** jose.flores@unicesumar.edu.br
- **Assunto do e-mail:** `ADS3B-PFE-Avaliação 2o Bimestre-Trabalho Prático 1`

---

## Licença

Projeto acadêmico desenvolvido exclusivamente para fins didáticos como parte da avaliação do 2º bimestre da disciplina de Programação Front-End (ADS3B — Unicesumar).
