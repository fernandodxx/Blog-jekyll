---
layout: post
title: "UserProfileApp"
description: "Gerenciando Perfis de Usuários com Ruby on Rails"
date: 2024-07-26 10:00:00 -0300
comments: false
---

No meu mais recente projeto, criei uma aplicação chamada **UserProfileApp**, que permite aos usuários criar e gerenciar seus perfis pessoais. A ideia é bem simples: cada usuário pode adicionar uma foto de perfil, nome, descrição, idade e outras informações. A aplicação também garante que apenas usuários registrados possam acessar e editar seus próprios perfis, usando autenticação segura.

## Funcionalidades

- **Perfil de Usuário**: O usuário pode adicionar informações como nome, nome de usuário, descrição, idade e foto de perfil.
- **Autenticação**: Implementamos a autenticação usando o sistema "Authentication Zero", que permite o registro, login e logout de usuários de forma segura.

## Tecnologias Utilizadas

- **Ruby on Rails**: O framework principal para o desenvolvimento da aplicação.
- **Active Storage**: Para o upload e gerenciamento das fotos de perfil.
- **SQLite**: Banco de dados simples e eficiente para armazenar as informações dos usuários.
- **Authentication Zero**: Para gerenciamento de autenticação de usuários (login, logout e registro).

## Como Configurar

### Pré-requisitos

- Ruby 3 ou superior
- Rails 7 ou superior
- SQLite

### Passos para Instalação

### 1. Clone o repositório:
```bash
git clone https://github.com/fernandodxx/Userprofile.git
cd Userprofile
```
### 2. Instale as dependências:

```bash
  bundle install
```
### 3. Configure o banco de dados:
```bash
rails db:create
rails db:migrate
```
### 4. Inicie o servidor:

```bash
rails server
```
Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Funcionalidades em Detalhe
### Registro e Login de Usuário
A autenticação na aplicação é gerenciada com o sistema **Authentication Zero.** Com ele, é possível registrar um novo usuário, fazer login e acessar o perfil pessoal de forma simples e segura.

### Gerenciamento de Perfil
Os usuários podem criar, editar e visualizar seus perfis, incluindo a foto, nome, descrição e idade. Para garantir uma boa experiência, o sistema valida se todas as informações obrigatórias estão preenchidas e segue boas práticas de segurança para garantir a proteção dos dados.

## Conclusão
O UserProfileApp é um exemplo de como podemos criar uma aplicação simples e funcional com Ruby on Rails, utilizando recursos como autenticação, gerenciamento de sessões e upload de arquivos com Active Storage. É um ótimo projeto para quem está aprendendo a trabalhar com essas tecnologias ou para quem deseja implementar funcionalidades semelhantes em suas próprias aplicações.[confira o codigo completo](https://github.com/fernandodxx/Userprofile)

## Imagens

**Dark**
![Dark mode only]({{ '/assets/img/posts/userprofile-dark.jpeg' | relative_url }}){:: .dark }

**Light**
![Light mode only]({{ '/assets/img/posts/userprofile-lith.png' | relative_url }}){:: .light }
