# 🚀 Instituto Educar - Aparecida

Bem-vindo ao ecossistema de desenvolvimento do **Instituto Educar**. Este projeto utiliza **Docker** para garantir que todos os 10 desenvolvedores e a gestão trabalhem em um ambiente idêntico.

## 🛠️ Pré-requisitos

Você precisa apenas do **Docker** instalado:

- [Instalar Docker](https://docs.docker.com)

## 🏃 Como Iniciar

1. Clone o repositório: `git clone [URL]`
2. Entre na pasta: `cd [NOME-DA-PASTA]`
3. Instale as dependencias: `npm install`
4. Suba o ambiente: `docker compose up --build`
5. Para instalar pacotes: `docker-compose exec frontend npm install "o pacote desejado"`

## 🌐 Portas do Projeto

- **Backend:** http://localhost:5173 (Node.js + PostgreSQL)
- **Frontend:** http://localhost:5174 (Vite + Tailwind v4)

## 🗄️ Banco de Dados (Apenas no Backend)

O PostgreSQL já sobe automaticamente. As credenciais de acesso estão no arquivo `.env`.
