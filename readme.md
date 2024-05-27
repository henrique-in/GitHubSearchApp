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

## Organização do código

Este projeto utiliza ESlint e Prettier para manter o co1digo mais organizado e identificar possiveis erros.

####Para isso é ideal que seja instalado a extensão no seu editor de código, asism como adicionar o Prettier como formatador de codigo do mesmo

#### Executar uma verificação do lint basta executar o seguinte comando

```bash
yarn  lint
```

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
