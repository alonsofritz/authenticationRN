<h3 align="center">
    <img alt="reactnative" title="#reactnative" width="150px" src=".github/reactnative.png">
    <img alt="typescript" title="#typescript" width="150px" src=".github/typescript.png">
</h3>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [O que foi abordado?](#o-que-foi-abordado)
- [Como Usar](#como-usar)

<a id="sobre"></a>

## Sobre

Estudos sobre a criação de um <strons>Fluxo Completo de Autenticação</strong> dentro do React Native utilizando a Context API e utilizando os Hooks do React. não só os Hooks do React mas tambem criando um Hook próprio para gerenciar a Autenticação.

Como estamos utilizando React Native, esse Fluxo pode ser facilmente replicado para a WEB com ReactJS.

## Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

## O que foi abordado?

- :heavy_check_mark: Fazer a chamada API
- :heavy_check_mark: Buscar e pegar o Token e o Usuário
- :heavy_check_mark: Armazenar os dados no <strong>Async Storage</strong>
- :heavy_check_mark: Criar um Contexto para deixar as informações disponibilizadas em toda a Aplicação
- :heavy_check_mark: Criar um Hook próprio
- :heavy_check_mark: Controlar o estado de Loading... das informações
- :heavy_check_mark: Onde fazer a Autenticação
- :heavy_check_mark: Onde fazer o Logout
- :heavy_check_mark: O que fazer com o Async Storage quando realizar cada operação
- :heavy_check_mark: Determinar qual a Stack de Rotas que iremos mostrar para cada caso 

## Como usar

### **Pré-requisitos**

  - É necessário ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**;

1. Clonando o Projeto :

```sh
  $ git clone https://github.com/alonsofritz/authenticationRN.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ yarn

  # Faça a Build do Mobile
  $ cd tindev
  $ yarn android

  # Inicie a aplicação mobile
  $ yarn start
```
Nota: Se você optar por iniciar o aplicativo móvel no emulador Android, será necessário iniciar o emulador antes de usar os comandos `yarn android` ou `yarn start`.

---
<h4 align="center">
    :rocket: Feito por <a href="https://www.linkedin.com/in/alonsofritz/" target="_blank">Alonso Fritz</a>
</h4>