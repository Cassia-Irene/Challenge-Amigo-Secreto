# Sorteador de Amigo Secreto 🎁

![Imagem de Capa](https://private-user-images.githubusercontent.com/157053868/411803467-7ec44106-d2c3-4ad8-93e7-8789de267b98.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzk0OTYzNzIsIm5iZiI6MTczOTQ5NjA3MiwicGF0aCI6Ii8xNTcwNTM4NjgvNDExODAzNDY3LTdlYzQ0MTA2LWQyYzMtNGFkOC05M2U3LTg3ODlkZTI2N2I5OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxNFQwMTIxMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03Y2U1MDNiOTM5MzBlNDI5NDA3NWE3ODRhNTRjMDUxYmE3MWJhYzE5ODNkN2E1ZmM2OTBmMzAwNDY4YjE5ZTI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9NU45ZcSC4O5WTcQzTJnrqvup0QvZ6e6N9bMD-cQ1D4)

## Status do Projeto

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)](https://github.com/seu-usuario/amigo-secreto)

## Índice

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Demonstração](#demonstração)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Como Executar o Projeto](#como-executar-o-projeto)
   - [VS Code](#vs-code)
   - [Deploy](#deploy)
6. [Desenvolvido por](#desenvolvido-por)

## Descrição do Projeto

Este projeto é um sorteador de **Amigo Secreto** online. Ele permite que os usuários insiram nomes de amigos, sorteiem um nome aleatoriamente e exibam o resultado. Além disso, a lista de amigos pode ser reiniciada a qualquer momento.

O objetivo do projeto é criar uma aplicação simples, porém funcional, que seja intuitiva e fácil de usar.

## Funcionalidades

- **Adicionar Amigos**: O usuário pode adicionar amigos digitando os nomes em um campo de texto. O sistema valida a entrada e não permite nomes duplicados.
- **Sortear Amigo Secreto**: Após adicionar ao menos dois amigos, o sistema pode realizar o sorteio e exibir o amigo secreto sorteado.
- **Reiniciar Lista**: A lista de amigos e o resultado do sorteio podem ser reiniciados a qualquer momento.
- **Exibição de Resultados**: O nome do amigo secreto sorteado é exibido ao usuário.

## Demonstração

Aqui está uma demonstração de como funciona o projeto:

1. **Tela inicial e Adicionar amigos**
![Tela Inicial e Tela de adicionar amigos](https://private-user-images.githubusercontent.com/157053868/411791331-668e1f0f-f9ae-4202-a7f4-920b30ba3c98.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyMzU4MDMsIm5iZiI6MTczOTIzNTUwMywicGF0aCI6Ii8xNTcwNTM4NjgvNDExNzkxMzMxLTY2OGUxZjBmLWY5YWUtNDIwMi1hN2Y0LTkyMGIzMGJhM2M5OC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDIxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAyMTFUMDA1ODIzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MWJmMTI5NzcwZDkyMDgzMzY3MWMwZWEzNWRlMzM0ODYxMTRjOTc1NWQ0ZjFlZTQ4NGRjOWJhODA1OWViYmQ2MCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.4Bx2EcvouVLx1O5nB8ViiEW-PQ90AAU2NCSqE7qmukA)

2. **Lista de amigos, Botão 'Sortear Amigo' e 'Reiniciar'**
![Lista de amigos, Botão 'Sortear Amigo' e 'Reiniciar'](https://private-user-images.githubusercontent.com/157053868/411791559-7c2603d5-abba-40d5-a107-813fd6315609.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyMzU4MzIsIm5iZiI6MTczOTIzNTUzMiwicGF0aCI6Ii8xNTcwNTM4NjgvNDExNzkxNTU5LTdjMjYwM2Q1LWFiYmEtNDBkNS1hMTA3LTgxM2ZkNjMxNTYwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMVQwMDU4NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZmY4Y2I5Yzc2MzdmMTRiNjlkYTUzZWJmMTM3ODAwOTBiOGQ0NmJhNzkxODI0NjIzNDBlYzViZmEwMGY1MTYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.TrUSyonts_bs1qZSPmRztEuTprqS2jg8nE836yFHdSM)

## Tecnologias Utilizadas

<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

## Como Executar o Projeto

   ### VS CODE
   1. **Clone o repositório**:
      ```bash 
      git clone https://github.com/Cassia-Irene/Challenge-Amigo-Secreto.git
      ```
   
   2. **Abra o projeto no seu navegador**: Navegue até o diretório do projeto e abra o arquivo ***index.html*** em seu navegador preferido.
   
   3. **Executar com Live Server**
   Se você tem a extensão Live Server instalada no VS Code, siga estes passos:
      1. **Abra o arquivo** ***index.html*** no VS Code.
      2. **Clique com o botão direito no arquivo e selecione "Open with Live Server".**
      3. O navegador abrirá automaticamente o projeto em ***http://127.0.0.1:5500/*** (ou porta similar).
   
   🔹 *Se ainda não tem o Live Server instalado, instale-o no VS Code em:*
      **Extensões** (*Ctrl + Shift + X*) → **Buscar por "Live Server"** → **Instalar.**

   ### DEPLOY
   Você pode acessar a versão online do projeto clicando no link abaixo:
   - [Sorteador de Amigo Secreto - Versão Online](https://challengeamigosecreto.vercel.app/)

## Desenvolvido por:

| ![Cássia Irene](https://avatars.githubusercontent.com/u/157053868?v=4) |
| :---: |
| [Cássia Irene](https://github.com/Cassia-Irene) |
