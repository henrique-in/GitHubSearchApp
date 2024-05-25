# GITHUB SEARCH APP

Este documento oferece instruções detalhadas sobre como configurar e executar o projeto.

## Pré Requisitos

- Node na versão 18.17.0

- Yarn 1.22

- AndroidStudio conforme [documentação](https://reactnative.dev/docs/environment-setup).

- Xcode [documentação](https://reactnative.dev/docs/environment-setup).

- Command Line tools conforme [documentação](https://reactnative.dev/docs/environment-setup).

- Cocoapods na versão 1.9.3

- Watchman 4.9.0

## Configuração Inicial

Execute o comando abaixo para instalar os pacotes do projeto:

```bash
yarn
```

#### Para Mac Os

```bash
cd ios && pod install && cd ..
```

**obs:** Este comando instala os pacotes necessarios para rodar o APP no IOS e só podem ser executados no Mac Os

## Executando o Projeto

Para executar o projeto no Android ou iOS, utilize um dos seguintes comandos:

#### Para dispositivos Android

```bash
yarn  android
```

#### Para dispositivos iOS

```bash
yarn  ios
```
